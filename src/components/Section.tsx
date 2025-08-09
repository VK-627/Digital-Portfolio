import type { PropsWithChildren, ReactNode } from "react";
import FadeInSection from "./FadeInSection";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
}>;

export default function Section({ id, className = "", title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className={`relative py-14 sm:py-16 ${className}`}>
      {/* soft radial + noise backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_60%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27 viewBox=%270 0 40 40%27%3E%3Cdefs%3E%3Cpattern id=%27g%27 width=%2710%27 height=%2710%27 patternUnits=%27userSpaceOnUse%27%3E%3Cpath d=%27M10 0H0V10%27 stroke=%27%23ffffff%27 stroke-opacity=%270.06%27 fill=%27none%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%2740%27 height=%2740%27 fill=%27url(%23g)%27/%3E%3C/svg%3E')",
        }}
      />
      <div className="mx-auto max-w-5xl px-6">
        {title ? (
          <FadeInSection>
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
              {subtitle ? <p className="mt-2 text-zinc-400">{subtitle}</p> : null}
            </div>
          </FadeInSection>
        ) : null}
        <FadeInSection delay={200}>
          {children}
        </FadeInSection>
      </div>
    </section>
  );
}


