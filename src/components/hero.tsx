"use client";

import { useState, useEffect } from "react";
import { HennaDivider } from "./primitives";
import type { Strings } from "@/lib/i18n";

function HeroCornerOrnaments({ color }: { color: string }) {
  const corners = [
    { top: -8, left: -8, rot: 0 },
    { top: -8, right: -8, rot: 90 },
    { bottom: -8, right: -8, rot: 180 },
    { bottom: -8, left: -8, rot: 270 },
  ] as const;
  return (
    <>
      {corners.map((c, i) => (
        <svg key={i} width="28" height="28" viewBox="0 0 28 28" style={{ position: "absolute", ...c, transform: `rotate(${c.rot}deg)`, zIndex: 3, pointerEvents: "none" }}>
          <g fill="none" stroke={color} strokeWidth="1">
            <path d="M2 2 L 14 2"/>
            <path d="M2 2 L 2 14"/>
            <circle cx="2" cy="2" r="1.6" fill={color}/>
          </g>
        </svg>
      ))}
    </>
  );
}

function Countdown({ t, target }: { t: Strings; target: string }) {
  const calc = (tgt: string) => {
    const diff = Math.max(0, new Date(tgt).getTime() - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff / 3600000) % 24),
      m: Math.floor((diff / 60000) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cell = (n: number, label: string) => (
    <div className="countdown-cell" style={{ minWidth: 78 }}>
      <div className="serif-display" style={{ fontSize: "clamp(36px, 5vw, 52px)", color: "var(--henna-700)", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
        {String(n).padStart(2, "0")}
      </div>
      <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--henna-500)", marginTop: 8, fontWeight: 500 }}>{label}</div>
    </div>
  );
  const sep = <div className="countdown-sep" style={{ width: 1, height: 38, background: "rgba(122,74,33,0.25)" }}/>;

  return (
    <div className="countdown-box" style={{ marginTop: 36, display: "inline-flex", gap: 8, alignItems: "center", padding: "20px 28px", border: "1px solid rgba(122,74,33,0.3)", borderRadius: 2, background: "rgba(255,255,255,0.35)", maxWidth: "100%" }}>
      {cell(time.d, t.countdown.days)}{sep}
      {cell(time.h, t.countdown.hours)}{sep}
      {cell(time.m, t.countdown.minutes)}{sep}
      {cell(time.s, t.countdown.seconds)}
    </div>
  );
}

export default function Hero({ t, weddingDate }: { t: Strings; weddingDate: string }) {
  const heroImg = "/couple-hero.jpg";
  const cornerColor = "#C9A36A";

  return (
    <section id="top" className="hero-section" style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      background: "var(--ivory)",
      color: "var(--henna-700)", paddingTop: 100, paddingBottom: 80, overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "url('/noise-texture.png') center/400px", opacity: 0.14, mixBlendMode: "overlay", pointerEvents: "none" }}/>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 40%, rgba(201,163,106,0.12), transparent 65%)", pointerEvents: "none" }}/>

      <div className="wed-container reveal" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "clamp(40px, 6vw, 90px)", alignItems: "center" }}>
          {/* Text block */}
          <div className="hero-text">
            <h1 className="serif-display" style={{ color: "var(--henna-700)", fontSize: "clamp(54px, 8.4vw, 116px)", letterSpacing: "-0.02em", fontWeight: 400, lineHeight: 0.95, margin: 0 }}>
              Shambhavi
              <span className="script" style={{ display: "block", color: "var(--sindoor-500)", fontSize: "clamp(60px, 9.5vw, 132px)", margin: "-8px 0 -4px", lineHeight: 1 }}>{t.hero.and}</span>
              Joseph
            </h1>
            <div style={{ marginTop: 28, maxWidth: 420 }}>
              <HennaDivider color={cornerColor}/>
            </div>
            <div style={{ marginTop: 26, fontFamily: "var(--font-serif)", fontSize: 22, letterSpacing: "0.06em", color: "var(--henna-700)" }}>
              {t.hero.date}
            </div>
            <div style={{ marginTop: 6, fontSize: 13, color: "var(--henna-500)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500 }}>
              {t.hero.location}
            </div>
            <div style={{ marginTop: 32 }}>
              <Countdown t={t} target={weddingDate}/>
            </div>
            <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#rsvp" className="lyly-btn lyly-btn--primary lyly-btn--lg">{t.hero.cta}</a>
              <a href="#itinerary" className="lyly-btn lyly-btn--secondary lyly-btn--lg">{t.hero.ctaSecondary}</a>
            </div>
          </div>

          {/* Photo block */}
          <div className="hero-photo-wrap" style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: -14, border: "1px solid rgba(154,85,102,0.4)", pointerEvents: "none" }}/>
            <div style={{ position: "absolute", inset: -22, border: "1px solid rgba(201,163,106,0.35)", pointerEvents: "none" }}/>
            <HeroCornerOrnaments color={cornerColor}/>
            <div style={{ position: "relative", aspectRatio: "3 / 4", overflow: "hidden", boxShadow: "0 24px 60px rgba(74,46,18,0.18), 0 0 0 1px rgba(232,148,20,0.3)" }}>
              <img src={heroImg} alt="Shambhavi & Joseph" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 80%, rgba(74,46,18,0.18))", pointerEvents: "none" }}/>
            </div>
            <div className="hero-monogram" style={{ position: "absolute", bottom: -28, right: -28, width: 90, height: 90, borderRadius: "50%", background: "#fff", border: `1px solid ${cornerColor}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.18)", zIndex: 4 }}>
              <div className="script" style={{ fontSize: 38, color: "var(--henna-700)", lineHeight: 1 }}>S<span style={{ color: "var(--marigold-500)" }}>&amp;</span>J</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 22, left: 0, right: 0, textAlign: "center", color: "var(--henna-500)", fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
        &#8595; scroll
      </div>
    </section>
  );
}
