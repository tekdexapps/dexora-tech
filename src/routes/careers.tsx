import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  Cpu,
  Target,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JobCard, type JobPosition } from "@/components/JobCard";
import { styles } from "@/theme/theme";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build The Future With Dexora" },
      {
        name: "description",
        content:
          "Join Dexora Technologies and build next-generation AI, cloud, and enterprise software solutions alongside exceptional engineers.",
      },
      { property: "og:title", content: "Careers — Build The Future With Dexora" },
      {
        property: "og:description",
        content:
          "Explore career opportunities at Dexora Technologies. Innovation-driven culture, modern tech stack, and rapid growth.",
      },
    ],
  }),
  component: CareersPage,
});

const cultureCards = [
  {
    icon: Rocket,
    title: "Innovation Driven Culture",
    desc: "We encourage bold ideas, rapid prototyping, and shipping state-of-the-art solutions that break new ground.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    desc: "Dedicated learning stipends, conference passes, internal tech talks, and clear path to leadership roles.",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    desc: "Work with React 19, TypeScript, TanStack, Python LLMs, AWS, Terraform, and high-performance serverless tools.",
  },
  {
    icon: Target,
    title: "Challenging Projects",
    desc: "Solve high-impact problems for global enterprises, scaling platforms to millions of operations per day.",
  },
];

const openPositions: JobPosition[] = [
  {
    id: "job-1",
    role: "Frontend Developer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    description:
      "Craft high-performance, ultra-responsive web applications using React, TypeScript, Tailwind CSS, and Framer Motion with meticulous attention to UI aesthetics.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js / Vite"],
  },
  {
    id: "job-2",
    role: "Backend Developer",
    department: "Engineering",
    location: "Remote (US / EU)",
    type: "Full-time",
    description:
      "Architect microservices, optimize database queries, and design robust REST/GraphQL APIs powering mission-critical cloud software.",
    tags: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "job-3",
    role: "AI Engineer",
    department: "AI & ML",
    location: "Hybrid (New York, NY)",
    type: "Full-time",
    description:
      "Build custom retrieval-augmented generation (RAG) pipelines, fine-tune open-source models, and integrate agentic AI workflows into customer applications.",
    tags: ["Python", "PyTorch", "LangChain", "LLMs", "Vector DBs"],
  },
  {
    id: "job-4",
    role: "Cloud Engineer",
    department: "Infrastructure",
    location: "Remote (Global)",
    type: "Full-time",
    description:
      "Automate cloud deployments, manage Kubernetes clusters, enforce Zero Trust security policies, and maintain 99.99% uptime SLAs across multi-cloud setups.",
    tags: ["AWS", "Terraform", "Kubernetes", "CI/CD", "Prometheus"],
  },
];

function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleApplyClick = (job: JobPosition) => {
    setSelectedJob(job);
    setSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="relative pt-32 pb-24">
        {/* Ambient Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-hero pointer-events-none" />

        {/* Floating background glows */}
        <div className="absolute top-1/4 -right-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-pulse-glow pointer-events-none" />

        {/* Careers Hero Section */}
        <section className={styles.section}>
          <div className="text-center max-w-4xl mx-auto">



            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              Build The Future{" "}
              <span className="text-gradient-brand">With Dexora</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Join a team creating intelligent digital solutions using AI, cloud, and modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex justify-center gap-4"
            >
              <a href="#positions" className={styles.buttonPrimary}>
                View Open Positions <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={styles.sectionEyebrow}>Culture & Benefits</span>
            <h2 className={styles.sectionTitle}>Why Work With Us</h2>
            <p className={styles.sectionSubtitle}>
              We empower our team members with autonomy, trust, world-class tools, and an environment designed for career excellence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cultureCards.map((c, i) => {
              const IconComp = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl p-[1px] glass-card-border shadow-card"
                >
                  <div className="relative h-full glass rounded-2xl p-7 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
                    </div>

                    <div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform duration-300">
                        <IconComp className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="positions" className="max-w-7xl mx-auto px-6 md:px-10 py-16 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={styles.sectionEyebrow}>Careers</span>
            <h2 className={styles.sectionTitle}>Open Positions</h2>
            <p className={styles.sectionSubtitle}>
              Find your next role and collaborate with engineers passionate about building software that shapes industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {openPositions.map((job, i) => (
              <JobCard
                key={job.id}
                job={job}
                index={i}
                onApply={handleApplyClick}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-[1px] glass-card-border shadow-elevated"
          >
            <div className="relative glass-strong rounded-3xl p-10 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
              <div className="relative max-w-2xl mx-auto">
                <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4">
                  Start Your Journey
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                  Ready to build the future with us?
                </h2>
                <p className="mt-4 text-base md:text-lg text-muted-foreground">
                  Don't see an exact match? We are always on the lookout for exceptional talent. Get in touch and let's discuss possibilities.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => handleApplyClick(openPositions[0])}
                    className={styles.buttonPrimary}
                  >
                    Join Dexora <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Application Modal Dialog */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-overlay-backdrop backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass-strong rounded-3xl p-6 md:p-8 shadow-elevated z-10 border-glass"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 p-2 rounded-full glass hover:bg-secondary/40 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              {submitted ? (
                <div className="py-10 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Application Submitted!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for applying for the <span className="font-semibold text-foreground">{selectedJob.role}</span> role. Our recruiting team will review your application and reach out shortly.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                      Apply for Position
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mt-1">
                      {selectedJob.role}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {selectedJob.department} · {selectedJob.location}
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Morgan"
                        className="w-full rounded-xl glass px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alex@example.com"
                        className="w-full rounded-xl glass px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">
                        Portfolio / GitHub URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://github.com/username"
                        className="w-full rounded-xl glass px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">
                        Why are you a fit for this role?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly tell us about your experience..."
                        className="w-full rounded-xl glass px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedJob(null)}
                        className="px-5 py-2.5 rounded-full text-xs font-medium glass hover:bg-secondary/30 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className={styles.buttonPrimary}
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
