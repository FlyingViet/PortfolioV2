"use client";

import { useEffect, useCallback } from "react";

interface Photo {
  id: number;
  src: string;
  thumb: string;
  alt: string;
  title: string;
  category: string;
}

interface LightboxProps {
  photo: Photo;
  photos: Photo[];
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

export default function Lightbox({
  photo,
  photos,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(photos[currentIndex - 1]);
  }, [currentIndex, photos, onNavigate]);

  const goNext = useCallback(() => {
    if (currentIndex < photos.length - 1) onNavigate(photos[currentIndex + 1]);
  }, [currentIndex, photos, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2"
        aria-label="Close"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev arrow */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-4 text-white/60 hover:text-white transition-colors p-2"
          aria-label="Previous photo"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next arrow */}
      {currentIndex < photos.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-4 text-white/60 hover:text-white transition-colors p-2"
          aria-label="Next photo"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-screen w-full px-16 flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
        />
        <div className="text-center">
          <p className="text-white font-medium">{photo.title}</p>
          <p className="text-zinc-500 text-sm">{photo.category}</p>
        </div>
        <p className="text-zinc-600 text-xs">
          {currentIndex + 1} / {photos.length}
        </p>
      </div>
    </div>
  );
}
