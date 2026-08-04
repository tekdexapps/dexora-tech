import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Code,
  Zap,
  CheckCircle2,
  Terminal,
  Layout,
  Smartphone,
  Brain,
  Server,
  Palette,
  Users,
  FolderCheck,
} from "lucide-react";
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

const teams = [
  {
    name: "Python Engineering",
    icon: Terminal,
    description:
      "Architecting robust backend services, high-performance APIs, and AI-driven automation systems.",
    members: "12 Engineers",
    projects: "48+ Projects",
    technologies: ["FastAPI", "Django", "Backend APIs", "AI Automation"],
  },
  {
    name: "Frontend Engineering",
    icon: Layout,
    description:
      "Crafting high-speed, pixel-perfect web applications using modern design systems and frameworks.",
    members: "10 Engineers",
    projects: "65+ Projects",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    description:
      "Building sleek, responsive native and cross-platform mobile apps for iOS and Android.",
    members: "8 Engineers",
    projects: "32+ Projects",
    technologies: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    name: "AI & Machine Learning",
    icon: Brain,
    description:
      "Integrating state-of-the-art LLMs, computer vision, NLP models, and intelligent workflows.",
    members: "7 Engineers",
    projects: "26+ AI Solutions",
    technologies: ["LLMs", "Computer Vision", "NLP", "Automation"],
  },
  {
    name: "Cloud & DevOps",
    icon: Server,
    description:
      "Deploying scalable cloud infrastructure, containerized services, and automated CI/CD pipelines.",
    members: "6 Engineers",
    projects: "40+ Deployments",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    description:
      "Designing intuitive user journeys, accessible interfaces, and cohesive enterprise design systems.",
    members: "5 Designers",
    projects: "80+ Product Designs",
    technologies: ["Figma", "Design Systems", "User Research", "Prototypes"],
  },
];

export function About() {
  return (
    <>
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

      {/* Meet Our Teams Section */}
      <section id="teams" className="relative py-20 px-6 md:px-10 max-w-7xl mx-auto border-t border-border/40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className={styles.sectionEyebrow}>Engineering Teams</span>
          <h2 className={styles.sectionTitle}>
            Meet the Teams Behind Dexora
          </h2>
          <p className={styles.sectionSubtitle}>
            Specialized engineering teams delivering scalable digital products across AI, cloud, mobile, and enterprise software.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, i) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-strong group relative rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-card hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow group-hover:scale-105 transition-transform duration-300">
                    <team.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {team.name}
                    </h3>
                    <div className="flex items-center gap-2.5 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1 font-medium text-foreground/80">
                        <Users className="h-3.5 w-3.5 text-primary" />
                        {team.members}
                      </span>
                      <span className="opacity-40">•</span>
                      <span className="flex items-center gap-1 font-medium text-foreground/80">
                        <FolderCheck className="h-3.5 w-3.5 text-primary" />
                        {team.projects}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {team.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40">
                <div className="text-[11px] font-semibold text-muted-foreground/80 uppercase tracking-wider mb-2">
                  Main Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {team.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md glass px-2.5 py-1 text-xs font-medium text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
