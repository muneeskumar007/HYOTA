import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Shield, Zap, Heart, Star } from 'lucide-react';

export default function Hero({ onDownloadClick }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll('.hero-item');
    items?.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + i * 120);
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden gradient-mesh bg-slate-50"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="hero-item inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-black text-xs font-semibold px-4 py-2 rounded-full shadow-sm"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              Launching Soon — Healthcare Reimagined
            </div>

            {/* Headline */}
            <div
              className="hero-item"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)' }}
            >
              <h1 className="text-5xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight text-slate-900">
                 India's first   Stamedome
                {/* <br /> */}
                {/* <span className="text-gradient">Ecosystem</span> */}
                <br />
              
              </h1>
            </div>

            {/* Subtext */}
            <h2
              className="hero-item text-xl text-slate-500 leading-relaxed max-w-lg"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)' }}
            >
               we believe  healing  happens at home
             </h2>

            {/* CTA Buttons */}
            <div
              className="hero-item flex flex-col sm:flex-row gap-3"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)' }}
            >
              <button onClick={onDownloadClick} className="btn-primary text-sm">
                Download the App
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#how-it-works"
                onClick={e => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-secondary text-sm"
              >
                <Play className="w-4 h-4 text-blue-500" />
                See How It Works
              </a>
            </div>

            {/* Social proof */}
            {/* <div
              className="hero-item flex items-center gap-6 pt-2"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)' }}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm ${
                      ['bg-blue-500','bg-teal-500','bg-violet-500','bg-amber-500'][i]
                    }`}
                  >
                    {['P','D','P','D'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Trusted by early users & hospital staff</p>
              </div>
            </div> */}
          </div>

          {/* Right — Phone mockup */}
          <div
            className="hero-item relative flex justify-center lg:justify-end"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)' }}
          >
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-blue-500/15 blur-3xl animate-pulse-slow" />
            </div>

            {/* Phone frame */}
            <div className="relative animate-float">
              <div className="w-64 h-[520px] md:w-72 md:h-[580px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] shadow-2xl shadow-slate-900/40 border-4 border-slate-700 overflow-hidden flex flex-col">
                {/* Notch */}
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-20 h-5 bg-slate-700 rounded-full" />
                </div>

                {/* App Content Preview */}
                <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 mx-3 rounded-2xl overflow-hidden p-4 space-y-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="w-16 h-2 bg-slate-300 rounded" />
                      <div className="w-24 h-3 bg-slate-800 rounded mt-1.5 font-bold" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Heart className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Appointments', val: '3', color: 'bg-blue-500' },
                      { label: 'Records', val: '12', color: 'bg-teal-500' },
                    ].map(({ label, val, color }) => (
                      <div key={label} className="bg-white rounded-xl p-3 shadow-sm">
                        <div className={`w-6 h-6 rounded-lg ${color} mb-2`} />
                        <div className="text-lg font-bold text-slate-800">{val}</div>
                        <div className="text-xs text-slate-400">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Upcoming */}
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <div className="text-xs font-semibold text-slate-600 mb-2">Upcoming Appointment</div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-500" />
                      <div>
                        <div className="w-20 h-2.5 bg-slate-700 rounded" />
                        <div className="w-16 h-2 bg-slate-300 rounded mt-1" />
                      </div>
                    </div>
                    <div className="mt-2.5 w-full h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-2 bg-white/70 rounded" />
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-3 gap-2">
                    {['#dbeafe','#ccfbf1','#fef3c7'].map((bg, i) => (
                      <div key={i} className="rounded-xl p-2 flex flex-col items-center gap-1.5" style={{ backgroundColor: bg }}>
                        <div className="w-5 h-5 rounded-lg bg-white/80" />
                        <div className="w-10 h-1.5 bg-slate-300 rounded" />
                      </div>
                    ))}
                  </div>

                  {/* Coming soon overlay hint */}
                  <div className="text-center pt-1">
                    <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">App Preview</span>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="flex justify-center py-3">
                  <div className="w-24 h-1 bg-slate-600 rounded-full" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-12 top-16 glass rounded-2xl px-3.5 py-2.5 shadow-lg shadow-blue-500/10 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-green-100 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-green-600" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800">Secure</div>
                  <div className="text-[9px] text-slate-400">End-to-end</div>
                </div>
              </div>

              <div className="absolute -right-10 bottom-24 glass rounded-2xl px-3.5 py-2.5 shadow-lg shadow-teal-500/10 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-teal-100 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-teal-600" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800">Real-time</div>
                  <div className="text-[9px] text-slate-400">Instant updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}
