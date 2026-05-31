import { useEffect } from 'react';
import { X, QrCode, Download, Smartphone } from 'lucide-react';

export default function Modal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      {/* Modal card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-slate-900/30 overflow-hidden animate-fade-up">
        {/* Top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-teal-500" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Download Hyoid</h3>
            <p className="text-slate-500 text-sm mt-2">Scan the QR code or wait for the Play Store launch</p>
          </div>

          {/* QR Placeholder */}
          <div className="flex justify-center mb-6">
            <div className="w-44 h-44 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3">
              <QrCode className="w-14 h-14 text-slate-300" strokeWidth={1} />
              <div className="text-xs text-slate-400 font-medium text-center">
                QR Code
                <br />
                Coming Soon
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <Download className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Google Play Store</div>
                <div className="text-xs text-amber-600 font-medium mt-0.5">Coming Soon on Play Store</div>
              </div>
            </div>

           <button className="w-full bg-white text-black py-4 rounded-2xl font-bold text-sm border border-neutral-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
  <Download className="w-4 h-4" />
  Download APK (Beta)
</button>
          </div>

          <p className="text-center text-xs text-slate-400">
            Free download · Android 8.0+ required
          </p>
        </div>
      </div>
    </div>
  );
}
