"use client";

import { useState, useEffect } from "react";
import STRINGS, { type Lang } from "@/lib/i18n";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Itinerary from "@/components/itinerary";
import GettingThereSection from "@/components/getting-there";
import Ceremonies from "@/components/ceremonies";
import Travel from "@/components/travel";
import RSVP from "@/components/rsvp";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("wed_lang") as Lang | null;
    if (saved && (saved === "en" || saved === "fr")) {
      setLang(saved);
    } else if (navigator.language.startsWith("fr")) {
      setLang("fr");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wed_lang", lang);
  }, [lang]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    const observeReveal = (el: Element) => {
      if (!el.classList.contains("visible")) obs.observe(el);
    };

    document.querySelectorAll(".reveal").forEach(observeReveal);

    // Catch dynamically inserted .reveal elements (e.g. tab switches).
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.classList?.contains("reveal")) observeReveal(n);
          n.querySelectorAll?.(".reveal").forEach(observeReveal);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { obs.disconnect(); mo.disconnect(); };
  }, [lang]);

  const t = STRINGS[lang];
  const weddingDate = "2026-09-19T17:30:00+05:30";

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang}/>
      <Hero t={t} weddingDate={weddingDate}/>
      <Itinerary t={t}/>
      <GettingThereSection t={t}/>
      <Ceremonies t={t}/>
      <Travel t={t}/>
      <RSVP t={t}/>
      <FAQ t={t}/>
      <Footer t={t}/>
    </>
  );
}
