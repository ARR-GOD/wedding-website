"use client";

import { WedIcon, SectionHeader } from "./primitives";
import type { Strings } from "@/lib/i18n";

export default function Registry({ t }: { t: Strings }) {
  return (
    <section className="section-y" style={{ background: "var(--cream)" }}>
      <div className="wed-container" style={{ maxWidth: 880 }}>
        <SectionHeader eyebrow={t.registry.eyebrow} script="With gratitude" title={t.registry.title} lead={t.registry.body}/>
        <div style={{ marginTop: 50, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }} className="registry-grid">
          {[{ icon: "plane", label: t.registry.honeymoon, sub: "Bali · 2 weeks" }, { icon: "heart", label: t.registry.home, sub: "Lisboa, our nest" }].map((g, i) => (
            <div key={i} className="reveal" style={{ position: "relative", padding: 40, background: "var(--bg-raised)", border: "1px solid var(--marigold-300)", textAlign: "center" }}>
              <div className="dot-grid-bg" style={{ width: 56, height: 56, borderRadius: 2, border: "1px solid #E5D5B5", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "var(--ivory)", marginBottom: 16 }}>
                <WedIcon name={g.icon} size={26} color="var(--sindoor-500)"/>
              </div>
              <h4 className="serif-display" style={{ fontSize: 26, marginBottom: 6 }}>{g.label}</h4>
              <p style={{ fontStyle: "italic", color: "var(--henna-500)" }}>{g.sub}</p>
              <button className="lyly-btn lyly-btn--primary" style={{ marginTop: 20 }}>Contribute</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
