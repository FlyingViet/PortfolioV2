"use client";

import { useState, useEffect } from "react";
import Lightbox from "@/components/Lightbox";

const API_URL = "https://82ada8z9md.execute-api.us-east-2.amazonaws.com/prod/api/photos";
const S3_BASE = "https://brian-photography-bucket.s3.us-east-2.amazonaws.com";

interface Photo {
  id: number;
  src: string;
  thumb: string;
  alt: string;
  title: string;
  category: string;
}

function deriveCategory(key: string): string {
  const name = key.toLowerCase();
  if (/flower|leaf|butterfly|rose|spiky/.test(name)) return "Nature";
  if (/dumpling|fillet|ice|sushi|hennessy/.test(name)) return "Food";
  if (/lake|rock|run|fork|road|sky|sunset|catherine/.test(name)) return "Landscape";
  return "Other";
}

function deriveTitle(key: string): string {
  return key.replace(/\.[^.]+$/, "").replace(/-/g, " ");
}

function buildPhotoUrl(key: string): string {
  return `${S3_BASE}/${encodeURIComponent(key)}`;
}

function parsePhotos(contents: { Key: string }[]): Photo[] {
  return contents.map((item, i) => ({
    id: i,
    src: buildPhotoUrl(item.Key),
    thumb: buildPhotoUrl(item.Key),
    alt: deriveTitle(item.Key),
    title: deriveTitle(item.Key),
    category: deriveCategory(item.Key),
  }));
}

export default function PhotographyPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const contents = data?.body?.Contents ?? [];
        setPhotos(parsePhotos(contents));
      })
      .catch(() => setError("Failed to load photos."))
      .finally(() => setLoading(false));
  }, []);

  const categories = ["All", ...Array.from(new Set(photos.map((p) => p.category)))];

  const filtered =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Photography</h1>
        <p className="text-zinc-400 max-w-xl">
          Moments I&apos;ve captured — nature, food, landscapes, and everything in between.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-24">
          <div className="w-8 h-8 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-zinc-500 text-center py-24">{error}</p>
      )}

      {!loading && !error && (
        <>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-cyan-400 text-black"
                    : "border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 bg-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl border border-white/8 hover:border-white/20 transition-all duration-300"
                onClick={() => setLightboxPhoto(photo)}
              >
                <img
                  src={photo.thumb}
                  alt={photo.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-semibold text-sm">{photo.title}</p>
                    <p className="text-zinc-400 text-xs">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-zinc-600 text-center py-16">No photos in this category yet.</p>
          )}
        </>
      )}

      {/* Lightbox */}
      {lightboxPhoto && (
        <Lightbox
          photo={lightboxPhoto}
          photos={filtered}
          onClose={() => setLightboxPhoto(null)}
          onNavigate={(photo) => setLightboxPhoto(photo)}
        />
      )}
    </div>
  );
}
