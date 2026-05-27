// import { Calendar, FileText, Pill, LayoutDashboard, CalendarPlus, ClipboardList, History, Unlock } from 'lucide-react';
// import { useReveal } from '../hooks/useReveal';

// const doctorFeatures = [
//   { icon: Calendar, title: 'Manage Appointments', desc: 'View, reschedule, and confirm patient appointments effortlessly from your dashboard.' },
//   { icon: FileText, title: 'Patient Records', desc: 'Access comprehensive patient histories, lab results, and visit notes in one place.' },
//   { icon: Pill, title: 'Digital Prescriptions', desc: 'Issue and manage prescriptions digitally — patients receive them instantly.' },
//   { icon: LayoutDashboard, title: 'Smart Dashboard', desc: 'Real-time overview of your schedule, pending tasks, and clinic performance.' },
// ];

// const patientFeatures = [
//   { icon: CalendarPlus, title: 'Book Appointments', desc: 'Find available doctors, choose your time, and confirm bookings in under a minute.' },
//   { icon: ClipboardList, title: 'View Prescriptions', desc: 'Access current and past prescriptions with clear dosage instructions anytime.' },
//   { icon: History, title: 'Medical History', desc: 'All your visits, diagnoses, and reports organized chronologically and searchably.' },
//   { icon: Unlock, title: 'Easy Access', desc: 'Secure biometric login and fast navigation designed for every user.' },
// ];

// function FeatureCard({ icon: Icon, title, desc, color, bgColor, delay }) {
//   return (
//     <div
//       className={`reveal card-hover bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex gap-4`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
//         <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.8} />
//       </div>
//       <div>
//         <h4 className="text-sm font-bold text-slate-800 mb-1">{title}</h4>
//         <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
//       </div>
//     </div>
//   );
// }

// export default function Features() {
//   const ref = useReveal();

//   return (
//     <section id="features" ref={ref} className="section-padding bg-slate-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="reveal text-center mb-16 max-w-2xl mx-auto">
//           <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-blue-100">
//             <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
//             Built for Both Sides
//           </div>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
//             Everything You Need,{' '}
//             <span className="text-gradient">Nothing You Don't</span>
//           </h2>
//           {/* <p className="text-slate-500 text-base leading-relaxed">
//             HYOTA is purpose-built for both healthcare providers and patients — delivering the right tools to the right people.
//           </p> */}
//         </div>

//         {/* Two-column feature grid */}
//         <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
//           {/* Doctors */}
//           <div>
//             <div className="reveal flex items-center gap-3 mb-5">
//               <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-md shadow-blue-500/25">
//                 <LayoutDashboard className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">For Doctors</div>
//                 <h3 className="text-xl font-extrabold text-slate-900">Clinical Workflows</h3>
//               </div>
//             </div>
//             <div className="space-y-3">
//               {doctorFeatures.map((f, i) => (
//                 <FeatureCard key={f.title} {...f} color="text-blue-600" bgColor="bg-blue-50" delay={i * 80} />
//               ))}
//             </div>
//           </div>

//           {/* Patients */}
//           <div>
//             <div className="reveal flex items-center gap-3 mb-5">
//               <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center shadow-md shadow-teal-500/25">
//                 <CalendarPlus className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider">For Patients</div>
//                 <h3 className="text-xl font-extrabold text-slate-900">Patient Experience</h3>
//               </div>
//             </div>
//             <div className="space-y-3">
//               {patientFeatures.map((f, i) => (
//                 <FeatureCard key={f.title} {...f} color="text-teal-600" bgColor="bg-teal-50" delay={i * 80} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
