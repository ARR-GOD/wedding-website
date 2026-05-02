"use client";

import { CornerOrnament, HennaGlyph, HennaDivider, SectionHeader } from "./primitives";
import type { Strings, Lang } from "@/lib/i18n";

export default function DressCode({ t, lang }: { t: Strings; lang: Lang }) {
  return (
    <section id="dress-code" className="section-y" style={{ background: "var(--ivory)" }}>
      <div className="wed-container">
        <SectionHeader
          eyebrow={t.dressCode.eyebrow}
          script="A celebration in colors"
          title="Dress Code"
        />

        <div className="reveal" style={{
          marginTop: 80,
          maxWidth: 640,
          margin: "80px auto 0",
          textAlign: "center",
          padding: "clamp(48px, 8vw, 88px) clamp(28px, 5vw, 64px)",
          background: "linear-gradient(180deg, #FFF6E5 0%, #FFFCF3 60%)",
          border: "1px solid #E5D5B5",
          position: "relative",
        }}>
          <div style={{ position: "absolute", top: 18, left: 18 }}>
            <CornerOrnament rotate={0}/>
          </div>
          <div style={{ position: "absolute", top: 18, right: 18 }}>
            <CornerOrnament rotate={90}/>
          </div>
          <div style={{ position: "absolute", bottom: 18, left: 18 }}>
            <CornerOrnament rotate={270}/>
          </div>
          <div style={{ position: "absolute", bottom: 18, right: 18 }}>
            <CornerOrnament rotate={180}/>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
            <HennaGlyph size={48} color="var(--sindoor-500)"/>
          </div>
          <div className="script" style={{
            fontSize: "clamp(48px, 7vw, 72px)",
            color: "var(--sindoor-500)",
            lineHeight: 1.1,
            marginBottom: 12,
          }}>
            {lang === "fr" ? "Bientôt" : "Coming soon"}
          </div>
          <p style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "#5b4632",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            maxWidth: 460,
            margin: "0 auto",
          }}>
            {lang === "fr"
              ? "Nous finalisons les palettes, les inspirations et un petit guide pour vous habiller — à venir très bientôt."
              : "We're finalising the palettes, inspiration and a little guide to dressing for the day — coming very soon."}
          </p>
          <div style={{ marginTop: 32 }}>
            <HennaDivider/>
          </div>
        </div>
      </div>
    </section>
  );
}
