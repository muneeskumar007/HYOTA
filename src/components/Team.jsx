import { Github, Linkedin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const team = [
  {
    name: 'Aravind ',
    role: 'Co-Founder & CEO',
    type: 'Founder',
    initials: 'A',
    color: 'from-blue-500 to-blue-600',
    bio: 'MBBS',
  },
  {
    name: 'Saptharishi',
    role: 'Co-Founder & Product',
    type: 'Founder',
    initials: 'S',
    color: 'from-violet-500 to-violet-600',
    bio: 'MBBS',
  },
  // Product thinker with deep roots and healthcare operations.
  {
    name: 'Manasai satanly j',
    role: 'Lead Developer',
    type: 'Developer',
    initials: 'MS',
    color: 'from-teal-500 to-teal-600',
    bio: 'Full-stack engineer building performant, accessible mobile experiences.',
  },
  {
    name: 'Muneeskumar s',
    role: 'MERN Stack & App Developer',
    type: 'Developer',
    initials: 'MK',
    color: 'from-amber-500 to-orange-500',
    bio: 'UI-obsessed developer crafting pixel-perfect interfaces with care and precision.',
  },
];

export default function Team() {
  const ref = useReveal();

  return (
    <section id="team" ref={ref} className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-amber-100">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Meet the Team
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Built by People Who{' '}
            <span className="text-gradient">Care Deeply</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            A small focused team that belief health heals in comfort
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, type, initials, color, bio }, i) => (
            <div
              key={name}
              className={`reveal card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center group`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-2xl font-black text-white">{initials}</span>
              </div>

              {/* Tag */}
              <div className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
                type === 'Founder'
                  ? 'bg-blue-50 text-blue-600'
                  : 'bg-teal-50 text-teal-600'
              }`}>
                {type}
              </div>

              <h3 className="font-bold text-slate-800 text-base">{name}</h3>
              <div className="text-xs text-slate-500 font-medium mt-1 mb-3">{role}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{bio}</p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-slate-100">
                <a href="#" className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
