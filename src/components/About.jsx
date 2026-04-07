import { AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Problem */}
          <div className="reveal space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-semibold px-4 py-2 rounded-full border border-red-100">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Problem
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                Healthcare is Fragmented.
                <br />
                <span className="text-red-400">Patients Suffer for It.</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-6">
                Paper records get lost. Appointment systems are disjointed. Doctors waste precious time on admin work instead of patient care. Patients navigate chaos instead of receiving it.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'Long wait times and lost appointments',
                'Inaccessible medical records for patients',
                'Disconnected communication between doctors',
                'No centralized workflow for hospital staff',
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs">✕</span>
                  </div>
                  <span className="text-sm text-slate-600">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Solution */}
          <div className="reveal-right space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full border border-green-100">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Our Solution
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-12 -left-8 w-48 h-48 rounded-full bg-white/5" />

              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold mb-3">HYOTA Unifies It All</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  A single, elegantly designed mobile platform that brings patients, doctors, and hospital workflows into perfect harmony.
                </p>

                <div className="space-y-3">
                  {[
                    'Instant appointment booking & confirmation',
                    'Centralized, secure medical records',
                    'Digital prescriptions delivered in real time',
                    'Doctor dashboards built for efficiency',
                  ].map((s) => (
                    <div key={s} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-blue-50">{s}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 bg-white/10 rounded-2xl p-4">
                  <TrendingUp className="w-8 h-8 text-white flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold">Built for scale</div>
                    <div className="text-xs text-blue-200">Designed from day one for multi-hospital deployment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
