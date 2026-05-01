"use client";

import { useState, useEffect } from "react";
import { HennaDivider } from "./primitives";
import type { Strings } from "@/lib/i18n";

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
    <div style={{ minWidth: 78 }}>
      <div className="serif-display" style={{ fontSize: "clamp(36px, 5vw, 52px)", color: "#FBE9B8", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
        {String(n).padStart(2, "0")}
      </div>
      <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "rgba(251,233,184,0.65)", marginTop: 8, fontWeight: 500 }}>{label}</div>
    </div>
  );

  const sep = <div style={{ width: 1, height: 38, background: "rgba(251,233,184,0.2)" }}/>;

  return (
    <div style={{ marginTop: 36, display: "inline-flex", gap: 8, alignItems: "center", padding: "20px 28px", border: "1px solid rgba(251,233,184,0.22)", borderRadius: 2, background: "rgba(0,0,0,0.18)" }}>
      {cell(time.d, t.countdown.days)}
      {sep}
      {cell(time.h, t.countdown.hours)}
      {sep}
      {cell(time.m, t.countdown.minutes)}
      {sep}
      {cell(time.s, t.countdown.seconds)}
    </div>
  );
}

export default function Hero({ t, weddingDate }: { t: Strings; weddingDate: string }) {
  return (
    <section id="top" style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      background: `linear-gradient(180deg, rgba(42,19,12,0.55), rgba(42,19,12,0.78)), url('https://images.unsplash.com/photo-1599661046827-dacde6976549?w=1800&q=80') center/cover no-repeat`,
      color: "#fff", paddingTop: 100, paddingBottom: 100, overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "url('/noise-texture.png') center/400px", opacity: 0.18, mixBlendMode: "overlay", pointerEvents: "none" }}/>
      <svg width="180" height="180" viewBox="0 0 180 180" style={{ position: "absolute", top: 90, left: 30, opacity: 0.35 }}>
        <g fill="none" stroke="var(--marigold-200)" strokeWidth="0.7">
          <path d="M10 10 Q 90 10 90 90"/><path d="M10 10 Q 10 90 90 90"/>
          <path d="M10 30 Q 60 30 60 80"/><path d="M30 10 Q 30 60 80 60"/>
          <circle cx="90" cy="90" r="3"/><circle cx="10" cy="10" r="2" fill="var(--marigold-200)"/>
        </g>
      </svg>
      <svg width="180" height="180" viewBox="0 0 180 180" style={{ position: "absolute", top: 90, right: 30, opacity: 0.35, transform: "scaleX(-1)" }}>
        <g fill="none" stroke="var(--marigold-200)" strokeWidth="0.7">
          <path d="M10 10 Q 90 10 90 90"/><path d="M10 10 Q 10 90 90 90"/>
          <path d="M10 30 Q 60 30 60 80"/><path d="M30 10 Q 30 60 80 60"/>
          <circle cx="90" cy="90" r="3"/>
        </g>
      </svg>

      <div className="wed-container reveal" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <div className="eyebrow-caps" style={{ color: "var(--marigold-200)", marginBottom: 26, letterSpacing: "0.32em" }}>{t.hero.eyebrow}</div>
        <h1 className="serif-display" style={{ color: "#FBE9B8", fontSize: "clamp(56px, 11vw, 132px)", letterSpacing: "-0.02em", fontWeight: 400, lineHeight: 0.95 }}>
          Shambhavi
          <span className="script" style={{ display: "block", color: "var(--marigold-300)", fontSize: "clamp(64px, 13vw, 156px)", margin: "-12px 0", lineHeight: 1 }}>{t.hero.and}</span>
          Joseph
        </h1>
        <div style={{ margin: "32px auto 0", maxWidth: 460 }}>
          <HennaDivider color="var(--marigold-300)"/>
        </div>
        <div style={{ marginTop: 28, fontFamily: "var(--font-serif)", fontSize: 22, letterSpacing: "0.06em", color: "rgba(251,233,184,0.92)" }}>
          {t.hero.date}
        </div>
        <div style={{ marginTop: 6, fontSize: 14, color: "rgba(251,233,184,0.7)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500 }}>
          {t.hero.location}
        </div>

        <Countdown t={t} target={weddingDate}/>

        <div style={{ marginTop: 36, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#rsvp" className="lyly-btn lyly-btn--primary lyly-btn--lg">{t.hero.cta}</a>
          <a href="#itinerary" className="lyly-btn lyly-btn--secondary lyly-btn--lg" style={{ borderColor: "rgba(251,233,184,0.4)", color: "#FBE9B8", background: "transparent" }}>{t.hero.ctaSecondary}</a>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 28, left: 0, right: 0, textAlign: "center", color: "rgba(251,233,184,0.5)", fontSize: 11, letterSpacing: 4, textTransform: "uppercase" }}>
        &#8595; scroll
      </div>
    </section>
  );
}
