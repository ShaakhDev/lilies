import { Foods } from "../foods";
import { Footer } from "../footer";
import { Hero } from "../hero/hero";
import Contact from "./components/contact";
import { Navbar } from "./navbar";

export const HomePage = () => {
  return (
    <main className="bg-gr w-full h-screen">
      <Navbar />
      <Hero />
      <Foods />
      <Contact />
      <Footer />
    </main>
  );
};
