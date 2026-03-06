"use client";

import { useState } from "react";
import products from "@/data/products.json";

const allCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Recommendations</h1>
        <p className="text-zinc-400 max-w-xl">
          Things I genuinely use and recommend. Links are Amazon affiliate links —
          you pay the same price, and I earn a small commission.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allCategories.map((cat) => (
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

      {/* Product grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col rounded-2xl border border-white/8 bg-zinc-900/40 hover:border-white/15 transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-zinc-900">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-medium bg-black/60 text-zinc-300 backdrop-blur-sm border border-white/10">
                {product.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-white font-semibold mb-1.5 leading-snug">
                {product.name}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">{product.price}</span>
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-black transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #22d3ee, #818cf8)" }}
                >
                  View on Amazon
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-zinc-600 text-center py-16">No products in this category yet.</p>
      )}
    </div>
  );
}
