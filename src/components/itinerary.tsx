"use client";

import { useState } from "react";
import { WedIcon, HennaGlyph, SectionHeader } from "./primitives";
import type { Strings } from "@/lib/i18n";

function ItineraryCard({ ev, align }: { ev: { time: string; title: string; body: string }; align: string }) {
  return (
    <div style={{ padding: align === "right" ? "16px 28px 16px 0" : "16px 0 16px 28px", textAlign: align === "right" ? "right" : "left" }}>
      <div className="eyebrow-caps" style={{ color: "var(--marigold-300)", fontSize: 10 }}>{ev.time}</div>
      <h4 className="serif-display" style={{ fontSize: 22, color: "#FBE9B8", marginTop: 4 }}>{ev.title}</h4>
      <p style={{ fontSize: 14, color: "rgba(245,233,208,0.72)", marginTop: 6, lineHeight: 1.5 }}>{ev.body}</p>
    </div>
  );
}

function GettingThere({ data }: { data: Strings["itinerary"]["gettingThere"] }) {
  return (
    <div className="reveal" style={{ marginTop: 100, maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 18 }}>
          <div style={{ width: 32, height: 1, background: "rgba(201,163,106,0.4)" }}/>
          <HennaGlyph size={22} color="var(--marigold-300)"/>
          <div style={{ width: 32, height: 1, background: "rgba(201,163,106,0.4)" }}/>
        </div>
        <h3 className="serif-display" style={{ fontSize: "clamp(28px, 3.4vw, 42px)", color: "#FBE9B8", margin: 0, letterSpacing: "-0.01em" }}>{data.title}</h3>
        <p style={{ color: "rgba(245,233,208,0.72)", marginTop: 12, maxWidth: 620, margin: "12px auto 0", fontSize: 16, lineHeight: 1.55 }}>{data.lead}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {data.cards.map((c, i) => (
          <div key={i} style={{
            position: "relative", padding: "32px 28px 30px",
            background: "rgba(251,233,184,0.04)",
            border: "1px solid rgba(201,163,106,0.28)",
            display: "flex", flexDirection: "column", gap: 14,
          }}>
            <div style={{ position: "absolute", top: 8, left: 8, width: 14, height: 14, borderTop: "1px solid rgba(201,163,106,0.6)", borderLeft: "1px solid rgba(201,163,106,0.6)" }}/>
            <div style={{ position: "absolute", top: 8, right: 8, width: 14, height: 14, borderTop: "1px solid rgba(201,163,106,0.6)", borderRight: "1px solid rgba(201,163,106,0.6)" }}/>
            <div style={{ position: "absolute", bottom: 8, left: 8, width: 14, height: 14, borderBottom: "1px solid rgba(201,163,106,0.6)", borderLeft: "1px solid rgba(201,163,106,0.6)" }}/>
            <div style={{ position: "absolute", bottom: 8, right: 8, width: 14, height: 14, borderBottom: "1px solid rgba(201,163,106,0.6)", borderRight: "1px solid rgba(201,163,106,0.6)" }}/>

            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                border: "1px solid var(--marigold-300)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--marigold-200)",
                background: "rgba(201,163,106,0.08)",
                flexShrink: 0,
              }}>
                <WedIcon name={c.icon} size={20}/>
              </div>
              <div className="eyebrow-caps" style={{ color: "var(--marigold-300)", fontSize: 11, letterSpacing: "0.32em" }}>{c.kicker}</div>
            </div>
            <h4 className="serif-display" style={{ fontSize: 22, color: "#FBE9B8", margin: 0, lineHeight: 1.15 }}>{c.title}</h4>
            <p style={{ fontSize: 14, color: "rgba(245,233,208,0.72)", margin: 0, lineHeight: 1.6 }}>{c.body}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 36, textAlign: "center" }}>
        <a href="#travel" style={{
          display: "inline-flex", alignItems: "center", gap: 12,
          padding: "14px 24px",
          border: "1px solid rgba(201,163,106,0.4)",
          color: "#FBE9B8",
          fontFamily: "var(--font-serif)",
          fontSize: 15, letterSpacing: "0.04em",
          fontStyle: "italic",
          background: "rgba(201,163,106,0.06)",
        }}>
          ✈ {data.teaser}
        </a>
      </div>
    </div>
  );
}

export default function Itinerary({ t }: { t: Strings }) {
  const [activeDay, setActiveDay] = useState(1);
  const day = activeDay === 1 ? t.itinerary.day1 : activeDay === 2 ? t.itinerary.day2 : t.itinerary.day3;
  const events = t.itinerary.events.filter(e => e.day === activeDay);

  return (
    <section id="itinerary" className="section-y section-dark">
      <div className="wed-container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader eyebrow={t.itinerary.eyebrow} title={t.itinerary.title} lead={t.itinerary.lead} light/>

        <div className="day-tabs" style={{ marginTop: 56, display: "flex", justifyContent: "center", gap: 0, padding: 4, border: "1px solid rgba(251,233,184,0.18)", borderRadius: 2, width: "fit-content", maxWidth: "100%", margin: "56px auto 0", background: "rgba(0,0,0,0.2)" }}>
          {[1, 2, 3].map(d => {
            const dayInfo = d === 1 ? t.itinerary.day1 : d === 2 ? t.itinerary.day2 : t.itinerary.day3;
            return (
              <button key={d} onClick={() => setActiveDay(d)}
                style={{
                  padding: "12px 28px", border: "none", cursor: "pointer",
                  background: activeDay === d ? "var(--sindoor-500)" : "transparent",
                  color: activeDay === d ? "#fff" : "rgba(251,233,184,0.7)",
                  fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 500,
                  transition: "all 220ms", letterSpacing: 0.3,
                }}>
                {dayInfo.date.split(" ")[0]}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 30, textAlign: "center" }}>
          <div className="eyebrow-caps" style={{ color: "var(--marigold-200)" }}>{day.date}</div>
          <h3 className="serif-display" style={{ fontSize: 38, color: "#FBE9B8", marginTop: 6 }}>{day.title}</h3>
          <p style={{ color: "rgba(245,233,208,0.7)", marginTop: 6 }}>{day.subtitle}</p>
        </div>

        <div style={{ marginTop: 50, maxWidth: 820, margin: "50px auto 0", position: "relative" }}>
          <div style={{ position: "absolute", left: "calc(50% - 0.5px)", top: 0, bottom: 0, width: 1, background: "linear-gradient(var(--marigold-300), rgba(201,163,106,0.05))" }} className="timeline-line"/>
          {events.map((ev, i) => (
            <div key={ev.title} className="reveal timeline-row" style={{
              display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: 0, marginBottom: 24, alignItems: "center",
            }}>
              {i % 2 === 0 ? <ItineraryCard ev={ev} align="right"/> : <div/>}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--bg-dark)", border: "1px solid var(--marigold-300)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--marigold-200)" }}>
                  <WedIcon name={ev.icon} size={20}/>
                </div>
              </div>
              {i % 2 === 1 ? <ItineraryCard ev={ev} align="left"/> : <div/>}
            </div>
          ))}
        </div>

        <GettingThere data={t.itinerary.gettingThere}/>
      </div>
    </section>
  );
}
