"use client";

import { useState } from "react";
import { WedIcon, SectionHeader } from "./primitives";
import type { Strings } from "@/lib/i18n";

const photos = [
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80", caption: "Paris, 2021" },
  { src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=900&q=80", caption: "Mumbai trip" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=900&q=80", caption: "Engagement" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80", caption: "Diwali" },
  { src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=900&q=80", caption: "Family in Jaipur" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80", caption: "Lisbon mornings" },
  { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=80", caption: "First trip together" },
  { src: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=900&q=80", caption: "Wedding in Goa, 2024" },
];

export default function Gallery({ t }: { t: Strings }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="section-y" style={{ background: "var(--cream)" }}>
      <div className="wed-container">
        <SectionHeader eyebrow={t.gallery.eyebrow} script="A few of us" title={t.gallery.title} lead={t.gallery.lead}/>
        <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }} className="gallery-grid">
          {photos.map((p, i) => (
            <button key={i} onClick={() => setLightbox(i)} className="reveal"
              style={{
                aspectRatio: i % 5 === 0 ? "3 / 4" : "1", overflow: "hidden", padding: 0, border: "1px solid #E5D5B5",
                cursor: "pointer", background: "var(--bg-raised)", gridRow: i % 5 === 0 ? "span 2" : "span 1",
              }}>
              <img src={p.src} alt={p.caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 400ms" }}/>
            </button>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(42,19,12,0.92)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
          <button onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            style={{ position: "absolute", top: 24, right: 24, background: "none", border: "1px solid rgba(251,233,184,0.3)", color: "#FBE9B8", padding: 12, cursor: "pointer", borderRadius: 0 }}>
            <WedIcon name="close" size={22} color="#FBE9B8"/>
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
            style={{ position: "absolute", left: 24, background: "none", border: "1px solid rgba(251,233,184,0.3)", color: "#FBE9B8", padding: 16, cursor: "pointer" }}>&#8249;</button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
            style={{ position: "absolute", right: 24, background: "none", border: "1px solid rgba(251,233,184,0.3)", color: "#FBE9B8", padding: 16, cursor: "pointer" }}>&#8250;</button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: "90vw", maxHeight: "85vh", textAlign: "center" }}>
            <img src={photos[lightbox].src} alt={photos[lightbox].caption} style={{ maxWidth: "100%", maxHeight: "78vh", objectFit: "contain", display: "block", margin: "0 auto", border: "1px solid rgba(251,233,184,0.2)" }}/>
            <div className="script" style={{ marginTop: 18, fontSize: 36, color: "var(--marigold-300)" }}>{photos[lightbox].caption}</div>
          </div>
        </div>
      )}
    </section>
  );
}
