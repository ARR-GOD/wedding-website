"use client";

// Dress Code — single sortable + filterable table of 124 outfit links,
// preceded by a shipping + payment info card. Ported from the design's
// dresscode-section.jsx handoff (the previous gallery / day-cards / palettes /
// glossary / tips structure is gone).

import { useState, useMemo } from "react";
import { SectionHeader } from "./primitives";
import { DRESSCODE_DATA, type DresscodeItem } from "@/lib/dresscode-data";
import type { Strings, Lang } from "@/lib/i18n";

// ---- Plain-language descriptions (Indian fashion glossary) ------------------
const STYLE_DESCRIPTIONS: Record<string, { en: string; fr: string }> = {
  "Pre-draped saree":      { en: "Pre-stitched saree — no draping skills needed. Step into it like a dress.", fr: "Saree pre-cousu — pas besoin de savoir draper. Se porte comme une robe." },
  "Pre-draped sarees":     { en: "Pre-stitched saree — no draping skills needed. Step into it like a dress.", fr: "Saree pre-cousu — pas besoin de savoir draper. Se porte comme une robe." },
  "Pre draped sharara":    { en: "Saree-style top with wide flared trousers underneath. Easy + elegant.", fr: "Style saree avec un pantalon evase en dessous. Facile et elegant." },
  "Lehengas":              { en: "Long embroidered skirt + cropped blouse + dupatta (scarf). The full festive look.", fr: "Longue jupe brodee + haut court + dupatta (voile). La tenue de fete par excellence." },
  "Kurta set":             { en: "Long tunic + matching trousers (often + dupatta). Comfortable, easy to wear.", fr: "Tunique longue + pantalon assorti (souvent + dupatta). Confortable, facile a porter." },
  "Kurta sets":            { en: "Long tunic + matching trousers (often + dupatta). Comfortable, easy to wear.", fr: "Tunique longue + pantalon assorti (souvent + dupatta). Confortable, facile a porter." },
  "Kurta with jacket set": { en: "Tunic + trousers with a structured Indian jacket on top. A dressier silhouette.", fr: "Tunique + pantalon avec une veste indienne structuree par-dessus. Look plus habille." },
  "Skirt sets":            { en: "Crop top + long skirt + dupatta — lighter alternative to a full lehenga.", fr: "Top court + jupe longue + dupatta — alternative plus legere au lehenga." },
  "Jumpsuit":              { en: "Western-cut jumpsuit with Indian embroidery — modern + comfortable.", fr: "Combinaison de coupe occidentale avec broderies indiennes — moderne et confortable." },
  "Kurta + pajama":        { en: "Long shirt + loose drawstring trousers — the classic Indian menswear pairing.", fr: "Chemise longue + pantalon ample — la tenue indienne masculine classique." },
};

function describeStyle(style: string, lang: Lang) {
  const d = STYLE_DESCRIPTIONS[style];
  if (!d) return null;
  return lang === "fr" ? d.fr : d.en;
}

// ---- Brand name mapping (domain → human brand) ------------------------------
const BRAND_NAMES: Record<string, string> = {
  "globaldesi.in":        "Global Desi",
  "lashkaraa.in":         "Lashkaraa",
  "lashkaraa.com":        "Lashkaraa",
  "nykaafashion.com":     "Nykaa Fashion",
  "perniaspopupshop.com": "Pernia's Pop Up Shop",
  "kalkifashion.com":     "Kalki Fashion",
  "azafashions.com":      "Aza Fashions",
  "manyavar.com":         "Manyavar",
  "amazon.in":            "Amazon India",
  "amazon.fr":            "Amazon",
  "ajio.com":             "Ajio",
  "myntra.com":           "Myntra",
  "fabindia.com":         "Fabindia",
  "biba.in":              "Biba",
  "anita-dongre.com":     "Anita Dongre",
  "sabyasachi.com":       "Sabyasachi",
  "raw-mango.com":        "Raw Mango",
  "kulfi.in":             "Kulfi",
};

function brandFromSource(source?: string) {
  if (!source) return "—";
  const key = source.toLowerCase().replace(/^www\./, "");
  if (BRAND_NAMES[key]) return BRAND_NAMES[key];
  const first = key.split(".")[0] || source;
  return first.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

// ---- Product name extraction (from URL slug) --------------------------------
function productNameFromUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const segments = u.pathname.split("/").filter(Boolean);
    let slug = segments[segments.length - 1] || "";
    slug = slug.replace(/\.html?$/i, "").replace(/\.aspx?$/i, "");
    slug = slug.replace(/[-_][A-Z0-9_]+$/g, "");
    slug = slug.replace(/[-_]p$/i, "");
    slug = slug.replace(/^\d+-?/, "");
    let name = slug.replace(/[-_]+/g, " ").trim();
    if (!name) return null;
    if (name.length > 64) name = name.slice(0, 61).trim() + "…";
    return name.replace(/\b\w/g, c => c.toUpperCase());
  } catch {
    return null;
  }
}

// ---- Flattened item (with derived fields) -----------------------------------
interface FlatItem extends DresscodeItem {
  day: "day1" | "day2";
  gender: "women" | "men";
  brand: string;
  productName: string;
  _key: string;
}

function flattenItems(data: typeof DRESSCODE_DATA): FlatItem[] {
  const out: FlatItem[] = [];
  (["day1", "day2"] as const).forEach(dayKey => {
    (["women", "men"] as const).forEach(genderKey => {
      const items = (data[dayKey] && data[dayKey][genderKey]) || [];
      items.forEach((item, idx) => out.push({
        ...item,
        day: dayKey,
        gender: genderKey,
        brand: brandFromSource(item.source),
        productName: productNameFromUrl(item.url) || item.style,
        _key: `${dayKey}-${genderKey}-${idx}`,
      }));
    });
  });
  return out;
}

// ---- Multi-checkbox filter group --------------------------------------------
interface FilterOption { value: string; label: string }

function DCMultiFilter({ label, options, selected, onChange }: {
  label: string; options: FilterOption[]; selected: string[]; onChange: (next: string[]) => void;
}) {
  const toggle = (value: string) => {
    const next = selected.includes(value)
      ? selected.filter(v => v !== value)
      : [...selected, value];
    onChange(next);
  };
  return (
    <div>
      <div className="eyebrow-caps" style={{ color: "var(--henna-500)", marginBottom: 8 }}>{label}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {options.map(opt => {
          const active = selected.includes(opt.value);
          return (
            <button key={opt.value} onClick={() => toggle(opt.value)} style={{
              padding: "7px 14px", cursor: "pointer",
              border: `1px solid ${active ? "var(--sindoor-500)" : "#E5D5B5"}`,
              background: active ? "var(--sindoor-500)" : "var(--bg-raised)",
              color: active ? "#FBF6EA" : "var(--henna-700)",
              fontFamily: "var(--font-serif)", fontSize: 14, letterSpacing: "0.04em",
              transition: "all 180ms", whiteSpace: "nowrap",
            }}>{opt.label}</button>
          );
        })}
      </div>
    </div>
  );
}

// ---- Sortable table ---------------------------------------------------------
type SortKey = "default" | "productName" | "style" | "day";
type SortDir = "asc" | "desc";

function DCItemsTable({ items, lang }: { items: FlatItem[]; lang: Lang }) {
  const [sortKey, setSortKey] = useState<SortKey>("default");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const onSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };

  const sorted = useMemo(() => {
    const arr = items.slice();
    if (sortKey === "default") return arr;
    const dir = sortDir === "asc" ? 1 : -1;
    arr.sort((a, b) => {
      const av = String((a as unknown as Record<string, unknown>)[sortKey] || "").toLowerCase();
      const bv = String((b as unknown as Record<string, unknown>)[sortKey] || "").toLowerCase();
      if (av < bv) return -1 * dir;
      if (av > bv) return  1 * dir;
      return 0;
    });
    return arr;
  }, [items, sortKey, sortDir]);

  const dayBadge = (day: "day1" | "day2") => {
    const day1 = day === "day1";
    const label = day1 ? (lang === "fr" ? "Jour 1" : "Day 1") : (lang === "fr" ? "Jour 2" : "Day 2");
    return (
      <span style={{
        display: "inline-block", padding: "3px 8px",
        background: day1 ? "rgba(178,58,46,0.12)" : "rgba(122,74,33,0.12)",
        color: day1 ? "var(--sindoor-500)" : "var(--henna-500)",
        fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600,
        whiteSpace: "nowrap",
      }}>{label}</span>
    );
  };

  const cellPad = "12px 14px";
  const headerBase: React.CSSProperties = {
    fontFamily: "var(--font-serif)", fontSize: 12, letterSpacing: "0.18em",
    textTransform: "uppercase", color: "var(--henna-500)", fontWeight: 600,
    padding: cellPad, textAlign: "left", borderBottom: "1px solid var(--marigold-500)",
    background: "var(--bg-raised)", position: "sticky", top: 0, zIndex: 1,
    cursor: "pointer", userSelect: "none", whiteSpace: "nowrap",
  };
  const sortIndicator = (key: SortKey) => {
    if (sortKey !== key) return <span style={{ opacity: 0.3, marginLeft: 4 }}>↕</span>;
    return <span style={{ color: "var(--sindoor-500)", marginLeft: 4 }}>{sortDir === "asc" ? "↑" : "↓"}</span>;
  };
  const rowBorder = "1px solid #E5D5B5";

  return (
    <div style={{ border: "1px solid #E5D5B5", background: "var(--bg-raised)", overflow: "auto" }}>
      <table className="dc-table" style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-serif)", minWidth: 720 }}>
        <thead>
          <tr>
            <th style={headerBase} onClick={() => onSort("productName")}>
              {lang === "fr" ? "Nom + Marque" : "Name + Brand"} {sortIndicator("productName")}
            </th>
            <th style={headerBase} onClick={() => onSort("style")}>
              Description {sortIndicator("style")}
            </th>
            <th style={{ ...headerBase, width: 110 }} onClick={() => onSort("day")}>
              {lang === "fr" ? "Jour" : "Day"} {sortIndicator("day")}
            </th>
            <th style={{ ...headerBase, textAlign: "right", width: 110, cursor: "default" }} aria-label="View"></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((item, i) => {
            const desc = describeStyle(item.style, lang);
            return (
              <tr key={item._key || i} style={{ borderTop: i === 0 ? "none" : rowBorder }}>
                <td style={{ padding: cellPad, verticalAlign: "top", maxWidth: 320 }}>
                  <div style={{ fontSize: 15, color: "var(--henna-700)", fontWeight: 500, lineHeight: 1.35 }}>
                    {item.productName}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--marigold-500)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4, fontWeight: 600 }}>
                    {item.brand}
                  </div>
                </td>
                <td style={{ padding: cellPad, verticalAlign: "top", maxWidth: 480 }}>
                  <div style={{ fontSize: 14, color: "var(--henna-700)", fontWeight: 500 }}>{item.style}</div>
                  {desc && (
                    <div style={{ fontSize: 13, color: "#5b4632", marginTop: 4, lineHeight: 1.5 }}>{desc}</div>
                  )}
                  {item.notes && (
                    <div style={{ fontSize: 12, color: "var(--marigold-500)", fontStyle: "italic", marginTop: 6, lineHeight: 1.4 }}>
                      ↳ {item.notes}
                    </div>
                  )}
                </td>
                <td style={{ padding: cellPad, verticalAlign: "top" }}>{dayBadge(item.day)}</td>
                <td style={{ padding: cellPad, verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={{
                    padding: "7px 14px", border: "1px solid var(--henna-500)",
                    color: "var(--henna-700)", textDecoration: "none", fontSize: 11, letterSpacing: "0.16em",
                    textTransform: "uppercase", fontFamily: "var(--font-serif)",
                    display: "inline-block",
                  }}>{lang === "fr" ? "Voir" : "View"} ↗</a>
                </td>
              </tr>
            );
          })}
          {sorted.length === 0 && (
            <tr>
              <td colSpan={4} style={{ padding: "40px 14px", textAlign: "center", color: "var(--henna-500)", fontStyle: "italic" }}>
                {lang === "fr" ? "Aucun article ne correspond a ces filtres." : "No items match these filters."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// ---- Shipping & ordering info block -----------------------------------------
function DCShippingInfo({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const accent = "var(--sindoor-500)";
  const gold = "var(--marigold-500)";

  return (
    <div className="reveal" style={{
      marginTop: 48,
      background: "linear-gradient(180deg, #FFFCF3 0%, #FFF6E5 100%)",
      border: "1px solid var(--marigold-400)",
      padding: "clamp(24px, 4vw, 36px)",
      position: "relative",
    }}>
      <div style={{ position: "absolute", top: 14, right: 14, fontSize: 16, color: gold, opacity: 0.6, fontFamily: "var(--font-script)" }}>✦</div>
      <div style={{ position: "absolute", top: 14, left: 14, fontSize: 16, color: gold, opacity: 0.6, fontFamily: "var(--font-script)" }}>✦</div>

      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div className="eyebrow-caps" style={{ color: gold, marginBottom: 8 }}>
          {fr ? "Avant de commander" : "Before you order"}
        </div>
        <h3 style={{
          fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 3.5vw, 30px)",
          color: "var(--henna-700)", fontWeight: 500, margin: 0,
        }}>
          {fr ? "Livraison & paiement" : "Shipping & payment"}
        </h3>
      </div>

      <div className="dc-shipping-grid" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "clamp(20px, 3vw, 32px)",
      }}>
        {/* Address card */}
        <div style={{
          background: "var(--bg-raised)", border: "1px solid #E5D5B5",
          padding: "clamp(18px, 2.5vw, 24px)",
          borderLeft: `3px solid ${accent}`,
        }}>
          <div className="eyebrow-caps" style={{ color: accent, marginBottom: 12 }}>
            {fr ? "Adresse de livraison (Inde)" : "Shipping address (India)"}
          </div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "var(--henna-700)", lineHeight: 1.65 }}>
            <div style={{ fontWeight: 600 }}>Dr Valkal Tripathi</div>
            <div style={{ marginTop: 8 }}>
              Vinod Kunj, 50 M.G Road<br/>
              Opposite IMAX Opticals<br/>
              First floor<br/>
              Vile Parle East<br/>
              Mumbai 400057
            </div>
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #E5D5B5" }}>
              <span className="eyebrow-caps" style={{ color: "var(--henna-500)", fontSize: 10 }}>
                {fr ? "Telephone" : "Phone"}
              </span>
              <div style={{ marginTop: 4 }}>
                <a href="tel:+919820065981" style={{ color: accent, textDecoration: "none", fontSize: 15 }}>
                  +91 98200 65981
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{
            background: "var(--bg-raised)", border: "1px solid #E5D5B5",
            padding: "clamp(18px, 2.5vw, 24px)",
            borderLeft: `3px solid ${gold}`,
          }}>
            <div className="eyebrow-caps" style={{ color: gold, marginBottom: 12 }}>
              {fr ? "Apres votre commande" : "After you order"}
            </div>
            <p style={{ fontSize: 14, color: "#5b4632", lineHeight: 1.65, margin: 0 }}>
              {fr
                ? "Envoyez une capture d'ecran de votre confirmation de commande, accompagnee d'une photo de la tenue, dans le groupe — pour qu'on puisse suivre les livraisons et eviter que plusieurs personnes commandent la meme tenue."
                : "Send a screenshot of your order confirmation, together with a photo of the outfit, in the group — so we can track deliveries and avoid people ordering the same outfit."}
            </p>
          </div>

          <div style={{
            background: "var(--bg-raised)", border: "1px solid #E5D5B5",
            padding: "clamp(18px, 2.5vw, 24px)",
            borderLeft: `3px solid var(--henna-500)`,
          }}>
            <div className="eyebrow-caps" style={{ color: "var(--henna-500)", marginBottom: 12 }}>
              {fr ? "Paiement" : "Payment"}
            </div>
            <p style={{ fontSize: 14, color: "#5b4632", lineHeight: 1.65, margin: 0 }}>
              {fr
                ? "Selon les sites, les prix s'affichent en euros ou en roupies (₹). Tout paiement par carte bancaire internationale fonctionne."
                : "Depending on the site, prices show in euros or rupees (₹). Any international bank card works for payment."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Main section
// ============================================================================
export default function DressCode({ t, lang }: { t: Strings; lang: Lang }) {
  const [days, setDays]       = useState<string[]>([]);
  const [genders, setGenders] = useState<string[]>([]);
  const [brands, setBrands]   = useState<string[]>([]);

  const allItems = useMemo(() => flattenItems(DRESSCODE_DATA), []);

  const brandOptions: FilterOption[] = useMemo(() => {
    const seen = new Set<string>();
    allItems.forEach(it => seen.add(it.brand));
    return [...seen].sort().map(b => ({ value: b, label: b }));
  }, [allItems]);

  const filtered = useMemo(() => {
    return allItems.filter(it => {
      if (days.length    && !days.includes(it.day))       return false;
      if (genders.length && !genders.includes(it.gender)) return false;
      if (brands.length  && !brands.includes(it.brand))   return false;
      return true;
    });
  }, [allItems, days, genders, brands]);

  const dayOptions: FilterOption[] = [
    { value: "day1", label: lang === "fr" ? "Jour 1 — Mehendi & Cocktail" : "Day 1 — Mehendi & Cocktail" },
    { value: "day2", label: lang === "fr" ? "Jour 2 — Mariage" : "Day 2 — Wedding" },
  ];
  const genderOptions: FilterOption[] = [
    { value: "women", label: lang === "fr" ? "Femmes" : "Women" },
    { value: "men",   label: lang === "fr" ? "Hommes" : "Men" },
  ];

  const hasActiveFilter = days.length + genders.length + brands.length > 0;

  return (
    <section id="dress-code" className="section-y" style={{ background: "var(--ivory)" }}>
      <div className="wed-container">
        <SectionHeader
          eyebrow={t.dressCode.eyebrow}
          script={lang === "fr" ? "Une célébration en couleurs" : "A celebration in colors"}
          title={t.dressCode.title}
          lead={t.dressCode.lead}
        />

        <DCShippingInfo lang={lang}/>

        <div className="reveal" style={{
          marginTop: 48, padding: "clamp(20px, 3vw, 32px)",
          background: "linear-gradient(180deg, #FFF6E5 0%, #FFFCF3 60%)",
          border: "1px solid #E5D5B5",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, marginBottom: 22 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(20px, 4vw, 40px)" }}>
              <DCMultiFilter label={lang === "fr" ? "Jour" : "Day"} options={dayOptions} selected={days} onChange={setDays}/>
              <DCMultiFilter label={lang === "fr" ? "Genre" : "Gender"} options={genderOptions} selected={genders} onChange={setGenders}/>
              {brandOptions.length > 1 && (
                <DCMultiFilter label={lang === "fr" ? "Marque" : "Brand"} options={brandOptions} selected={brands} onChange={setBrands}/>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, paddingTop: 4 }}>
              <div className="eyebrow-caps" style={{ color: "var(--henna-500)" }}>
                {filtered.length} options
              </div>
              {hasActiveFilter && (
                <button onClick={() => { setDays([]); setGenders([]); setBrands([]); }} style={{
                  padding: "6px 14px", border: "1px solid var(--henna-500)", background: "transparent",
                  cursor: "pointer", color: "var(--henna-700)", fontFamily: "var(--font-serif)",
                  fontSize: 13, letterSpacing: "0.05em",
                }}>
                  {lang === "fr" ? "Effacer les filtres" : "Clear filters"} ×
                </button>
              )}
            </div>
          </div>

          <DCItemsTable items={filtered} lang={lang}/>
        </div>
      </div>
    </section>
  );
}
