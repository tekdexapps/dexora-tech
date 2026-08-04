import { motion } from "framer-motion";
import { styles } from "@/theme/theme";

const groups = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Shadcn UI",
      "Framer Motion",
      "React Query",
      "Vite",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Django",
      "NestJS",
      "Go (Golang)",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Supabase",
      "Firebase Firestore",
      "Elasticsearch",
      "DynamoDB",
      "SQLite",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    category: "AI & Automation",
    items: ["Machine Learning", "LLMs", "NLP", "Computer Vision", "PyTorch", "Automation"],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className={styles.section}>
      <div className="text-center">
        <span className={styles.sectionEyebrow}>Our stack</span>
        <h2 className={styles.sectionTitle}>Technology we build with</h2>
        <p className={styles.sectionSubtitle}>
          A carefully chosen stack of proven, modern tools to deliver reliable
          products at high velocity.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
          >
            <div className="text-xs uppercase tracking-wider text-primary/80 font-semibold">
              {g.category}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it, j) => (
                <motion.span
                  key={it}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + j * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="rounded-full px-3.5 py-1.5 text-xs font-medium glass-strong border border-border-strong hover:border-primary/50 hover:text-primary transition-all cursor-default"
                >
                  {it}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
