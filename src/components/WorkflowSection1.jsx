// WorkflowSection.jsx

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";

import {
  UserPlus,
  CalendarCheck,
  Stethoscope,
  Pill,
  HeartPulse,
  FolderHeart,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const workflow = [
  {
    id: "01",
    title: "Register",
    description: "Create your secure healthcare account instantly.",
    icon: UserPlus,
  },
  {
    id: "02",
    title: "Book Appointment",
    description: "Choose doctor, date and consultation slot.",
    icon: CalendarCheck,
  },
  {
    id: "03",
    title: "Diagnosed at Home",
    description: "Get home consultation or video diagnosis.",
    icon: Stethoscope,
  },
  {
    id: "04",
    title: "Medicine Delivered",
    description: "Lab reports and medicines delivered quickly.",
    icon: Pill,
  },
  {
    id: "05",
    title: "Timely Follow Up",
    description: "Stay updated with reminders and health tracking.",
    icon: HeartPulse,
  },
  {
    id: "06",
    title: "Manage Records",
    description: "Access prescriptions and records anytime.",
    icon: FolderHeart,
  },
];

export default function WorkflowSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Timeline Animation
    gsap.fromTo(
      lineRef.current,
      {
        height: "0%",
      },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    // Card Animation
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Floating Icons
    gsap.to(".floating-icon", {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
      stagger: 0.2,
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-green-200/30 blur-[120px]" />
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-6xl">
        {/* Timeline Line */}
        <div className="absolute md:left-1/2 left-5 top-0 block h-full w-[2px] bg-emerald-100 -translate-x-1/2">
          <div
            ref={lineRef}
            className="progress-line absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-400 to-green-500 rounded-full"
          />
        </div>

        <div className="space-y-24">
          {workflow.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative flex items-center justify-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute md:left-1/2 left-5 flex -translate-x-1/2 z-20 items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute h-10 w-10 rounded-full bg-emerald-400/30 animate-ping" />
                    <div className="h-5 w-5 rounded-full bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.8)]" />
                  </div>
                </div>

                {/* Card */}
                <Tilt
                  tiltMaxAngleX={window.innerWidth < 768 ? 0 : 8}
                  tiltMaxAngleY={window.innerWidth < 768 ? 0 : 8}
                  perspective={1000}
                  transitionSpeed={1200}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  className="w-full md:w-[45%] pl-16 md:pl-0"
                >
                  <div
                    className="
                    group relative overflow-hidden rounded-[32px]
                    will-change-transform transform-gpu
                    border border-emerald-100
                    bg-gradient-to-br from-white via-emerald-50 to-green-100/70
                    backdrop-blur-2xl
                    p-8 md:p-10
                    shadow-[0_10px_60px_rgba(16,185,129,0.18)]
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_20px_80px_rgba(16,185,129,0.28)]
                    hover:border-emerald-300

                    before:absolute before:inset-0
                    before:bg-gradient-to-r before:from-transparent
                    before:via-white/40 before:to-transparent
                    before:translate-x-[-200%]
                    hover:before:translate-x-[200%]
                    before:transition-transform before:duration-1000
                  "
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-emerald-200/40 via-green-100/20 to-teal-100/30" />

                    {/* Step Number + Icon */}
                    <div className="relative z-10 mb-6 flex items-center justify-between">
                      <span className="text-5xl font-black text-emerald-100">
                        {item.id}
                      </span>

                      <div
                        className="
                        floating-icon
                        flex h-16 w-16 items-center justify-center
                        rounded-2xl
                        bg-gradient-to-br from-emerald-400 to-green-500
                        shadow-[0_0_35px_rgba(16,185,129,0.4)]
                      "
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-4">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        {item.description}
                      </p>
                    </div>

                    {/* Border Animation */}
                    <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-emerald-300/30 transition-all duration-700" />
                  </div>
                </Tilt>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}