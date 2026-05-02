"use client";

import { ReactNode } from "react";

export function WedIcon({ name, size = 24, color = "currentColor", strokeWidth = 1.4 }: { name: string; size?: number; color?: string; strokeWidth?: number }) {
  const s = { width: size, height: size, stroke: color, strokeWidth, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<string, ReactNode> = {
    flame: <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3-1-3 0-6 1-9z"/>,
    leaf: <><path d="M5 19c0-7 5-13 14-14-1 9-7 14-14 14z"/><path d="M5 19l8-8"/></>,
    music: <><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></>,
    luggage: <><rect x="5" y="7" width="14" height="14" rx="1.5"/><path d="M9 7V4h6v3M5 12h14M10 21v-9M14 21v-9"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    drop: <path d="M12 3c4 5 7 8 7 12a7 7 0 0 1-14 0c0-4 3-7 7-12z"/>,
    crown: <><path d="M3 8l3 8h12l3-8-5 4-4-7-4 7-5-4z"/><path d="M5 18h14"/></>,
    drum: <><ellipse cx="12" cy="6" rx="9" ry="3"/><path d="M3 6v9c0 1.7 4 3 9 3s9-1.3 9-3V6"/><path d="M7 8l-3 12M17 8l3 12"/></>,
    fire: <path d="M12 3c1 5 5 5 5 11a5 5 0 0 1-10 0c0-2 1-3 2-3 0 2 1 3 2 3-1-4 0-7 1-11z"/>,
    stars: <><path d="M12 3l1.5 4 4 .5-3 3 .8 4-3.3-2-3.3 2 .8-4-3-3 4-.5z"/><path d="M19 15l.7 1.5 1.6.2-1.2 1 .4 1.5-1.5-.7-1.5.7.4-1.5-1.2-1 1.6-.2z"/><path d="M5 14l.6 1.2 1.4.2-1 .8.3 1.3L5 17l-1.3.5.3-1.3-1-.8 1.4-.2z"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    "calendar-heart": <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M12 17l-2.5-2a1.5 1.5 0 0 1 2.5-2 1.5 1.5 0 0 1 2.5 2L12 17z"/></>,
    plane: <path d="M22 11l-9 9-2-6-6-2 9-9 4 1 4 4z"/>,
    car: <><path d="M5 17V11l2-5h10l2 5v6"/><path d="M3 17h18v-2H3z"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/></>,
    passport: <><rect x="5" y="3" width="14" height="18" rx="1.5"/><circle cx="12" cy="11" r="3"/><path d="M9 17h6"/></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>,
    wallet: <><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M16 14h2"/></>,
    luxury: <><path d="M5 7l3-3h8l3 3-7 12z"/><path d="M5 7h14M9 7l3 12M15 7l-3 12"/></>,
    heart: <path d="M12 21s-7-5-9-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 5-9 10-9 10z"/>,
    pin: <><path d="M12 22s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="10" r="2.4"/></>,
    chevronDown: <path d="M6 9l6 6 6-6"/>,
    close: <><path d="M6 6l12 12M6 18L18 6"/></>,
    menu: <><path d="M3 6h18M3 12h18M3 18h18"/></>,
    check: <path d="M5 12l5 5L20 7"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
  };
  return <svg viewBox="0 0 24 24" style={s}>{paths[name] || paths.heart}</svg>;
}

export function HennaGlyph({ size = 32, color = "var(--marigold-400)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: "block" }}>
      <g fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="3"/>
        <circle cx="16" cy="16" r="6"/>
        <path d="M16 4v3M16 25v3M4 16h3M25 16h3"/>
        <path d="M8 8l2 2M22 22l2 2M8 24l2-2M22 10l2-2"/>
        <circle cx="16" cy="4" r="0.8" fill={color}/>
        <circle cx="16" cy="28" r="0.8" fill={color}/>
        <circle cx="4" cy="16" r="0.8" fill={color}/>
        <circle cx="28" cy="16" r="0.8" fill={color}/>
      </g>
    </svg>
  );
}

export function CornerOrnament({ rotate = 0, color = "var(--marigold-300)" }: { rotate?: number; color?: string }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" style={{ transform: `rotate(${rotate}deg)`, opacity: 0.65 }}>
      <g fill="none" stroke={color} strokeWidth="0.9" strokeLinecap="round">
        <path d="M4 4 Q 28 4 28 28"/>
        <path d="M4 4 Q 4 28 28 28"/>
        <path d="M4 12 Q 16 12 16 24"/>
        <circle cx="28" cy="28" r="2"/>
        <circle cx="4" cy="4" r="1.2" fill={color}/>
      </g>
    </svg>
  );
}

export function HennaDivider({ color }: { color?: string }) {
  return (
    <div className="henna-divider" style={{ color: color || "var(--marigold-400)" }}>
      <span className="line"/>
      <HennaGlyph size={26} color={color || "var(--marigold-400)"}/>
      <span className="line"/>
    </div>
  );
}

export function SectionHeader({ eyebrow, script, title, lead, center = true, light = false }: {
  eyebrow?: string; script?: string; title: string; lead?: string; center?: boolean; light?: boolean;
}) {
  return (
    <div className="reveal" style={{ textAlign: center ? "center" : "left", maxWidth: center ? 720 : "none", margin: center ? "0 auto" : 0 }}>
      {eyebrow && <div className="eyebrow-caps" style={{ marginBottom: 14, color: light ? "rgba(245,233,208,0.7)" : "var(--henna-500)" }}>{eyebrow}</div>}
      {script && <div className="script" style={{ fontSize: 56, marginBottom: -8, color: light ? "var(--marigold-200)" : "var(--sindoor-500)" }}>{script}</div>}
      <h2 className="serif-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: light ? "#FBE9B8" : "var(--henna-700)", marginTop: 4 }}>{title}</h2>
      {lead && <p style={{ fontSize: 17, marginTop: 18, lineHeight: 1.55, color: light ? "rgba(245,233,208,0.78)" : "#5b4632" }}>{lead}</p>}
      <div style={{ marginTop: 22 }}>
        <HennaDivider color={light ? "var(--marigold-200)" : undefined}/>
      </div>
    </div>
  );
}
