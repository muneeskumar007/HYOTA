import { Activity, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const links = {
  Product: ['Features', 'How It Works', 'App Preview', 'Download'],
  Company: ['About', 'Team', 'Contact', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase().replace(/ /g, '-'))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md">
                <Activity className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">HYOTA</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Smart healthcare management for patients and doctors. Simplifying appointments, records, and clinical workflows — all from your phone.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:hello@hyota.app" className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-700 transition-all duration-200">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={e => { e.preventDefault(); scrollTo(item); }}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 py-6 border-t border-slate-800 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-blue-500" />
            <a href="mailto:hello@hyota.app" className="text-slate-400 hover:text-white transition-colors">
              hello@hyota.app
            </a>
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-700" />
          <span className="text-sm text-slate-600">Available Mon–Fri, 9AM–6PM IST</span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} HYOTA. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-600">Made with</span>
            <span className="text-red-500 text-xs">♥</span>
            <span className="text-xs text-slate-600">for better healthcare</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
