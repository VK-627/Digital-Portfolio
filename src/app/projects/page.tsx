"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import Section from "../../components/Section";

export default function Projects() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vishwas.kaushik22@st.niituniversity.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
      {/* Top Bar: Back and Resume */}
      <div className="flex justify-between items-center px-6 py-4 max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-sm text-zinc-300 hover:text-white underline"
        >
          ← Back to Home
        </Link>
        <a
          href="/Vishwas_Kaushik_Resume.pdf"
          download
          className="inline-block rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:bg-zinc-200 hover:scale-105 hover:shadow-md"
        >
          Download Resume
        </a>
      </div>

      {/* Header */}
      <section className="max-w-2xl mx-auto text-center px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Vishwas Kaushik</h1>
        <p className="text-base sm:text-lg text-blue-400 font-semibold mb-6">
          Actively seeking Data Scientist / Data Analyst roles
        </p>
      </section>

      {/* Projects Grid (2 columns responsive) */}
      <Section title="Projects" subtitle="Here are some of my featured projects.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Riskos */}
          <ProjectCard
            title="Riskos – Stock Risk Analysis Tool"
            problem="Retail investors often lack tools to quantify portfolio risk and forecast market volatility across multiple stocks."
            approach="Developed a full-stack Python + React app with financial APIs to compute VaR, CVaR, and Sharpe Ratio. Integrated ARIMA and GARCH for volatility forecasting across Nifty50 stocks. Containerized with Docker and automated CI/CD via Jenkins."
            impact="Delivered an interactive dashboard where users can instantly analyze portfolio risk and market uncertainty, helping them make more data-informed investment decisions."
            href="https://github.com/VK-627/Riskos.git"
          />

          {/* Predictive Modeling Portfolio */}
          <ProjectCard
            title="Predictive Modeling Case Study Portfolio"
            problem="Organizations across domains need reliable ML models for forecasting, classification, and decision-making."
            approach="Completed 11 end-to-end ML case studies in Google Colab, applying regression, classification, clustering, time series forecasting, PCA, CNNs, and cross-validation. Covered diverse datasets in finance, astronomy, e-commerce, and computer vision."
            impact="Built a diverse modeling portfolio showcasing ability to adapt ML methods to different domains, translating raw data into actionable insights."
            href="https://github.com/VK-627/Predictive-Modeling-Case-Studies.git"
          />

          {/* HR Analytics */}
          <ProjectCard
            title="HR Analytics Dashboard (Employee Attrition)"
            problem="High employee attrition increases costs and disrupts workforce stability. HR teams need visibility into turnover drivers."
            approach="Designed an interactive Power BI dashboard (IBM HR dataset, ~1.4K records) with DAX measures to track attrition by department, role, and demographics. Identified low salary, overtime, and dissatisfaction as key drivers; Sales Reps showed the highest attrition (40%)."
            impact="Enabled HR teams to design targeted retention strategies by pinpointing high-risk roles and key attrition drivers."
            href="https://github.com/VK-627/HR-Analytics-Dashboard-Employee-Attrition-Power-BI.git"
          />

          {/* Rural Healthcare AI */}
          <ProjectCard
            title="Empowering Rural Healthcare through AI Solutions"
            problem="Rural healthcare systems face limited resources for early cancer detection, making accurate triage and diagnosis difficult."
            approach="Built a multimodal pipeline combining medical image models (ResNet18, DenseNet121) with an NLP component analyzing clinical reports. Late-fusion ensembles improved validation accuracy from ~53% to ~84%."
            impact="Showcased potential of AI-assisted diagnosis in low-resource settings, improving prediction robustness and enabling early intervention strategies."
            reportLink="/R&D_Report.pdf"
          />

        </div>
      </Section>

      {/* Contact Section */}
      <section className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
        <div className="flex justify-center gap-8 mb-2">
          <a
            href="https://www.linkedin.com/in/vishwaskaushik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-blue-400 text-2xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/VK-627"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-gray-400 text-2xl transition"
          >
            <FaGithub />
          </a>
          <button
            onClick={handleCopyEmail}
            aria-label="Copy Email"
            className="text-white hover:text-green-400 text-2xl transition relative"
            type="button"
          >
            <FaEnvelope />
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-xs px-2 py-1 rounded shadow">
                Copied!
              </span>
            )}
          </button>
        </div>
        <div className="text-sm text-zinc-400 text-center">
        </div>
      </section>
      </div>
    </main>
  );
}
