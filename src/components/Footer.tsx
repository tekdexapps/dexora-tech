import { Link } from "@tanstack/react-router";
import { Linkedin, Github, Twitter, Sparkles } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/#about" },
      { label: "Careers", to: "/careers" },
      { label: "Press", to: "/#" },
      { label: "Contact", to: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Solutions", to: "/#services" },
      { label: "Cloud", to: "/#services" },
      { label: "Software", to: "/#services" },
      { label: "Automation", to: "/#services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Healthcare", to: "/#solutions" },
      { label: "Finance", to: "/#solutions" },
      { label: "Retail", to: "/#solutions" },
      { label: "Enterprise", to: "/#solutions" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-20">
      <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="text-lg font-semibold">
                Dexora<span className="text-gradient-brand"> Technologies</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Building intelligent, scalable, and future-ready digital products
              for ambitious teams around the world.
            </p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Github, Twitter].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass hover:border-primary/50 hover:text-primary transition-all"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold">{col.title}</div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => {
                  const isHashLink = l.to.includes("#");
                  if (isHashLink) {
                    return (
                      <li key={l.label}>
                        <a
                          href={l.to}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {l.label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dexora Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
