import { Github, Linkedin, Mail } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
const team = [
  {
    name: "Aravind",
    role: "Co-Founder & CEO",
    type: "Founder",
    initials: "A",
    avatarColor: "text-blue-500",
    avatarBorder: "border-blue-200",
    bio: "MBBS",
    github: "https://github.com/aravind",
    linkedin: "https://www.linkedin.com/in/aravind-manohar-86242934a/",
    email: "mailto:svatex.aravindmanohar@gmail.com",
  },
  {
    name: "Saptharishi",
    role: "Co-Founder & Product",
    type: "Founder",
    initials: "S",
    avatarColor: "text-violet-500",
    avatarBorder: "border-violet-200",
    bio: "MBBS",
    github: "https://github.com/saptharishi",
    linkedin: "https://www.linkedin.com/in/saptharishis",
    email: "mailto:saptharishissma@gmail.com",
  },
  {
    name: "Manasai Stanly J",
    role: "App Developer",
    type: "Developer",
    initials: "MS",
    avatarColor: "text-teal-500",
    avatarBorder: "border-teal-200",
    bio: "Full-stack engineer building performant, accessible mobile experiences.",
    github: "https://github.com/manasai",
    linkedin: "https://linkedin.com/in/manasai",
    email: "mailto:manasai@gmail.com",
  },
  {
    name: "Muneeskumar S",
    role: "  App Developer",
    type: "Developer",
    initials: "MK",
    avatarColor: "text-amber-500",
    avatarBorder: "border-amber-200",
    bio: "UI-obsessed developer crafting pixel-perfect interfaces with care and precision.",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourlinkedin",
    email: "mailto:yourmail@gmail.com",
  },
];

export default function Team() {
  const ref = useReveal();

  return (
    <section
      id="team"
      ref={ref}
      className="section-padding bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="reveal text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-amber-100">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Meet the Team
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Built by People Who{" "}
            <span  >Care Deeply</span>
          </h2>

          <p className="text-slate-500 text-base leading-relaxed">
            A small focused team that belief health heals in comfort
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          {team.map(
  ({
    name,
    role,
    type,
    initials,
    avatarColor,
    avatarBorder,
    bio,
    github,
    linkedin,
    email,
  }, i) => (
            <div
              key={name}
              className="reveal card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Avatar */}
             <div
  className={`
    w-20 h-20
    rounded-2xl
    bg-white
    border-2
    ${avatarBorder}
    flex items-center justify-center
    mx-auto mb-4
    shadow-[0_8px_25px_rgba(0,0,0,0.06)]
    group-hover:scale-105
    transition-all duration-300
  `}
>
  <span className={`text-2xl font-black ${avatarColor}`}>
    {initials}
  </span>
</div>

              {/* Tag */}
              <div
                className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
                  type === "Founder"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-teal-50 text-teal-600"
                }`}
              >
                {type}
              </div>

              <h3 className="font-bold text-slate-800 text-base">
                {name}
              </h3>

              <div className="text-xs text-slate-500 font-medium mt-1 mb-3">
                {role}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {bio}
              </p>

              {/* Social */}
              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-slate-100">

  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-black hover:bg-slate-200 transition"
  >
    <Github className="w-4 h-4" />
  </a>

  <a
    href={linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition"
  >
    <Linkedin className="w-4 h-4" />
  </a>

  <a
    href={email}
    className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-50 transition"
  >
    <Mail className="w-4 h-4" />
  </a>

</div>
            </div>
          ))}
        </div>

        {/* Mobile Infinite Horizontal Scroll */}
        <div className="md:hidden relative overflow-hidden">

          <div className="flex gap-4 animate-scroll-mobile w-max">

            {[...team, ...team].map(
              ({
                name,
                role,
                type,
                initials,
                color,
                bio,
                github,
                linkedin,
                email
              }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="w-[260px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center group"
                >
                  {/* Avatar */}
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <span className="text-2xl font-black text-white">
                      {initials}
                    </span>
                  </div>

                  {/* Tag */}
                  <div
                    className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
                      type === "Founder"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-teal-50 text-teal-600"
                    }`}
                  >
                    {type}
                  </div>

                  <h3 className="font-bold text-slate-800 text-base">
                    {name}
                  </h3>

                  <div className="text-xs text-slate-500 font-medium mt-1 mb-3">
                    {role}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {bio}
                  </p>

                  {/* Social */}
                  <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-slate-100">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={email}
                      className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Infinite Scroll Animation */}
      <style jsx>{`
        @keyframes scrollMobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }

        .animate-scroll-mobile {
          animation: scrollMobile 18s linear infinite;
        }
      `}</style>
    </section>
  );
}