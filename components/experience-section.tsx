"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Briefcase, 
  Calendar,
  Building,
  Award,
  Github,
  Linkedin,
  Twitter,
  Globe,
  CheckCircle2,
  Moon,
  Sun,
  FileText,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";

// Theme Provider
const ThemeContext = React.createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return React.useContext(ThemeContext);
}

// Theme Toggle Component
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-primary"
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}

// Experience Types
interface ExperiencePosition {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentType?: string;
  description?: string;
  skills?: string[];
  isExpanded?: boolean;
}

interface Experience {
  id: string;
  companyName: string;
  companyLogo?: string;
  positions: ExperiencePosition[];
  isCurrentEmployer?: boolean;
}

// Experience Section Component
function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            My professional journey and accomplishments
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    {experience.companyLogo ? (
                      <img
                        src={experience.companyLogo}
                        alt={experience.companyName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {experience.companyName}
                      </h3>
                      {experience.isCurrentEmployer && (
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {experience.positions.map((position) => (
                    <Collapsible
                      key={position.id}
                      defaultOpen={position.isExpanded}
                    >
                      <div className="border-l-2 border-border pl-4">
                        <CollapsibleTrigger className="w-full text-left group">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {position.title}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                {position.employmentType && (
                                  <>
                                    <span>{position.employmentType}</span>
                                    <Separator orientation="vertical" className="h-4" />
                                  </>
                                )}
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {position.employmentPeriod}
                                </span>
                              </div>
                            </div>
                            <Briefcase className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                          </div>
                        </CollapsibleTrigger>

                        <CollapsibleContent className="mt-4">
                          {position.description && (
                            <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                              {position.description}
                            </p>
                          )}
                          {position.skills && position.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {position.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center rounded-lg border bg-muted/50 px-2 py-1 text-xs text-muted-foreground"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Form Component
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact-section" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let&apos;s discuss your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:abinair314@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      abinair314@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 7349723145
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h4 className="font-medium text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3 items-center">
                  {[
                    { icon: Github, href: "https://github.com/hea7hen/" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-nair-302235211/" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                  <a
                    href="/resume.pdf"
                    download="Abhishek_Nair_Resume.pdf"
                    className="ml-auto text-sm text-muted-foreground hover:text-primary transition-colors underline"
                  > <b>
                    Download Resume
                    </b>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-center">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
                      <p className="text-sm text-destructive">{error}</p>
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    <Send className="w-4 h-4 mr-2" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Experience Component
export function ExperiencePage() {
  const experiences: Experience[] = [
    {
      id: "1",
      companyName: "Subscribili",
      companyLogo: "/images/subscribili.png",
      positions: [
        {
          id: "1-1",
          title: "Software Engineering Intern",
          employmentPeriod: "May 2025 — October 2025",
          employmentType: "Onsite",
          description: "US Based Healthcare Technology Startup\n\n• Designed and implemented a multi-tenant web application using Strapi CMS, enabling fast deployment of localized websites for multiple clients; added support for Spanish and Mexican Spanish locales and optimized performance by migrating from SQLite to PostgreSQL.\n\n• Integrated Affirm Buy Now, Pay Later functionality via the Stripe API, delivering a seamless checkout experience with React/Redux state management for payment callbacks, loading states, and transaction validation.\n\n• Developed a real-time, vendor-agnostic monitoring system to track the health of EMR integrations (Dentrix, Eaglesoft, OpenDental), reducing manual monitoring by 90%. Implemented using Python, AWS EventBridge, SQS, and SendGrid for automated daily reports.\n\n• Designed an AWS-based secure credential management system leveraging Secrets Manager with KMS encryption, IAM role-based access control, and ECS Fargate for scalable, HIPAA-compliant data synchronization.\n\n• Built a self-service client portal enabling independent configuration of subscription plans, reducing plan creation time from hours to under 15 minutes.",
          skills: ["Strapi CMS", "React", "Redux", "PostgreSQL", "Stripe API", "Python", "AWS", "EventBridge", "SQS", "SendGrid", "KMS", "IAM", "ECS Fargate", "HIPAA"],
          isExpanded: true,
        },
      ],
      isCurrentEmployer: false,
    },
    {
      id: "2",
      companyName: "Robin Hood Army (RHA) Bangalore",
      companyLogo: "/images/robinhood.png",
      positions: [
        {
          id: "2-1",
          title: "Academy Representative",
          employmentPeriod: "February 2025 — Present",
          employmentType: "Non-Profit Organization",
          description: "Bangalore, India\n\n• Represent and manage the academic wing of RHA Bangalore as part of the Robin Hood Academy initiative\n\n• RHA's Academy program has empowered over 7,328 students across India and facilitated more than 12,348 school admissions for underserved children, with efforts spanning multiple cities\n\n• Oversee local academic activities including admissions processes and educational events; personally teach mathematics to primary students at Government School, Appareddy Palaya (Indiranagar), and work with volunteers and school administrators to address academic issues and implement solutions that enhance learning programs and improve student comprehension",
          skills: ["Education", "Community Outreach", "Volunteer Management", "Teaching", "Program Management", "Student Admissions", "Academic Administration"],
          isExpanded: true,
        },
      ],
      isCurrentEmployer: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ExperienceSection experiences={experiences} />
      <ContactSection />
    </div>
  );
}

