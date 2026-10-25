export const contact = {
  phoneDisplay: "+880 1673-630006",
  phoneShort: "01673-630006",
  phoneTel: "+8801673630006",
  email: "fastengineering08@gmail.com",
  addressBold: "House 29, Flat F1, Katasur",
  addressRest: "Mohammadpur, Dhaka-1207, Bangladesh",
  addressShort: "House 29, Katasur, Mohammadpur, Dhaka-1207",
  facebookUrl: "https://www.facebook.com/firstengineeringsolutions",
  facebookHandle: "@firstengineeringsolutions",
  alphaFacebookUrl:
    "https://www.facebook.com/people/Alpha-Interior/100088429072640/",
};

export interface Service {
  title: string;
  description: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    title: "Architecture & Structural Design",
    description:
      "Building design backed by structural engineering, so residential projects stand safe and are planned properly from the ground up.",
    bullets: [
      "Residential building design",
      "Structural engineering",
      "Space planning & layouts",
    ],
  },
  {
    title: "Home Interior Design",
    description:
      "Complete home interiors for flats and houses — living rooms, bedrooms and kitchens designed around your family and your daily life.",
    bullets: [
      "Living & dining spaces",
      "Bedrooms & kitchens",
      "Full-flat interior packages",
    ],
  },
  {
    title: "Office Interiors",
    description:
      "Workplaces planned for focus and flow — workstations, cabins, meeting rooms and reception areas that present your business well.",
    bullets: [
      "Workstations & cabins",
      "Meeting & reception areas",
      "Space planning for teams",
    ],
  },
  {
    title: "Showroom & Retail Interiors",
    description:
      "Showrooms and shops designed to display products clearly, guide customers through the space and carry your brand in every detail.",
    bullets: [
      "Product display planning",
      "Counters & feature walls",
      "Lighting for retail",
    ],
  },
  {
    title: "Restaurant & Café Interiors",
    description:
      "Dining spaces with atmosphere and a practical back-of-house — seating layouts, counters and finishes that hold up to daily service.",
    bullets: [
      "Dining layout & seating",
      "Counter & service areas",
      "Warm, durable finishes",
    ],
  },
  {
    title: "Furniture & Execution",
    description:
      "Through Alpha Interior and Furniture, furniture is designed and made for your exact plan — then our team executes and supervises the work on site until handover.",
    bullets: [
      "Custom furniture by Alpha Interior",
      "Fit-out & finishing work",
      "On-site supervision",
    ],
  },
];

export type GalleryCategory = "home" | "work" | "commercial";

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
  title: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/image-03.png",
    alt: "Apartment living room with grey sofa, marble flooring and wood-panelled walls",
    category: "home",
    title: "Living Room",
    caption: "Home interior · style example",
  },
  {
    src: "/images/image-04.jpg",
    alt: "Bedroom interior with a statement ceiling light, marble feature wall and vanity",
    category: "home",
    title: "Master Bedroom",
    caption: "Home interior · style example",
  },
  {
    src: "/images/image-05.jpg",
    alt: "Bright modern kitchen with a central island and pendant lights",
    category: "home",
    title: "Kitchen",
    caption: "Home interior · style example",
  },
  {
    src: "/images/image-06.jpg",
    alt: "Open-plan office with wooden desks, exposed ceiling and stone feature walls",
    category: "work",
    title: "Open-Plan Office",
    caption: "Office interior · style example",
  },
  {
    src: "/images/image-07.webp",
    alt: "Minimal small office workspace with a long shared desk and chairs",
    category: "work",
    title: "Team Workspace",
    caption: "Office interior · style example",
  },
  {
    src: "/images/image-08.jpg",
    alt: "Warmly lit restaurant interior with wooden tables, pendant lamps and a long counter",
    category: "commercial",
    title: "Restaurant Dining",
    caption: "Commercial interior · style example",
  },
  {
    src: "/images/image-09.jpg",
    alt: "Restaurant interior with patterned ceiling, booth seating and a display counter",
    category: "commercial",
    title: "Café & Counter",
    caption: "Commercial interior · style example",
  },
  {
    src: "/images/image-10.webp",
    alt: "Bright retail showroom interior with display shelving and a seating area",
    category: "commercial",
    title: "Retail Showroom",
    caption: "Commercial interior · style example",
  },
  {
    src: "/images/image-11.jpg",
    alt: "Living room with a grey corner sofa, cushions and a green accent wall",
    category: "home",
    title: "Family Living Space",
    caption: "Home interior · style example",
  },
];

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Talk & site visit",
    description:
      "Call or message us with your space and what you need. We discuss your requirements and visit the site to measure and understand it.",
  },
  {
    num: "02",
    title: "Design & planning",
    description:
      "We prepare the design and layout plan for your rooms — how the space is divided, where everything goes, and how it will look and feel.",
  },
  {
    num: "03",
    title: "Furniture & materials",
    description:
      "Alpha Interior and Furniture builds the pieces your plan calls for, matched with the finishes and materials chosen in the design.",
  },
  {
    num: "04",
    title: "Execution & handover",
    description:
      "Our team executes the work on site under supervision, finishing the details and handing over a space that's ready to use.",
  },
];

export interface AlphaIdea {
  title: string;
  description: string;
}

export const alphaIdeas: AlphaIdea[] = [
  {
    title: "Plan the furniture first",
    description:
      "Seating, storage, beds and counters are planned before finishes are chosen, so nothing important has to be squeezed in later.",
  },
  {
    title: "Pieces made for the exact plan",
    description:
      "Custom pieces sized for your room and your routine, instead of standard pieces adapted to fit.",
  },
  {
    title: "Warm, durable finishes",
    description:
      "Wood, texture and finishes chosen for daily use — homes that are lived in, offices that are worked in, and counters that are used all day.",
  },
  {
    title: "Fitted, then handed over ready",
    description:
      "Fit-out supervised on site, so the room you are handed over is the room you can use straight away.",
  },
];

export interface AlphaSpace {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export const alphaSpaces: AlphaSpace[] = [
  {
    src: "/images/image-03.png",
    alt: "Apartment living room with grey sofa, marble flooring and wood-panelled walls",
    title: "Living, built around its seating",
    caption: "Sofa, storage and light planned together · style example",
  },
  {
    src: "/images/image-05.jpg",
    alt: "Bright modern kitchen with a central island and pendant lights",
    title: "Kitchen, designed as one piece",
    caption: "Counter, storage and island together · style example",
  },
  {
    src: "/images/image-08.jpg",
    alt: "Warmly lit restaurant interior with wooden tables, pendant lamps and a long counter",
    title: "Dining, made for busy evenings",
    caption: "Tables, counter and light for service · style example",
  },
  {
    src: "/images/image-06.jpg",
    alt: "Open-plan office with wooden desks, exposed ceiling and stone feature walls",
    title: "Work, around shared tables",
    caption: "Workstations planned as a team space · style example",
  },
  {
    src: "/images/image-04.jpg",
    alt: "Bedroom interior with a statement ceiling light, marble feature wall and vanity",
    title: "Rest, as one calm set",
    caption: "Bed, wardrobe and vanity planned together · style example",
  },
  {
    src: "/images/image-10.webp",
    alt: "Bright retail showroom interior with display shelving and a seating area",
    title: "Display, with room for people",
    caption: "Shelving and seating planned together · style example",
  },
];

export const alphaProcessSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Design",
    description:
      "Measure how you live and work, then sketch the room and its furniture together — not one after the other.",
  },
  {
    num: "02",
    title: "Make",
    description:
      "Custom pieces built for your exact plan, with finishes chosen for daily use.",
  },
  {
    num: "03",
    title: "Fit",
    description:
      "Fit-out on site, supervised, and handed over ready to live or work in.",
  },
];
