'use client';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { User, Session } from '@supabase/supabase-js';

export interface Profile {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    role: 'user' | 'worker' | 'admin';
    avatar_url: string | null;
    created_at: string;
}

interface AuthContextType {
    user: User | null;
    profile: Profile | null;
    session: Session | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<{ error: string | null }>;
    signUp: (email: string, password: string, metadata: { name: string; phone: string; role: string }) => Promise<{ error: string | null }>;
    signOut: () => Promise<void>;
    refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    const fetchProfile = useCallback(async (userId: string) => {
        try {
            console.log('fetchProfile: Starting for', userId);

            // Timeout after 5 seconds to prevent hanging
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Profile fetch timeout')), 5000)
            );

            const fetchPromise = supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();

            // Race the fetch against the timeout
            const { data, error } = await Promise.race([fetchPromise, timeoutPromise]) as any;

            if (error) {
                console.error('fetchProfile: Supabase error:', error);
            }

            if (data) {
                console.log('fetchProfile: Data received', data);
                setProfile(data as Profile);
            } else {
                console.warn('fetchProfile: No profile data found');
            }
        } catch (err) {
            console.error('fetchProfile: Unexpected error:', err);
        }
    }, [supabase]);

    useEffect(() => {
        // Check env vars
        console.log('AuthContext: Loading...', {
            hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
            hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        });

        // Get initial session
        supabase.auth.getSession().then(async ({ data: { session } }) => {
            console.log('GetSession: Session found?', !!session);
            setSession(session);
            setUser(session?.user ?? null);
            if (session?.user) {
                console.log('Initial session found, fetching profile...');
                await fetchProfile(session.user.id);
            }
            setLoading(false);
            console.log('Initial load complete');
        }).catch(err => {
            console.error('GetSession error:', err);
            setLoading(false);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                console.log('Auth State Change:', event, session?.user?.id);
                setSession(session);
                setUser(session?.user ?? null);

                try {
                    if (session?.user) {
                        console.log('Fetching profile for:', session.user.id);
                        await fetchProfile(session.user.id);
                    } else {
                        setProfile(null);
                    }
                } catch (err) {
                    console.error('Error in auth state change handler:', err);
                } finally {
                    setLoading(false);
                    console.log('Auth loading set to false');
                }
            }
        );

        return () => subscription.unsubscribe();
    }, [fetchProfile, supabase.auth]);

    const signIn = async (email: string, password: string) => {
        console.log('SignIn called for:', email);
        setLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });
            console.log('SignIn result:', { data, error });
            if (error) {
                console.error('SignIn error:', error);
                setLoading(false);
            }
            return { error: error?.message ?? null };
        } catch (err: any) {
            console.error('SignIn exception:', err);
            setLoading(false);
            return { error: err.message || 'Unknown error' };
        }
    };

    const signUp = async (
        email: string,
        password: string,
        metadata: { name: string; phone: string; role: string }
    ) => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: metadata,
            },
        });
        return { error: error?.message ?? null };
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setProfile(null);
        setSession(null);
    };

    const refreshProfile = async () => {
        if (user) {
            await fetchProfile(user.id);
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, profile, session, loading, signIn, signUp, signOut, refreshProfile }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
