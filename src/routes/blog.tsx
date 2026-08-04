import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
  Search,
  Calendar,
  Clock,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogCard, type BlogPost } from "@/components/BlogCard";
import { styles } from "@/theme/theme";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — Dexora Technologies" },
      {
        name: "description",
        content:
          "Explore the latest insights, technological innovations, AI breakthroughs, cloud engineering strategies, and software development best practices from Dexora Technologies.",
      },
      { property: "og:title", content: "Blog & Insights — Dexora Technologies" },
      {
        property: "og:description",
        content:
          "Insights, Innovation & Technology. Learn how Dexora transforms industries through AI, cloud, and engineering.",
      },
    ],
  }),
  component: BlogPage,
});

const featuredPost: BlogPost = {
  id: "featured-1",
  title: "The Future of Generative AI in Enterprise Workflows",
  description:
    "How leading tech organizations are moving beyond simple chatbots to integrate autonomous AI agents and custom-trained LLM pipelines into mission-critical business systems.",
  category: "AI & Machine Learning",
  date: "July 28, 2026",
  readTime: "6 min read",
  author: {
    name: "Dr. Sarah Chen",
    role: "Head of AI Research",
  },
  icon: Brain,
  gradient: "bg-gradient-blog-1",
  featured: true,
};

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Architecting for Scale: Serverless vs Edge Computing in 2026",
    description:
      "A deep dive into latency tradeoffs, deployment costs, and operational simplicity when building modern global applications.",
    category: "Cloud Technology",
    date: "July 24, 2026",
    readTime: "5 min read",
    author: {
      name: "Marcus Vance",
      role: "Lead Cloud Architect",
    },
    icon: Cloud,
    gradient: "bg-gradient-blog-2",
  },
  {
    id: "post-2",
    title: "Clean Architecture & Domain-Driven Design in Modern React Apps",
    description:
      "Strategies for decoupling complex business logic from framework code to build enterprise frontends that stay maintainable for years.",
    category: "Software Engineering",
    date: "July 19, 2026",
    readTime: "8 min read",
    author: {
      name: "Elena Rostova",
      role: "Principal Frontend Engineer",
    },
    icon: Code2,
    gradient: "bg-gradient-blog-3",
  },
  {
    id: "post-3",
    title: "Zero Trust Security Blueprint for Multi-Cloud Architectures",
    description:
      "Implement continuous identity verification, automated secrets rotation, and strict microsegmentation across distributed workloads.",
    category: "Cybersecurity",
    date: "July 15, 2026",
    readTime: "7 min read",
    author: {
      name: "Alex Thorne",
      role: "Director of Cybersecurity",
    },
    icon: Shield,
    gradient: "bg-gradient-blog-4",
  },
  {
    id: "post-4",
    title: "Building Autonomous Agentic Workflows with Python & LangChain",
    description:
      "How we automated 2,500+ monthly hours of complex enterprise data processing using multi-step LLM orchestration.",
    category: "Automation",
    date: "July 10, 2026",
    readTime: "6 min read",
    author: {
      name: "David Kim",
      role: "Senior Automation Specialist",
    },
    icon: Zap,
    gradient: "bg-gradient-blog-5",
  },
  {
    id: "post-5",
    title: "Fine-Tuning Open-Source LLMs for Domain-Specific Enterprise Tasks",
    description:
      "A practical guide to quantization, LoRA adapters, and RLHF for deploying private, cost-effective models on-premise.",
    category: "AI & Machine Learning",
    date: "July 04, 2026",
    readTime: "9 min read",
    author: {
      name: "Dr. Sarah Chen",
      role: "Head of AI Research",
    },
    icon: Brain,
    gradient: "bg-gradient-blog-1",
  },
  {
    id: "post-6",
    title: "The Shift to Cloud-Native Microservices: Best Practices & Pitfalls",
    description:
      "Lessons learned from migrating monolithic platforms to containerized Kubernetes setups without downtime.",
    category: "Cloud Technology",
    date: "June 29, 2026",
    readTime: "5 min read",
    author: {
      name: "Marcus Vance",
      role: "Lead Cloud Architect",
    },
    icon: Cloud,
    gradient: "bg-gradient-blog-2",
  },
];

const categories = [
  "All",
  "AI & Machine Learning",
  "Cloud Technology",
  "Software Engineering",
  "Cybersecurity",
  "Automation",
] as const;

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="relative pt-32 pb-24">
        {/* Ambient Hero Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-hero pointer-events-none" />

        {/* Floating background glows */}
        <div className="absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-pulse-glow pointer-events-none" />

        {/* Blog Hero Section */}
        <section className={styles.section}>
          <div className="text-center max-w-4xl mx-auto">


            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Insights, Innovation &{" "}
              <span className="text-gradient-brand">Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Explore our latest research, architectural insights, and strategic
              knowledge on AI, Cloud Computing, Software Development, and Digital
              Transformation.
            </motion.p>
          </div>

          {/* Search & Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 max-w-4xl mx-auto space-y-6"
          >
            {/* Search Input */}
            <div className="relative glass-strong rounded-2xl p-2 flex items-center shadow-card border-glass">
              <Search className="h-5 w-5 text-muted-foreground ml-3" />
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>

            {/* Category Badges / Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${isSelected
                      ? "bg-gradient-primary text-primary-foreground shadow-glow scale-[1.04]"
                      : "glass text-muted-foreground hover:text-foreground hover:border-primary/40"
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Featured Blog Section */}
        {selectedCategory === "All" && !searchQuery && (
          <section className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-accent">
                Featured Article
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl p-[1px] glass-card-border shadow-elevated"
            >
              <div className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden grid lg:grid-cols-12 gap-8 items-center">
                {/* Background Glow */}
                <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

                {/* Left Content Column */}
                <div className="lg:col-span-7 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs px-3 py-1">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    {featuredPost.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-glass-subtle">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground">
                        {featuredPost.author.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>

                    <button className={styles.buttonPrimary}>
                      Read Featured Article <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Column */}
                <div className="lg:col-span-5 relative flex items-center justify-center">
                  <div className="relative h-64 md:h-80 w-full rounded-2xl bg-gradient-blog-1 border-glass flex items-center justify-center p-8 overflow-hidden">
                    {/* Tech Pattern Grid */}
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl glass-strong shadow-glow group-hover:scale-110 transition-transform duration-500">
                      <Brain className="h-12 w-12 text-primary-glow" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Blog Listing Grid Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">
              {selectedCategory === "All"
                ? "All Articles"
                : `${selectedCategory} Articles`}
            </h2>
            <span className="text-xs text-muted-foreground">
              Showing {filteredPosts.length} articles
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          ) : (
            <div className="glass rounded-2xl p-12 text-center max-w-lg mx-auto">
              <p className="text-muted-foreground">
                No articles found matching your query.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs font-semibold text-primary hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
