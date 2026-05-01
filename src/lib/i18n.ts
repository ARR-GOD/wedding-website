export type Lang = "en" | "fr";

export interface City {
  name: string;
  x: number;
  y: number;
  vibe: string;
  role?: string;
  tag?: string;
  todo: string[];
  stay?: { name: string; url: string };
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
    events: { day: number; time: string; title: string; body: string; icon: string }[];
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
    tips: { icon: string; title: string; body: string }[];
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
    events: string;
    guests: string;
    diet: string;
    dietPlaceholder: string;
    song: string;
    songPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
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
    nav: {
      story: "Our Story",
      itinerary: "Itinerary",
      ceremonies: "Ceremonies",
      travel: "Travel",
      stay: "Stay",
      dressCode: "Dress Code",
      faq: "FAQ",
      rsvp: "RSVP",
    },
    hero: {
      eyebrow: "We're getting married",
      and: "&",
      saveTheDate: "Save the date",
      date: "18 — 19 September 2026",
      location: "Udaipur · India",
      cta: "RSVP",
      ctaSecondary: "View itinerary",
    },
    countdown: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
    story: {
      eyebrow: "Our Story",
      title: "Two cultures, one love",
      lead: "From a chance meeting to a lifetime — here's how we got here.",
      chapters: [
        { year: "2021", title: "First meeting", body: "We met during a study-abroad summer in Paris. Joseph was sketching at a cafe in Le Marais; Shambhavi sat at the next table sketching the same fountain. We compared drawings — hers was better." },
        { year: "2022", title: "Across continents", body: "A year of late-night calls between Mumbai and Lyon. Shambhavi taught Joseph to roll chapatis over FaceTime. He taught her how to pronounce \"croissant\" properly." },
        { year: "2024", title: "Coming home", body: "We moved in together in Lisbon, somewhere between our two worlds. Got a cat. Named her Pondichery." },
        { year: "2025", title: "The proposal", body: "On the steps of the City Palace in Udaipur, at sunset, with Pondichery watching from a window back home. She said yes before he finished asking." },
      ],
    },
    itinerary: {
      eyebrow: "The Celebration",
      title: "Two days of joy",
      lead: "An Indian wedding is a series of small, beautiful rituals — each one a chapter. Here's what to expect.",
      day1: { date: "Thursday, 18 September", title: "Mehendi & Sangeet", subtitle: "Arrival, henna, music & dance" },
      day2: { date: "Friday, 19 September", title: "Wedding Day", subtitle: "Haldi, baraat, pheras & reception" },
      events: [
        { day: 1, time: "Afternoon", title: "Arrival & check-in", body: "Settle in, have lunch by the lake, take a swim. Optional: a final dance practice for tonight.", icon: "luggage" },
        { day: 1, time: "5:00 PM", title: "Ganesh Puja", body: "A short Hindu prayer to bless the start of the celebrations.", icon: "flame" },
        { day: 1, time: "5:30 PM", title: "Mehendi Ceremony", body: "Henna designs applied to hands and feet — traditionally for women, but everyone is welcome.", icon: "leaf" },
        { day: 1, time: "7:30 PM", title: "Sangeet Sundowner", body: "Music, dance and a friendly dance-off between the two families. Drinks under the stars.", icon: "music" },
        { day: 2, time: "Morning", title: "Breakfast & rest", body: "A slow start to the day before things kick into gear.", icon: "sun" },
        { day: 2, time: "Midday", title: "Haldi", body: "Turmeric paste is applied to the bride and groom — joyful, slightly messy, and full of laughter.", icon: "drop" },
        { day: 2, time: "3:00 PM", title: "Safa Tying", body: "Men from the groom's side wear a turban — a symbol of honour and celebration.", icon: "crown" },
        { day: 2, time: "4:00 PM", title: "Baraat", body: "The groom's procession arrives with music, dancing and drums. Bring your energy.", icon: "drum" },
        { day: 2, time: "5:30 PM", title: "Pheras", body: "The wedding ceremony around a sacred fire — seven circles, seven vows.", icon: "fire" },
        { day: 2, time: "Night", title: "Reception", body: "Cocktails, speeches, music. The first night of the rest of our lives.", icon: "stars" },
      ],
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
        { icon: "calendar", title: "Trip duration", body: "2 days per city is the minimum; 3 days is much better. India rewards slowness." },
        { icon: "plane", title: "Flights", body: "Air France flies direct to Mumbai and Delhi. Avoid Air India if you can. There's no direct flight to Udaipur — connect via Mumbai or Delhi." },
        { icon: "calendar-heart", title: "Wedding timing", body: "Arrive at least one day early (16th or 17th September) to recover from jet lag. Starting the trip with the wedding is a great way to dive straight into the culture." },
        { icon: "leaf", title: "Health", body: "Start probiotics a week before. Drink only bottled water — never tap, never carafes. Bring noise-cancelling headphones if cities overwhelm you." },
        { icon: "wallet", title: "Money", body: "Cards and Google Pay work everywhere formal. Carry cash (Indian Rupee, INR) for markets, tuk-tuks and small vendors." },
        { icon: "luxury", title: "Luxury is affordable", body: "India offers exceptional luxury at a fraction of European prices. Treat yourself — stay somewhere unforgettable." },
      ],
    },
    cities: [
      { name: "Udaipur", x: 30, y: 38, vibe: "Romantic, serene, dreamy", role: "wedding", tag: "Wedding city",
        todo: ["Take a boat ride on Lake Pichola", "Wander through the City Palace", "Sunset from a rooftop cafe", "Visit Jag Mandir island"] },
      { name: "Jaipur", x: 36, y: 30, vibe: "Royal, vibrant, full of heritage charm",
        todo: ["Explore Amber Fort and its grand architecture", "Walk past the iconic Hawa Mahal", "Shop in Johari & Bapu Bazaar", "Visit City Palace & learn royal history"],
        stay: { name: "The Johri", url: "https://www.thejohrijaipur.com/suites/" } },
      { name: "Jodhpur", x: 22, y: 32, vibe: "Rustic, bold, historic with desert energy",
        todo: ["Explore Mehrangarh Fort (epic views!)", "Walk through the blue old city lanes", "Visit Umaid Bhawan Palace", "Try local Rajasthani food"] },
      { name: "Mumbai", x: 30, y: 56, vibe: "Fast-paced, energetic, the country's beating heart",
        todo: ["Walk along Marine Drive at sunset", "Visit Gateway of India & Victoria Terminus", "Explore cafes, nightlife & shopping"] },
      { name: "Goa", x: 31, y: 66, vibe: "Chill, beachy, carefree (with a party side)",
        todo: ["Beaches: Baga, Anjuna, Palolem", "Nightlife & beach parties", "Visit Old Goa churches", "Water sports — parasailing, jet ski"] },
      { name: "Kerala", x: 38, y: 82, vibe: "Calm, lush, slow-paced — backwaters & palms",
        todo: ["Stay on a houseboat in Alleppey", "Cruise palm-lined canals", "Experience local village life", "Authentic Kerala cuisine"] },
    ],
    hotels: {
      eyebrow: "Where to stay",
      title: "Hotels & accommodations",
      lead: "We've blocked rooms at the wedding venue and a few alternates nearby. Reach out before booking — we may have group rates.",
    },
    dressCode: {
      eyebrow: "Wear with joy",
      title: "Dress code guide",
      lead: "Indian celebrations are colourful — guests are encouraged to dress accordingly. Here's a guide for each event.",
      shopTitle: "Where to shop in India",
      shopBody: "Most cities have markets where you can buy beautiful Indian outfits at every budget. We can connect you with our families for recommendations once you arrive.",
    },
    registry: {
      eyebrow: "A note on gifts",
      title: "Your presence is the gift",
      body: "Truly. You've already crossed an ocean for us — that's more than we could ask. If you'd still like to mark the occasion, we're saving for our honeymoon and a small fund for our future home.",
      honeymoon: "Honeymoon fund",
      home: "Home fund",
    },
    rsvp: {
      eyebrow: "Will you join us?",
      title: "Please RSVP",
      lead: "Kindly respond by 1 July 2026 so we can finalise arrangements. Questions? Email us — we read every message.",
      name: "Full name",
      email: "Email",
      attending: "Will you attend?",
      yes: "Joyfully accepts",
      no: "Regretfully declines",
      events: "Which events will you attend?",
      guests: "Number of guests (including you)",
      diet: "Dietary requirements",
      dietPlaceholder: "Vegetarian, allergies, anything we should know...",
      song: "Song you'd like to hear",
      songPlaceholder: "Make it a banger.",
      message: "A note for us",
      messagePlaceholder: "Anything you'd like to share...",
      submit: "Send RSVP",
      success: "Thank you — your RSVP is in.",
      successBody: "We'll be in touch with logistics closer to the date. We can't wait to see you in Udaipur.",
    },
    faq: {
      eyebrow: "Good to know",
      title: "Frequently asked questions",
      items: [
        { q: "Do I need a visa to enter India?", a: "Yes. French citizens can apply for an e-Visa online — it usually takes 3-5 days. Apply at indianvisaonline.gov.in. We recommend applying at least a month before your trip." },
        { q: "When should I arrive?", a: "Arrive in Udaipur by the afternoon of 17 September at the latest. We recommend arriving 1-2 days early to recover from the journey and adjust to the time zone." },
        { q: "What's the weather like in September?", a: "Late September in Udaipur is warm and pleasant — around 25-32 C during the day, cooler in the evenings. The monsoon is winding down, so expect lush greenery and the occasional shower." },
        { q: "Do I need to bring outfits or can I buy them there?", a: "Both work! You can bring something colourful you already own, or buy beautiful Indian outfits in Udaipur, Jaipur or Mumbai for very reasonable prices. We can help with recommendations." },
        { q: "What about the food — is it all spicy?", a: "Indian food has a huge range. We'll make sure there are mild, vegetarian and meat options at every meal. Tell us about allergies in your RSVP." },
        { q: "Can I bring a plus-one?", a: "Each invitation specifies whether a plus-one is included. If you're unsure, just ask us." },
        { q: "Will there be transportation between events?", a: "Yes. All wedding events take place at the same venue, so you can walk between them. For travel before and after, we'll share guidance closer to the date." },
        { q: "Is the wedding kid-friendly?", a: "Children are welcome and will love the music and colour. Please note this in your RSVP so we can plan." },
        { q: "What language will the ceremony be in?", a: "The Hindu rituals are in Sanskrit. We'll have a printed guide (in English & French) explaining what's happening at each moment." },
      ],
    },
    gallery: {
      eyebrow: "Moments",
      title: "Some of us, together",
      lead: "A few favourites from the past few years. Tap any image to enlarge.",
    },
    footer: {
      tagline: "We can't wait to celebrate with you.",
      with: "With love,",
    },
  },
  fr: {
    nav: {
      story: "Notre Histoire",
      itinerary: "Programme",
      ceremonies: "Ceremonies",
      travel: "Voyage",
      stay: "Hebergement",
      dressCode: "Dress Code",
      faq: "FAQ",
      rsvp: "RSVP",
    },
    hero: {
      eyebrow: "Nous nous marions",
      and: "&",
      saveTheDate: "Reservez la date",
      date: "18 — 19 Septembre 2026",
      location: "Udaipur · Inde",
      cta: "RSVP",
      ctaSecondary: "Voir le programme",
    },
    countdown: { days: "Jours", hours: "Heures", minutes: "Minutes", seconds: "Secondes" },
    story: {
      eyebrow: "Notre Histoire",
      title: "Deux cultures, un seul amour",
      lead: "D'une rencontre fortuite a une vie entiere — voici comment nous en sommes arrives la.",
      chapters: [
        { year: "2021", title: "Premiere rencontre", body: "Nous nous sommes rencontres lors d'un ete d'etudes a Paris. Joseph dessinait dans un cafe du Marais ; Shambhavi, a la table d'a cote, dessinait la meme fontaine. On a compare nos croquis — le sien etait meilleur." },
        { year: "2022", title: "Entre deux continents", body: "Une annee d'appels nocturnes entre Mumbai et Lyon. Shambhavi a appris a Joseph a rouler des chapatis en FaceTime. Lui, a elle, a prononcer croissant correctement." },
        { year: "2024", title: "Le retour a la maison", body: "Nous avons emmenage ensemble a Lisbonne, a mi-chemin entre nos deux mondes. On a adopte un chat. On l'a appele Pondichery." },
        { year: "2025", title: "La demande", body: "Sur les marches du City Palace a Udaipur, au coucher du soleil, avec Pondichery qui regardait par la fenetre a la maison. Elle a dit oui avant qu'il finisse de demander." },
      ],
    },
    itinerary: {
      eyebrow: "La Celebration",
      title: "Deux jours de joie",
      lead: "Un mariage indien, c'est une suite de petits rituels — chacun un chapitre. Voici a quoi s'attendre.",
      day1: { date: "Jeudi 18 septembre", title: "Mehendi & Sangeet", subtitle: "Arrivee, henne, musique & danse" },
      day2: { date: "Vendredi 19 septembre", title: "Jour du mariage", subtitle: "Haldi, baraat, pheras & reception" },
      events: [
        { day: 1, time: "Apres-midi", title: "Arrivee & check-in", body: "Installez-vous, dejeunez au bord du lac, allez nager. En option : une derniere repetition de danse pour ce soir.", icon: "luggage" },
        { day: 1, time: "17h00", title: "Ganesh Puja", body: "Une courte priere hindoue pour benir le debut des festivites.", icon: "flame" },
        { day: 1, time: "17h30", title: "Ceremonie du Mehendi", body: "Dessins au henne sur les mains et les pieds — traditionnellement pour les femmes, mais tout le monde est bienvenu.", icon: "leaf" },
        { day: 1, time: "19h30", title: "Sangeet Sundowner", body: "Musique, danse et un duel amical entre les deux familles. Cocktails sous les etoiles.", icon: "music" },
        { day: 2, time: "Matin", title: "Petit-dejeuner & repos", body: "Un demarrage tranquille avant que les choses serieuses commencent.", icon: "sun" },
        { day: 2, time: "Midi", title: "Haldi", body: "On applique une pate de curcuma sur les maries — joyeux, un peu salissant, plein de rires.", icon: "drop" },
        { day: 2, time: "15h00", title: "Ceremonie du Safa", body: "Les hommes du cote du marie portent un turban — symbole d'honneur et de fete.", icon: "crown" },
        { day: 2, time: "16h00", title: "Baraat", body: "Le cortege du marie arrive avec musique, danses et tambours. Apportez votre energie.", icon: "drum" },
        { day: 2, time: "17h30", title: "Pheras", body: "La ceremonie autour du feu sacre — sept tours, sept voeux.", icon: "fire" },
        { day: 2, time: "Soiree", title: "Reception", body: "Cocktails, discours, musique. La premiere soiree du reste de notre vie.", icon: "stars" },
      ],
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
        { icon: "calendar", title: "Duree", body: "2 jours par ville, c'est le minimum ; 3 jours, c'est bien mieux. L'Inde recompense la lenteur." },
        { icon: "plane", title: "Vols", body: "Air France a des vols directs vers Mumbai et Delhi. Evitez Air India si possible. Pas de vol direct vers Udaipur — passez par Mumbai ou Delhi." },
        { icon: "calendar-heart", title: "Calendrier", body: "Arrivez au moins un jour avant (16 ou 17 septembre) pour recuperer du decalage. Commencer par le mariage est une belle facon de plonger dans la culture." },
        { icon: "leaf", title: "Sante", body: "Commencez les probiotiques une semaine avant. Buvez uniquement de l'eau en bouteille — jamais du robinet, jamais en carafe. Pensez aux ecouteurs antibruit si les villes vous fatiguent." },
        { icon: "wallet", title: "Argent", body: "Cartes et Google Pay partout dans les lieux formels. Gardez du liquide (Roupie indienne, INR) pour les marches, tuk-tuks et petits commercants." },
        { icon: "luxury", title: "Le luxe est accessible", body: "L'Inde offre un luxe exceptionnel a une fraction des prix europeens. Faites-vous plaisir — dormez dans un endroit inoubliable." },
      ],
    },
    cities: [
      { name: "Udaipur", x: 30, y: 38, vibe: "Romantique, sereine, feerique", role: "wedding", tag: "Ville du mariage",
        todo: ["Promenade en bateau sur le lac Pichola", "Flaner dans le City Palace", "Coucher de soleil depuis un cafe perche", "Visiter l'ile de Jag Mandir"] },
      { name: "Jaipur", x: 36, y: 30, vibe: "Royale, vibrante, pleine de patrimoine",
        todo: ["Explorer le Fort d'Amber et son architecture", "Admirer le Hawa Mahal", "Faire les bazars Johari et Bapu", "City Palace et histoire royale"],
        stay: { name: "The Johri", url: "https://www.thejohrijaipur.com/suites/" } },
      { name: "Jodhpur", x: 22, y: 32, vibe: "Brute, audacieuse, energie du desert",
        todo: ["Fort de Mehrangarh (vues spectaculaires !)", "Ruelles bleues de la vieille ville", "Umaid Bhawan Palace", "Cuisine locale du Rajasthan"] },
      { name: "Mumbai", x: 30, y: 56, vibe: "Trepidante, energique, le coeur du pays",
        todo: ["Marine Drive au coucher du soleil", "Gateway of India & Victoria Terminus", "Cafes, vie nocturne & shopping"] },
      { name: "Goa", x: 31, y: 66, vibe: "Cool, plages, insouciante (et festive)",
        todo: ["Plages : Baga, Anjuna, Palolem", "Vie nocturne & beach parties", "Vieilles eglises de Old Goa", "Sports nautiques — parachute, jet ski"] },
      { name: "Kerala", x: 38, y: 82, vibe: "Calme, luxuriante — backwaters & palmiers",
        todo: ["Houseboat a Alleppey", "Croisiere sur les canaux", "Vie de village local", "Cuisine authentique du Kerala"] },
    ],
    hotels: {
      eyebrow: "Ou dormir",
      title: "Hotels & hebergements",
      lead: "Nous avons reserve des chambres au lieu du mariage et dans quelques alternatives proches. Contactez-nous avant de reserver — nous avons peut-etre des tarifs de groupe.",
    },
    dressCode: {
      eyebrow: "Habillez-vous avec joie",
      title: "Guide vestimentaire",
      lead: "Les celebrations indiennes sont colorees — les invites sont encourages a s'habiller en consequence. Voici un guide pour chaque evenement.",
      shopTitle: "Ou acheter en Inde",
      shopBody: "La plupart des villes ont des marches ou trouver de magnifiques tenues indiennes a tous les prix. On peut vous mettre en lien avec nos familles pour des recommandations sur place.",
    },
    registry: {
      eyebrow: "A propos des cadeaux",
      title: "Votre presence est le cadeau",
      body: "Vraiment. Vous avez deja traverse un ocean pour nous — c'est plus que ce qu'on pourrait demander. Si vous tenez a marquer le coup, on epargne pour notre lune de miel et un petit fonds pour notre futur chez-nous.",
      honeymoon: "Lune de miel",
      home: "Notre futur chez-nous",
    },
    rsvp: {
      eyebrow: "Serez-vous des notres ?",
      title: "Merci de repondre",
      lead: "Merci de repondre avant le 1er juillet 2026 pour qu'on puisse finaliser. Une question ? Envoyez-nous un mot — on lit tout.",
      name: "Nom complet",
      email: "Email",
      attending: "Serez-vous present(e) ?",
      yes: "Avec joie",
      no: "Avec regret",
      events: "A quels evenements ?",
      guests: "Nombre de personnes (vous compris)",
      diet: "Regime alimentaire",
      dietPlaceholder: "Vegetarien, allergies, a savoir...",
      song: "Une chanson a passer",
      songPlaceholder: "Choisissez bien.",
      message: "Un mot pour nous",
      messagePlaceholder: "Tout ce que vous voulez nous dire...",
      submit: "Envoyer",
      success: "Merci — votre RSVP est bien arrive.",
      successBody: "On reviendra vers vous avec la logistique avant la date. On a hate de vous voir a Udaipur.",
    },
    faq: {
      eyebrow: "Bon a savoir",
      title: "Questions frequentes",
      items: [
        { q: "Ai-je besoin d'un visa pour l'Inde ?", a: "Oui. Les citoyens francais peuvent demander un e-Visa en ligne — delai habituel : 3-5 jours. Faites-le sur indianvisaonline.gov.in. On recommande de s'y prendre au moins un mois a l'avance." },
        { q: "Quand dois-je arriver ?", a: "A Udaipur au plus tard l'apres-midi du 17 septembre. On recommande d'arriver 1-2 jours plus tot pour recuperer du voyage et s'adapter au decalage." },
        { q: "Quelle meteo en septembre ?", a: "Fin septembre a Udaipur : chaud et agreable — 25-32 C en journee, plus frais le soir. La mousson se termine, donc verdure luxuriante et averses occasionnelles." },
        { q: "Dois-je apporter des tenues ou les acheter sur place ?", a: "Les deux marchent ! Apportez quelque chose de colore que vous avez deja, ou achetez de magnifiques tenues indiennes a Udaipur, Jaipur ou Mumbai a des prix tres raisonnables." },
        { q: "Et la nourriture — c'est tout epice ?", a: "La cuisine indienne est tres variee. On veillera a avoir des options douces, vegetariennes et avec viande a chaque repas. Indiquez vos allergies dans le RSVP." },
        { q: "Puis-je venir accompagne(e) ?", a: "Chaque invitation precise si un(e) accompagnant(e) est inclus(e). En cas de doute, demandez-nous." },
        { q: "Y aura-t-il des transports entre les evenements ?", a: "Oui. Tous les evenements ont lieu sur le meme site, donc a pied. Pour le reste, on partagera des infos plus pres de la date." },
        { q: "Le mariage est-il adapte aux enfants ?", a: "Les enfants sont bienvenus et adoreront la musique et les couleurs. Mentionnez-le dans votre RSVP pour qu'on puisse organiser." },
        { q: "Dans quelle langue se deroule la ceremonie ?", a: "Les rituels hindous sont en sanskrit. On aura un guide imprime (en anglais et francais) qui explique chaque moment." },
      ],
    },
    gallery: {
      eyebrow: "Moments",
      title: "Quelques-uns de nous, ensemble",
      lead: "Quelques preferes des dernieres annees. Cliquez pour agrandir.",
    },
    footer: {
      tagline: "On a hate de feter ca avec vous.",
      with: "Avec amour,",
    },
  },
};

export default STRINGS;
