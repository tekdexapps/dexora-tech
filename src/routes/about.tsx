import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Dexora Technologies" },
      {
        name: "description",
        content:
          "Learn about Dexora Technologies, our engineering culture, expertise, and the specialized teams behind our intelligent digital solutions.",
      },
      { property: "og:title", content: "About Us — Dexora Technologies" },
      {
        property: "og:description",
        content:
          "Building intelligent, scalable, and future-ready digital products for ambitious teams around the world.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}
