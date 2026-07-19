export interface Service {
  name: string;
  description: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  priceDisplay: string;
  stripePriceId: string;
}

export interface Business {
  name: string;
  tagline: string;
  heroSubhead: string;
  services: Service[];
  founderStory: string[];
  trustPoints: string[];
  contactFormEmbedUrl: string;
  currency: string;
  packages: Package[];
}

export const business: Business = {
  name: "Reliable Senior Home Care",
  tagline: "Reliable Support for Seniors at Home",
  heroSubhead:
    "Support that feels like family — dependable, warm, and thoughtfully matched to your loved one's needs and culture.",

  services: [
    {
      name: "Culturally Matched Companionship",
      description:
        "We offer consistent, one-on-one visits filled with friendly conversation, walks, games, or quiet presence. Whenever possible, we match seniors with someone who understands their language and cultural background — because true comfort starts with feeling understood.",
    },
    {
      name: "Errands & Light Household Help",
      description:
        "We assist with grocery runs, picking up medications, light tidying, laundry, and more — making day-to-day living easier and more comfortable for seniors who want to stay independent.",
    },
    {
      name: "Tech Help & Online Safety",
      description:
        "We support seniors with using phones, tablets, and computers — from making video calls to setting reminders and viewing family photos. We also offer gentle guidance on online safety, helping them avoid scams, confusing links, and common tech frustrations — so they can stay connected with confidence.",
    },
    {
      name: "Help with Small Fixes Around the Home",
      description:
        "We support with minor household tasks like changing light bulbs, tightening handles, organizing shelves, or adjusting furniture — making the home safer, more comfortable, and cared for.",
    },
    {
      name: "Dementia-Safe Engagement",
      description:
        "We offer gentle, familiar routines and activities that are safe and soothing for seniors living with memory changes — delivered with patience, consistency, and kindness.",
    },
    {
      name: "Post-Hospital Recovery Support",
      description:
        "We help seniors settle safely back home after a hospital stay by supporting daily routines, nutrition, safety check-ins, and peace of mind for the family during recovery.",
    },
  ],

  founderStory: [
    "For us, supporting seniors isn't just a service — it's personal. As the founder, I'm an immigrant with elderly family living far away. While I stay closely connected to them from afar, I know how hard it is not to be there physically. That's what inspired me to create something meaningful here — a way to give other families the kind of care I'd want for my own.",
    "We believe every senior deserves comfort, independence, and joyful moments in the place they call home. A familiar face, a safe routine, a kind voice — these simple things can make all the difference. That's why we do what we do.",
  ],

  trustPoints: [
    "Consistent, familiar caregivers — not rotating strangers",
    "Weekly check-ins so you're never in the dark",
    "Cultural understanding and language alignment",
    "Personally selected helpers, with criminal background checks",
    "No long-term commitment — try us with 3–5 visit packages",
  ],

  contactFormEmbedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdMMD57vyS4ESG_oYhAOgjNVpvkUUpQjSf5_VKkC2cqTaR3fQ/viewform?embedded=true",

  currency: "usd",

  // TODO: replace stripePriceId values with real Stripe Price IDs once the
  // Stripe account and products are set up (see tasks.md task group 1).
  packages: [
    {
      id: "single-visit",
      name: "Single Visit",
      description: "Try us out with one visit — no commitment.",
      priceDisplay: "$60",
      stripePriceId: "price_REPLACE_SINGLE_VISIT",
    },
    {
      id: "three-visit",
      name: "3-Visit Package",
      description: "Three visits, scheduled around your family's needs.",
      priceDisplay: "$165",
      stripePriceId: "price_REPLACE_THREE_VISIT",
    },
    {
      id: "five-visit",
      name: "5-Visit Package",
      description: "Five visits — our most popular starting package.",
      priceDisplay: "$260",
      stripePriceId: "price_REPLACE_FIVE_VISIT",
    },
  ],
};
