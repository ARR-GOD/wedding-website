"use client";

import { useState } from "react";
import { HennaGlyph, SectionHeader } from "./primitives";
import type { Strings } from "@/lib/i18n";

export default function Ceremonies({ t }: { t: Strings }) {
  const [active, setActive] = useState(0);
  return (
    <section id="ceremonies" className="section-y" style={{ background: "var(--cream)" }}>
      <div className="wed-container">
        <SectionHeader eyebrow={t.ceremonies.eyebrow} script="Rituals" title={t.ceremonies.title} lead={t.ceremonies.lead}/>
        <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "320px 1fr", gap: 48 }} className="cer-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {t.ceremonies.list.map((c, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  textAlign: "left", padding: "14px 18px",
                  background: active === i ? "var(--bg-raised)" : "transparent",
                  border: "1px solid", borderColor: active === i ? "var(--marigold-300)" : "transparent",
                  borderLeftColor: active === i ? "var(--sindoor-500)" : "transparent", borderLeftWidth: 2,
                  cursor: "pointer", borderRadius: 2,
                  transition: "all 200ms",
                }}>
                <div className="serif-display" style={{ fontSize: 19, color: "var(--henna-700)" }}>{c.name}</div>
                <div style={{ fontSize: 13, color: "var(--henna-500)", marginTop: 3, fontStyle: "italic" }}>{c.short}</div>
              </button>
            ))}
          </div>
          <div className="reveal" style={{ position: "relative", padding: 40, background: "var(--bg-raised)", border: "1px solid #E5D5B5" }}>
            <div style={{ position: "absolute", top: 16, right: 16 }}>
              <HennaGlyph size={36} color="var(--marigold-300)"/>
            </div>
            <div className="eyebrow-caps" style={{ color: "var(--sindoor-500)" }}>Ceremony {String(active + 1).padStart(2, "0")} / {String(t.ceremonies.list.length).padStart(2, "0")}</div>
            <h3 className="serif-display" style={{ fontSize: 42, marginTop: 12, marginBottom: 6 }}>{t.ceremonies.list[active].name}</h3>
            <div className="script" style={{ fontSize: 32, color: "var(--sindoor-500)", marginBottom: 22 }}>{t.ceremonies.list[active].short}</div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#5b4632", maxWidth: 580 }}>{t.ceremonies.list[active].body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
