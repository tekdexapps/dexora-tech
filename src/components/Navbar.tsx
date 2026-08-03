import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "About" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-elevated py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Dexora<span className="text-gradient-brand"> Technologies</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const isHashLink = l.href.startsWith("#");
            const isActive = isHashLink
              ? isHome && (location.hash === l.href.slice(1) || (l.href === "#home" && !location.hash))
              : location.pathname === l.href;

            if (isHashLink) {
              const href = isHome ? l.href : `/${l.href}`;
              return (
                <li key={l.href}>
                  <a
                    href={href}
                    className={`text-sm transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:bg-gradient-primary hover:after:w-full after:transition-all ${
                      isActive
                        ? "text-foreground after:w-full"
                        : "text-muted-foreground hover:text-foreground after:w-0"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className={`text-sm transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:bg-gradient-primary hover:after:w-full after:transition-all ${
                    isActive
                      ? "text-foreground after:w-full"
                      : "text-muted-foreground hover:text-foreground after:w-0"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-glow-accent transition-all hover:scale-[1.03]"
          >
            Get Started
          </a>
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-md glass"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mx-6 mt-3 glass-strong rounded-2xl p-4"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const isHashLink = l.href.startsWith("#");
              const isActive = isHashLink
                ? isHome && (location.hash === l.href.slice(1) || (l.href === "#home" && !location.hash))
                : location.pathname === l.href;

              if (isHashLink) {
                const href = isHome ? l.href : `/${l.href}`;
                return (
                  <li key={l.href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
