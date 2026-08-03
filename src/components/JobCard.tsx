import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface JobPosition {
  id: string;
  role: string;
  department: string;
  location: string;
  type: string;
  description: string;
  tags: string[];
}

interface JobCardProps {
  job: JobPosition;
  index?: number;
  onApply?: (job: JobPosition) => void;
}

export function JobCard({ job, index = 0, onApply }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl p-[1px] glass-card-border shadow-card"
    >
      <div className="relative h-full glass rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden">
        {/* Ambient background blur on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
        </div>

        <div className="relative">
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {job.department}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="glass text-xs font-normal border-glass">
                <MapPin className="h-3 w-3 mr-1 text-primary/70" />
                {job.location}
              </Badge>
              <Badge variant="secondary" className="glass text-xs font-normal border-glass">
                <Briefcase className="h-3 w-3 mr-1 text-primary/70" />
                {job.type}
              </Badge>
            </div>
          </div>

          {/* Job Role Title */}
          <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
            {job.role}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {job.description}
          </p>

          {/* Skill / Tech Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs bg-chip border-glass text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer / Apply Action */}
        <div className="relative mt-8 pt-6 border-t border-glass-subtle flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            Full-time Position
          </span>

          <button
            onClick={() => onApply?.(job)}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-glow-accent transition-all duration-300 hover:scale-[1.03] cursor-pointer"
          >
            Apply Now
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
