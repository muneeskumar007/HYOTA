import { Shield, Zap, Building2, Smartphone } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const items = [
  { icon: Shield, label: 'Secure Data', desc: 'End-to-end encrypted', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Zap, label: 'Real-time Updates', desc: 'Instant sync across devices', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: Building2, label: 'choose Preferred Hospital ', desc: 'Built for clinical workflows', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: Smartphone, label: 'One App One Click', desc: 'Designed for on-the-go', color: 'text-violet-600', bg: 'bg-violet-50' },
];

export default function TrustBar() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-12 px-6 md:px-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map(({ icon: Icon, label, desc, color, bg }, i) => (
            <div
              key={label}
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-200 group cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-11 h-11 rounded-2xl ${bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">{label}</div>
                <div className="text-xs text-slate-400 mt-0.5 hidden sm:block">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
