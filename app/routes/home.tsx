import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { NotesGrid } from "~/notes-grid/notes-grid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto">
      <NotesGrid />
    </div>
    );
}
