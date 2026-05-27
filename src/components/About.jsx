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
      className="bg-white py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Apple Style Heading */}
        <div className="text-center mb-24">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-5">
            Healthcare Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-black leading-[0.95]">
            Simpler.
            <br />
            Smarter.
            <br />
            Better Care.
          </h2>
        </div>

        {/* Apple Comparison Layout */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">

          {/* LEFT */}
          <div className="reveal">
            {/* Top Image/Icon Area */}
            <div className="mb-16 flex justify-center">
              <div className="w-32 h-32 rounded-full border border-gray-200 flex items-center justify-center bg-gradient-to-b from-white to-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <AlertTriangle className="w-14 h-14 text-black" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-14">
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black mb-5">
                Traditional
                <br />
                Healthcare
              </h3>

              <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto">
                Disconnected systems force patients to waste time,
                energy, and attention on logistics instead of recovery.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {problems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-gray-100 pb-5"
                >
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    ✕
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="reveal-right">
            {/* Top Image/Icon Area */}
            <div className="mb-16 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-black flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <CheckCircle2 className="w-14 h-14 text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-14">
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black mb-5">
                The Hyoid
                <br />
                Experience
              </h3>

              <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto">
                A seamless healthcare ecosystem connecting doctors,
                diagnostics, pharmacy, and patients into one flow.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {solutions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-gray-100 pb-5"
                >
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed">
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