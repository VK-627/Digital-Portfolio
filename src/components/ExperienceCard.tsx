type Experience = {
  company: string;
  role: string;
  dates: string;
  achievements: string[];
  skills?: string;
};

const experiences: Experience[] = [
  {
    company: "CoEET - Center of Excellence in Educational Technology",
    role: "Learning Assistant",
    dates: "Aug 2023 – May 2024",
    achievements: [
      "Built a 150+ project bank aligned with industry and institutional needs.",
      "Mapped 80+ student teams per semester to projects via survey-based analysis.",
      "Processed and visualized survey data using Excel.",
      "Coordinated 14–16 team members to ensure smooth execution across desks"
    ],
    skills:
      "Data Analysis (PivotTables, Advanced Excel Functions), Survey Design, Collaboration, Research Documentation"
  },
  {
    company: "CoEET - Center of Excellence in Educational Technology",
    role: "Teaching Assistant",
    dates: "Aug 2024 – May 2025",
    achievements: [
      "Mentored 40+ students, creating surveys to assess and improve mentoring outcomes.",
      "Deployed and Managed Asana workspaces for tracking 80+ projects per semester.",
      "Automated data workflows with Google Forms + Apps Script.",
      "Improved CMS communication and feedback channels across 6+ desks."
    ],
    skills:
      "Project Coordination, Asana Administration, Google Apps Script, CMS Management, Mentoring & Communication"
  }
];

export default function ExperienceCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 ease-in-out hover:-translate-y-1"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <span className="text-xs text-zinc-400 bg-white/5 px-2 py-1 rounded-lg">
                {exp.dates}
              </span>
            </div>
            <h4 className="text-blue-300 font-medium mb-3">{exp.company}</h4>
            <ul className="space-y-1.5 leading-relaxed flex-grow">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm text-zinc-300 flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
            {exp.skills ? (
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-zinc-400">
                <span className="text-zinc-300">Skills:</span> {exp.skills}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
