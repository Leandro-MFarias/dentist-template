import { About } from "./components/About";
import { ButtonZap } from "./components/ButtonZap";
import { Destaques } from "./components/Destaques";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Space } from "./components/Space";

export function App() {
  return (
    <main className="relative h-screen w-full bg-hero bg-no-repeat bg-cover">
      <Header />
      <Hero />
      <Destaques />
      <About />
      <Space />
      <Footer />
      <ButtonZap />
    </main>
  )
}