import { createElement } from "react";
import Index from "./document/Index";

export const sectionOfPages = {
  introduction: [
    "Introduction",
    "About UI",
    "Logic Implementation",
    "Framework Support",
    "Advanced React Pattern",
    "AI-integration",
  ],
  button: [
    "Quick View",
    "Usage",
    "Props Reference",
    {
      name: "Usage Examples",
      subsections: [
        "Size",
        "Default",
        "Outline",
        "Ghost",
        "Glass",
        "Link",
        "Disabled",
        "Loading",
        "Icon",
        "With Icon",
      ],
    },
    "Theming",
    "Customization",
  ],
  renderPropsPattern: [
    "Definition",
    "When to Use?",
    "Implementation",
    "Pros and Cons",
    "Example Use Cases",
  ],
  hoc: [
    "Definition of HOC",
    "When to Use HOC?",
    "Implementing HOC",
    "Advantages and Disadvantages",
    "Example Use Cases",
  ],
  compoundComponent: [
    "What is Compound Component Pattern?",
    "When to Use Compound Component Pattern?",
    "Implementing Compound Component Pattern",
    "Advantages and Disadvantages",
    "Example Use Cases",
  ],
  errorBoundary: [
    "What is Error Boundary?",
    "When to Use Error Boundary?",
    "Implementing Error Boundary",
    "Advantages and Disadvantages",
    "Example Use Cases",
  ],
};

export const pageList = [
  // module 1
  { name: "Start Up", type: "title" },
  {
    name: "Introduction",
    href: "introduction",
    type: "link",
  },
  {
    name: "Get Started",
    href: "getStarted",
    type: "link",
  },
  // module 2
  { name: "Components", type: "title" },
  {
    name: "Button",
    href: "button",
    type: "link",
  },
  // module 3
  { name: "React Patterns", type: "title" },
  {
    name: "render props pattern",
    href: "renderPropsPattern",
    type: "link",
  },
  {
    name: "higher order component",
    href: "hoc",
    type: "link",
  },
  {
    name: "compound component",
    href: "compoundComponent",
    type: "link",
  },
  {
    name: "Error Boundary",
    href: "errorBoundary",
    type: "link",
  },
];

export const docRoutes = pageList
  .filter((item) => item.type === "link")
  .map((item) => ({
    path: item.href,
    element: createElement(Index),
  }));
