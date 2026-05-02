"use client";

import { useState } from "react";
import { WedIcon, HennaGlyph, HennaDivider, SectionHeader } from "./primitives";
import type { Strings, City, CityListItem } from "@/lib/i18n";

function CityListBlock({ label, items }: { label: string; items: CityListItem[] }) {
  return (
    <div style={{ marginTop: 18, padding: 14, background: "var(--cream)", borderLeft: "2px solid var(--sindoor-500)" }}>
      <div className="eyebrow-caps" style={{ marginBottom: 8 }}>{label}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map((it, i) => (
          <li key={i} style={{ fontFamily: "var(--font-serif)", fontSize: 17, lineHeight: 1.35 }}>
            {it.url
              ? <a href={it.url} target="_blank" rel="noreferrer">{it.name} →</a>
              : <span style={{ color: "var(--henna-700)" }}>{it.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndiaMap({ cities, active, setActive }: { cities: City[]; active: number; setActive: (i: number) => void }) {
  return (
    <div style={{ position: "relative", aspectRatio: "3 / 4", maxWidth: 460, margin: "0 auto", width: "100%" }}>
      <svg viewBox="0 0 100 130" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <pattern id="dots" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.4" fill="rgba(201,163,106,0.3)"/>
          </pattern>
        </defs>
        {/* Geographic India outline */}
        <path d="
          M 27 11
          C 31 8, 38 6, 46 5
          C 54 4.5, 62 5, 70 8
          C 76 10, 81 13, 84 17
          C 87 19, 90 19, 92 21
          C 94 23, 92 26, 89 26
          C 86 27, 84 29, 86 33
          C 88 36, 90 39, 88 42
          C 86 44, 82 43, 78 42
          C 75 41, 72 39, 70 38
          C 67 37, 65 38, 65 41
          C 65 43, 67 45, 65 47
          C 64 49, 64 52, 66 54
          C 70 57, 73 61, 73 65
          C 73 70, 70 73, 68 75
          C 65 77, 64 80, 64 84
          C 64 89, 62 94, 60 99
          C 58 105, 55 110, 52 114
          C 50 117, 48 117, 47 114
          C 46 110, 47 105, 47 100
          C 47 96, 46 93, 44 91
          C 42 88, 40 83, 39 78
          C 38 73, 36 68, 34 64
          C 32 60, 30 56, 28 53
          C 26 51, 23 51, 21 52
          C 19 53, 17 52, 16 50
          C 14 47, 13 43, 14 40
          C 15 37, 17 36, 18 33
          C 19 30, 17 28, 14 28
          C 11 28, 10 30, 11 33
          C 12 36, 11 38, 9 38
          C 7 38, 7 35, 8 32
          C 9 28, 12 25, 14 22
          C 16 19, 18 17, 21 15
          C 23 13, 25 12, 27 11 Z"
          fill="url(#dots)" stroke="var(--henna-500)" strokeWidth="0.5" strokeLinejoin="round"/>
        {/* Bangladesh inset */}
        <path d="M 70 41 C 73 42, 76 43, 78 46 C 80 49, 79 52, 76 53 C 73 54, 70 53, 68 51 C 66 49, 66 45, 70 41 Z"
          fill="var(--ivory)" stroke="var(--henna-500)" strokeWidth="0.35" strokeLinejoin="round" opacity="0.95"/>
        {/* Sri Lanka */}
        <path d="M 56 117 C 54 118, 53 121, 54 124 C 55 126, 58 126, 59 124 C 60 122, 60 119, 58 117 C 57.5 116.5, 56.5 116.5, 56 117 Z"
          fill="url(#dots)" stroke="var(--henna-500)" strokeWidth="0.4" strokeLinejoin="round" opacity="0.7"/>
        <g transform="translate(86, 12)" stroke="var(--henna-500)" strokeWidth="0.3" fill="none">
          <circle cx="0" cy="0" r="6"/>
          <path d="M 0 -5 L 1 0 L 0 5 L -1 0 Z" fill="var(--sindoor-500)" stroke="none"/>
          <text x="0" y="-7" textAnchor="middle" fontSize="3" fill="var(--henna-700)" fontFamily="var(--font-serif)">N</text>
        </g>
      </svg>
      {cities.map((c, i) => (
        <button key={c.name} onClick={() => setActive(i)}
          style={{
            position: "absolute", left: `${c.x}%`, top: `${c.y}%`,
            transform: "translate(-50%, -100%)", background: "none", border: "none", cursor: "pointer", padding: 0,
          }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {active === i && (
              <div style={{ position: "absolute", top: 0, width: 36, height: 36, borderRadius: "50%", background: "var(--sindoor-500)", opacity: 0.3, animation: "pin-pulse 1.6s ease-in-out infinite", transform: "translate(-50%, -50%)", left: "50%" }}/>
            )}
            <div style={{
              width: 16, height: 16, borderRadius: "50% 50% 50% 0",
              background: c.role === "wedding" ? "var(--marigold-400)" : "var(--sindoor-500)",
              transform: "rotate(-45deg)", border: "2px solid var(--ivory)",
              boxShadow: active === i ? "0 0 0 3px var(--marigold-300)" : "none",
              transition: "all 200ms",
            }}/>
            <div style={{
              marginTop: 6, padding: "2px 8px", borderRadius: 999,
              background: active === i ? "var(--henna-700)" : "var(--bg-raised)",
              color: active === i ? "#FBE9B8" : "var(--henna-700)",
              fontSize: 11, fontWeight: 600, letterSpacing: 0.4, whiteSpace: "nowrap",
              border: "1px solid", borderColor: active === i ? "var(--henna-700)" : "#E5D5B5",
              fontFamily: "var(--font-body)", transition: "all 200ms",
            }}>{c.name}</div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function Travel({ t }: { t: Strings }) {
  const [active, setActive] = useState(0);
  const cities = t.cities;
  const c = cities[active];

  return (
    <section id="travel" className="section-y" style={{ background: "var(--ivory)" }}>
      <div className="wed-container">
        <SectionHeader eyebrow={t.travel.eyebrow} script="Explore" title={t.travel.title} lead={t.travel.lead}/>

        <div style={{ marginTop: 70, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "start" }} className="travel-grid">
          <div className="india-map-wrap" style={{ width: "100%" }}>
            <IndiaMap cities={cities} active={active} setActive={setActive}/>
          </div>
          <div className="travel-sticky" style={{ position: "sticky", top: 100 }}>
            <div style={{ position: "relative", padding: "clamp(24px, 4vw, 36px)", background: "var(--bg-raised)", border: "1px solid #E5D5B5" }}>
              <div style={{ position: "absolute", top: 14, right: 14 }}>
                <HennaGlyph size={32} color="var(--marigold-300)"/>
              </div>
              {c.tag && (
                <div style={{ display: "inline-block", padding: "4px 10px", background: "var(--sindoor-500)", color: "#fff", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 14 }}>
                  &#9733; {c.tag}
                </div>
              )}
              <div className="eyebrow-caps" style={{ color: "var(--henna-500)" }}>City {String(active + 1).padStart(2, "0")}</div>
              <h3 className="serif-display" style={{ fontSize: 48, marginTop: 4, marginBottom: 4 }}>{c.name}</h3>
              <div className="script" style={{ fontSize: 28, color: "var(--marigold-500)", marginBottom: 20 }}>{c.vibe}</div>
              {c.photos && c.photos.length > 0 && (
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${c.photos.length}, 1fr)`, gap: 6, marginBottom: 20 }}>
                  {c.photos.map((p, i) => (
                    <figure key={i} style={{ margin: 0 }}>
                      <div style={{ aspectRatio: "1 / 1", overflow: "hidden", border: "1px solid #E5D5B5", background: "var(--cream)" }}>
                        <img src={p.src} alt={p.caption} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
                      </div>
                      <figcaption style={{ marginTop: 6, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: "var(--henna-700)", textAlign: "center" }}>{p.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              <div style={{ borderTop: "1px solid #E5D5B5", paddingTop: 18 }}>
                <div className="eyebrow-caps" style={{ marginBottom: 12 }}>{t.travel.whatToDo}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {c.todo.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, padding: "7px 0", fontSize: 15, color: "#5b4632" }}>
                      <span style={{ color: "var(--marigold-500)", flex: "0 0 auto" }}>&#10022;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {c.stay && c.stay.length > 0 && <CityListBlock label={t.travel.whereToStay} items={c.stay}/>}
                {c.eat && c.eat.length > 0 && <CityListBlock label={t.travel.whereToEat} items={c.eat}/>}
                {c.shop && c.shop.length > 0 && <CityListBlock label={t.travel.whereToShop} items={c.shop}/>}
                {c.extra && c.extra.length > 0 && <CityListBlock label={t.travel.more} items={c.extra}/>}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 100 }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h3 className="serif-display" style={{ fontSize: 36 }}>{t.travel.tipsTitle}</h3>
            <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}><HennaDivider/></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {t.travel.tips.map((tip, i) => (
              <div key={i} className="reveal" style={{ padding: 28, background: "var(--bg-raised)", border: "1px solid #E5D5B5", position: "relative" }}>
                <div className="dot-grid-bg" style={{ width: 44, height: 44, borderRadius: 2, border: "1px solid #E5D5B5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, background: "var(--ivory)" }}>
                  <WedIcon name={tip.icon} size={22} color="var(--henna-700)"/>
                </div>
                <h4 className="serif-display" style={{ fontSize: 20, marginBottom: 8 }}>{tip.title}</h4>
                {Array.isArray(tip.body) ? (
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {tip.body.map((line, j) => (
                      <li key={j} style={{ display: "flex", gap: 8, padding: "4px 0", fontSize: 14, lineHeight: 1.6, color: "#5b4632" }}>
                        <span style={{ color: "var(--marigold-500)", flex: "0 0 auto" }}>&#10022;</span>
                        <span dangerouslySetInnerHTML={{ __html: line }}/>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontSize: 14, lineHeight: 1.6 }}>{tip.body}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
