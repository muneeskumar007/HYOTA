// import { AlertTriangle, CheckCircle2 } from "lucide-react";
// import { useReveal } from "../hooks/useReveal";

// export default function About() {
//   const ref = useReveal();

//   const problems = [
//     "Long waiting time at hospitals",
//     "Travel in heavy traffic",
//     "Minor discomfort wastes an entire day",
//     "Standing in pharmacy queues",
//     "Waiting at diagnosis labs",
//     "Hospital visits for follow-ups",
//     "Repeated chronic management visits",
//   ];

//   const solutions = [
//     "30 minute smart appointments",
//     "Rest comfortably at home",
//     "Quick 15 minute diagnosis",
//     "Medicine delivered instantly",
//     "Home sample collection",
//     "Remote follow-up consultations",
//     "Smart chronic care management",
//   ];

//   return (
//     <section
//       id="about"
//       ref={ref}
//       className="bg-white py-20 md:py-28 px-4 md:px-6 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16 md:mb-24">
//           <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-400 mb-4 md:mb-5">
//            Home  Healthcare Experience
//           </p>

//           <h2 className="text-4xl md:text-7xl font-black tracking-tight text-black leading-[0.95]">
//             Simpler.
//             <br />
//             Smarter.
//             <br />
//             Better Care.
//           </h2>
//         </div>

//         {/* Apple Comparison Layout */}
//         <div className="grid grid-cols-2 gap-6 md:gap-12 lg:gap-32 items-stretch">

//           {/* LEFT */}
//          <div className="reveal min-w-0 flex flex-col h-full">

//             {/* Icon */}
//             <div className="mb-6 md:mb-8 flex justify-center">
//               <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border border-gray-200 flex items-center justify-center bg-gradient-to-b from-white to-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
//                 <AlertTriangle className="w-7 h-7 md:w-14 md:h-14 text-black" />
//               </div>
//             </div>

//             {/* Title */}
//             <div className="text-center mb-6 md:mb-8">
//               <h3 className="text-2xl md:text-5xl font-black tracking-tight text-black mb-4 md:mb-5 leading-tight">
//                 Traditional
//                 <br />
//                 Healthcare
//               </h3>

//               <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md mx-auto">
//                 Disconnected systems force patients to waste time,
//                 energy, and attention on logistics instead of recovery.
//               </p>
//             </div>

//             {/* List */}
//             <div className="space-y-3 md:space-y-6 flex-1 flex flex-col justify-between">
//               {problems.map((item) => (
//                 <div
//                   key={item}
                 
// className=" min-h-[90px] md:min-h-[82px] flex flex-col md:flex-row items-center md:items-start justify-center text-center md:text-left gap-3 md:gap-4 border-b border-gray-100 py-4" >
//                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm md:text-base">
//                     ✕
//                   </div>

//                   <p className="
// text-gray-700
// text-xs md:text-base
// leading-relaxed
// flex items-center
// min-h-[40px]
// ">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT */}
//         <div className="reveal-right min-w-0 flex flex-col h-full">

//             {/* Icon */}
//             <div className="mb-6 md:mb-8 flex justify-center">
//               <div className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-black flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
//                 <CheckCircle2 className="w-7 h-7 md:w-14 md:h-14 text-white" />
//               </div>
//             </div>

//             {/* Title */}
//             <div className="text-center mb-6 md:mb-8">
//               <h3 className="text-2xl md:text-5xl font-black tracking-tight text-black mb-4 md:mb-5 leading-tight">
//                 The Hyoid
//                 <br />
//                 Experience
//               </h3>

//               <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md mx-auto">
//                 A home healthcare ecosystem connecting doctors,
//                 diagnostics, pharmacy, and patients into one flow.
//               </p>
//             </div>

//             {/* List */}
//          <div className="space-y-3 md:space-y-6 flex-1 flex flex-col justify-between">
//               {solutions.map((item) => (
//                 <div
//                   key={item}
                  
// className=" min-h-[90px] md:min-h-[82px] flex flex-col md:flex-row items-center md:items-start justify-center text-center md:text-left gap-3 md:gap-4 border-b border-gray-100 py-4" >
//                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm md:text-base">
//                     ✓
//                   </div>

//                   <p className="
// text-gray-700
// text-xs md:text-base
// leading-relaxed
// flex items-center
// min-h-[40px]
// ">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Home,
  Zap,
  Truck,
  FlaskConical,
  Video,
  HeartPulse,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  const comparisons = [
    { problem: "Long waiting time at hospitals", solution: "30 minute smart appointments", Icon: Clock },
    { problem: "Travel in heavy traffic", solution: "Rest comfortably at home", Icon: Home },
    { problem: "Minor discomfort wastes an entire day", solution: "Quick 15 minute diagnosis", Icon: Zap },
    { problem: "Standing in pharmacy queues", solution: "Medicine delivered instantly", Icon: Truck },
    { problem: "Waiting at diagnosis labs", solution: "Home sample collection", Icon: FlaskConical },
    { problem: "Hospital visits for follow-ups", solution: "Remote follow-up consultations", Icon: Video },
    { problem: "Repeated chronic management visits", solution: "Smart chronic care management", Icon: HeartPulse },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="bg-white py-20 md:py-28 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-400 mb-4 md:mb-5">
            Home Healthcare Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black leading-[0.95]">
            Simpler.
            <br />
            Smarter.
            <br />
            Better Care.
          </h2>
        </div>

        {/* COMPARISON */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 lg:gap-24">

          {/* LEFT */}
          <div className="w-full">

            {/* Icon */}
            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="w-14 h-14 md:w-24 md:h-24 rounded-full border border-gray-200 flex items-center justify-center bg-gradient-to-b from-white to-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <AlertTriangle className="w-6 h-6 md:w-10 md:h-10 text-black" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-5xl font-black tracking-tight text-black mb-4 md:mb-5 leading-tight">
                Traditional
                <br />
                Healthcare
              </h3>

              {/* IMPORTANT FIX */}
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-[500px] mx-auto">
                Disconnected systems force patients to waste time,
                energy, and attention on logistics instead of recovery.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full">

            {/* Icon */}
            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-black flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <CheckCircle2 className="w-6 h-6 md:w-10 md:h-10 text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-5xl font-black tracking-tight text-black mb-4 md:mb-5 leading-tight">
                The Hyoid
                <br />
                Experience
              </h3>

              {/* IMPORTANT FIX */}
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-[500px] mx-auto">
                A home healthcare ecosystem connecting doctors,
                diagnostics, pharmacy, and patients into one flow.
              </p>
            </div>
          </div>
        </div>

        {/* COMPARISON LIST */}
        <div className="flex flex-col mt-6 md:mt-10">
          {comparisons.map(({ problem, solution, Icon }) => (
            <div
              key={problem}
              className="
                grid grid-cols-[1fr_auto_1fr]
                items-center
                gap-3 md:gap-6
                border-b border-gray-100
                py-5 md:py-6
              "
            >
              <p className="text-gray-700 text-xs md:text-base leading-relaxed text-center">
                {problem}
              </p>

              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
              </div>

              <p className="text-gray-700 text-xs md:text-base leading-relaxed text-center">
                {solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}