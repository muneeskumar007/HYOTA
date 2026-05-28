import { ImageOff } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const screens = [
  { title: 'Patient Dashboard', desc: 'Overview of health at a glance', color: 'from-blue-500 to-blue-600' },
  { title: 'Appointment Booking', desc: 'Find & book in seconds', color: 'from-teal-500 to-teal-600' },
  { title: 'Medical Records', desc: 'All your history, organized', color: 'from-violet-500 to-violet-600' },
];

export default function AppPreview() {
  const ref = useReveal();

  return (
    <section id="preview" ref={ref} className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-violet-100">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            App Screens
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            A Glimpse at What's{' '}
            <span  >Coming</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Our interface is designed with care, clarity, and clinical context in mind. Final screenshots coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {screens.map(({ title, desc, color }, i) => (
            <div
              key={title}
              className={`reveal card-hover rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Placeholder screen */}
              <div className={`h-64 bg-gradient-to-br ${color} relative flex flex-col items-center justify-center gap-3`}>
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <ImageOff className="w-7 h-7 text-white/80" strokeWidth={1.5} />
                </div>
                <div className="text-white/80 text-sm font-medium">Screenshot Coming Soon</div>

                {/* Decorative UI elements */}
                <div className="absolute top-4 left-4 right-4 h-8 bg-white/10 rounded-xl backdrop-blur-sm" />
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="h-2 bg-white/20 rounded-full w-3/4" />
                  <div className="h-2 bg-white/15 rounded-full w-1/2" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
