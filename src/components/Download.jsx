import { Download, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function DownloadSection({ onDownloadClick }) {
  const ref = useReveal();

  return (
    <section id="download" ref={ref} className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="reveal relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 rounded-3xl p-10 md:p-16 overflow-hidden text-white text-center">
          {/* Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />

          {/* Grid dots */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
              <Download className="w-3.5 h-3.5" />
              Available Soon
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Get Started with
              <br />
              Hyoid Today
            </h2>
            <p className="text-blue-100 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join the waitlist and be among the first to experience seamless, modern healthcare management.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onDownloadClick}
                className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4" />
                Download Hyoid
              </button>
              <a
                href="#features"
                onClick={e => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                Explore Features
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Small trust line */}
            <p className="text-blue-200 text-xs mt-8">
              Free to download · No credit card required · Android first
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
