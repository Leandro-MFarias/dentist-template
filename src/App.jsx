import { Destaques } from "./components/Destaques";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export function App() {
  return (
    <main className="relative h-screen w-full bg-hero bg-no-repeat bg-cover">
      <Header />
      <Hero />
      <Destaques />
    </main>
  )
}