import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Lightbulb, Users, Layers, Target, ShieldCheck } from "lucide-react";
import { styles } from "@/theme/theme";

const pillars = [
  { icon: Lightbulb, title: "Innovative Technology", desc: "We ship what's next — not what's safe." },
  { icon: Users, title: "Experienced Engineers", desc: "A senior team with deep domain expertise." },
  { icon: Layers, title: "Scalable Solutions", desc: "Architected for millions from day one." },
  { icon: Target, title: "Business Focused", desc: "Outcomes over output, always." },
  { icon: ShieldCheck, title: "Security First", desc: "Compliance and hardening built-in." },
];

const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 40, suffix: "+", label: "Expert Engineers" },
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="text-center">
        <span className={styles.sectionEyebrow}>Why Dexora</span>
        <h2 className={styles.sectionTitle}>
          The advantages of a partner built for the future
        </h2>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-strong rounded-2xl p-6 text-center relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative text-4xl md:text-5xl font-bold text-gradient-brand">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="relative mt-2 text-sm text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass rounded-2xl p-5 hover:border-primary/40 transition-all"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
              <p.icon className="h-5 w-5 text-primary" />
            </div>
            <h4 className="mt-4 font-semibold">{p.title}</h4>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
