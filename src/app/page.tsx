// src/app/page.tsx
"use client";
import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import Section from "../components/Section";

import SkillsCards from "../components/SkillsCards";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import ContactRow from "../components/ContactRow";

export default function Home() {

  return (
    <main className="bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f] to-[#050508] text-white min-h-screen relative">
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.015] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10">
      <HeroBanner
        name="Vishwas Kaushik"
        titleLine="Final-year B.Tech CSE • Data Science"
        seekingLine="Actively seeking Data Scientist / Data Analyst roles"
        summary="Hands-on experience in Machine Learning, Data Analysis, Predictive Modeling, and Data Visualization using Python, Power BI, MySQL, and Deep Learning."
        photoSrc="/vishwas.jpg"
      />

      <Section id="about" title="About">
        <p className="mx-auto max-w-3xl text-center md:text-left text-zinc-300 text-base md:text-lg">
        I am a data enthusiast who approaches projects with clear planning, explores solutions hands-on, and refines them for real-world impact. I value work that helps people make better decisions and take pride in being dependable — whether collaborating in a team or working independently. Always curious and eager to learn, I focus on delivering quality results and building trust through my work.
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <SkillsCards />
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceCard />
      </Section>

      <Section id="education" title="Education">
        <EducationCard />
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/projects" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold">Riskos – Stock Risk Analysis</h3>
            <p className="mt-2 text-sm text-zinc-300">ML-powered risk analysis with volatility and sentiment signals.</p>
            <span className="mt-3 inline-block text-xs text-blue-300">See details →</span>
          </Link>
          <Link href="/projects" className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold">CNN Image Classifier</h3>
            <p className="mt-2 text-sm text-zinc-300">Automated classification of medical images with CNNs.</p>
            <span className="mt-3 inline-block text-xs text-blue-300">See details →</span>
          </Link>
        </div>
      </Section>

      <Section id="contact" title="Contact Me">
        <ContactRow />
      </Section>
      </div>
    </main>
  );
}