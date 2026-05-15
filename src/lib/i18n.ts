export type Lang = "en" | "fr";

export interface CityListItem { name: string; url: string }

export interface CityPhoto { src: string; caption: string }

export interface City {
  name: string;
  x: number;
  y: number;
  vibe: string;
  role?: string;
  tag?: string;
  todo: string[];
  photos?: CityPhoto[];
  stay?: CityListItem[];
  eat?: CityListItem[];
  shop?: CityListItem[];
  extra?: CityListItem[];
}

export interface GettingThereCard {
  icon: string;
  kicker: string;
  title: string;
  body: string;
}

export interface Strings {
  nav: {
    story: string;
    itinerary: string;
    ceremonies: string;
    travel: string;
    stay: string;
    dressCode: string;
    faq: string;
    rsvp: string;
  };
  hero: {
    eyebrow: string;
    and: string;
    saveTheDate: string;
    date: string;
    location: string;
    cta: string;
    ctaSecondary: string;
  };
  countdown: { days: string; hours: string; minutes: string; seconds: string };
  story: {
    eyebrow: string;
    title: string;
    lead: string;
    chapters: { year: string; title: string; body: string }[];
  };
  itinerary: {
    eyebrow: string;
    title: string;
    lead: string;
    day1: { date: string; title: string; subtitle: string };
    day2: { date: string; title: string; subtitle: string };
    day3: { date: string; title: string; subtitle: string };
    events: { day: number; time: string; title: string; body: string; icon: string }[];
    gettingThere: {
      title: string;
      lead: string;
      cards: GettingThereCard[];
      teaser: string;
      rsvpCta: string;
    };
  };
  ceremonies: {
    eyebrow: string;
    title: string;
    lead: string;
    list: { name: string; short: string; body: string }[];
  };
  travel: {
    eyebrow: string;
    title: string;
    lead: string;
    tipsTitle: string;
    tips: { icon: string; title: string; body: string | string[] }[];
    whatToDo: string;
    whereToStay: string;
    whereToEat: string;
    whereToShop: string;
    more: string;
  };
  cities: City[];
  hotels: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  dressCode: {
    eyebrow: string;
    title: string;
    lead: string;
    shopTitle: string;
    shopBody: string;
  };
  registry: {
    eyebrow: string;
    title: string;
    body: string;
    honeymoon: string;
    home: string;
  };
  rsvp: {
    eyebrow: string;
    title: string;
    lead: string;
    name: string;
    email: string;
    attending: string;
    yes: string;
    no: string;
    arrivalIndia: string;
    arrivalCity: string;
    arrivalIndiaDate: string;
    arrivalUdaipur: string;
    arrivalUdaipurDate: string;
    departure: string;
    departureCity: string;
    departureDate: string;
    diet: string;
    dietPlaceholder: string;
    whatsapp: string;
    whatsappPlaceholder: string;
    extra: string;
    extraPlaceholder: string;
    submit: string;
    sending: string;
    errorMsg: string;
    success: string;
    successBody: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  footer: {
    tagline: string;
    with: string;
  };
}

const STRINGS: Record<Lang, Strings> = {
  en: {
    nav: { story: "Our Story", itinerary: "Itinerary", ceremonies: "Ceremonies", travel: "Travel", stay: "Stay", dressCode: "Dress Code", faq: "FAQ", rsvp: "RSVP" },
    hero: {
      eyebrow: "We're getting married",
      and: "&",
      saveTheDate: "Save the date",
      date: "18 — 20 September 2026",
      location: "Chunda Palace · Udaipur, India",
      cta: "Confirm your presence",
      ctaSecondary: "View itinerary",
    },
    countdown: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
    story: {
      eyebrow: "Our Story",
      title: "Two cultures, one love",
      lead: "From a chance meeting to a lifetime — here's how we got here.",
      chapters: [
        { year: "2020", title: "How we met", body: "Nantes, mutual friends, and that one party where nobody saw it coming. Nobody except maybe the two of us." },
        { year: "2021", title: "Lockdown, startup-garage edition", body: "We spent the year between the Ecole des Mines campus and Joseph's flat — officially a \"startup garage,\" unofficially our HQ. That summer, Joseph landed in India for the first time: Bombay, Sham's family and friends, and a baptism by fire on the spice front." },
        { year: "2022", title: "Off to Paris", body: "Sham got her permanent contract at a consulting firm; Joseph moved Loyoly (then Wiink) into Station F, the HEC incubator. Two flats, two commutes, and far too many \"so whose place tonight?\"." },
        { year: "2023", title: "One roof", body: "We finally settled it: one flat, in Paris, together. The thermostat debate, however, remains unsettled." },
        { year: "2026", title: "The proposal, under the auroras", body: "In March, in Tromso, under the northern lights. The question (finally) got asked. The answer didn't take long." },
        { year: "Today", title: "", body: "A few snails, far too many bubble teas, 6 trips to India and 7 countries discovered together later — we're celebrating our wedding with you." },
      ],
    },
    itinerary: {
      eyebrow: "The Celebration",
      title: "Three days of joy",
      lead: "An Indian wedding is a series of small, beautiful rituals — each one a chapter. Here's what to expect, day by day.",
      day1: { date: "Friday, 18 September", title: "Mehendi & Sangeet", subtitle: "Arrival, henna, music & dance" },
      day2: { date: "Saturday, 19 September", title: "Wedding Day", subtitle: "Haldi, baraat, pheras & reception" },
      day3: { date: "Sunday, 20 September", title: "Farewell Breakfast", subtitle: "A slow goodbye by the lake" },
      events: [
        { day: 1, time: "Afternoon", title: "Arrival & check-in", body: "Check-in from 12 PM. Lunch is organised — settle in, eat by the lake, take a swim. Optional: a final dance practice for tonight.", icon: "luggage" },
        { day: 1, time: "5:00 PM", title: "Ganesh Puja", body: "A short Hindu prayer to bless the start of the celebrations.", icon: "flame" },
        { day: 1, time: "5:30 PM", title: "Mehendi Ceremony", body: "Henna designs are applied to the hands and feet of the bride and all the women.", icon: "leaf" },
        { day: 1, time: "7:30 PM", title: "Sangeet Sundowner", body: "Music, dance and a friendly dance-off between the two families. Drinks under the stars.", icon: "music" },
        { day: 2, time: "Morning", title: "Breakfast & rest", body: "A slow start to the day before things kick into gear.", icon: "sun" },
        { day: 2, time: "Midday", title: "Haldi", body: "Turmeric paste is applied to the bride and groom to beautify and prepare them for their wedding day — joyful, slightly messy, and full of laughter.", icon: "drop" },
        { day: 2, time: "3:00 PM", title: "Safa Tying", body: "Men from the groom's side wear a turban — a symbol of honour and celebration.", icon: "crown" },
        { day: 2, time: "4:00 PM", title: "Baraat", body: "The groom's family and friends arrive at the wedding venue with music, dancing and drums.", icon: "drum" },
        { day: 2, time: "5:30 PM", title: "Pheras", body: "The wedding ceremony around a sacred fire — seven circles, seven vows.", icon: "fire" },
        { day: 2, time: "Night", title: "Reception", body: "Cocktails, speeches, music. The first night of the rest of our lives.", icon: "stars" },
        { day: 3, time: "10:00 AM", title: "Relaxed Breakfast", body: "A relaxed breakfast by the pool to nurse the celebrations and say see-you-soon. No dress code.", icon: "sun" },
        { day: 3, time: "Afternoon", title: "Departures", body: "Check-out at 11 AM.", icon: "luggage" },
      ],
      gettingThere: {
        title: "Getting there",
        lead: "A few practical notes to help you plan. We'll also dedicate a full section further down to options around your trip.",
        cards: [
          { icon: "passport", kicker: "Step 1", title: "Apply for your visa", body: "All foreign nationals need a visa to enter India. The easiest route is the e-Visa: apply online at indianvisaonline.gov.in, processed in 3–5 days. We recommend applying at least 3 weeks before departure to be safe." },
          { icon: "plane", kicker: "Step 2", title: "Fly to India", body: "Most international guests fly into Mumbai or Delhi — there are no direct flights to Udaipur from Paris. Air France is a good option; Air India is less premium. Middle Eastern airlines (Emirates, Qatar, Etihad) are excellent too." },
          { icon: "sun", kicker: "Step 3", title: "Once in India", body: "After ~12 hours of travel, try to keep at least half a day to rest and recover from the jetlag — whether you stop in Mumbai/Delhi or fly straight to Udaipur." },
          { icon: "car", kicker: "Step 4", title: "Udaipur airport → venue", body: "Chunda Palace is ~30 min by car from Udaipur airport (UDR). We'll share details for taxis soon — Uber is also available." },
        ],
        teaser: "Want to extend the trip? See \"Travel\" below for suggested itineraries through Rajasthan, Mumbai and Goa.",
        rsvpCta: "Confirm your presence",
      },
    },
    ceremonies: {
      eyebrow: "What does it all mean?",
      title: "A guide to each ritual",
      lead: "Indian weddings are rich with symbolism. Here's a primer so you can follow along — and join in.",
      list: [
        { name: "Ganesh Puja", short: "Blessing the beginning", body: "Lord Ganesh, the remover of obstacles, is invoked at the start of every Hindu celebration. A short prayer marks the auspicious beginning of the festivities. You don't need to do anything — just sit, watch, and absorb the calm energy." },
        { name: "Mehendi", short: "Henna for joy", body: "Intricate henna designs are drawn on the hands and feet of the bride. The deeper the colour, the stronger the love (so the saying goes). Guests can get small designs too — there will be artists ready for you." },
        { name: "Sangeet", short: "Music & dance", body: "Both families perform choreographed dances — sometimes serious, often hilarious. Expect a friendly \"dance-off\" between the bride's and groom's sides. Joining in is encouraged. No skill required." },
        { name: "Haldi", short: "Turmeric blessing", body: "A paste of turmeric, sandalwood and rosewater is applied to the bride and groom. It's said to bless, cleanse and bring a glow to their skin. It's also gloriously messy — wear something you don't mind staining." },
        { name: "Safa Tying", short: "The turban ceremony", body: "Men on the groom's side (and close friends) are wrapped in a colourful safa, or turban. It symbolises honour, pride and identity — and it makes for spectacular photos." },
        { name: "Baraat", short: "The groom's arrival", body: "The groom arrives in a lively procession — sometimes on a horse, sometimes in a decorated car — with a brass band, drums and dancing. The bride's family welcomes him at the gate." },
        { name: "Pheras", short: "Seven circles, seven vows", body: "The couple walks seven times around a sacred fire (Agni), the divine witness. Each circle represents a vow: nourishment, strength, prosperity, wisdom, family, health, and friendship — for seven lifetimes." },
        { name: "Reception", short: "The celebration begins", body: "Cocktails, speeches, music, mingling. Now we eat, dance and tell stories until the early hours." },
      ],
    },
    travel: {
      eyebrow: "Plan your trip",
      title: "Stay a while — see India",
      lead: "You're flying halfway around the world. Take time to explore. These are our favourite cities; tap any pin for what to see and where to stay.",
      tipsTitle: "Travel tips for first-timers",
      tips: [
        { icon: "passport", title: "Visa", body: [
          "European tourists need a Tourist Visa for India.",
          "The e-Visa is the easiest route — apply online, processed in 3–5 days.",
          "Apply here: <a href=\"https://indianvisaonline.gov.in/evisa/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--henna-700); border-bottom: 1px dotted rgba(122,74,33,0.4);\">indianvisaonline.gov.in/evisa</a>",
          "Apply at least 3 weeks before departure to be safe.",
        ] },
        { icon: "calendar", title: "Trip duration", body: [
          "2 days per city is the minimum.",
          "3 days is much better — India rewards slowness.",
        ] },
        { icon: "plane", title: "Flights", body: [
          "Air France flies direct to Mumbai and Delhi.",
          "Avoid Air India if you can.",
          "There's no direct flight to Udaipur — connect via Mumbai or Delhi.",
        ] },
        { icon: "calendar-heart", title: "Wedding timing", body: [
          "Arrive at least one day early (16th or 17th September) to recover from jet lag.",
          "Starting the trip with the wedding is a great way to dive straight into the culture.",
        ] },
        { icon: "leaf", title: "Clothing", body: [
          "Dress modestly — nothing too exposed.",
          "Comfortable cotton summer clothes to survive the humidity.",
          "Loose, breathable fabrics are your friend.",
        ] },
        { icon: "leaf", title: "Health", body: [
          "Start probiotics a week before.",
          "Drink only bottled water — never tap, never carafes.",
          "Bring noise-cancelling headphones if cities overwhelm you.",
        ] },
        { icon: "phone", title: "SIM / Data", body: [
          "Use an eSIM provider like <a href=\"https://airalo.com\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--henna-700); border-bottom: 1px dotted rgba(122,74,33,0.4);\">Airalo</a> — instant activation, no physical SIM swap.",
          "Most hotels also have decent Wi-Fi, but mobile data makes everything easier.",
        ] },
        { icon: "wallet", title: "Money", body: [
          "Cards and Google Pay work everywhere formal.",
          "Carry cash (Indian Rupee, INR) for markets, tuk-tuks and small vendors.",
        ] },
        { icon: "luxury", title: "Luxury is affordable", body: [
          "India offers exceptional luxury at a fraction of European prices.",
          "Treat yourself — stay somewhere unforgettable.",
        ] },
      ],
      whatToDo: "What to do",
      whereToStay: "Where to stay",
      whereToEat: "Where to eat",
      whereToShop: "Where to shop",
      more: "More",
    },
    cities: [
      { name: "Udaipur", x: 30, y: 38, vibe: "Romantic, serene, dreamy", role: "wedding", tag: "Wedding city",
        photos: [
          { src: "/udaipur-lake-view.jpg", caption: "Lake Pichola" },
          { src: "/udaipur-jag-mandir.jpg", caption: "Jag Mandir" },
          { src: "/udaipur-sunset-boat.jpg", caption: "Golden hour" },
        ],
        todo: ["Take a boat ride on Lake Pichola", "Wander through the City Palace", "Sunset from a rooftop cafe", "Visit Jag Mandir island", "See miniature paintings — a speciality of this area"],
        stay: [
          { name: "Kankarwa Haveli", url: "https://www.kankarwahaveli.com/" },
          { name: "Many beautiful 5-star properties on Booking.com", url: "https://www.booking.com/city/in/udaipur.html" },
        ],
      },
      { name: "Jaipur", x: 36, y: 30, vibe: "Royal, vibrant, full of heritage charm",
        photos: [
          { src: "/jaipur-hawa-mahal.jpg", caption: "Hawa Mahal" },
          { src: "/jaipur-amber-fort.jpg", caption: "Amber Fort" },
          { src: "/jaipur-city-palace.jpg", caption: "City Palace" },
        ],
        todo: ["Explore Amber Fort and its grand architecture", "Walk past the iconic Hawa Mahal", "Shop the colourful bazaars (Johari & Bapu Bazaar)", "Visit City Palace & learn royal history"],
        stay: [
          { name: "The Johri", url: "https://www.thejohrijaipur.com/suites/" },
          { name: "Villa Palladio", url: "https://www.villa-palladio-jaipur.com/en/rooms-and-suite" },
          { name: "Jai Mahal Palace", url: "https://www.myboutiquehotel.com/en/boutique-hotels-jaipur/taj-jai-mahal-palace.html" },
          { name: "Alsisar Haveli", url: "https://www.myboutiquehotel.com/en/boutique-hotels-jaipur/alsisar-haveli-heritage-hotel.html" },
        ],
        shop: [
          { name: "Anokhi", url: "https://www.anokhi.com/" },
          { name: "Bapu Bazar", url: "" },
        ],
      },
      { name: "Jodhpur", x: 22, y: 32, vibe: "Rustic, bold, historic with desert energy",
        photos: [
          { src: "/jodhpur-blue-city.jpg", caption: "Blue City" },
          { src: "/jodhpur-blue-street.jpg", caption: "Old lanes" },
          { src: "/jodhpur-fort-sunset.jpg", caption: "Mehrangarh" },
        ],
        todo: ["Explore Mehrangarh Fort (epic views!)", "Walk through the blue old city lanes", "Visit Umaid Bhawan Palace", "Try local Rajasthani food"],
        stay: [
          { name: "Daspan House", url: "https://www.daspanhouse.com/" },
          { name: "RAAS Jodhpur", url: "https://raashotels.com/raas-jodhpur/" },
          { name: "Umaid Bhawan Palace", url: "https://www.tajhotels.com/en-in/hotels/umaid-bhawan-palace-jodhpur" },
        ],
      },
      { name: "Mumbai", x: 34, y: 58, vibe: "Fast-paced, energetic, chaotic but exciting — India's financial capital",
        photos: [
          { src: "/mumbai-gateway.jpg", caption: "Gateway of India" },
          { src: "/mumbai-victoria.jpg", caption: "Victoria Terminus" },
        ],
        todo: ["Stay in Colaba — explore Art Deco & British-era architecture", "Walk along Marine Drive at sunset", "Visit the Gateway of India & Victoria Terminus", "Explore cafes, nightlife & shopping in Colaba Causeway"],
        stay: [
          { name: "Taj Mahal Palace", url: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai" },
          { name: "Abode Boutique Hotel", url: "https://www.abodeboutiquehotels.com/abode-bombay.php" },
        ],
        eat: [
          { name: "Bombay Canteen — fusion Indian, great cocktails", url: "https://maps.app.goo.gl/nB81aEreKrbsA9wq9" },
          { name: "Boojee Cafe — coffee & food", url: "https://maps.app.goo.gl/xfmUcoMjDbGxNJx6A" },
        ],
      },
      { name: "Goa", x: 38, y: 70, vibe: "Chill, beachy, carefree (with a party side)",
        photos: [
          { src: "/goa-palm-beach.jpg", caption: "Palm beach" },
          { src: "/goa-beach-bar.jpg", caption: "Sunset bar" },
          { src: "/goa-basilica.jpg", caption: "Old Goa" },
        ],
        todo: ["Beaches: Mandrem, Siolim, Calangute", "Nightlife & beach parties", "Visit Old Goa churches — explore Portuguese architecture"],
      },
      { name: "Kerala", x: 43, y: 90, vibe: "Calm, lush, slow-paced — backwaters & palms",
        photos: [
          { src: "/kerala-houseboat.jpg", caption: "Houseboat" },
          { src: "/kerala-backwaters.jpg", caption: "Backwaters" },
        ],
        todo: ["Stay on a houseboat in Alleppey", "Cruise palm-lined canals", "Visit tea plantations in Munnar", "Authentic Kerala cuisine"],
      },
    ],
    hotels: { eyebrow: "Where to stay", title: "Hotels & accommodations", lead: "We've blocked rooms at the wedding venue and a few alternates nearby. Reach out before booking — we may have group rates." },
    dressCode: {
      eyebrow: "Wear with joy",
      title: "Dress Code",
      lead: "The wedding unfolds across two days, in two palettes. We'd be delighted if you wore Indian attire — but an elegant Western outfit in the color of the day is equally welcome. What matters most is your presence.",
      shopTitle: "Where to shop in India",
      shopBody: "Most cities have markets where you can buy beautiful Indian outfits at every budget. We can connect you with our families for recommendations once you arrive.",
    },
    registry: { eyebrow: "A note on gifts", title: "Your presence is the gift", body: "Truly. You've already crossed an ocean for us — that's more than we could ask. If you'd still like to mark the occasion, we're saving for our honeymoon and a small fund for our future home.", honeymoon: "Honeymoon fund", home: "Home fund" },
    rsvp: {
      eyebrow: "Will you join us?",
      title: "Please RSVP",
      lead: "Kindly respond by 1 June 2026 so we can finalise arrangements. Questions? Email us — we read every message.",
      name: "Full name",
      email: "Email",
      attending: "Will you attend?",
      yes: "Joyfully accepts",
      no: "Regretfully declines",
      arrivalIndia: "Arrival in India",
      arrivalCity: "Arrival city (e.g. Mumbai)",
      arrivalIndiaDate: "Date & time of arrival",
      arrivalUdaipur: "Arrival in Udaipur",
      arrivalUdaipurDate: "Date & time of arrival in Udaipur",
      departure: "Departure from Udaipur",
      departureCity: "Onward city (where you fly next)",
      departureDate: "Date & time of departure from Udaipur",
      diet: "Dietary requirements",
      dietPlaceholder: "Vegetarian, allergies, anything we should know...",
      whatsapp: "WhatsApp number",
      whatsappPlaceholder: "+33 6 ... (our wedding planner will reach out)",
      extra: "Anything else we should know?",
      extraPlaceholder: "Travelling with kids, mobility needs, surprises planned, anything...",
      submit: "Send RSVP",
      sending: "Sending…",
      errorMsg: "Something went wrong — please try again or reach out to us directly.",
      success: "Thank you!",
      successBody: "Your RSVP has been received. We can't wait to see you in Udaipur.",
    },
    faq: {
      eyebrow: "Good to know",
      title: "Frequently asked questions",
      items: [
        { q: "Do I need a visa to enter India?", a: "Yes. French citizens can apply for an e-Visa online — it usually takes 3-5 days. Apply at indianvisaonline.gov.in. We recommend applying at least a month before your trip." },
        { q: "When should I arrive?", a: "Arrive in Udaipur by the afternoon of 17 September at the latest. We recommend arriving 1-2 days early to recover from the journey and adjust to the time zone." },
        { q: "What's the weather like in September?", a: "Late September in Udaipur is warm and pleasant — around 25-32 C during the day, cooler in the evenings. The monsoon is winding down, so expect lush greenery and the occasional shower." },
        { q: "What about the food — is it all spicy?", a: "Indian food has a huge range. We'll make sure there are mild, vegetarian and meat options at every meal. Tell us about allergies in your RSVP." },
        { q: "Can I bring a plus-one?", a: "Each invitation specifies whether a plus-one is included. If you're unsure, just ask us." },
        { q: "What language will the ceremony be in?", a: "The Hindu rituals are in Sanskrit. We'll have a printed guide (in English & French) explaining what's happening at each moment." },
        { q: "How do I get internet / data in India?", a: "The easiest option is an eSIM — we recommend Airalo (airalo.com) for a quick India data plan you can install before you fly. Holafly and Nomad work too. Activate it as soon as you land. Most hotels also have decent Wi-Fi, but having mobile data makes taxis, maps and WhatsApp so much easier." },
      ],
    },
    gallery: { eyebrow: "Moments", title: "Some of us, together", lead: "A few favourites from the past few years. Tap any image to enlarge." },
    footer: { tagline: "We can't wait to celebrate with you.", with: "With love," },
  },
  fr: {
    nav: { story: "Notre Histoire", itinerary: "Programme", ceremonies: "Ceremonies", travel: "Voyage", stay: "Hebergement", dressCode: "Dress Code", faq: "FAQ", rsvp: "RSVP" },
    hero: {
      eyebrow: "Nous nous marions",
      and: "&",
      saveTheDate: "Reservez la date",
      date: "18 — 20 Septembre 2026",
      location: "Chunda Palace · Udaipur, Inde",
      cta: "Confirmer ma venue",
      ctaSecondary: "Voir le programme",
    },
    countdown: { days: "Jours", hours: "Heures", minutes: "Minutes", seconds: "Secondes" },
    story: {
      eyebrow: "Notre Histoire",
      title: "Deux cultures, un seul amour",
      lead: "D'une rencontre fortuite a une vie entiere — voici comment nous en sommes arrives la.",
      chapters: [
        { year: "2020", title: "Premiere rencontre", body: "Nantes, des amis communs, et cette fameuse soiree ou personne n'avait prevu qu'il se passerait quelque chose. Personne sauf nous deux, peut-etre." },
        { year: "2021", title: "Le confinement, version startup garage", body: "On a passe l'annee entre le campus de l'Ecole des Mines et l'appartement de Joseph — officiellement un startup garage, officieusement notre QG. Le meme ete, Joseph debarque pour la premiere fois en Inde : Bombay, la famille et les amis de Sham, et un bapteme du feu cote epices." },
        { year: "2022", title: "Cap sur Paris", body: "Sham decroche son CDI en cabinet de conseil, Joseph installe Loyoly (Wiink a l'epoque) a Station F, dans l'incubateur d'HEC. Deux appartements, deux trajets, et beaucoup trop de tu dors chez qui ce soir ?." },
        { year: "2023", title: "Un seul toit", body: "On finit par trancher : un seul appart, a Paris, a deux. Le debat sur la temperature du chauffage, lui, n'est toujours pas tranche." },
        { year: "2026", title: "La demande, sous les aurores", body: "En mars, a Tromso, sous les aurores boreales. La question a (enfin) ete posee. La reponse n'a pas traine." },
        { year: "Aujourd'hui", title: "", body: "Quelques escargots, beaucoup trop de bubble teas, 6 voyages en Inde et 7 pays decouverts ensemble plus tard — on celebre notre mariage avec vous." },
      ],
    },
    itinerary: {
      eyebrow: "La Celebration",
      title: "Trois jours de joie",
      lead: "Un mariage indien, c'est une suite de petits rituels — chacun un chapitre. Voici a quoi s'attendre, jour apres jour.",
      day1: { date: "Vendredi 18 septembre", title: "Mehendi & Sangeet", subtitle: "Arrivee, henne, musique & danse" },
      day2: { date: "Samedi 19 septembre", title: "Jour du mariage", subtitle: "Haldi, baraat, pheras & reception" },
      day3: { date: "Dimanche 20 septembre", title: "Petit-dejeuner d'au revoir", subtitle: "Un adieu en douceur au bord du lac" },
      events: [
        { day: 1, time: "Apres-midi", title: "Arrivee & check-in", body: "Check-in a partir de 12h. Le dejeuner est prevu — installez-vous, mangez au bord du lac, allez nager. En option : une derniere repetition de danse pour ce soir.", icon: "luggage" },
        { day: 1, time: "17h00", title: "Ganesh Puja", body: "Une courte priere hindoue pour benir le debut des festivites.", icon: "flame" },
        { day: 1, time: "17h30", title: "Ceremonie du Mehendi", body: "Des dessins au henne sont appliques sur les mains et les pieds de la mariee et de toutes les femmes.", icon: "leaf" },
        { day: 1, time: "19h30", title: "Sangeet Sundowner", body: "Musique, danse et un duel amical entre les deux familles. Cocktails sous les etoiles.", icon: "music" },
        { day: 2, time: "Matin", title: "Petit-dejeuner & repos", body: "Un demarrage tranquille avant que les choses serieuses commencent.", icon: "sun" },
        { day: 2, time: "Midi", title: "Haldi", body: "On applique une pate de curcuma sur les maries pour les embellir et les preparer pour le jour du mariage — joyeux, un peu salissant, plein de rires.", icon: "drop" },
        { day: 2, time: "15h00", title: "Ceremonie du Safa", body: "Les hommes du cote du marie portent un turban — symbole d'honneur et de fete.", icon: "crown" },
        { day: 2, time: "16h00", title: "Baraat", body: "La famille et les amis du marie arrivent au lieu du mariage avec musique, danses et tambours.", icon: "drum" },
        { day: 2, time: "17h30", title: "Pheras", body: "La ceremonie autour du feu sacre — sept tours, sept voeux.", icon: "fire" },
        { day: 2, time: "Soiree", title: "Reception", body: "Cocktails, discours, musique. La premiere soiree du reste de notre vie.", icon: "stars" },
        { day: 3, time: "10h00", title: "Petit-dejeuner tranquille", body: "Un petit-dejeuner tranquille au bord de la piscine pour prolonger la fete et se dire a bientot. Pas de dress code.", icon: "sun" },
        { day: 3, time: "Apres-midi", title: "Departs", body: "Check-out a 11h.", icon: "luggage" },
      ],
      gettingThere: {
        title: "Comment venir",
        lead: "Quelques infos pratiques pour preparer votre voyage. Une section dediee plus bas detaille les itineraires possibles autour du mariage.",
        cards: [
          { icon: "passport", kicker: "Etape 1", title: "Demander son visa", body: "Tous les ressortissants etrangers ont besoin d'un visa pour entrer en Inde. Le plus simple est l'e-Visa : demande en ligne sur indianvisaonline.gov.in, delivre en 3-5 jours. On recommande de faire la demande au moins 3 semaines avant le depart pour etre tranquille." },
          { icon: "plane", kicker: "Etape 2", title: "Voler jusqu'en Inde", body: "La plupart des invites internationaux atterrissent a Bombay ou Delhi — il n'y a pas de vol direct Paris-Udaipur. Air France est une bonne option ; Air India est moins premium. Les compagnies du Golfe (Emirates, Qatar, Etihad) sont excellentes aussi." },
          { icon: "sun", kicker: "Etape 3", title: "Une fois en Inde", body: "Apres ~12 heures de voyage, gardez au moins une demi-journee pour vous reposer et recuperer du jetlag — que vous fassiez une halte a Bombay/Delhi ou que vous filiez directement a Udaipur." },
          { icon: "car", kicker: "Etape 4", title: "Aeroport d'Udaipur → le palais", body: "Chunda Palace est a ~30 min en voiture de l'aeroport d'Udaipur (UDR). Nous partagerons bientot des contacts de taxis — Uber est aussi disponible." },
        ],
        teaser: "Envie d'allonger le voyage ? La section Voyage plus bas propose des itineraires a travers le Rajasthan, Bombay et Goa.",
        rsvpCta: "Confirmer ma venue",
      },
    },
    ceremonies: {
      eyebrow: "Que signifie tout cela ?",
      title: "Guide de chaque rituel",
      lead: "Les mariages indiens sont riches en symboles. Voici un petit guide pour suivre — et participer.",
      list: [
        { name: "Ganesh Puja", short: "Benir le debut", body: "Ganesh, le dieu qui elimine les obstacles, est invoque au debut de chaque celebration hindoue. Une courte priere marque le debut auspicieux des festivites. Vous n'avez rien a faire — asseyez-vous, observez, et absorbez l'energie calme." },
        { name: "Mehendi", short: "Le henne de la joie", body: "Des motifs au henne sont dessines sur les mains et les pieds de la mariee. Plus la couleur est foncee, plus l'amour est fort (selon la tradition). Les invites peuvent aussi se faire faire de petits motifs — des artistes seront sur place." },
        { name: "Sangeet", short: "Musique & danse", body: "Les deux familles presentent des choregraphies — parfois serieuses, souvent hilarantes. Attendez-vous a un duel de danse entre les deux cotes. Participer est encourage. Aucun talent requis." },
        { name: "Haldi", short: "La benediction du curcuma", body: "Une pate de curcuma, santal et eau de rose est appliquee sur les maries. Elle benit, purifie et fait briller la peau. C'est aussi merveilleusement salissant — portez quelque chose qui ne craint pas." },
        { name: "Safa", short: "La ceremonie du turban", body: "Les hommes du cote du marie (et les amis proches) sont enveloppes d'un safa, ou turban colore. Symbole d'honneur, de fierte et d'identite — et de superbes photos." },
        { name: "Baraat", short: "L'arrivee du marie", body: "Le marie arrive en cortege — parfois a cheval, parfois en voiture decoree — avec fanfare, tambours et danses. La famille de la mariee l'accueille a l'entree." },
        { name: "Pheras", short: "Sept tours, sept voeux", body: "Les maries font sept fois le tour du feu sacre (Agni), temoin divin. Chaque tour represente un voeu : nourriture, force, prosperite, sagesse, famille, sante et amitie — pour sept vies." },
        { name: "Reception", short: "La fete commence", body: "Cocktails, discours, musique, retrouvailles. Maintenant on mange, on danse et on raconte des histoires jusqu'au petit matin." },
      ],
    },
    travel: {
      eyebrow: "Preparez votre voyage",
      title: "Restez un peu — voyez l'Inde",
      lead: "Vous traversez la moitie du monde. Prenez le temps d'explorer. Voici nos villes preferees ; cliquez sur une epingle.",
      tipsTitle: "Conseils pour premiere visite",
      tips: [
        { icon: "passport", title: "Visa", body: [
          "Les voyageurs europeens ont besoin d'un visa touristique pour l'Inde.",
          "L'e-Visa est le plus simple — demande en ligne, delivre en 3-5 jours.",
          "Demande ici : <a href=\"https://indianvisaonline.gov.in/evisa/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--henna-700); border-bottom: 1px dotted rgba(122,74,33,0.4);\">indianvisaonline.gov.in/evisa</a>",
          "Faites la demande au moins 3 semaines avant le depart pour etre tranquille.",
        ] },
        { icon: "calendar", title: "Duree", body: [
          "2 jours par ville, c'est le minimum.",
          "3 jours, c'est bien mieux — l'Inde recompense la lenteur.",
        ] },
        { icon: "plane", title: "Vols", body: [
          "Air France a des vols directs vers Mumbai et Delhi.",
          "Evitez Air India si possible.",
          "Pas de vol direct vers Udaipur — passez par Mumbai ou Delhi.",
        ] },
        { icon: "calendar-heart", title: "Calendrier", body: [
          "Arrivez au moins un jour avant (16 ou 17 septembre) pour recuperer du decalage.",
          "Commencer par le mariage est une belle facon de plonger dans la culture.",
        ] },
        { icon: "leaf", title: "Tenue", body: [
          "Habillez-vous sobrement — rien de trop decouvert.",
          "Vetements d'ete confortables en coton pour survivre a l'humidite.",
          "Matieres amples et respirantes — vos meilleures alliees.",
        ] },
        { icon: "leaf", title: "Sante", body: [
          "Commencez les probiotiques une semaine avant.",
          "Buvez uniquement de l'eau en bouteille — jamais du robinet, jamais en carafe.",
          "Pensez aux ecouteurs antibruit si les villes vous fatiguent.",
        ] },
        { icon: "phone", title: "SIM / Data", body: [
          "Utilisez un fournisseur eSIM comme <a href=\"https://airalo.com\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--henna-700); border-bottom: 1px dotted rgba(122,74,33,0.4);\">Airalo</a> — activation instantanee, pas de carte physique.",
          "Les hotels ont en general du Wi-Fi correct, mais avoir de la data rend tout plus simple.",
        ] },
        { icon: "wallet", title: "Argent", body: [
          "Cartes et Google Pay partout dans les lieux formels.",
          "Gardez du liquide (Roupie indienne, INR) pour les marches, tuk-tuks et petits commercants.",
        ] },
        { icon: "luxury", title: "Le luxe est accessible", body: [
          "L'Inde offre un luxe exceptionnel a une fraction des prix europeens.",
          "Faites-vous plaisir — dormez dans un endroit inoubliable.",
        ] },
      ],
      whatToDo: "Que faire",
      whereToStay: "Ou dormir",
      whereToEat: "Ou manger",
      whereToShop: "Ou acheter",
      more: "Plus",
    },
    cities: [
      { name: "Udaipur", x: 30, y: 38, vibe: "Romantique, sereine, feerique", role: "wedding", tag: "Ville du mariage",
        photos: [
          { src: "/udaipur-lake-view.jpg", caption: "Lac Pichola" },
          { src: "/udaipur-jag-mandir.jpg", caption: "Jag Mandir" },
          { src: "/udaipur-sunset-boat.jpg", caption: "Heure doree" },
        ],
        todo: ["Promenade en bateau sur le lac Pichola", "Flaner dans le City Palace", "Coucher de soleil depuis un cafe perche", "Visiter l'ile de Jag Mandir", "Decouvrir les peintures miniatures — specialite de la region"],
        stay: [
          { name: "Kankarwa Haveli", url: "https://www.kankarwahaveli.com/" },
          { name: "Beaucoup de beaux 5 etoiles sur Booking.com", url: "https://www.booking.com/city/in/udaipur.html" },
        ],
      },
      { name: "Jaipur", x: 36, y: 30, vibe: "Royale, vibrante, pleine de patrimoine",
        photos: [
          { src: "/jaipur-hawa-mahal.jpg", caption: "Hawa Mahal" },
          { src: "/jaipur-amber-fort.jpg", caption: "Fort d'Amber" },
          { src: "/jaipur-city-palace.jpg", caption: "City Palace" },
        ],
        todo: ["Explorer le Fort d'Amber et son architecture", "Admirer le Hawa Mahal", "Faire les bazars colores (Johari & Bapu)", "City Palace et histoire royale"],
        stay: [
          { name: "The Johri", url: "https://www.thejohrijaipur.com/suites/" },
          { name: "Villa Palladio", url: "https://www.villa-palladio-jaipur.com/en/rooms-and-suite" },
          { name: "Jai Mahal Palace", url: "https://www.myboutiquehotel.com/en/boutique-hotels-jaipur/taj-jai-mahal-palace.html" },
          { name: "Alsisar Haveli", url: "https://www.myboutiquehotel.com/en/boutique-hotels-jaipur/alsisar-haveli-heritage-hotel.html" },
        ],
        shop: [
          { name: "Anokhi", url: "https://www.anokhi.com/" },
          { name: "Bapu Bazar", url: "" },
        ],
      },
      { name: "Jodhpur", x: 22, y: 32, vibe: "Brute, audacieuse, energie du desert",
        photos: [
          { src: "/jodhpur-blue-city.jpg", caption: "Ville bleue" },
          { src: "/jodhpur-blue-street.jpg", caption: "Vieilles ruelles" },
          { src: "/jodhpur-fort-sunset.jpg", caption: "Mehrangarh" },
        ],
        todo: ["Fort de Mehrangarh (vues spectaculaires !)", "Ruelles bleues de la vieille ville", "Umaid Bhawan Palace", "Cuisine locale du Rajasthan"],
        stay: [
          { name: "Daspan House", url: "https://www.daspanhouse.com/" },
          { name: "RAAS Jodhpur", url: "https://raashotels.com/raas-jodhpur/" },
          { name: "Umaid Bhawan Palace", url: "https://www.tajhotels.com/en-in/hotels/umaid-bhawan-palace-jodhpur" },
        ],
      },
      { name: "Mumbai", x: 34, y: 58, vibe: "Trepidante, energique, chaotique mais excitante — capitale financiere du pays",
        photos: [
          { src: "/mumbai-gateway.jpg", caption: "Gateway of India" },
          { src: "/mumbai-victoria.jpg", caption: "Victoria Terminus" },
        ],
        todo: ["Loger a Colaba — explorer l'architecture Art deco & britannique", "Marine Drive au coucher du soleil", "Gateway of India & Victoria Terminus", "Cafes, vie nocturne & shopping a Colaba Causeway"],
        stay: [
          { name: "Taj Mahal Palace", url: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai" },
          { name: "Abode Boutique Hotel", url: "https://www.abodeboutiquehotels.com/abode-bombay.php" },
        ],
        eat: [
          { name: "Bombay Canteen — cuisine indienne fusion, super cocktails", url: "https://maps.app.goo.gl/nB81aEreKrbsA9wq9" },
          { name: "Boojee Cafe — cafe & restauration", url: "https://maps.app.goo.gl/xfmUcoMjDbGxNJx6A" },
        ],
      },
      { name: "Goa", x: 38, y: 70, vibe: "Cool, plages, insouciante (et festive)",
        photos: [
          { src: "/goa-palm-beach.jpg", caption: "Plage & cocotiers" },
          { src: "/goa-beach-bar.jpg", caption: "Bar coucher de soleil" },
          { src: "/goa-basilica.jpg", caption: "Old Goa" },
        ],
        todo: ["Plages : Mandrem, Siolim, Calangute", "Vie nocturne & beach parties", "Vieilles eglises de Old Goa — architecture portugaise"],
      },
      { name: "Kerala", x: 43, y: 90, vibe: "Calme, luxuriante — backwaters & palmiers",
        photos: [
          { src: "/kerala-houseboat.jpg", caption: "Houseboat" },
          { src: "/kerala-backwaters.jpg", caption: "Backwaters" },
        ],
        todo: ["Houseboat a Alleppey", "Croisiere sur les canaux", "Visiter les plantations de the a Munnar", "Cuisine authentique du Kerala"],
      },
    ],
    hotels: { eyebrow: "Ou dormir", title: "Hotels & hebergements", lead: "Nous avons reserve des chambres au lieu du mariage et dans quelques alternatives proches. Contactez-nous avant de reserver — nous avons peut-etre des tarifs de groupe." },
    dressCode: {
      eyebrow: "Habillez-vous avec joie",
      title: "Dress Code",
      lead: "Le mariage se vit en deux jours, en deux palettes. Nous serions ravis que vous portiez une tenue indienne — mais une tenue occidentale élégante dans la couleur du jour est tout aussi bienvenue. L'essentiel, c'est votre présence.",
      shopTitle: "Ou acheter en Inde",
      shopBody: "La plupart des villes ont des marches ou trouver de magnifiques tenues indiennes a tous les prix. On peut vous mettre en lien avec nos familles pour des recommandations sur place.",
    },
    registry: { eyebrow: "A propos des cadeaux", title: "Votre presence est le cadeau", body: "Vraiment. Vous avez deja traverse un ocean pour nous — c'est plus que ce qu'on pourrait demander. Si vous tenez a marquer le coup, on epargne pour notre lune de miel et un petit fonds pour notre futur chez-nous.", honeymoon: "Lune de miel", home: "Notre futur chez-nous" },
    rsvp: {
      eyebrow: "Serez-vous des notres ?",
      title: "Merci de repondre",
      lead: "Merci de repondre avant le 1er juin 2026 pour qu'on puisse finaliser. Une question ? Envoyez-nous un mot — on lit tout.",
      name: "Nom complet",
      email: "Email",
      attending: "Serez-vous present(e) ?",
      yes: "Avec joie",
      no: "Avec regret",
      arrivalIndia: "Arrivee en Inde",
      arrivalCity: "Ville d'arrivee (ex. Bombay)",
      arrivalIndiaDate: "Date et heure d'arrivee",
      arrivalUdaipur: "Arrivee a Udaipur",
      arrivalUdaipurDate: "Date et heure d'arrivee a Udaipur",
      departure: "Depart d'Udaipur",
      departureCity: "Ville suivante (ou vous repartez)",
      departureDate: "Date et heure de depart d'Udaipur",
      diet: "Regime alimentaire",
      dietPlaceholder: "Vegetarien, allergies, a savoir...",
      whatsapp: "Numero WhatsApp",
      whatsappPlaceholder: "+33 6 ... (notre wedding planner vous contactera)",
      extra: "Informations complementaires",
      extraPlaceholder: "Enfants, besoins specifiques, surprises prevues, tout ce qu'il faut savoir...",
      submit: "Envoyer",
      sending: "Envoi en cours…",
      errorMsg: "Une erreur est survenue, merci de reessayer ou de nous contacter directement.",
      success: "Merci !",
      successBody: "Votre reponse a bien ete enregistree. Nous avons hate de vous retrouver a Udaipur.",
    },
    faq: {
      eyebrow: "Bon a savoir",
      title: "Questions frequentes",
      items: [
        { q: "Ai-je besoin d'un visa pour l'Inde ?", a: "Oui. Les citoyens francais peuvent demander un e-Visa en ligne — delai habituel : 3-5 jours. Faites-le sur indianvisaonline.gov.in. On recommande de s'y prendre au moins un mois a l'avance." },
        { q: "Quand dois-je arriver ?", a: "A Udaipur au plus tard l'apres-midi du 17 septembre. On recommande d'arriver 1-2 jours plus tot pour recuperer du voyage et s'adapter au decalage." },
        { q: "Quelle meteo en septembre ?", a: "Fin septembre a Udaipur : chaud et agreable — 25-32 C en journee, plus frais le soir. La mousson se termine, donc verdure luxuriante et averses occasionnelles." },
        { q: "Et la nourriture — c'est tout epice ?", a: "La cuisine indienne est tres variee. On veillera a avoir des options douces, vegetariennes et avec viande a chaque repas. Indiquez vos allergies dans le RSVP." },
        { q: "Puis-je venir accompagne(e) ?", a: "Chaque invitation precise si un(e) accompagnant(e) est inclus(e). En cas de doute, demandez-nous." },
        { q: "Dans quelle langue se deroule la ceremonie ?", a: "Les rituels hindous sont en sanskrit. On aura un guide imprime (en anglais et francais) qui explique chaque moment." },
        { q: "Comment avoir Internet / de la data en Inde ?", a: "Le plus simple : une eSIM. On recommande Airalo (airalo.com) pour un forfait data en Inde, installe avant le depart. Holafly et Nomad fonctionnent aussi tres bien. Activez-la des l'atterrissage. Les hotels ont en general du Wi-Fi correct, mais avoir de la data rend les taxis, Maps et WhatsApp beaucoup plus simples." },
      ],
    },
    gallery: { eyebrow: "Moments", title: "Quelques-uns de nous, ensemble", lead: "Quelques preferes des dernieres annees. Cliquez pour agrandir." },
    footer: { tagline: "On a hate de feter ca avec vous.", with: "Avec amour," },
  },
};

export default STRINGS;
