import { createElement } from "react";
import Index from "./doc/Introduction/Index";

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
    "Button Component",
    "Props Explanation",
    {
      name: "Usage Examples",
      subsections: ["size", "default", "disabled", "loading", "link"],
    },
    "Theming",
    "Accessibility",
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
    href: "renderProps",
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
