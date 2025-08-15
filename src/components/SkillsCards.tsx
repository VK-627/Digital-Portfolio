"use client";
import {
  SiPython,
  SiR,
  SiJavascript,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiJupyter,
  SiJenkins,
  SiAsana,  
  SiTensorflow,
} from "react-icons/si";
import { HiOutlineChartBar, HiOutlineChartPie, HiOutlinePresentationChartLine } from "react-icons/hi2";
import { BiBarChartAlt2 } from "react-icons/bi";


type IconType = React.ComponentType<{ className?: string }>;
type Skill = {
  name: string;
  icon?: IconType;
  category: "Programming Languages" | "Libraries and Frameworks" | "Tools and Platforms" | "Data Analysis and Visualization Tools";
};

const FallbackIcon: IconType = ({ className }) => (
  <HiOutlineChartBar className={className} />
);

const skills: Skill[] = [
  { name: "Python", icon: SiPython, category: "Programming Languages" },
  { name: "JavaScript", icon: SiJavascript, category: "Programming Languages" },
  { name: "R", icon: SiR, category: "Programming Languages" },

  { name: "TensorFlow", icon: SiTensorflow, category: "Libraries and Frameworks" },
  { name: "Pandas", icon: SiPandas, category: "Libraries and Frameworks" },
  { name: "NumPy", icon: SiNumpy, category: "Libraries and Frameworks" },
  { name: "Scikit-learn", icon: SiScikitlearn, category: "Libraries and Frameworks" },
  { name: "Matplotlib", icon: HiOutlineChartPie, category: "Libraries and Frameworks" },
  { name: "Seaborn", icon: HiOutlineChartBar, category: "Libraries and Frameworks" }
,

  { name: "MySQL", icon: SiMysql, category: "Tools and Platforms" },
  { name: "MongoDB", icon: SiMongodb, category: "Tools and Platforms" },
  { name: "Docker", icon: SiDocker, category: "Tools and Platforms" },
  { name: "Jenkins", icon: SiJenkins, category: "Tools and Platforms" },
  { name: "Git", icon: SiGit, category: "Tools and Platforms" },
  { name: "Asana", icon: SiAsana, category: "Tools and Platforms" },

  { name: "Power BI", icon: BiBarChartAlt2, category: "Data Analysis and Visualization Tools" },
  { name: "Exploratory Data Analysis", icon: HiOutlinePresentationChartLine, category: "Data Analysis and Visualization Tools" },
  { name: "Jupyter Notebook", icon: SiJupyter, category: "Data Analysis and Visualization Tools" },
];

const categories: Array<Skill["category"]> = [
  "Programming Languages",
  "Data Analysis and Visualization Tools",
  "Libraries and Frameworks",
  "Tools and Platforms",
  
];

function SkillItem({ name, icon }: { name: string; icon?: IconType }) {
  const IconComponent = icon;
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      {IconComponent ? <IconComponent className="h-5 w-5 opacity-90" /> : <FallbackIcon className="h-5 w-5 opacity-90" />}
      <span className="text-sm text-zinc-200">{name}</span>
    </div>
  );
}

export default function SkillsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category) => {
        const items = skills.filter((s) => s.category === category);
        return (
          <div
            key={category}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10 hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {items.map(({ name, icon }) => (
                <SkillItem key={name} name={name} icon={icon} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}


