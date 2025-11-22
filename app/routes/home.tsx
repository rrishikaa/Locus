import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Let's Start with Locus" },
    { name: "description", content: "Welcome to Locus!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
