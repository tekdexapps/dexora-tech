import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: "AI & Machine Learning" | "Cloud Technology" | "Software Engineering" | "Cybersecurity" | "Automation";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  icon: LucideIcon;
  gradient: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const IconComponent = post.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col h-full rounded-2xl p-[1px] glass-card-border shadow-card"
    >
      <div className="relative flex flex-col justify-between h-full glass rounded-2xl overflow-hidden p-6">
        {/* Subtle hover glow background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
        </div>

        <div>
          {/* Card Illustration / Visual Header */}
          <div
            className={`relative h-48 w-full rounded-xl overflow-hidden mb-6 flex items-center justify-center ${post.gradient} p-6 border-glass-subtle group-hover:border-primary/30 transition-colors`}
          >
            {/* Tech Pattern Grid */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, var(--foreground) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Glowing Icon Container */}
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl glass-strong shadow-glow group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="h-8 w-8 text-primary-foreground" />
            </div>

            <div className="absolute top-3 left-3">
              <Badge className="bg-background/80 backdrop-blur-md border-glass text-xs font-normal text-foreground">
                {post.category}
              </Badge>
            </div>
          </div>

          {/* Date & Read Time */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary/70" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary/70" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>

          {/* Short Description */}
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {post.description}
          </p>
        </div>

        {/* Footer info & Read More button */}
        <div className="mt-6 pt-5 border-t border-glass-subtle flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-semibold text-primary-foreground">
              {post.author.name.charAt(0)}
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {post.author.name}
            </span>
          </div>

          <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-primary-glow transition-colors cursor-pointer">
            Read More
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
