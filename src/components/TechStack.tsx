"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { techStack } from "@/lib/data";

// ── Animated counter ───────────────────────────────────────────────────────────

function AnimatedCounter({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return <>{count}</>;
}

// ── Skill Pill with proficiency bar ────────────────────────────────────────────

// Map skill names to SVG filenames in public/dark
const skillToSvg: Record<string, string> = {
  React: "react.svg",
  Angular: "angular.svg",
  AngularJS: "angular.svg",
  TypeScript: "typescript.svg",
  JavaScript: "js.svg",
  "Chart.js": "chartjs.svg",
  Tailwind: "tailwind.svg",
  Bootstrap: "bootstrap.svg",
  Figma: "figma.svg",
  Storybook: "storybook.svg",
  HTML5: "html.svg",
  CSS3: "css.svg",
  "ASP.NET Web API": "dotnet.svg",
  "Ruby on Rails": "ruby.svg",
  GraphQL: "graphql.svg",
  Apollo: "apollo.svg",
  "SQL Server": "sqlserver.svg",
  PostgreSQL: "postgresql.svg",
  Elasticsearch: "elasticsearch.svg",
  Redis: "redis.svg",
  Sidekiq: "sidekiq.svg",
  "Azure Service Bus": "azure.svg",
  Kubernetes: "kubernetes.svg",
  "GitHub Actions": "github-actions.svg",
  "Infrastructure as Code": "terraform.svg",
  "CI/CD": "circleci.svg",
  Docker: "docker.svg",
  DSA: "c.svg",
  "System Design": "system-design.svg",
  Git: "git.svg",
  Python: "python.svg",
  "Machine Learning": "pytorch.svg",
  Cypress: "cypress.svg",
  "React Testing Library": "react.svg",
  Vitest: "vitest.svg",
  "Responsive Design": "css-tricks.svg",
  "Critical Thinking": "brain.svg",
  "Problem Solving": "brain.svg",
};

function SkillPill({
  skill,
  index,
  isInView,
}: {
  skill: { name: string; color: string };
  index: number;
  isInView: boolean;
}) {
  const svgFile = skillToSvg[skill.name];
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.9 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <div
        className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
        style={{
          boxShadow: `0 0 0 0 ${skill.color}00`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${skill.color}15, inset 0 0 20px ${skill.color}08`;
          (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}30`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${skill.color}00`;
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
        }}
      >
        <div className="flex items-center gap-3">
          {/* Icon or color dot */}
          {svgFile ? (
            <img
              src={`/dark/${svgFile}`}
              alt={skill.name}
              className="h-5 w-5 flex-shrink-0 rounded-md bg-white/10 p-0.5"
              style={{ backgroundColor: skill.color + '10' }}
            />
          ) : (
            <div
              className="h-2.5 w-2.5 flex-shrink-0 rounded-full transition-all duration-300 group-hover:scale-125"
              style={{
                backgroundColor: skill.color,
                boxShadow: `0 0 8px ${skill.color}40`,
              }}
            />
          )}
          {/* Name */}
          <span className="flex-1 text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white/90">
            {skill.name}
          </span>
        </div>
        {/* Hover gradient overlay */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${skill.color}05, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────────

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = Object.entries(techStack);

  const totalSkills = useMemo(
    () => Object.values(techStack).reduce((sum, skills) => sum + skills.length, 0),
    []
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-[#0a0a0a] px-4 py-24 sm:px-8 lg:px-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />

      {/* Section header */}
      <motion.div
        className="relative z-10 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-white/30">
          // technical mastery
        </h2>
        <div className="mt-2 flex items-end gap-4">
          <h3 className="font-mono text-4xl font-black tracking-tight text-white sm:text-5xl">
            My Engineering Arsenal
          </h3>
          <motion.div
            className="mb-1 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="font-mono text-lg font-bold text-white/60">
              <AnimatedCounter target={totalSkills} isInView={isInView} />
            </span>
            <span className="font-mono text-xs text-white/30">technologies</span>
          </motion.div>
        </div>
        <p className="mt-3 max-w-lg text-sm text-white/30">
          Every tool here is a brushstroke in my craft—chosen for its power to create, scale, and inspire. From AI frameworks to cloud-native stacks, I wield these technologies to architect solutions that endure and delight.
        </p>
      </motion.div>

      {/* Columns grid */}
      <div className="relative z-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map(([category, skills], catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: catIdx * 0.15 }}
          >
            {/* Category header */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                  {category}
                </h4>
                <span className="font-mono text-[10px] text-white/15">
                  {skills.length}
                </span>
              </div>
              <div className="mt-3 h-px w-full bg-white/[0.06]" />
            </div>

            {/* Skill pills */}
            <div className="flex flex-col gap-2">
              {skills.map((skill, skillIdx) => (
                <SkillPill
                  key={skill.name}
                  skill={skill}
                  index={catIdx * 4 + skillIdx}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
