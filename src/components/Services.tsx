import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Cloud,
  Database,
  GitBranch,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { styles } from "@/theme/theme";

type Service = { icon: LucideIcon; title: string; desc: string };

const services: Service[] = [
  {
    icon: Brain,
    title: "Artificial Intelligence Solutions",
    desc: "AI-powered applications, automation systems, and intelligent business solutions built on modern LLMs and ML pipelines.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Scalable web and enterprise software crafted for modern businesses with clean architecture and long-term maintainability.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Cloud architecture, migration, deployment, and cost optimization across AWS, Azure, and GCP.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    desc: "Transform raw business data into actionable insights with modern pipelines, warehouses, and visualization.",
  },
  {
    icon: GitBranch,
    title: "DevOps & Infrastructure",
    desc: "Reliable CI/CD pipelines, containerization, and observability for high-velocity engineering teams.",
  },
  {
    icon: Workflow,
    title: "Automation Solutions",
    desc: "Automate repetitive processes, integrate SaaS tools, and improve organizational efficiency at scale.",
  },
];

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="text-center">
        <span className={styles.sectionEyebrow}>What we do</span>
        <h2 className={styles.sectionTitle}>Services engineered for scale</h2>
        <p className={styles.sectionSubtitle}>
          A full-stack technology partner covering the entire product lifecycle —
          from research and design to deployment and continuous evolution.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl p-[1px] glass-card-border"
          >
            <div className="relative h-full glass rounded-2xl p-7 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
              </div>

              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
