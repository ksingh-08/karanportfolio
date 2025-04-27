import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentProjects />
      <Skills />
      <About />
      <Footer />
    </>
  );
}
