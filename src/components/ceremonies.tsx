"use client";

import { useState } from "react";
import { SectionHeader } from "./primitives";
import CeremonyIllustration from "./ceremony-illustrations";
import type { Strings } from "@/lib/i18n";

export default function Ceremonies({ t }: { t: Strings }) {
  const [active, setActive] = useState(0);
  return (
    <section id="ceremonies" className="section-y" style={{ background: "var(--cream)" }}>
      <div className="wed-container">
        <SectionHeader eyebrow={t.ceremonies.eyebrow} script="Rituals" title={t.ceremonies.title} lead={t.ceremonies.lead}/>
        <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "320px 1fr", gap: 48 }} className="cer-grid">
          <div className="ceremony-list" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
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
          <div className="reveal" style={{ position: "relative", padding: "clamp(24px, 4vw, 40px)", background: "var(--bg-raised)", border: "1px solid #E5D5B5" }}>
            <div className="eyebrow-caps" style={{ color: "var(--sindoor-500)" }}>Ceremony {String(active + 1).padStart(2, "0")} / {String(t.ceremonies.list.length).padStart(2, "0")}</div>
            <h3 className="serif-display" style={{ fontSize: "clamp(28px, 5vw, 42px)", marginTop: 12, marginBottom: 6 }}>{t.ceremonies.list[active].name}</h3>
            <div className="script" style={{ fontSize: "clamp(24px, 3.5vw, 32px)", color: "var(--sindoor-500)", marginBottom: 22 }}>{t.ceremonies.list[active].short}</div>
            <div className="cer-panel-body" style={{ display: "grid", gridTemplateColumns: "1fr 220px", gap: "clamp(20px, 3vw, 36px)", alignItems: "start" }}>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#5b4632", margin: 0 }}>{t.ceremonies.list[active].body}</p>
              <div className="cer-illus-wrap" style={{ width: "100%", maxWidth: 240 }}>
                <CeremonyIllustration name={t.ceremonies.list[active].name}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
