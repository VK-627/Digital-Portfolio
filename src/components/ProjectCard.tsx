import { FaGithub, FaFilePdf } from "react-icons/fa";

type Props = {
  title: string;
  problem: string;
  approach: string;
  impact?: string;
  href?: string;        // GitHub repo link
  reportLink?: string;  // Project report link
};

export default function ProjectCard({ 
  title, 
  problem, 
  approach, 
  impact, 
  href, 
  reportLink 
}: Props) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/8 hover:shadow-lg">
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      
      {problem && (
        <p className="mt-3 text-sm text-zinc-300">
          <span className="font-medium text-red-400">Problem:</span> {problem}
        </p>
      )}

      {approach && (
        <p className="mt-2 text-sm text-zinc-300">
          <span className="font-medium text-blue-400">Approach:</span> {approach}
        </p>
      )}

      {impact && (
        <p className="mt-3 text-sm text-zinc-300">
          <span className="font-medium text-green-400">Impact:</span> {impact}
        </p>
      )}

      <div className="mt-4 flex justify-end gap-3">
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        )}

        {reportLink && (
          <a
            href={reportLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Project Report"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
          >
            <FaFilePdf className="h-4 w-4 text-red-400" />
            <span>Project Report</span>
          </a>
        )}
      </div>
    </article>
  );
}
