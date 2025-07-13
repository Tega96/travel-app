import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home page" },
    { name: "description", content: "Welcome to our travel agency app!" },
  ];
}

export default function Home() {
  return (
    <div>
      Hello World!
    </div>);
}
