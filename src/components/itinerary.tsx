"use client";

import { useState } from "react";
import { WedIcon, SectionHeader } from "./primitives";
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

export default function Itinerary({ t }: { t: Strings }) {
  const [activeDay, setActiveDay] = useState(1);
  const day = activeDay === 1 ? t.itinerary.day1 : t.itinerary.day2;
  const events = t.itinerary.events.filter(e => e.day === activeDay);

  return (
    <section id="itinerary" className="section-y section-dark">
      <div className="wed-container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader eyebrow={t.itinerary.eyebrow} title={t.itinerary.title} lead={t.itinerary.lead} light/>

        <div style={{ marginTop: 56, display: "flex", justifyContent: "center", gap: 0, padding: 4, border: "1px solid rgba(251,233,184,0.18)", borderRadius: 2, width: "fit-content", margin: "56px auto 0", background: "rgba(0,0,0,0.2)" }}>
          {[1, 2].map(d => {
            const dayInfo = d === 1 ? t.itinerary.day1 : t.itinerary.day2;
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
          <div style={{ position: "absolute", left: "calc(50% - 0.5px)", top: 0, bottom: 0, width: 1, background: "linear-gradient(var(--marigold-300), rgba(232,148,20,0.05))" }} className="timeline-line"/>
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
      </div>
    </section>
  );
}
