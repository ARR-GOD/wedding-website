"use client";

import { SectionHeader } from "./primitives";
import type { Strings } from "@/lib/i18n";

const looks = [
  { event: "Mehendi & Sangeet", palette: ["#F2B23A", "#E89414", "#7A4A21"], desc: "Bright, festive, joyful. Lehengas, kurtas, sarees in yellows, oranges, greens. Comfortable shoes — you'll dance.", recoWomen: "Lehenga, anarkali, bright saree", recoMen: "Kurta with churidar, Nehru jacket", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=80" },
  { event: "Haldi", palette: ["#FEC229", "#FFE57E", "#FBF6EA"], desc: "Yellow! All shades of yellow and white. Wear something light you don't mind staining with turmeric.", recoWomen: "Yellow cotton saree, kurta", recoMen: "Yellow or white kurta, simple cotton", img: "https://images.unsplash.com/photo-1583255448430-e6f3a0a2dde6?w=900&q=80" },
  { event: "Wedding Ceremony", palette: ["#B23A2E", "#7A1F18", "#C9A24A"], desc: "Formal and elegant. Rich reds, deep maroons, gold. The most photographed event — dress up.", recoWomen: "Heavy lehenga or saree, jewellery", recoMen: "Sherwani, bandhgala, formal kurta", img: "https://images.unsplash.com/photo-1631192515014-94b7c5fb14fa?w=900&q=80" },
  { event: "Reception", palette: ["#0E5E66", "#2A130C", "#C9A24A"], desc: "Cocktail-formal. Western or Indo-Western. Jewel tones — emerald, sapphire, navy. Heels are fine here.", recoWomen: "Gown, cocktail saree, Indo-Western", recoMen: "Suit, bandhgala, dress shirt", img: "https://images.unsplash.com/photo-1597248374161-426f3d6f1b3b?w=900&q=80" },
];

export default function DressCode({ t }: { t: Strings }) {
  return (
    <section id="dress-code" className="section-y" style={{ background: "var(--ivory)" }}>
      <div className="wed-container">
        <SectionHeader eyebrow={t.dressCode.eyebrow} script="What to wear" title={t.dressCode.title} lead={t.dressCode.lead}/>
        <div style={{ marginTop: 60, display: "flex", flexDirection: "column", gap: 28 }}>
          {looks.map((look, i) => (
            <div key={i} className="reveal dress-grid" style={{
              display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
              gap: 0, background: "var(--bg-raised)", border: "1px solid #E5D5B5",
            }}>
              <div style={{ aspectRatio: "5 / 4", overflow: "hidden", order: i % 2 === 0 ? 1 : 2 }}>
                <img src={look.img} alt={look.event} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
              </div>
              <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "center", order: i % 2 === 0 ? 2 : 1 }}>
                <div className="eyebrow-caps" style={{ color: "var(--sindoor-500)" }}>Event {String(i + 1).padStart(2, "0")}</div>
                <h3 className="serif-display" style={{ fontSize: 34, marginTop: 6, marginBottom: 14 }}>{look.event}</h3>
                <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
                  {look.palette.map((c, j) => (
                    <div key={j} style={{ width: 28, height: 28, borderRadius: 999, background: c, border: "1px solid rgba(78,46,18,0.18)" }}/>
                  ))}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 18 }}>{look.desc}</p>
                <div style={{ borderTop: "1px solid #E5D5B5", paddingTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <div className="eyebrow-caps">Women</div>
                    <div style={{ marginTop: 4, fontFamily: "var(--font-serif)", fontSize: 15, fontStyle: "italic" }}>{look.recoWomen}</div>
                  </div>
                  <div>
                    <div className="eyebrow-caps">Men</div>
                    <div style={{ marginTop: 4, fontFamily: "var(--font-serif)", fontSize: 15, fontStyle: "italic" }}>{look.recoMen}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, padding: 28, border: "1px dashed var(--marigold-400)", textAlign: "center", background: "var(--marigold-50)" }}>
          <h4 className="serif-display" style={{ fontSize: 22, marginBottom: 8 }}>{t.dressCode.shopTitle}</h4>
          <p style={{ fontSize: 15, maxWidth: 580, margin: "0 auto" }}>{t.dressCode.shopBody}</p>
        </div>
      </div>
    </section>
  );
}
