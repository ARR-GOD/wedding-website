"use client";

import { useState } from "react";
import { HennaGlyph, SectionHeader } from "./primitives";
import type { Strings } from "@/lib/i18n";

const RSVP_ENDPOINT = "https://script.google.com/macros/s/AKfycbxkIuk_rK0t4YlFSIysH1MhjW5oTyfPmXeF0Xa4JKToCw6nbAhubCRzlddUlmH6e-oNdQ/exec";

function FieldLabel({ dark, error, children }: { dark?: boolean; error?: boolean; children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 12, fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase",
      color: error ? "#E07A66" : (dark ? "rgba(251,233,184,0.7)" : "var(--henna-500)"),
      marginBottom: 8,
    }}>{children}{error && " *"}</div>
  );
}

function Field({ label, error, dark, children }: { label: string; error?: boolean; dark?: boolean; children: React.ReactNode }) {
  return (
    <label style={{ display: "block" }}>
      <FieldLabel dark={dark} error={error}>{label}</FieldLabel>
      {children}
    </label>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div style={{ marginTop: 32, marginBottom: 4, display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ flex: 1, height: 1, background: "rgba(201,163,106,0.3)" }}/>
      <div className="eyebrow-caps" style={{ color: "var(--marigold-300)", fontSize: 11, letterSpacing: "0.32em" }}>{label}</div>
      <div style={{ flex: 1, height: 1, background: "rgba(201,163,106,0.3)" }}/>
    </div>
  );
}

export default function RSVP({ t }: { t: Strings }) {
  const [form, setForm] = useState({
    name: "", email: "", attending: "yes",
    arrivalCity: "", arrivalIndiaDate: "",
    arrivalUdaipurDate: "",
    departureCity: "", departureDate: "",
    diet: "", whatsapp: "", extra: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, boolean> = {};
    if (!form.name.trim()) errs.name = true;
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = true;
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const presence = form.attending === "yes" ? "Avec joie" : "Avec regret";
    const payload = form.attending === "yes" ? {
      nomComplet: form.name.trim(), email: form.email.trim(), presence,
      villeArrivee: form.arrivalCity, dateArriveeInde: form.arrivalIndiaDate,
      dateArriveeUdaipur: form.arrivalUdaipurDate,
      villeDepart: form.departureCity, dateDepart: form.departureDate,
      regimeAlimentaire: form.diet, whatsapp: form.whatsapp,
      infosComplementaires: form.extra,
    } : {
      nomComplet: form.name.trim(), email: form.email.trim(), presence,
      villeArrivee: "", dateArriveeInde: "", dateArriveeUdaipur: "",
      villeDepart: "", dateDepart: "", regimeAlimentaire: "", whatsapp: "", infosComplementaires: "",
    };

    setSending(true);
    setSendError("");
    try {
      await fetch(RSVP_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("RSVP submission failed", err);
      setSendError(t.rsvp.errorMsg);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <section id="rsvp" className="section-y" style={{ background: "var(--bg-dark)", color: "#FBE9B8", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('/noise-texture.png') center/400px repeat", opacity: 0.18, mixBlendMode: "overlay", pointerEvents: "none" }}/>
        <div className="wed-container" style={{ maxWidth: 720, textAlign: "center", padding: "40px 32px", position: "relative", zIndex: 2 }}>
          <HennaGlyph size={64} color="var(--marigold-300)"/>
          <h2 className="serif-display" style={{ color: "#FBE9B8", fontSize: 56, marginTop: 24 }}>{t.rsvp.success}</h2>
          <p style={{ color: "rgba(245,233,208,0.78)", fontSize: 17, marginTop: 16, lineHeight: 1.6 }}>{t.rsvp.successBody}</p>
          <div className="script" style={{ fontSize: 56, color: "var(--marigold-300)", marginTop: 30 }}>Shambhavi & Joseph</div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section-y section-dark">
      <div className="wed-container" style={{ maxWidth: 800, position: "relative", zIndex: 2 }}>
        <SectionHeader eyebrow={t.rsvp.eyebrow} script="Respond" title={t.rsvp.title} lead={t.rsvp.lead} light/>

        <form onSubmit={submit} className="rsvp-form" style={{ marginTop: 60, padding: 44, background: "rgba(255,252,243,0.04)", border: "1px solid rgba(251,233,184,0.18)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="rsvp-grid">
            <Field label={t.rsvp.name} error={errors.name} dark>
              <input className="lyly-input rsvp-input" value={form.name} onChange={e => update("name", e.target.value)}/>
            </Field>
            <Field label={t.rsvp.email} error={errors.email} dark>
              <input type="email" className="lyly-input rsvp-input" value={form.email} onChange={e => update("email", e.target.value)}/>
            </Field>
          </div>

          <div style={{ marginTop: 22 }}>
            <FieldLabel dark>{t.rsvp.attending}</FieldLabel>
            <div style={{ display: "flex", gap: 12 }}>
              {(["yes", "no"] as const).map(opt => (
                <button key={opt} type="button" onClick={() => update("attending", opt)}
                  style={{
                    flex: 1, padding: "16px 20px", border: "1px solid",
                    borderColor: form.attending === opt ? "var(--marigold-300)" : "rgba(251,233,184,0.2)",
                    background: form.attending === opt ? "rgba(201,163,106,0.18)" : "transparent",
                    color: form.attending === opt ? "var(--marigold-200)" : "rgba(245,233,208,0.7)",
                    cursor: "pointer", fontFamily: "var(--font-serif)", fontSize: 18, transition: "all 200ms",
                  }}>
                  {opt === "yes" ? "✓ " : ""}{opt === "yes" ? t.rsvp.yes : t.rsvp.no}
                </button>
              ))}
            </div>
          </div>

          {form.attending === "yes" && (
            <>
              <Divider label={t.rsvp.arrivalIndia}/>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="rsvp-grid">
                <Field label={t.rsvp.arrivalCity} dark>
                  <input className="lyly-input rsvp-input" value={form.arrivalCity} onChange={e => update("arrivalCity", e.target.value)} placeholder="Mumbai, Delhi…"/>
                </Field>
                <Field label={t.rsvp.arrivalIndiaDate} dark>
                  <input type="datetime-local" className="lyly-input rsvp-input" value={form.arrivalIndiaDate} onChange={e => update("arrivalIndiaDate", e.target.value)}/>
                </Field>
              </div>

              <Divider label={t.rsvp.arrivalUdaipur}/>
              <div style={{ marginTop: 8 }}>
                <Field label={t.rsvp.arrivalUdaipurDate} dark>
                  <input type="datetime-local" className="lyly-input rsvp-input" value={form.arrivalUdaipurDate} onChange={e => update("arrivalUdaipurDate", e.target.value)}/>
                </Field>
              </div>

              <Divider label={t.rsvp.departure}/>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="rsvp-grid">
                <Field label={t.rsvp.departureCity} dark>
                  <input className="lyly-input rsvp-input" value={form.departureCity} onChange={e => update("departureCity", e.target.value)} placeholder="Udaipur, Mumbai…"/>
                </Field>
                <Field label={t.rsvp.departureDate} dark>
                  <input type="datetime-local" className="lyly-input rsvp-input" value={form.departureDate} onChange={e => update("departureDate", e.target.value)}/>
                </Field>
              </div>

              <div style={{ marginTop: 22 }}>
                <Field label={t.rsvp.diet} dark>
                  <input className="lyly-input rsvp-input" placeholder={t.rsvp.dietPlaceholder} value={form.diet} onChange={e => update("diet", e.target.value)}/>
                </Field>
              </div>

              <div style={{ marginTop: 22 }}>
                <Field label={t.rsvp.whatsapp} dark>
                  <input type="tel" className="lyly-input rsvp-input" placeholder={t.rsvp.whatsappPlaceholder} value={form.whatsapp} onChange={e => update("whatsapp", e.target.value)}/>
                </Field>
              </div>

              <div style={{ marginTop: 22 }}>
                <Field label={t.rsvp.extra} dark>
                  <textarea className="lyly-input rsvp-input" rows={3} placeholder={t.rsvp.extraPlaceholder} value={form.extra} onChange={e => update("extra", e.target.value)} style={{ resize: "vertical", fontFamily: "var(--font-body)" }}/>
                </Field>
              </div>
            </>
          )}

          <button type="submit" disabled={sending} className="lyly-btn lyly-btn--primary lyly-btn--lg" style={{ marginTop: 28, width: "100%", justifyContent: "center", fontSize: 16, height: 54, opacity: sending ? 0.6 : 1, cursor: sending ? "wait" : "pointer" }}>
            {sending ? t.rsvp.sending : `${t.rsvp.submit} →`}
          </button>
          {sendError && (
            <div style={{ marginTop: 14, padding: "12px 16px", border: "1px solid rgba(224,122,102,0.4)", background: "rgba(224,122,102,0.08)", color: "#E8B5AB", fontSize: 13, textAlign: "center" }}>
              {sendError}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
