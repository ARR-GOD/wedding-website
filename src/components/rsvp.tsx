"use client";

import { useState } from "react";
import { WedIcon, HennaGlyph, SectionHeader } from "./primitives";
import type { Strings } from "@/lib/i18n";

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

const stepBtnStyle: React.CSSProperties = {
  width: 40, height: 40, border: "1px solid rgba(251,233,184,0.3)", background: "transparent",
  color: "#FBE9B8", cursor: "pointer", fontSize: 18, fontFamily: "var(--font-serif)",
};

export default function RSVP({ t }: { t: Strings }) {
  const [form, setForm] = useState({ name: "", email: "", attending: "yes", events: [] as string[], guests: 1, diet: "", song: "", message: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const evts = ["Mehendi & Sangeet", "Haldi", "Wedding Ceremony", "Reception"];

  const update = (k: string, v: string | number | string[]) => setForm(f => ({ ...f, [k]: v }));
  const toggleEvent = (e: string) => {
    setForm(f => ({ ...f, events: f.events.includes(e) ? f.events.filter(x => x !== e) : [...f.events, e] }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, boolean> = {};
    if (!form.name.trim()) errs.name = true;
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = true;
    if (form.attending === "yes" && form.events.length === 0) errs.events = true;
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="section-y" style={{ background: "var(--bg-dark)", color: "#FBE9B8" }}>
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

        <form onSubmit={submit} style={{ marginTop: 60, padding: 44, background: "rgba(255,252,243,0.04)", border: "1px solid rgba(251,233,184,0.18)" }}>
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
                    flex: 1, padding: "16px 20px", border: "1px solid", borderColor: form.attending === opt ? "var(--marigold-300)" : "rgba(251,233,184,0.2)",
                    background: form.attending === opt ? "rgba(232,148,20,0.12)" : "transparent",
                    color: form.attending === opt ? "var(--marigold-200)" : "rgba(245,233,208,0.7)",
                    cursor: "pointer", fontFamily: "var(--font-serif)", fontSize: 18, transition: "all 200ms",
                  }}>
                  {opt === "yes" ? "\u2713 " : ""}{opt === "yes" ? t.rsvp.yes : t.rsvp.no}
                </button>
              ))}
            </div>
          </div>

          {form.attending === "yes" && (
            <>
              <div style={{ marginTop: 22 }}>
                <FieldLabel dark error={errors.events}>{t.rsvp.events}</FieldLabel>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }} className="rsvp-grid">
                  {evts.map(ev => (
                    <button key={ev} type="button" onClick={() => toggleEvent(ev)}
                      style={{
                        padding: "12px 16px", border: "1px solid", borderColor: form.events.includes(ev) ? "var(--marigold-300)" : "rgba(251,233,184,0.2)",
                        background: form.events.includes(ev) ? "rgba(232,148,20,0.12)" : "transparent",
                        color: form.events.includes(ev) ? "var(--marigold-200)" : "rgba(245,233,208,0.7)",
                        cursor: "pointer", fontSize: 14, textAlign: "left", display: "flex", alignItems: "center", gap: 10, transition: "all 180ms",
                      }}>
                      <span style={{
                        width: 16, height: 16, border: "1px solid currentColor", display: "inline-flex", alignItems: "center", justifyContent: "center",
                        background: form.events.includes(ev) ? "var(--marigold-300)" : "transparent",
                      }}>
                        {form.events.includes(ev) && <WedIcon name="check" size={12} color="var(--henna-700)"/>}
                      </span>
                      {ev}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <FieldLabel dark>{t.rsvp.guests}</FieldLabel>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button type="button" onClick={() => update("guests", Math.max(1, form.guests - 1))} style={stepBtnStyle}>&#8722;</button>
                  <div style={{ minWidth: 50, textAlign: "center", fontFamily: "var(--font-serif)", fontSize: 28, color: "#FBE9B8" }}>{form.guests}</div>
                  <button type="button" onClick={() => update("guests", form.guests + 1)} style={stepBtnStyle}>+</button>
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <Field label={t.rsvp.diet} dark>
                  <input className="lyly-input rsvp-input" placeholder={t.rsvp.dietPlaceholder} value={form.diet} onChange={e => update("diet", e.target.value)}/>
                </Field>
              </div>
              <div style={{ marginTop: 22 }}>
                <Field label={t.rsvp.song} dark>
                  <input className="lyly-input rsvp-input" placeholder={t.rsvp.songPlaceholder} value={form.song} onChange={e => update("song", e.target.value)}/>
                </Field>
              </div>
            </>
          )}

          <div style={{ marginTop: 22 }}>
            <Field label={t.rsvp.message} dark>
              <textarea className="lyly-input rsvp-input" rows={3} placeholder={t.rsvp.messagePlaceholder} value={form.message} onChange={e => update("message", e.target.value)} style={{ resize: "vertical", fontFamily: "var(--font-body)" }}/>
            </Field>
          </div>

          <button type="submit" className="lyly-btn lyly-btn--primary lyly-btn--lg" style={{ marginTop: 28, width: "100%", justifyContent: "center", fontSize: 16, height: 54 }}>
            {t.rsvp.submit} &#8594;
          </button>
        </form>
      </div>
    </section>
  );
}
