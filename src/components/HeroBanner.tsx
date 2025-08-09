import Image from "next/image";
import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";

type Props = {
  name: string;
  titleLine: string;
  seekingLine: string;
  summary: string;
  photoSrc: string;
};

export default function HeroBanner({ name, titleLine, seekingLine, summary, photoSrc }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27 viewBox=%270 0 40 40%27%3E%3Cdefs%3E%3Cpattern id=%27g%27 width=%2710%27 height=%2710%27 patternUnits=%27userSpaceOnUse%27%3E%3Cpath d=%27M10 0H0V10%27 stroke=%27%23ffffff%27 stroke-opacity=%270.06%27 fill=%27none%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%2740%27 height=%2740%27 fill=%27url(%23g)%27/%3E%3C/svg%3E')",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">{name}</h1>
          <p className="mt-2 text-lg sm:text-xl text-zinc-300">{titleLine}</p>
          <p className="mt-1 text-blue-400 text-base sm:text-lg font-semibold">{seekingLine}</p>
          <p className="mt-4 text-zinc-300 text-base max-w-xl">{summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/Vishwas_Kaushik_Resume.pdf" download className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:bg-zinc-200 hover:scale-105 hover:shadow-md">Download Resume</a>
            <Link href="/projects" className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">Projects</Link>
          </div>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
          <div className="h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full overflow-hidden ring-2 ring-white/15 shadow-2xl">
            <Image src={photoSrc} alt={name} width={512} height={512} priority className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}


