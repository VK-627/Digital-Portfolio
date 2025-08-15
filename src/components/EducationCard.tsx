type Education = {
  degree: string;
  specialization?: string;
  university: string;
  cgpa?: string;
  graduationYear: string;
};

const coursework: string[] = [
  "Machine Learning",
  "Predictive Modelling",
  "Inferential Statistics",
  "Numerical Methods",
  "Artificial Intelligence",
  "Agentic AI and AI Agents",
  "Data Mining",
  "Big Data",
];

const education: Education[] = [
  {
    degree: "B.Tech. in Computer Science",
    university: "NIIT UNIVERSITY",
    cgpa: "8.62",
    graduationYear: "2026"
  }
];

export default function EducationCard() {
  return (
    <div className="max-w-2xl mx-auto">
      {education.map((edu, index) => (
        <div
          key={index}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 ease-in-out hover:-translate-y-1"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              {edu.degree}
              {edu.specialization && (
                <span className="block text-blue-300 text-lg font-normal mt-1">
                  Specialization: {edu.specialization}
                </span>
              )}
            </h3>
            <h4 className="text-lg text-zinc-200 mb-3">{edu.university}</h4>
            <div className="flex justify-center items-center gap-4 text-sm text-zinc-400">
              {edu.cgpa && (
                <span className="bg-white/5 px-3 py-1 rounded-lg">
                  CGPA: {edu.cgpa}
                </span>
              )}
              <span className="bg-white/5 px-3 py-1 rounded-lg">
                2022 -  {edu.graduationYear}
              </span>
            </div>
            <div className="mt-6">
              <p className="text-sm text-zinc-400 mb-3">Relevant Coursework</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-[1.03]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
