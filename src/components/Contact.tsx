import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { styles } from "@/theme/theme";

const info = [
  { icon: Mail, label: "Email", value: "hello@dexoratech.com" },
  { icon: Phone, label: "Phone", value: "+1 (415) 555-0143" },
  { icon: MapPin, label: "Headquarters", value: "San Francisco, CA" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!fd.get("name")?.toString().trim()) next.name = "Name is required";
    const email = fd.get("email")?.toString().trim() ?? "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Valid email required";
    if (!fd.get("message")?.toString().trim()) next.message = "Message is required";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
      setTimeout(() => setSent(false), 4000);
    }
  };

  const field =
    "w-full rounded-xl bg-chip border border-border-strong px-4 py-3 text-sm outline-none transition-all focus:border-primary/60 focus:bg-secondary/40 placeholder:text-muted-foreground/60";

  return (
    <section id="contact" className={styles.section}>
      <div className="text-center">
        <span className={styles.sectionEyebrow}>Get in touch</span>
        <h2 className={styles.sectionTitle}>Let's build what's next</h2>
        <p className={styles.sectionSubtitle}>
          Tell us about your project and our team will get back within one
          business day.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          {info.map((c) => (
            <div key={c.label} className="glass rounded-2xl p-5 flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow flex-shrink-0">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 font-medium">{c.value}</div>
              </div>
            </div>
          ))}
          <div className="glass-strong rounded-2xl p-5">
            <div className="text-sm font-semibold">Enterprise inquiries</div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Working on something large-scale? Reach out for a dedicated
              engagement plan with custom SLAs.
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 glass-strong rounded-2xl p-6 md:p-8 space-y-5"
          noValidate
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs text-muted-foreground" htmlFor="name">Name</label>
              <input id="name" name="name" className={field} placeholder="Jane Doe" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs text-muted-foreground" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className={field} placeholder="you@company.com" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground" htmlFor="company">Company</label>
            <input id="company" name="company" className={field} placeholder="Acme Inc." />
          </div>
          <div>
            <label className="text-xs text-muted-foreground" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} className={field} placeholder="Tell us about your project..." />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>

          <button type="submit" className={styles.buttonPrimary + " w-full md:w-auto"}>
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Message sent
              </>
            ) : (
              <>
                Send message <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
