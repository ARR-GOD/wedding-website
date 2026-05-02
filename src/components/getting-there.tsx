"use client";

import { WedIcon, HennaGlyph } from "./primitives";
import type { Strings } from "@/lib/i18n";

export default function GettingThereSection({ t }: { t: Strings }) {
  const data = t.itinerary?.gettingThere;
  if (!data) return null;

  return (
    <section id="getting-there" className="section-y getting-there-cream" style={{ background: "#F4ECD9", position: "relative", overflow: "hidden" }}>
      <div className="wed-container" style={{ position: "relative", zIndex: 2 }}>
        <div className="reveal" style={{ maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 18 }}>
              <div className="gt-divider" style={{ width: 32, height: 1, background: "rgba(201,118,8,0.45)" }}/>
              <HennaGlyph size={22} color="var(--marigold-500)"/>
              <div className="gt-divider" style={{ width: 32, height: 1, background: "rgba(201,118,8,0.45)" }}/>
            </div>
            <h3 className="serif-display" style={{ fontSize: "clamp(28px, 3.4vw, 42px)", color: "var(--henna-700)", margin: 0, letterSpacing: "-0.01em" }}>{data.title}</h3>
            <p style={{ color: "#5b4632", marginTop: 12, maxWidth: 620, margin: "12px auto 0", fontSize: 16, lineHeight: 1.55 }}>{data.lead}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {data.cards.map((c, i) => (
              <div key={i} className="gt-card" style={{
                position: "relative", padding: "32px 24px 28px",
                background: "rgba(255,253,247,0.7)",
                border: "1px solid rgba(122,74,33,0.18)",
                display: "flex", flexDirection: "column", gap: 14,
              }}>
                <div className="gt-card-corner" style={{ position: "absolute", top: 8, left: 8, width: 14, height: 14, borderTop: "1px solid rgba(201,118,8,0.45)", borderLeft: "1px solid rgba(201,118,8,0.45)" }}/>
                <div className="gt-card-corner" style={{ position: "absolute", top: 8, right: 8, width: 14, height: 14, borderTop: "1px solid rgba(201,118,8,0.45)", borderRight: "1px solid rgba(201,118,8,0.45)" }}/>
                <div className="gt-card-corner" style={{ position: "absolute", bottom: 8, left: 8, width: 14, height: 14, borderBottom: "1px solid rgba(201,118,8,0.45)", borderLeft: "1px solid rgba(201,118,8,0.45)" }}/>
                <div className="gt-card-corner" style={{ position: "absolute", bottom: 8, right: 8, width: 14, height: 14, borderBottom: "1px solid rgba(201,118,8,0.45)", borderRight: "1px solid rgba(201,118,8,0.45)" }}/>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div className="gt-icon-circle" style={{
                    width: 44, height: 44, borderRadius: "50%",
                    border: "1px solid var(--marigold-500)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--marigold-500)",
                    background: "rgba(232,148,20,0.08)",
                    flexShrink: 0,
                  }}>
                    <WedIcon name={c.icon} size={20}/>
                  </div>
                  <div className="eyebrow-caps" style={{ color: "var(--marigold-500)", fontSize: 11, letterSpacing: "0.32em" }}>{c.kicker}</div>
                </div>
                <h4 className="serif-display" style={{ fontSize: 20, color: "var(--henna-700)", margin: 0, lineHeight: 1.2 }}>{c.title}</h4>
                <p style={{ fontSize: 14, color: "#5b4632", margin: 0, lineHeight: 1.6 }}>{c.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
            <a href="#travel" className="gt-teaser" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "14px 24px",
              border: "1px solid rgba(122,74,33,0.30)",
              color: "var(--henna-700)",
              fontFamily: "var(--font-serif)",
              fontSize: 15, letterSpacing: "0.04em", fontStyle: "italic",
              background: "rgba(232,148,20,0.06)",
            }}>
              ✈ {data.teaser}
            </a>
            {data.rsvpCta && (
              <a href="#rsvp" className="lyly-btn lyly-btn--primary lyly-btn--lg" style={{ marginTop: 4 }}>
                {data.rsvpCta}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
