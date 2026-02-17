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
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();

        if (!error && data) {
            setProfile(data as Profile);
        }
    }, [supabase]);

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(async ({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
            if (session?.user) {
                console.log('Initial session found, fetching profile...');
                await fetchProfile(session.user.id);
            }
            setLoading(false);
            console.log('Initial load complete');
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                console.log('Auth State Change:', event, session?.user?.id);
                setSession(session);
                setUser(session?.user ?? null);
                if (session?.user) {
                    console.log('Fetching profile for:', session.user.id);
                    await fetchProfile(session.user.id);
                } else {
                    setProfile(null);
                }
                setLoading(false);
                console.log('Auth loading set to false');
            }
        );

        return () => subscription.unsubscribe();
    }, [fetchProfile, supabase.auth]);

    const signIn = async (email: string, password: string) => {
        console.log('SignIn called for:', email);
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        console.log('SignIn result:', { data, error });
        if (error) {
            console.error('SignIn error:', error);
            setLoading(false);
        }
        return { error: error?.message ?? null };
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
