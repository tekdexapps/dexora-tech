import { motion } from "framer-motion";
import { styles } from "@/theme/theme";

const groups = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "FastAPI"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "Docker"],
  },
  {
    category: "AI",
    items: ["Machine Learning", "LLMs", "Automation"],
  },
];

export function TechStack() {
  return (
    <section className={styles.section}>
      <div className="text-center">
        <span className={styles.sectionEyebrow}>Our stack</span>
        <h2 className={styles.sectionTitle}>Technology we build with</h2>
        <p className={styles.sectionSubtitle}>
          A carefully chosen stack of proven, modern tools to deliver reliable
          products at high velocity.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <motion.div
            key={g.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
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
                  transition={{ delay: i * 0.08 + j * 0.05 }}
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
