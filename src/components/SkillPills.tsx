import { SiPython, SiTensorflow, SiPandas, SiJupyter, SiGooglecolab, SiReact, SiNumpy } from "react-icons/si";

type Skill = { label: string; icon?: React.ComponentType<{ className?: string }> };

const iconSkills: Skill[] = [
  { label: "Python", icon: SiPython },
  { label: "TensorFlow", icon: SiTensorflow },
  { label: "Pandas", icon: SiPandas },
  { label: "NumPy", icon: SiNumpy },
  { label: "Jupyter", icon: SiJupyter },
  { label: "Colab", icon: SiGooglecolab },
  { label: "React", icon: SiReact },
];

const textSkills = ["SQL", "Power BI", "scikit-learn"]; // pills without icons

export default function SkillPills() {
  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {iconSkills.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-[1.03]"
        >
          {Icon ? <Icon className="h-5 w-5" /> : null}
          <span className="text-sm text-zinc-200">{label}</span>
        </div>
      ))}
      {textSkills.map((label) => (
        <span
          key={label}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-[1.03]"
        >
          {label}
        </span>
      ))}
    </div>
  );
}


