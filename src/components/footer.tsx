"use client";

import { HennaGlyph, HennaDivider } from "./primitives";
import type { Strings } from "@/lib/i18n";

export default function Footer({ t }: { t: Strings }) {
  return (
    <footer style={{ padding: "80px 0 40px", background: "var(--bg-dark)", color: "rgba(245,233,208,0.78)", textAlign: "center", borderTop: "1px solid rgba(251,233,184,0.12)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "url('/noise-texture.png') center/400px repeat", opacity: 0.18, pointerEvents: "none", mixBlendMode: "overlay" }}/>
      <div className="wed-container" style={{ position: "relative", zIndex: 2 }}>
        <HennaGlyph size={48} color="var(--marigold-300)"/>
        <div style={{ marginTop: 24 }}>
          <HennaDivider color="var(--marigold-300)"/>
        </div>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, marginTop: 24, color: "#FBE9B8" }}>{t.footer.tagline}</p>
        <div style={{ marginTop: 24, fontSize: 13, letterSpacing: 1, color: "rgba(245,233,208,0.5)" }}>{t.footer.with}</div>
        <div className="script" style={{ fontSize: 64, color: "var(--marigold-300)", marginTop: 4 }}>Shambhavi & Joseph</div>
        <div style={{ marginTop: 40, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "rgba(245,233,208,0.4)" }}>
          18 — 20 September 2026 · Chunda Palace · Udaipur · India
        </div>
      </div>
    </footer>
  );
}
