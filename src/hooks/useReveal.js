// import { useEffect, useRef } from 'react';

// export function useReveal() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
//     );

//     const elements = el.querySelectorAll('.reveal, .reveal-right');
//     elements.forEach((el) => observer.observe(el));
//     if (el.classList.contains('reveal') || el.classList.contains('reveal-right')) {
//       observer.observe(el);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return ref;
// }


import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}