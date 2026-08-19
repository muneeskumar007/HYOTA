 
import {
  UserPlus,
  CalendarCheck,
  Stethoscope,
  Pill,
  HeartPulse,
  FolderHeart,
  Ambulance,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    id: "01",
    icon: UserPlus,
    tag: "Register",
    title: "Create your healthcare profile",
    description:
      "Securely create your account and access personalized healthcare services instantly.",
    footer: "Takes less than 1 minute",
    color: "",
    // from-emerald-100 to-green-50
    accent: "text-emerald-600",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
  },
  {
    id: "02",
    icon: CalendarCheck,
    tag: "Appointments",
    title: "Book appointments instantly",
    description:
      "Browse your preferred nearby hospital choose and confirm",
    footer: "Smart scheduling system",
    color: "",
    // from-sky-100 to-cyan-50
    accent: "text-sky-600",
    border: "border-sky-200",
    dot: "bg-sky-500",
  },
  {
    id: "03",
    icon: Stethoscope,
    tag: "Consultation",
    title: "Diagnosed comfortably at home",
    description:
      "Get professional medical consultation through home visits or secure video sessions.",
    footer: "Accessible from anywhere",
    color: "",
    // from-violet-100 to-fuchsia-50
    accent: "text-violet-600",
    border: "border-violet-200",
    dot: "bg-violet-500",
  },
  {
    id: "04",
    icon: Stethoscope,
    tag: "Senior Doctor",
    subtag: "If needed",
    title: "Specialist teleconsult from the hub",
    description:
      "If your condition needs a senior opinion, your doctor connects live to a specialist at our main hub — right there in your room, no extra booking.",
    footer: "Same visit, instant connection",
    color: "",
    // from-purple-100 to-fuchsia-50
    accent: "text-purple-600",
    border: "border-purple-200",
    dot: "bg-purple-500",
  },
  {
    id: "05",
    icon: Pill,
    tag: "Pharmacy",
    title: "Medicines delivered to your door",
    description:
      "Prescription goes straight to our pharmacy team. Medicines packed and delivered — no trip to a chemist.",
    footer: "Within 60 min of prescription",
    color: "",
    // from-orange-100 to-amber-50
    accent: "text-orange-600",
    border: "border-orange-200",
    dot: "bg-orange-500",
  },
  {
    id: "06",
    icon: FolderHeart,
    tag: "Diagnostics",
    title: "Sample collection at home",
    description:
      "Blood, urine, or swab — our diagnostics technician visits and collects. Results uploaded directly to your app.",
    footer: "Same-day collection",
    color: "",
    // from-cyan-100 to-sky-50
    accent: "text-cyan-600",
    border: "border-cyan-200",
    dot: "bg-cyan-500",
  },
  {
    id: "07",
    icon: CalendarCheck,
    tag: "Cab Service",
    subtag: "If large test",
    title: "Cab arranged for lab visits",
    description:
      "For tests that need a lab, we send a cab to drop and pick you up — linked to your preferred hospital records.",
    footer: "Dispatched within 30 min",
    color: "",
    // from-red-100 to-orange-50
    accent: "text-red-600",
    border: "border-red-200",
    dot: "bg-red-500",
  },
  {
    id: "08",
    icon: Ambulance,
    tag: "Emergency",
    subtag: "If critical",
    title: "Transfer to your chosen hospital",
    description:
      "If hospital-level care is needed, we dispatch immediately to your preferred hospital with your medical history shared in advance.",
    footer: "Immediate response system",
    color: "0",
    // from-rose-100 to-pink-5
    accent: "text-rose-600",
    border: "border-rose-200",
    dot: "bg-rose-500",
  },
];




const BORDER_COLORS = {
  emerald: "#10b981",
  sky: "#0ea5e9",
  violet: "#8b5cf6",
  purple: "#a855f7",
  orange: "#f97316",
  cyan: "#06b6d4",
  red: "#ef4444",
  rose: "#f43f5e",
};

function getBorderColor(dotClass) {
  const key = Object.keys(BORDER_COLORS).find((c) => dotClass.includes(c));
  return BORDER_COLORS[key] || BORDER_COLORS.rose;
}

export default function WorkflowSection() {
  const containerRef = useRef(null);
  const iconRefs = useRef([]);
  const [activeMap, setActiveMap] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveMap((prev) => {
          const next = { ...prev };
          entries.forEach((entry) => {
            const idx = Number(entry.target.dataset.index);
            next[idx] = entry.isIntersecting;
          });
          return next;
        });
      },
      { threshold: 0, rootMargin: "-15% 0px -15% 0px" }
    );

    iconRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6">
      {/* Minimal Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-sky-100/40 blur-[140px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.1em] text-neutral-400 mb-4">
            Smart Home  Healthcare Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black leading-tight">
            Home Healthcare.
            <br />
            Simplified.
          </h2>

          {/* <p className="max-w-2xl mx-auto mt-6 text-neutral-500 text-base md:text-lg leading-relaxed">
            A seamless healthcare journey connecting patients, doctors,
            diagnostics, pharmacy, and emergency services into one intelligent
            platform.
          </p> */}
        </div>

        {/* Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 h-full w-px bg-neutral-200 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const right = index % 2 !== 0;
              const isActive = !!activeMap[index];
              const borderColor = getBorderColor(item.dot);

              return (
                <div
  key={item.id}
  className={`reveal relative flex items-start ${
    right ? "md:justify-end" : "md:justify-start"
  }`}
  style={{
    transitionDelay: `${index * 120}ms`,
  }}
>
                  {/* Timeline Column */}
                  <div
                    ref={(el) => (iconRefs.current[index] = el)}
                    data-index={index}
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 flex flex-col items-center z-20"
                  >
                    {/* Icon */}
                    <div className="relative flex items-center justify-center">
<div
  className="
    relative
    h-12 w-12 rounded-2xl
    flex items-center justify-center
    border-2
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
    transition-all duration-500
    hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.12)]
group-hover:-translate-y-1
  "
  style={{
    borderColor: isActive ? borderColor : "#ffffff",
    backgroundColor: "#ffffff",
    boxShadow: isActive
      ? `0 0 0 4px rgba(255,255,255,0.9), 0 0 20px ${borderColor}55`
      : `0 0 0 4px rgba(255,255,255,0.9)`,
  }}
>
  <Icon
    className={`h-5 w-5 transition-colors duration-500 ${isActive ? item.accent : "text-neutral-200"}`}
  />
</div>
                    </div>

                    {/* Step Number */}
                    <span className="mt-3 text-xs font-bold tracking-[0.25em] text-neutral-400">
                      {item.id}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="ml-20 md:ml-0 w-full md:w-[44%]">
                    <div
                      className={`
                        relative overflow-hidden rounded-[28px]
                        border ${item.border}
                        bg-white/90
                        backdrop-blur-2xl
                        p-7 md:p-8
                        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                        hover:-translate-y-2
                        hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                        transition-all duration-500
                        group
                      `}
                    >
                      {/* Soft Gradient */}
                      <div
                        className={`absolute inset-0 opacity-70 bg-gradient-to-br ${item.color}`}
                      />

                      {/* Animated Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-white/20" />

                      <div className="relative z-10">
                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-5">
                         <span
  className={`
    px-3 py-1
    rounded-full
    text-[11px]
    font-semibold
    bg-white
    border
    shadow-sm
    ${item.accent}
    ${item.border}
  `}
>
  {item.tag}
</span>

                          {item.subtag && (
                           <span
  className="
    px-3 py-1
    rounded-full
    text-[11px]
    font-semibold
    bg-white
    text-neutral-500
    border border-neutral-200
    shadow-sm
  "
>
  {item.subtag}
</span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight mb-4">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                          {item.description}
                        </p>

                        {/* Footer */}
                        <div
                          className={`mt-7 flex items-center gap-2 text-sm font-semibold ${item.accent}`}
                        >
                          <div
                            className={`h-2 w-2 rounded-full ${item.dot} animate-pulse`}
                          />
                          {item.footer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}