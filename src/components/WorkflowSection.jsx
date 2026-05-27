// // WorkflowSection.jsx
// // Premium 2026 Workflow — Pure CSS animations + IntersectionObserver
// // Works on BOTH mobile AND desktop. No GSAP or react-parallax-tilt needed.
// // npm install lucide-react

// import { useEffect, useRef, useState } from "react";
// import {
//   UserPlus, CalendarCheck, Stethoscope,
//   Pill, HeartPulse, FolderHeart,
// } from "lucide-react";

// /* ─── DATA ─────────────────────────────────────────────────────────── */
// const workflow = [
//   {
//     id: "01",
//     title: "Register",
//     description: "Create your secure healthcare account in under 60 seconds.",
//     icon: UserPlus,
//     accent: { ring: "#86efac", glow: "rgba(34,197,94,0.25)", dot: "#22c55e", tagBg: "#f0fdf4", tagC: "#15803d" },
//   },
//   {
//     id: "02",
//     title: "Book Appointment",
//     description: "Browse verified doctors, pick a slot, and confirm instantly.",
//     icon: CalendarCheck,
//     accent: { ring: "#93c5fd", glow: "rgba(59,130,246,0.25)", dot: "#3b82f6", tagBg: "#eff6ff", tagC: "#1d4ed8" },
//   },
//   {
//     id: "03",
//     title: "Diagnosed at Home",
//     description: "Video consultation or home visit — care on your terms.",
//     icon: Stethoscope,
//     accent: { ring: "#c4b5fd", glow: "rgba(139,92,246,0.25)", dot: "#8b5cf6", tagBg: "#f5f3ff", tagC: "#6d28d9" },
//   },
//   {
//     id: "04",
//     title: "Medicine Delivered",
//     description: "Prescriptions fulfilled and delivered to your door quickly.",
//     icon: Pill,
//     accent: { ring: "#fca5a5", glow: "rgba(239,68,68,0.22)", dot: "#ef4444", tagBg: "#fef2f2", tagC: "#b91c1c" },
//   },
//   {
//     id: "05",
//     title: "Timely Follow-Up",
//     description: "Smart reminders, health tracking, and check-in notifications.",
//     icon: HeartPulse,
//     accent: { ring: "#fdba74", glow: "rgba(249,115,22,0.22)", dot: "#f97316", tagBg: "#fff7ed", tagC: "#c2410c" },
//   },
//   {
//     id: "06",
//     title: "Manage Records",
//     description: "Every prescription and report, organized and accessible 24/7.",
//     icon: FolderHeart,
//     accent: { ring: "#5eead4", glow: "rgba(20,184,166,0.25)", dot: "#14b8a6", tagBg: "#f0fdfa", tagC: "#0f766e" },
//   },
// ];

// /* ─── HOOK — fires once when element enters viewport ─────────────────*/
// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           io.disconnect();
//         }
//       },
//       { threshold, rootMargin: "0px 0px -20px 0px" }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, [threshold]);
//   return [ref, visible];
// }

// /* ─── KEYFRAMES injected once ────────────────────────────────────── */
// const KEYFRAMES = `
//   @keyframes wf-ping {
//     75%, 100% { transform: scale(2.2); opacity: 0; }
//   }
//   @keyframes wf-barfill {
//     from { width: 0%; }
//     to   { width: 100%; }
//   }
//   @keyframes wf-float {
//     0%, 100% { transform: translateY(0px); }
//     50%       { transform: translateY(-5px); }
//   }
// `;

// /* ─── SCROLL PROGRESS LINE (desktop only) ───────────────────────── */
// function ProgressLine({ sectionRef }) {
//   const lineRef = useRef(null);
//   useEffect(() => {
//     const section = sectionRef.current;
//     const line = lineRef.current;
//     if (!section || !line) return;
//     const update = () => {
//       const { top, height } = section.getBoundingClientRect();
//       const vh = window.innerHeight;
//       const p = Math.min(1, Math.max(0, (vh * 0.25 - top) / (height * 0.85)));
//       line.style.transform = `scaleY(${p})`;
//     };
//     window.addEventListener("scroll", update, { passive: true });
//     update();
//     return () => window.removeEventListener("scroll", update);
//   }, [sectionRef]);

//   return (
//     /* hidden on mobile, shown md+ */
//     <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] pointer-events-none">
//       <div className="w-full h-full rounded-full bg-slate-100" />
//       <div
//         ref={lineRef}
//         className="absolute inset-0 rounded-full origin-top"
//         style={{
//           background: "linear-gradient(to bottom,#22c55e,#3b82f6,#8b5cf6,#ef4444,#f97316,#14b8a6)",
//           transform: "scaleY(0)",
//           transition: "transform 0.08s linear",
//         }}
//       />
//     </div>
//   );
// }

// /* ─── DESKTOP DOT ────────────────────────────────────────────────── */
// function DesktopDot({ dot, ring, visible }) {
//   return (
//     <div
//       className="hidden md:flex w-[72px] flex-shrink-0 items-center justify-center"
//       style={{ position: "relative", zIndex: 3 }}
//     >
//       {/* ping ring */}
//       <div
//         style={{
//           position: "absolute",
//           width: 34, height: 34,
//           borderRadius: "50%",
//           background: dot,
//           opacity: visible ? 0.22 : 0,
//           animation: visible ? "wf-ping 1.8s cubic-bezier(0,0,0.2,1) infinite" : "none",
//           transition: "opacity 0.4s",
//         }}
//       />
//       {/* solid dot */}
//       <div
//         style={{
//           width: 16, height: 16,
//           borderRadius: "50%",
//           background: dot,
//           border: "3px solid white",
//           boxShadow: visible ? `0 0 0 3px ${ring}, 0 4px 18px ${dot}99` : "none",
//           transform: visible ? "scale(1)" : "scale(0)",
//           transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.5s",
//           position: "relative",
//           zIndex: 1,
//         }}
//       />
//     </div>
//   );
// }

// /* ─── CARD ───────────────────────────────────────────────────────── */
// function Card({ item, visible, delay }) {
//   const { icon: Icon, accent } = item;
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position: "relative",
//         borderRadius: 24,
//         overflow: "hidden",
//         padding: "24px 24px 20px",
//         background: "white",
//         border: `1px solid ${hovered ? accent.ring : "rgba(226,232,240,0.9)"}`,
//         boxShadow: hovered
//           ? `0 20px 56px ${accent.glow}, 0 4px 20px rgba(0,0,0,0.06)`
//           : "0 2px 14px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)",
//         transform: visible
//           ? hovered ? "translateY(-5px)" : "translateY(0) scale(1)"
//           : "translateY(44px) scale(0.96)",
//         opacity: visible ? 1 : 0,
//         transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
//                      transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
//                      box-shadow 0.3s ease,
//                      border-color 0.3s ease`,
//         cursor: "default",
//         userSelect: "none",
//       }}
//     >
//       {/* Shimmer sweep */}
//       <div style={{
//         position: "absolute", inset: 0, borderRadius: 24, pointerEvents: "none",
//         background: `linear-gradient(105deg, transparent 30%, ${accent.ring}28 50%, transparent 70%)`,
//         backgroundSize: "200% 100%",
//         backgroundPosition: hovered ? "200% 0" : "-200% 0",
//         transition: "background-position 0.65s ease",
//       }} />

//       {/* Glow patch */}
//       <div style={{
//         position: "absolute", top: "-20%", right: "-15%",
//         width: 160, height: 160, borderRadius: "50%", pointerEvents: "none",
//         background: `radial-gradient(circle, ${accent.glow} 0%, transparent 70%)`,
//         opacity: hovered ? 1 : 0,
//         transition: "opacity 0.4s",
//       }} />

//       {/* Top row: step number + icon */}
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, position: "relative", zIndex: 1 }}>
//         <span style={{
//           fontSize: 44, fontWeight: 900, lineHeight: 1,
//           color: accent.ring,
//           opacity: hovered ? 0.85 : 0.45,
//           transition: "opacity 0.3s",
//         }}>
//           {item.id}
//         </span>

//         {/* Icon box */}
//         <div style={{
//           width: 56, height: 56, borderRadius: 18,
//           background: `linear-gradient(135deg, ${accent.dot}ee, ${accent.dot}aa)`,
//           display: "flex", alignItems: "center", justifyContent: "center",
//           position: "relative",
//           boxShadow: hovered
//             ? `0 8px 28px ${accent.glow}, 0 0 0 6px ${accent.ring}44`
//             : `0 4px 14px ${accent.glow}`,
//           transform: hovered ? "scale(1.11) rotate(-4deg)" : "scale(1) rotate(0deg)",
//           transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
//         }}>
//           <Icon style={{ width: 24, height: 24, color: "white", strokeWidth: 1.8 }} />
//           {/* Orbit ring */}
//           <div style={{
//             position: "absolute", inset: 0, borderRadius: 18,
//             border: `2px solid ${accent.ring}`,
//             opacity: hovered ? 1 : 0,
//             transform: hovered ? "scale(1.28)" : "scale(1)",
//             transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
//           }} />
//         </div>
//       </div>

//       {/* Body */}
//       <div style={{ position: "relative", zIndex: 1 }}>
//         <span style={{
//           display: "inline-block", fontSize: 10, fontWeight: 700,
//           letterSpacing: "0.12em", textTransform: "uppercase",
//           padding: "4px 12px", borderRadius: 999, marginBottom: 10,
//           background: accent.tagBg, color: accent.tagC,
//         }}>
//           Step {item.id}
//         </span>

//         <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 6, color: "#0f172a" }}>
//           {item.title}
//         </h3>
//         <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, margin: 0 }}>
//           {item.description}
//         </p>

//         {/* Progress bar */}
//         <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
//           <div style={{ flex: 1, height: 3, borderRadius: 99, background: "#f1f5f9", overflow: "hidden" }}>
//             <div style={{
//               height: "100%", borderRadius: 99,
//               background: `linear-gradient(to right, ${accent.dot}, ${accent.ring})`,
//               width: visible ? "100%" : "0%",
//               transition: `width 1s cubic-bezier(0.16,1,0.3,1) ${delay + 400}ms`,
//             }} />
//           </div>
//           <span style={{ fontSize: 12, fontWeight: 700, color: accent.dot }}>✓</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ─── SINGLE ROW (one card, alternating sides on desktop) ─────────── */
// function WorkflowRow({ item, index }) {
//   const isRight = index % 2 !== 0; // even = left side, odd = right side
//   const [cardRef, visible] = useInView(0.12);
//   const { accent } = item;
//   const delay = index * 60;

//   return (
//     <div style={{ position: "relative" }}>

//       {/* ── MOBILE connector header ── */}
//       <div className="flex md:hidden items-center gap-3 mb-3 pl-1">
//         <div style={{ position: "relative", width: 16, height: 16, flexShrink: 0 }}>
//           <div style={{
//             position: "absolute", inset: -6, borderRadius: "50%",
//             background: accent.dot, opacity: 0.2,
//             animation: "wf-ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
//           }} />
//           <div style={{ width: 16, height: 16, borderRadius: "50%", background: accent.dot, position: "relative", zIndex: 1 }} />
//         </div>
//         <div style={{ flex: 1, height: 1.5, background: accent.dot, opacity: 0.25 }} />
//         <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", color: accent.dot, opacity: 0.5 }}>
//           {item.id}
//         </span>
//       </div>

//       {/* ── MOBILE: full-width card ── */}
//       <div ref={cardRef} className="block md:hidden">
//         <Card item={item} visible={visible} delay={delay} />
//       </div>

//       {/* ── DESKTOP: two-column alternating layout ── */}
//       <div className="hidden md:flex items-center">
//         {/* Left half */}
//         <div style={{ width: "calc(50% - 36px)", display: "flex", justifyContent: "flex-end" }}>
//           {!isRight && (
//             <div ref={cardRef} style={{ width: "93%" }}>
//               <Card item={item} visible={visible} delay={delay} />
//             </div>
//           )}
//         </div>

//         {/* Center dot */}
//         <DesktopDot dot={accent.dot} ring={accent.ring} visible={visible} />

//         {/* Right half */}
//         <div style={{ width: "calc(50% - 36px)", display: "flex", justifyContent: "flex-start" }}>
//           {isRight && (
//             <div ref={cardRef} style={{ width: "93%" }}>
//               <Card item={item} visible={visible} delay={delay} />
//             </div>
//           )}
//         </div>
//       </div>

//     </div>
//   );
// }

// /* ─── HEADER ─────────────────────────────────────────────────────── */
// function SectionHeader() {
//   const [ref, visible] = useInView(0.2);
//   return (
//     <div
//       ref={ref}
//       style={{
//         textAlign: "center", marginBottom: 52,
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0)" : "translateY(28px)",
//         transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
//       }}
//     >
//       <div style={{
//         display: "inline-flex", alignItems: "center", gap: 6,
//         fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
//         padding: "6px 16px", borderRadius: 999,
//         background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0",
//         marginBottom: 16,
//       }}>
//         <span style={{
//           width: 6, height: 6, borderRadius: "50%", background: "#22c55e",
//           animation: "wf-ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
//           display: "inline-block",
//         }} />
//         How It Works
//       </div>

//       <h2 style={{
//         fontSize: "clamp(22px, 4vw, 40px)", fontWeight: 900,
//         lineHeight: 1.1, letterSpacing: "-0.02em",
//         color: "#0f172a", marginBottom: 12,
//       }}>
//         From Registration to{" "}
//         <span style={{
//           background: "linear-gradient(135deg,#22c55e 0%,#14b8a6 50%,#3b82f6 100%)",
//           WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
//         }}>
//           Complete Care
//         </span>
//       </h2>

//       <p style={{ color: "#64748b", fontSize: "clamp(13px,2vw,16px)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
//         Six seamless steps to a smarter, healthier you — all from your phone.
//       </p>
//     </div>
//   );
// }

// /* ─── COMPLETION BADGE ───────────────────────────────────────────── */
// function CompletionBadge() {
//   const [ref, visible] = useInView(0.4);
//   return (
//     <div
//       ref={ref}
//       style={{
//         display: "flex", justifyContent: "center", marginTop: 48,
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.95)",
//         transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)",
//       }}
//     >
//       <div style={{
//         display: "flex", alignItems: "center", gap: 16,
//         padding: "14px 28px", borderRadius: 20,
//         background: "linear-gradient(135deg,#f0fdf4,#f0fdfa)",
//         border: "1px solid #bbf7d0",
//         boxShadow: "0 4px 32px rgba(34,197,94,0.12)",
//         animation: "wf-float 4s ease-in-out infinite",
//       }}>
//         <div style={{
//           width: 42, height: 42, borderRadius: 14, flexShrink: 0,
//           background: "linear-gradient(135deg,#22c55e,#14b8a6)",
//           display: "flex", alignItems: "center", justifyContent: "center",
//         }}>
//           <HeartPulse style={{ width: 20, height: 20, color: "white", strokeWidth: 2 }} />
//         </div>
//         <div>
//           <div style={{ fontSize: 13, fontWeight: 800, color: "#0f172a" }}>Complete Healthcare Journey</div>
//           <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>6 steps · Fully mobile-first · Secure & private</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ─── ROOT ───────────────────────────────────────────────────────── */
// export default function WorkflowSection() {
//   const sectionRef = useRef(null);

//   // Inject keyframes once
//   useEffect(() => {
//     const id = "wf-keyframes";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.textContent = KEYFRAMES;
//       document.head.appendChild(style);
//     }
//     return () => {
//       const el = document.getElementById(id);
//       if (el) el.remove();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{ position: "relative", overflow: "hidden", background: "white", padding: "80px 16px" }}
//     >
//       {/* Ambient blobs */}
//       <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
//         <div style={{ position: "absolute", top: "5%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(34,197,94,.05) 0%,transparent 70%)", filter: "blur(40px)" }} />
//         <div style={{ position: "absolute", bottom: "5%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(20,184,166,.05) 0%,transparent 70%)", filter: "blur(40px)" }} />
//         <div style={{ position: "absolute", top: "40%", left: "30%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,.03) 0%,transparent 70%)", filter: "blur(60px)" }} />
//         {/* Subtle grid */}
//         <div style={{
//           position: "absolute", inset: 0, opacity: 0.025,
//           backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,1) 1px,transparent 1px)",
//           backgroundSize: "48px 48px",
//         }} />
//       </div>

//       <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto" }}>
//         <SectionHeader />

//         {/* Timeline */}
//         <div style={{ position: "relative" }}>
//           <ProgressLine sectionRef={sectionRef} />

//           {/* Mobile left line */}
//           <div
//             className="block md:hidden"
//             style={{
//               position: "absolute", left: 7, top: 0, bottom: 0, width: 2,
//               borderRadius: 4,
//               background: "linear-gradient(to bottom,#22c55e,#3b82f6,#8b5cf6,#ef4444,#f97316,#14b8a6)",
//               zIndex: 0,
//             }}
//           />

//           <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
//             {workflow.map((item, index) => (
//               <WorkflowRow key={item.id} item={item} index={index} />
//             ))}
//           </div>
//         </div>

//         <CompletionBadge />
//       </div>
//     </section>
//   );
// }








import { useEffect, useRef, useState, useCallback } from "react";
import {
  UserPlus, CalendarCheck, Stethoscope,
  Pill, HeartPulse, FolderHeart,
} from "lucide-react";

/* ─── DATA ───────────────────────────────────────────────────────── */
const STEPS = [
  { id:"01", title:"Register",            desc:"Create your secure healthcare account in under 60 seconds.",        icon:UserPlus,    ring:"#86efac", glow:"rgba(34,197,94,0.22)",   dot:"#22c55e", tagBg:"#f0fdf4", tagC:"#15803d", iconBg:"linear-gradient(135deg,#22c55e,#4ade80)" },
  { id:"02", title:"Book Appointment",    desc:"Browse verified doctors, pick a slot, and confirm instantly.",      icon:CalendarCheck,ring:"#93c5fd", glow:"rgba(59,130,246,0.22)",  dot:"#3b82f6", tagBg:"#eff6ff", tagC:"#1d4ed8", iconBg:"linear-gradient(135deg,#3b82f6,#60a5fa)" },
  { id:"03", title:"Diagnosed at Home",   desc:"Video consultation or home visit — care on your terms.",            icon:Stethoscope,  ring:"#c4b5fd", glow:"rgba(139,92,246,0.22)",  dot:"#8b5cf6", tagBg:"#f5f3ff", tagC:"#6d28d9", iconBg:"linear-gradient(135deg,#8b5cf6,#a78bfa)" },
  { id:"04", title:"Medicine Delivered",  desc:"Prescriptions fulfilled and delivered to your door quickly.",       icon:Pill,         ring:"#fca5a5", glow:"rgba(239,68,68,0.20)",   dot:"#ef4444", tagBg:"#fef2f2", tagC:"#b91c1c", iconBg:"linear-gradient(135deg,#ef4444,#f87171)" },
  { id:"05", title:"Timely Follow-Up",    desc:"Smart reminders, health tracking, and check-in notifications.",     icon:HeartPulse,   ring:"#fdba74", glow:"rgba(249,115,22,0.20)",  dot:"#f97316", tagBg:"#fff7ed", tagC:"#c2410c", iconBg:"linear-gradient(135deg,#f97316,#fb923c)" },
  { id:"06", title:"Manage Records",      desc:"Every prescription and report, organized and accessible 24/7.",     icon:FolderHeart,  ring:"#5eead4", glow:"rgba(20,184,166,0.22)",  dot:"#14b8a6", tagBg:"#f0fdfa", tagC:"#0f766e", iconBg:"linear-gradient(135deg,#14b8a6,#2dd4bf)" },
];

const KEYFRAMES = `
  @keyframes wf-ping  { 0%{transform:scale(1);opacity:.5} 75%,100%{transform:scale(2.4);opacity:0} }
  @keyframes wf-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
  @keyframes wf-pulse { 0%,100%{opacity:1} 50%{opacity:.45} }
`;

/* ─── useRevealCard ─────────────────────────────────────────────── */
// Attaches to a card element; fires `onReveal` once when it enters viewport.
function useRevealCard(onReveal, delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setTimeout(onReveal, delay);
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    // Also check immediately if already in view
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 1) {
      setTimeout(onReveal, delay + 60);
    } else {
      io.observe(el);
    }
    return () => io.disconnect();
  }, []); // eslint-disable-line
  return ref;
}

/* ─── CARD ───────────────────────────────────────────────────────── */
function Card({ step, delay }) {
  const { icon: Icon } = step;
  const [visible, setVisible]   = useState(false);
  const [barFill, setBarFill]   = useState(false);
  const [hovered, setHovered]   = useState(false);

  const onReveal = useCallback(() => {
    setVisible(true);
    setTimeout(() => setBarFill(true), 420);
  }, []);

  const ref = useRevealCard(onReveal, delay);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 22,
        overflow: "hidden",
        padding: "22px 20px 18px",
        background: "#fff",
        border: `1px solid ${hovered ? step.ring : "rgba(226,232,240,0.9)"}`,
        boxShadow: hovered
          ? `0 22px 56px ${step.glow}, 0 4px 20px rgba(0,0,0,0.06)`
          : "0 2px 14px rgba(0,0,0,0.04)",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? "translateY(-5px) scale(1)" : "translateY(0) scale(1)"
          : "translateY(38px) scale(0.97)",
        transition: [
          `opacity .62s cubic-bezier(.16,1,.3,1) ${delay}ms`,
          `transform .62s cubic-bezier(.16,1,.3,1) ${delay}ms`,
          "box-shadow .28s ease",
          "border-color .28s ease",
        ].join(", "),
        cursor: "default",
        userSelect: "none",
        willChange: "transform, opacity",
      }}
    >
      {/* Shimmer */}
      <div style={{
        position:"absolute", inset:0, borderRadius:22, pointerEvents:"none",
        background:`linear-gradient(105deg,transparent 30%,${step.ring}28 50%,transparent 70%)`,
        backgroundSize:"200% 100%",
        backgroundPosition: hovered ? "200% 0" : "-200% 0",
        transition:"background-position .6s ease",
      }}/>
      {/* Glow patch */}
      <div style={{
        position:"absolute", top:"-18%", right:"-14%",
        width:140, height:140, borderRadius:"50%", pointerEvents:"none",
        background:`radial-gradient(circle,${step.glow} 0%,transparent 70%)`,
        opacity: hovered ? 1 : 0, transition:"opacity .35s",
      }}/>

      {/* Top row */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:15, position:"relative", zIndex:1 }}>
        <span style={{ fontSize:40, fontWeight:900, lineHeight:1, color:step.ring, opacity: hovered ? 0.85 : 0.42, transition:"opacity .28s" }}>
          {step.id}
        </span>
        <div style={{
          width:52, height:52, borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", position:"relative",
          background: step.iconBg,
          boxShadow: hovered ? `0 8px 28px ${step.glow}, 0 0 0 6px ${step.ring}44` : `0 4px 14px ${step.glow}`,
          transform: hovered ? "scale(1.13) rotate(-4deg)" : "scale(1) rotate(0deg)",
          transition: "all .38s cubic-bezier(.34,1.56,.64,1)",
        }}>
          <Icon style={{ width:22, height:22, color:"white", strokeWidth:1.8 }} />
          <div style={{
            position:"absolute", inset:0, borderRadius:16,
            border:`2px solid ${step.ring}`,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1.30)" : "scale(1)",
            transition: "all .38s cubic-bezier(.34,1.56,.64,1)",
          }}/>
        </div>
      </div>

      {/* Body */}
      <div style={{ position:"relative", zIndex:1 }}>
        <span style={{
          display:"inline-block", fontSize:10, fontWeight:700,
          letterSpacing:".11em", textTransform:"uppercase",
          padding:"4px 11px", borderRadius:999, marginBottom:9,
          background:step.tagBg, color:step.tagC,
        }}>Step {step.id}</span>
        <h3 style={{ fontSize:17, fontWeight:800, letterSpacing:"-.02em", marginBottom:5, color:"#0f172a" }}>
          {step.title}
        </h3>
        <p style={{ fontSize:13, color:"#64748b", lineHeight:1.68, margin:0 }}>
          {step.desc}
        </p>
        {/* Progress bar */}
        <div style={{ marginTop:13, display:"flex", alignItems:"center", gap:7 }}>
          <div style={{ flex:1, height:3, borderRadius:99, background:"#f1f5f9", overflow:"hidden" }}>
            <div style={{
              height:"100%", borderRadius:99,
              background:`linear-gradient(to right,${step.dot},${step.ring})`,
              width: barFill ? "100%" : "0%",
              transition: `width 1.1s cubic-bezier(.16,1,.3,1) ${delay}ms`,
            }}/>
          </div>
          <span style={{ fontSize:12, fontWeight:700, color:step.dot }}>✓</span>
        </div>
      </div>
    </div>
  );
}

/* ─── DOT (desktop timeline) ─────────────────────────────────────── */
function DesktopDot({ step, visible }) {
  return (
    <div className="hidden md:flex" style={{ width:72, flexShrink:0, alignItems:"center", justifyContent:"center", position:"relative", zIndex:3 }}>
      <div style={{
        position:"absolute", width:32, height:32, borderRadius:"50%",
        background: step.dot, opacity: visible ? 0.22 : 0,
        animation: visible ? "wf-ping 1.9s cubic-bezier(0,0,.2,1) infinite" : "none",
        transition:"opacity .4s",
      }}/>
      <div style={{
        width:16, height:16, borderRadius:"50%",
        background: step.dot, border:"3px solid white",
        boxShadow: visible ? `0 0 0 3px ${step.ring}, 0 4px 18px ${step.dot}99` : "none",
        transform: visible ? "scale(1)" : "scale(0)",
        transition:"transform .5s cubic-bezier(.34,1.56,.64,1) .05s, box-shadow .5s .05s",
        position:"relative", zIndex:1,
      }}/>
    </div>
  );
}

/* ─── MOBILE DOT ─────────────────────────────────────────────────── */
function MobileDot({ step, visible }) {
  return (
    <div style={{ position:"relative", width:18, height:18, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{
        position:"absolute", width:26, height:26, borderRadius:"50%",
        background:step.dot, opacity: visible ? 0.25 : 0,
        animation: visible ? "wf-ping 1.9s cubic-bezier(0,0,.2,1) infinite" : "none",
        transition:"opacity .4s",
      }}/>
      <div style={{
        width:14, height:14, borderRadius:"50%", background:step.dot,
        position:"relative", zIndex:1,
        transform: visible ? "scale(1)" : "scale(0)",
        transition:"transform .45s cubic-bezier(.34,1.56,.64,1)",
      }}/>
    </div>
  );
}

/* ─── ROW ────────────────────────────────────────────────────────── */
function WorkflowRow({ step, index }) {
  const isRight = index % 2 !== 0;
  const delay   = index * 70;

  // Shared visible state — driven by whichever card is rendered (mobile or desktop)
  const [visible, setVisible] = useState(false);
  const reveal = useCallback(() => setVisible(true), []);

  // We need a ref-based observer for the dot visibility separate from the card
  // The Card component handles its own visibility internally; we mirror it here for dots.
  // We track via a sentinel div that shares the same observer timing.
  const sentinelRef = useRef(null);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { io.disconnect(); setTimeout(reveal, delay + 80); } },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) { setTimeout(reveal, delay + 140); }
    else { io.observe(el); }
    return () => io.disconnect();
  }, []); // eslint-disable-line

  return (
    <div ref={sentinelRef} style={{ position:"relative", zIndex:1 }}>

      {/* ── MOBILE ── */}
      <div className="flex md:hidden flex-col">
        {/* Connector row */}
        <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:9, paddingLeft:2 }}>
          <MobileDot step={step} visible={visible} />
          <div style={{ flex:1, height:1.5, background:step.dot, opacity:.25 }}/>
          <span style={{ fontSize:10, fontWeight:900, letterSpacing:".14em", color:step.dot, opacity:.4 }}>{step.id}</span>
        </div>
        {/* Card — full width, padded to clear spine */}
        <div style={{ paddingLeft:30 }}>
          <Card step={step} delay={delay} />
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex items-center">
        {/* Left half */}
        <div style={{ width:"calc(50% - 36px)", display:"flex", justifyContent:"flex-end" }}>
          {!isRight && (
            <div style={{ width:"93%" }}><Card step={step} delay={delay} /></div>
          )}
        </div>
        <DesktopDot step={step} visible={visible} />
        {/* Right half */}
        <div style={{ width:"calc(50% - 36px)", display:"flex", justifyContent:"flex-start" }}>
          {isRight && (
            <div style={{ width:"93%" }}><Card step={step} delay={delay} /></div>
          )}
        </div>
      </div>

    </div>
  );
}

/* ─── HEADER ─────────────────────────────────────────────────────── */
function SectionHeader() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if(e.isIntersecting){setVis(true);io.disconnect();} }, { threshold:.15 });
    if (el.getBoundingClientRect().top < window.innerHeight) setVis(true);
    else io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ textAlign:"center", marginBottom:44, opacity: vis?1:0, transform: vis?"translateY(0)":"translateY(26px)", transition:"opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1)" }}>
      <div style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:11, fontWeight:700, letterSpacing:".09em", textTransform:"uppercase", padding:"6px 16px", borderRadius:999, background:"#f0fdf4", color:"#15803d", border:"1px solid #bbf7d0", marginBottom:14 }}>
        <span style={{ width:6, height:6, borderRadius:"50%", background:"#22c55e", display:"inline-block", animation:"wf-pulse 2s ease-in-out infinite" }}/>
        How It Works
      </div>
      <h2 style={{ fontSize:"clamp(20px,4vw,38px)", fontWeight:900, lineHeight:1.1, letterSpacing:"-.025em", color:"#0f172a", marginBottom:10 }}>
      Up and Running in{" "}
        <span style={{ background:"linear-gradient(135deg,#22c55e 0%,#14b8a6 50%,#3b82f6 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
         6 Simple Steps
        </span>
      </h2>
      <p className="text-slate-500 text-base leading-relaxed">
            we believe home is where healing  happens. Our streamlined process connects patients with top doctors, making healthcare more accessible and convenient than ever.
          </p>
    </div>
  );
}

/* ─── PROGRESS SPINE (desktop) ───────────────────────────────────── */
function ProgressSpine({ sectionRef }) {
  const lineRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;
    const update = () => {
      const { top, height } = section.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * .22 - top) / (height * .82)));
      line.style.transform = `scaleY(${p})`;
    };
    window.addEventListener("scroll", update, { passive:true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [sectionRef]);

  return (
    <div className="hidden md:block" style={{ position:"absolute", left:"50%", transform:"translateX(-50%)", top:0, height:"100%", width:2, pointerEvents:"none", zIndex:0 }}>
      <div style={{ width:"100%", height:"100%", background:"#f1f5f9", borderRadius:4 }}/>
      <div ref={lineRef} style={{ position:"absolute", inset:0, borderRadius:4, transformOrigin:"top", transform:"scaleY(0)", transition:"transform .08s linear", background:"linear-gradient(to bottom,#22c55e,#3b82f6,#8b5cf6,#ef4444,#f97316,#14b8a6)" }}/>
    </div>
  );
}

/* ─── COMPLETION BADGE ───────────────────────────────────────────── */
function CompletionBadge() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if(e.isIntersecting){setVis(true);io.disconnect();} }, { threshold:.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ display:"flex", justifyContent:"center", marginTop:40, opacity:vis?1:0, transform:vis?"translateY(0) scale(1)":"translateY(20px) scale(.96)", transition:"all .75s cubic-bezier(.34,1.56,.64,1)" }}>
      <div style={{ display:"flex", alignItems:"center", gap:13, padding:"13px 24px", borderRadius:20, background:"linear-gradient(135deg,#f0fdf4,#f0fdfa)", border:"1px solid #bbf7d0", boxShadow:"0 4px 28px rgba(34,197,94,.1)", animation:"wf-float 4s ease-in-out infinite" }}>
        <div style={{ width:40, height:40, borderRadius:13, background:"linear-gradient(135deg,#22c55e,#14b8a6)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
          <HeartPulse style={{ width:19, height:19, color:"white", strokeWidth:2 }}/>
        </div>
        <div>
          <div style={{ fontSize:13, fontWeight:800, color:"#0f172a" }}>Complete Healthcare Journey</div>
          <div style={{ fontSize:11, color:"#64748b", marginTop:1 }}>6 steps · Fully mobile-first · Secure &amp; private</div>
        </div>
      </div>
    </div>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────────── */
export default function WorkflowSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const id = "wf-kf";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id; s.textContent = KEYFRAMES;
      document.head.appendChild(s);
    }
    return () => document.getElementById("wf-kf")?.remove();
  }, []);

  return (
    <section ref={sectionRef} style={{ position:"relative", overflow:"hidden", background:"#fff", padding:"56px 16px 60px" }}>
      {/* Ambient blobs */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-4%", left:"-7%", width:360, height:360, borderRadius:"50%", background:"radial-gradient(circle,rgba(34,197,94,.05) 0%,transparent 70%)", filter:"blur(40px)" }}/>
        <div style={{ position:"absolute", bottom:"-4%", right:"-7%", width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle,rgba(20,184,166,.05) 0%,transparent 70%)", filter:"blur(40px)" }}/>
        <div style={{ position:"absolute", inset:0, opacity:.021, backgroundImage:"linear-gradient(rgba(0,0,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,1) 1px,transparent 1px)", backgroundSize:"48px 48px" }}/>
      </div>

      <div style={{ position:"relative", zIndex:1, maxWidth:860, margin:"0 auto" }}>
        <SectionHeader />

        <div style={{ position:"relative" }}>
          <ProgressSpine sectionRef={sectionRef} />

          {/* Mobile left spine */}
          <div className="block md:hidden" style={{ position:"absolute", left:9, top:0, bottom:0, width:2, borderRadius:4, background:"linear-gradient(to bottom,#22c55e,#3b82f6,#8b5cf6,#ef4444,#f97316,#14b8a6)", zIndex:0, pointerEvents:"none" }}/>

          <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
            {STEPS.map((step, i) => (
              <WorkflowRow key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>

        <CompletionBadge />
      </div>
    </section>
  );
}