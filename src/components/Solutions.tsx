import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Building2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { styles } from "@/theme/theme";

type Industry = { icon: LucideIcon; title: string; desc: string };

const industries: Industry[] = [
  { icon: HeartPulse, title: "Healthcare", desc: "HIPAA-ready platforms, patient data intelligence, and diagnostic AI." },
  { icon: Landmark, title: "Finance", desc: "Secure fintech infrastructure, fraud detection, and analytics." },
  { icon: GraduationCap, title: "Education", desc: "Adaptive learning platforms and institutional automation." },
  { icon: ShoppingBag, title: "Retail", desc: "Personalization engines, unified commerce, and inventory AI." },
  { icon: Building2, title: "Enterprise", desc: "Digital transformation across legacy stacks and modern cloud." },
  { icon: Rocket, title: "Tech Startups", desc: "MVP to scale — engineering leverage for velocity-focused teams." },
];

export function Solutions() {
  return (
    <section id="solutions" className={styles.section}>
      <div className="text-center">
        <span className={styles.sectionEyebrow}>Industries</span>
        <h2 className={styles.sectionTitle}>Solutions across every sector</h2>
        <p className={styles.sectionSubtitle}>
          Purpose-built platforms and services tailored to the compliance,
          scale, and velocity demands of your industry.
        </p>
      </div>

      <div id="industries" className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative glass rounded-2xl p-6 hover:border-accent/50 hover:shadow-glow-accent transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 border border-accent/30 text-accent group-hover:scale-110 transition-transform">
                <ind.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{ind.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
