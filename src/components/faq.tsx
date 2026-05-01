"use client";

import { useState } from "react";
import { SectionHeader } from "./primitives";
import type { Strings } from "@/lib/i18n";

export default function FAQ({ t }: { t: Strings }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-y" style={{ background: "var(--ivory)" }}>
      <div className="wed-container" style={{ maxWidth: 880 }}>
        <SectionHeader eyebrow={t.faq.eyebrow} script="Questions" title={t.faq.title}/>
        <div style={{ marginTop: 60 }}>
          {t.faq.items.map((item, i) => (
            <div key={i} style={{ borderTop: "1px solid #E5D5B5", borderBottom: i === t.faq.items.length - 1 ? "1px solid #E5D5B5" : "none" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%", textAlign: "left", padding: "22px 0", background: "none", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "flex-start", gap: 18, color: "var(--henna-700)",
                  fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 500,
                }}>
                <span style={{ flex: "0 0 28px", color: "var(--marigold-500)", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ flex: 1 }}>{item.q}</span>
                <span style={{ transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 220ms", color: "var(--sindoor-500)", fontSize: 24, lineHeight: 1 }}>+</span>
              </button>
              {open === i && (
                <div style={{ paddingLeft: 46, paddingBottom: 24, paddingRight: 24, fontSize: 15, lineHeight: 1.7, color: "#5b4632", maxWidth: 720 }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
