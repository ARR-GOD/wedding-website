"use client";

import { SectionHeader } from "./primitives";
import type { Strings } from "@/lib/i18n";

const hotels = [
  { name: "Taj Lake Palace", role: "Wedding venue", desc: "Floating on Lake Pichola — the wedding will take place here. Limited rooms available; we'll coordinate with you.", price: "By invitation", tag: "Venue", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80" },
  { name: "The Leela Palace Udaipur", role: "Recommended luxury", desc: "5 minutes by boat from the venue. Sprawling, regal, with a stunning lakefront pool. Our top recommendation.", price: "From EUR 280 / night", tag: "Luxury", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=80" },
  { name: "Chunda Palace", role: "Boutique heritage", desc: "Family-run heritage hotel, walking distance to the City Palace. Beautiful courtyards, excellent value.", price: "From EUR 110 / night", tag: "Boutique", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=80" },
  { name: "Jagat Niwas Palace", role: "Lakefront mid-range", desc: "Old-city lakeside heritage haveli with one of Udaipur's best rooftop restaurants.", price: "From EUR 75 / night", tag: "Mid-range", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80" },
];

export default function Hotels({ t }: { t: Strings }) {
  return (
    <section id="stay" className="section-y" style={{ background: "var(--cream)" }}>
      <div className="wed-container">
        <SectionHeader eyebrow={t.hotels.eyebrow} script="Where to stay" title={t.hotels.title} lead={t.hotels.lead}/>
        <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {hotels.map((h, i) => (
            <div key={i} className="reveal" style={{ background: "var(--bg-raised)", border: "1px solid #E5D5B5", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                <img src={h.img} alt={h.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
                <div style={{ position: "absolute", top: 14, left: 14, padding: "4px 10px", background: "rgba(42,19,12,0.75)", color: "#FBE9B8", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>{h.tag}</div>
              </div>
              <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                <div className="eyebrow-caps" style={{ color: "var(--sindoor-500)" }}>{h.role}</div>
                <h4 className="serif-display" style={{ fontSize: 24, marginTop: 6, marginBottom: 10 }}>{h.name}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16, flex: 1 }}>{h.desc}</p>
                <div style={{ borderTop: "1px solid #E5D5B5", paddingTop: 14, fontFamily: "var(--font-serif)", fontSize: 16, fontStyle: "italic", color: "var(--henna-700)" }}>{h.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
