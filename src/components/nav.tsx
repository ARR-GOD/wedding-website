"use client";

import { useState, useEffect } from "react";
import { WedIcon, HennaGlyph } from "./primitives";
import type { Strings, Lang } from "@/lib/i18n";

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div style={{ display: "inline-flex", border: "1px solid rgba(78,46,18,0.18)", borderRadius: 999, padding: 2, background: "rgba(255,252,243,0.6)" }}>
      {(["en", "fr"] as const).map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{
            padding: "5px 12px", borderRadius: 999, border: "none", cursor: "pointer",
            background: lang === l ? "var(--sindoor-500)" : "transparent",
            color: lang === l ? "#fff" : "var(--henna-700)",
            fontSize: 11, fontWeight: 600, letterSpacing: 0.6, textTransform: "uppercase",
            fontFamily: "var(--font-body)", transition: "all 200ms",
          }}>{l}</button>
      ))}
    </div>
  );
}

export default function Nav({ t, lang, setLang }: { t: Strings; lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#itinerary", label: t.nav.itinerary },
    { href: "#getting-there", label: lang === "fr" ? "Comment venir" : "Getting there" },
    { href: "#ceremonies", label: t.nav.ceremonies },
    { href: "#travel", label: t.nav.travel },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(251,246,234,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(78,46,18,0.08)" : "1px solid transparent",
      transition: "background 280ms ease, border 280ms ease",
    }}>
      <div className="wed-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--henna-700)" }}>
          <HennaGlyph size={26} color="var(--sindoor-500)"/>
          <span className="serif-display" style={{ fontSize: 19, letterSpacing: 0.2 }}>
            S <span style={{ fontFamily: "var(--font-script)", color: "var(--sindoor-500)", fontSize: 26, verticalAlign: "-3px" }}>&amp;</span> J
          </span>
        </a>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-only">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontSize: 13, color: "var(--henna-700)", fontWeight: 500, letterSpacing: 0.2 }}>{l.label}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <LangToggle lang={lang} setLang={setLang}/>
          <button onClick={() => setMobileOpen(true)} className="mobile-only" style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}>
            <WedIcon name="menu" size={24} color="var(--henna-700)"/>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, background: "var(--ivory)", zIndex: 100, padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
            <HennaGlyph size={32} color="var(--sindoor-500)"/>
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}>
              <WedIcon name="close" size={24}/>
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="serif-display" style={{ fontSize: 32, color: "var(--henna-700)" }}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
