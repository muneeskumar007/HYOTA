import { Download, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function DownloadSection({ onDownloadClick }) {
  const ref = useReveal();

  return (
    <section id="download" ref={ref} className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="reveal relative bg-white rounded-3xl p-10 md:p-16 overflow-hidden text-black text-center border border-neutral-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

  {/* Background Glow */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/[0.03] rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

  {/* Grid Dots */}
  <div
    className="absolute inset-0 opacity-[0.04] pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle, black 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}
  />

  <div className="relative z-10">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
      <Download className="w-3.5 h-3.5" />
      Available Soon
    </div>

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
      Get Started with
      <br />
      Hyoid Today
    </h2>

    {/* Description */}
    <p className="text-neutral-600 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
      Join the waitlist and be among the first to experience seamless,
      modern healthcare management.
    </p>

    {/* Actions */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

        <button
  onClick={onDownloadClick}
  className="px-6 py-2.5 text-xs font-semibold bg-white text-black border border-black/10  btn-secondary shadow-sm hover:shadow-md hover:text-black hover:-translate-y-0.5 transition-all duration-300"
>
  Download App
</button>

      {/* <a
        href="#features"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("features")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="text-neutral-500 hover:text-black text-sm font-medium flex items-center gap-1.5 transition-colors"
      >
        Explore Features
        <ArrowRight className="w-4 h-4" />
      </a> */}

    </div>

    {/* Footer */}
    <p className="text-neutral-400 text-xs mt-8">
      Free to download · No credit card required · Android first
    </p>

  </div>
</div>
      </div>
    </section>
  );
}
