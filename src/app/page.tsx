"use client";

import { useState, useEffect } from "react";
import STRINGS, { type Lang } from "@/lib/i18n";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Story from "@/components/story";
import Itinerary from "@/components/itinerary";
import Ceremonies from "@/components/ceremonies";
import Travel from "@/components/travel";
import Hotels from "@/components/hotels";
import DressCode from "@/components/dress-code";
import Gallery from "@/components/gallery";
import Registry from "@/components/registry";
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
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [lang]);

  const t = STRINGS[lang];
  const weddingDate = "2026-09-19T16:00:00+05:30";

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang}/>
      <Hero t={t} weddingDate={weddingDate}/>
      <Story t={t}/>
      <Itinerary t={t}/>
      <Ceremonies t={t}/>
      <Travel t={t}/>
      <Hotels t={t}/>
      <DressCode t={t}/>
      <Gallery t={t}/>
      <Registry t={t}/>
      <RSVP t={t}/>
      <FAQ t={t}/>
      <Footer t={t}/>
    </>
  );
}
