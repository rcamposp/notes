import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About page" },
    { name: "description", content: "Welcome to About Page!" },
  ];
}

export default function About() {
  return (<h1>About</h1>);
}
