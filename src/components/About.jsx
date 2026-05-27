import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  const problems = [
    "Long waiting time at hospitals",
    "Travel in heavy traffic",
    "Minor discomfort wastes an entire day",
    "Standing in pharmacy queues",
    "Waiting at diagnosis labs",
    "Hospital visits for follow-ups",
    "Repeated chronic management visits",
  ];

  const solutions = [
    "30 minute smart appointments",
    "Rest comfortably at home",
    "Quick 15 minute diagnosis",
    "Medicine delivered instantly",
    "Home sample collection",
    "Remote follow-up consultations",
    "Smart chronic care management",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="bg-white py-20 md:py-28 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-400 mb-4 md:mb-5">
            Healthcare Experience
          </p>

          <h2 className="text-4xl md:text-7xl font-black tracking-tight text-black leading-[0.95]">
            Simpler.
            <br />
            Smarter.
            <br />
            Better Care.
          </h2>
        </div>

        {/* Apple Comparison Layout */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 lg:gap-32 items-start">

          {/* LEFT */}
          <div className="reveal min-w-0">

            {/* Icon */}
            <div className="mb-10 md:mb-16 flex justify-center">
              <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border border-gray-200 flex items-center justify-center bg-gradient-to-b from-white to-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <AlertTriangle className="w-7 h-7 md:w-14 md:h-14 text-black" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-10 md:mb-14">
              <h3 className="text-2xl md:text-5xl font-black tracking-tight text-black mb-4 md:mb-5 leading-tight">
                Traditional
                <br />
                Healthcare
              </h3>

              <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md mx-auto">
                Disconnected systems force patients to waste time,
                energy, and attention on logistics instead of recovery.
              </p>
            </div>

            {/* List */}
            <div className="space-y-3 md:space-y-6">
              {problems.map((item) => (
                <div
                  key={item}
                  className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 border-b border-gray-100 pb-4"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm md:text-base">
                    ✕
                  </div>

                  <p className="text-gray-700 text-xs md:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="reveal-right min-w-0">

            {/* Icon */}
            <div className="mb-10 md:mb-16 flex justify-center">
              <div className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-black flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <CheckCircle2 className="w-7 h-7 md:w-14 md:h-14 text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-10 md:mb-14">
              <h3 className="text-2xl md:text-5xl font-black tracking-tight text-black mb-4 md:mb-5 leading-tight">
                The Hyoid
                <br />
                Experience
              </h3>

              <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md mx-auto">
                A home healthcare ecosystem connecting doctors,
                diagnostics, pharmacy, and patients into one flow.
              </p>
            </div>

            {/* List */}
            <div className="space-y-3 md:space-y-6">
              {solutions.map((item) => (
                <div
                  key={item}
                  className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 border-b border-gray-100 pb-4"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm md:text-base">
                    ✓
                  </div>

                  <p className="text-gray-700 text-xs md:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}