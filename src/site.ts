// Central business data (NAP — name, address, phone) used by both the
// contact section and the structured data / SEO metadata, so the two never
// drift apart.

export const SITE = {
  name: "Michael Dever & Associates",
  url: "https://michael-dever.com",
  email: "contact@michael-dever.com",
  linkedin: "https://www.linkedin.com/in/michaeldever/",
  // 20th anniversary in 2026 → founded 2006.
  foundingDate: "2006",
  founder: "Michael Dever",
} as const;

export interface Phone {
  display: string;
  href: string;
}

export const PHONES: Record<"geneva" | "charmey" | "mobile", Phone> = {
  geneva: { display: "+41 22 731 20 40", href: "tel:+41227312040" },
  charmey: { display: "+41 26 927 26 65", href: "tel:+41269272665" },
  mobile: { display: "+41 76 394 06 30", href: "tel:+41763940630" },
};

export interface Office {
  key: "geneva" | "charmey";
  locality: string;
  region: string;
  geo: { lat: number; lng: number };
  phone: Phone;
}

// City-level coordinates (no street address published).
export const OFFICES: Office[] = [
  {
    key: "geneva",
    locality: "Genève",
    region: "Genève",
    geo: { lat: 46.2044, lng: 6.1432 },
    phone: PHONES.geneva,
  },
  {
    key: "charmey",
    locality: "Charmey",
    region: "Fribourg",
    geo: { lat: 46.6186, lng: 7.1606 },
    phone: PHONES.charmey,
  },
];

// Languages the firm works in (BCP-47).
export const KNOWS_LANGUAGE = ["en", "fr", "de"] as const;
