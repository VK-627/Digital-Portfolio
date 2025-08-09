import Link from "next/link";
import Image from "next/image";

export default function HeroPreviews() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-sm text-zinc-300 hover:text-white underline">
          ← Back to Home
        </Link>
        <a
          href="/Vishwas_Kaushik_Resume.pdf"
          download
          className="inline-block rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-zinc-200"
        >
          Download Resume
        </a>
      </div>

      {/* Banner Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.22),rgba(147,51,234,0.18)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="text-xs tracking-widest text-blue-300/80 uppercase">Banner Hero</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold">Vishwas Kaushik</h1>
            <p className="mt-2 text-lg sm:text-xl text-zinc-300">Final-year B.Tech CSE • Data Science</p>
            <p className="mt-1 text-blue-400 font-semibold">Actively seeking Data Scientist / Data Analyst roles</p>
            <p className="mt-4 text-zinc-300">
              Hands-on with ML, EDA, regression/classification, time series, and deep learning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="/Vishwas_Kaushik_Resume.pdf"
                download
                className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-zinc-200"
              >
                Download Resume
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
            <div className="h-56 w-56 sm:h-64 sm:w-64 rounded-full overflow-hidden ring-2 ring-white/15 shadow-2xl">
              <Image src="/vishwas.jpg" alt="Vishwas Kaushik" width={512} height={512} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-white/10 my-10" />

      {/* Sidebar Hero */}
      <section className="mx-auto max-w-6xl px-6 py-4 grid grid-cols-1 md:grid-cols-[320px,1fr] gap-8 items-start">
        <aside className="md:sticky md:top-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center">
            <div className="h-40 w-40 rounded-xl overflow-hidden ring-2 ring-white/10 shadow-xl">
              <Image src="/vishwas.jpg" alt="Vishwas Kaushik" width={400} height={400} className="h-full w-full object-cover" />
            </div>
            <h2 className="mt-4 text-2xl font-bold">Vishwas Kaushik</h2>
            <p className="mt-1 text-sm text-zinc-400 text-center">Final-year B.Tech CSE • Data Science</p>
            <p className="mt-1 text-blue-400 text-sm font-semibold text-center">Seeking Data Scientist / Data Analyst</p>
            <a
              href="/Vishwas_Kaushik_Resume.pdf"
              download
              className="mt-4 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-zinc-200"
            >
              Download Resume
            </a>
          </div>
        </aside>
        <div>
          <p className="text-xs tracking-widest text-blue-300/80 uppercase">Sidebar Hero</p>
          <h3 className="mt-2 text-3xl font-semibold">Turning data into decisions</h3>
          <p className="mt-3 text-zinc-300">
            Practical experience with ML workflows, EDA, model evaluation, and deployment. Comfortable with Python, SQL, Power BI, TensorFlow, and scikit-learn.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Python","SQL","Power BI","TensorFlow","scikit-learn","Pandas"].map((s)=> (
              <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-white/10 my-10" />

      {/* Glass Card Hero */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-6 sm:px-10 py-10 shadow-2xl">
          <p className="text-xs tracking-widest text-blue-300/80 uppercase text-center">Glass Card Hero</p>
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-6">
            <div className="h-28 w-28 rounded-full overflow-hidden ring-2 ring-white/10 shadow-xl">
              <Image src="/vishwas.jpg" alt="Vishwas Kaushik" width={300} height={300} className="h-full w-full object-cover" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-3xl font-extrabold">Vishwas Kaushik</h4>
              <p className="mt-1 text-zinc-300">Final-year B.Tech CSE • Data Science</p>
              <p className="mt-1 text-blue-400 font-semibold">Seeking Data Scientist / Data Analyst</p>
            </div>
          </div>
          <p className="mt-6 text-zinc-300 text-center sm:text-left">
            Specializing in machine learning, time series, and deep learning with experience in real-world projects like stock risk analysis and image classification.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href="/Vishwas_Kaushik_Resume.pdf"
              download
              className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-zinc-200"
            >
              Download Resume
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


