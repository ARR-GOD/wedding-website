"use client";

import { SectionHeader } from "./primitives";
import type { Strings } from "@/lib/i18n";

export default function Story({ t }: { t: Strings }) {
  return (
    <section id="story" className="section-y">
      <div className="wed-container">
        <SectionHeader eyebrow={t.story.eyebrow} script="Our story" title={t.story.title} lead={t.story.lead}/>
        <div style={{ marginTop: 70, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="story-grid">
          <div>
            <div style={{ aspectRatio: "4 / 5", overflow: "hidden", borderRadius: 2, border: "1px solid #E5D5B5" }}>
              <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&q=80" alt="Couple" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 12, top: 8, bottom: 8, width: 1, background: "linear-gradient(var(--marigold-300), transparent)" }}/>
            {t.story.chapters.map((c, i) => (
              <div key={i} style={{ position: "relative", paddingLeft: 44, paddingBottom: 34 }} className="reveal">
                <div style={{ position: "absolute", left: 0, top: 4, width: 26, height: 26, borderRadius: "50%", background: "var(--ivory)", border: "1px solid var(--marigold-300)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--sindoor-500)" }}/>
                </div>
                <div className="eyebrow-caps" style={{ color: "var(--marigold-500)" }}>{c.year}</div>
                <h3 className="serif-display" style={{ fontSize: 26, marginTop: 4, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#5b4632" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
