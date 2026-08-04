import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { styles } from "@/theme/theme";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Ambient gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">



        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
        >
          Building{" "}
          <span className="text-gradient-brand">Intelligent</span>
          <br className="hidden sm:block" /> Digital Solutions for the Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-base md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Dexora Technologies helps businesses transform through AI, cloud
          computing, automation, and scalable software solutions engineered for
          enterprise-grade performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#services" className={styles.buttonPrimary}>
            Explore Solutions <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className={styles.buttonSecondary}>
            <Play className="h-4 w-4" /> Contact Us
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { k: "120+", v: "Enterprise Clients" },
            { k: "50M+", v: "API Calls / day" },
            { k: "99.99%", v: "Uptime SLA" },
            { k: "24/7", v: "Global Support" },
          ].map((s) => (
            <div
              key={s.v}
              className="glass rounded-2xl p-4 text-center"
            >
              <div className="text-2xl md:text-3xl font-semibold text-gradient-brand">
                {s.k}
              </div>
              <div className="text-xs mt-1 text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
