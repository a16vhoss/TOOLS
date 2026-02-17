'use client';
import { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  images: string[];
  onChange: (images: string[]) => void;
  maxImages?: number;
  className?: string;
}

export function ImageUpload({ images, onChange, maxImages = 5, className }: ImageUploadProps) {
  const addImage = () => {
    if (images.length < maxImages) {
      const placeholders = [
        'https://placehold.co/400x300/DBEAFE/2563EB?text=Foto+1',
        'https://placehold.co/400x300/D1FAE5/10B981?text=Foto+2',
        'https://placehold.co/400x300/FEF3C7/F59E0B?text=Foto+3',
        'https://placehold.co/400x300/EDE9FE/8B5CF6?text=Foto+4',
        'https://placehold.co/400x300/FEE2E2/EF4444?text=Foto+5',
      ];
      onChange([...images, placeholders[images.length] || placeholders[0]]);
    }
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className={cn('grid grid-cols-3 gap-2', className)}>
      {images.map((img, i) => (
        <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-border">
          <img src={img} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
          <button
            onClick={() => removeImage(i)}
            className="absolute top-1 right-1 h-6 w-6 bg-black/50 rounded-full flex items-center justify-center"
          >
            <X className="h-3.5 w-3.5 text-white" />
          </button>
        </div>
      ))}
      {images.length < maxImages && (
        <button
          onClick={addImage}
          className="aspect-square rounded-lg border-2 border-dashed border-border-dark flex flex-col items-center justify-center gap-1 text-text-light hover:border-primary hover:text-primary transition-colors"
        >
          <Camera className="h-6 w-6" />
          <span className="text-xs">Agregar</span>
        </button>
      )}
    </div>
  );
}
