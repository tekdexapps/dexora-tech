import { motion } from "framer-motion";
import { Cpu, Cloud, Code, Zap, CheckCircle2 } from "lucide-react";
import { styles } from "@/theme/theme";

const highlights = [
  { icon: Cpu, label: "AI Expertise" },
  { icon: Code, label: "Software Engineering" },
  { icon: Cloud, label: "Cloud Technologies" },
  { icon: Zap, label: "Digital Transformation" },
];

const bullets = [
  "Product-minded engineering culture",
  "Enterprise-grade delivery process",
  "Long-term strategic partnerships",
  "Compliance & security by design",
];

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionEyebrow}>About Dexora</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            A technology partner built for what's next
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Dexora Technologies is a technology solutions company focused on
            building intelligent, scalable, and future-ready digital products.
            We combine deep engineering expertise with a modern design sensibility
            to deliver software that businesses actually love using.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`glass-strong rounded-2xl p-6 ${i % 2 === 1 ? "translate-y-8" : ""}`}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <h.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-4 font-semibold">{h.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Deep, hands-on capability
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
