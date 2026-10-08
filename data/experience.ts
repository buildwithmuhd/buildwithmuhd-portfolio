import type { Accent } from "../components/scrapbook";

export type Experience = {
  company: string;
  role: string;
  type: "Work" | "Internship" | "Leadership";
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tools: string[];
  accent: Accent;
};

export const experiences: Experience[] = [
  {
    company: "Very Unreal LLC",
    role: "Technology Director",
    type: "Leadership",
    location: "Remote",
    period: "Current",
    summary:
      "Leading technical direction across product experiments, platform decisions, and secure engineering habits for shipped and in-progress products.",
    highlights: [
      "Shapes architecture and delivery choices for product-led builds.",
      "Connects frontend quality, backend reliability, and AppSec discipline.",
      "Turns early ideas into testable, shippable product systems.",
    ],
    tools: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "AppSec"],
    accent: "black",
  },
  {
    company: "ngtaskhub.com",
    role: "Frontend Engineer",
    type: "Work",
    location: "Nigeria",
    period: "Frontend role",
    summary:
      "Built and refined user-facing product surfaces with an eye for responsive interfaces, usability, and reliable implementation.",
    highlights: [
      "Delivered interface work across real product flows.",
      "Translated product requirements into clean frontend experiences.",
      "Improved UI consistency and implementation quality.",
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Product UI"],
    accent: "yellow",
  },
  {
    company: "referx.com.ng",
    role: "Frontend Engineer",
    type: "Work",
    location: "Nigeria",
    period: "Frontend role",
    summary:
      "Worked on frontend experiences for a referral-driven product, balancing conversion-focused UI with maintainable engineering.",
    highlights: [
      "Implemented responsive screens and interaction states.",
      "Collaborated around product clarity and user journey improvements.",
      "Kept frontend delivery practical, fast, and readable.",
    ],
    tools: ["React", "JavaScript", "CSS", "Responsive UI"],
    accent: "blue",
  },
  {
    company: "Galaxy Backbone, Abuja",
    role: "NOC/SIWES Industrial Placement",
    type: "Internship",
    location: "Abuja, Nigeria",
    period: "Industrial placement",
    summary:
      "Completed a network operations placement, gaining exposure to infrastructure monitoring, operational discipline, and production systems thinking.",
    highlights: [
      "Observed network operations and support workflows.",
      "Built practical awareness of uptime, escalation, and monitoring.",
      "Connected infrastructure reliability lessons back into product engineering.",
    ],
    tools: ["NOC", "Monitoring", "Infrastructure", "Operations"],
    accent: "green",
  },
];
