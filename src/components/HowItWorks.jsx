import { UserPlus, CalendarCheck, Stethoscope, FolderOpen } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Register',
    desc: 'Create your account as a patient or doctor in minutes. Secure, simple onboarding.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    glow: 'shadow-blue-500/20',
  },
  {
    step: '02',
    icon: CalendarCheck,
    title: 'Book Appointment',
    desc: 'Browse available doctors, pick a time slot, and confirm — all from your phone.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    glow: 'shadow-teal-500/20',
  },
  {
    step: '03',
    icon: Stethoscope,
    title: 'Consultation',
    desc: 'Meet your doctor, receive diagnosis and prescriptions digitally in real time.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    glow: 'shadow-violet-500/20',
  },
  {
    step: '04',
    icon: FolderOpen,
    title: 'Manage Records',
    desc: 'All your health data, visits, and prescriptions stored securely and accessible anytime.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    glow: 'shadow-amber-500/20',
  },
];

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section id="how-it-works" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-teal-100">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Up and Running in{' '}
            <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            From registration to managed care — HYOTA gets you started fast with no friction.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-gradient-to-r from-blue-200 via-teal-200 to-amber-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, icon: Icon, title, desc, color, bg, border, glow }, i) => (
              <div
                key={step}
                className={`reveal card-hover relative z-10 bg-white rounded-2xl p-6 shadow-sm border ${border} flex flex-col items-center text-center group`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-3 left-6 text-xs font-black text-slate-200 tracking-widest">{step}</div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${bg} border ${border} flex items-center justify-center mb-5 shadow-lg ${glow} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${color}`} strokeWidth={1.8} />
                </div>

                <h3 className="text-base font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>

                {/* Arrow (hidden on last) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-7 h-7 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm text-slate-400 text-xs">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
