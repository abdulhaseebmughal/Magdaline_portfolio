import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import WhatIDo from "@/components/site/WhatIDo";
import Services from "@/components/site/Services";
import Results from "@/components/site/Results";
import About from "@/components/site/About";
import Newsletter from "@/components/site/Newsletter";
import Footer from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <div className="container-x"><div className="divider" /></div>
      <WhatIDo />
      <Services />
      <Results />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
