import { siteConfig } from "./site";

/**
 * Page copy lives here so it is easy to review and edit in one place.
 * Anything marked TODO is a placeholder or copy Naveen should check.
 */

export const services = [
  {
    slug: "custom-software",
    title: "Custom software",
    summary: "Web apps, portals and internal tools built around how your team actually works.",
    points: [
      "Replace spreadsheets and email chains with one reliable system",
      "Customer or staff portals, dashboards, booking and quoting tools",
      "Integrations with the tools you already pay for",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI and automation",
    summary: "Practical use of AI to remove repetitive work, with a human still in the loop.",
    points: [
      "Document, email and data-entry workflows that run themselves",
      "Search and Q&A over your own documents",
      "Clear limits and review steps, so you can trust the output",
    ],
  },
  {
    slug: "product-builds",
    title: "Product and MVP builds",
    summary: "Take a specialist-software idea from sketch to something real users can try.",
    points: [
      "Scope the smallest version worth testing",
      "Design, build and launch on modern, low-cost hosting",
      "Hand over code and documentation you own",
    ],
  },
  {
    // TODO(Naveen): confirm you still want to offer this and how far it extends (remote only, onsite, which suburbs).
    slug: "it-support",
    title: "IT support and systems",
    summary: "Hands-on help with devices, accounts, networks and the systems around your software.",
    points: [
      "Setup, troubleshooting and upgrades for small teams",
      "Onsite visits in Melbourne where needed",
      "Straightforward documentation of what is where",
    ],
  },
] as const;

export const workSteps = [
  {
    title: "Talk it through",
    text: "A free, no-pressure call to understand the problem, who uses it, and what success looks like.",
  },
  {
    title: "Agree a small scope",
    text: "A short written plan with what is in, what is out, and a price or estimate before any work starts.",
  },
  {
    title: "Build in steps",
    text: "Working software in short iterations, so you can see progress and steer early rather than at the end.",
  },
  {
    title: "Launch and look after it",
    text: "We go live together, hand over the code and docs, and I stay available for fixes and the next improvement.",
  },
] as const;

/**
 * Selected work. Only real projects belong here.
 *
 * TODO(Naveen): verify each entry is accurate and live before merging, and add
 * client case studies to `clientProjects` once you have permission to name
 * them (what the problem was, what you built, the result). The site renders
 * nothing for an empty `clientProjects` array rather than inventing work.
 */
export const ownProducts = [
  {
    name: "VisaDocket",
    href: "https://visadocket.com.au",
    kind: "Own product",
    // TODO(Naveen): confirm status ("Live", "Beta", "In development") and that the URL is up.
    status: "Product",
    description:
      "Practice-management software for migration professionals: client records, applications and documents in one place.",
  },
  {
    name: "Eva's Fashion Hub",
    href: null,
    kind: "Own product",
    status: "In development",
    description: "A styling-led fashion storefront concept for curated looks and affordable discovery.",
  },
] as const;

export const clientProjects: {
  name: string;
  client: string;
  problem: string;
  built: string;
  result?: string;
}[] = [];

export const aboutText = [
  `${siteConfig.name} is a small software studio in Melbourne. I build custom software, automation and focused products for businesses that have outgrown spreadsheets but do not need an enterprise platform.`,
  "You work directly with the person building your system, which means fast answers, plain language and no account managers in between.",
  // TODO(Naveen): add 1 to 2 true, specific sentences about your experience, stack and the problems you like solving.
  "My background spans IT service delivery, systems integration and software product development.",
];
