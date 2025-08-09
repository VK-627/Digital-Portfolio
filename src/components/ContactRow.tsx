"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function ContactRow() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vishwas.kaushik22@st.niituniversity.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 flex justify-center gap-6 text-2xl">
      <a href="https://www.linkedin.com/in/vishwaskaushik" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-blue-400 transition"><FaLinkedin /></a>
      <a href="https://github.com/VK-627" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:text-zinc-300 transition"><FaGithub /></a>
      <button type="button" onClick={copyEmail} aria-label="Copy Email" className="text-white hover:text-green-400 transition relative">
        <FaEnvelope />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-xs px-2 py-1 rounded shadow whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}


