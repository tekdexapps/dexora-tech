import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Solutions } from "@/components/Solutions";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dexora Technologies — Intelligent Digital Solutions" },
      {
        name: "description",
        content:
          "Dexora Technologies helps businesses transform through AI, cloud computing, automation, and scalable software solutions.",
      },
      { property: "og:title", content: "Dexora Technologies — Intelligent Digital Solutions" },
      {
        property: "og:description",
        content:
          "AI, cloud, and enterprise software engineered for the future. Partner with Dexora Technologies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Solutions />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
