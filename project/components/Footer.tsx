import { Mail, Phone, Clock, Instagram, Twitter, Linkedin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Website Design',
  'Google Business Setup',
  'Local SEO',
  'Website Maintenance',
  'AI Chatbot Setup',
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F172A' }}>
      {/* Pre-footer CTA banner */}
      <div style={{ backgroundColor: '#14B8A6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-poppins text-xl sm:text-2xl font-bold text-white mb-1">
              Ready to grow your business online?
            </h3>
            <p className="text-teal-100 text-sm">
              Join 50+ Gulf businesses that already trust GulfMarks.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[#0F172A] text-sm font-bold rounded-xl hover:bg-slate-100 transition-colors duration-200 text-center"
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/966500000000?text=Hello%20GulfMarks%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white/40 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-colors duration-200 text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <a href="#home" className="inline-block">
              <span className="font-poppins text-2xl font-bold">
                <span className="text-white">Gulf</span>
                <span style={{ color: '#14B8A6' }}>Marks</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional websites and digital growth solutions built specifically for Gulf businesses.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-slate-700 text-slate-400 hover:border-[#14B8A6] hover:text-[#14B8A6] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-[#14B8A6] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#14B8A6] transition-all duration-200 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 text-sm hover:text-[#14B8A6] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#14B8A6] transition-all duration-200 rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@gulfmarks.com"
                className="flex items-start gap-3 text-slate-400 hover:text-[#14B8A6] transition-colors duration-200 group"
              >
                <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-[#14B8A6]" style={{ color: '#14B8A6' }} />
                <span className="text-sm">info@gulfmarks.com</span>
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-slate-400 hover:text-[#14B8A6] transition-colors duration-200 group"
              >
                <Phone size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#14B8A6' }} />
                <span className="text-sm">+966 50 000 0000</span>
              </a>
              <div className="flex items-start gap-3 text-slate-500">
                <Clock size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#14B8A6' }} />
                <span className="text-xs leading-relaxed">
                  Sat – Thu, 9AM – 6PM<br />
                  <span className="text-slate-600">Gulf Standard Time</span>
                </span>
              </div>
            </div>

            {/* Countries */}
            <div className="mt-2 p-3 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-500 mb-2 font-medium">We serve businesses in</p>
              <div className="flex flex-wrap gap-1.5">
                {['🇸🇦 KSA', '🇦🇪 UAE', '🇧🇭 Bahrain', '🇶🇦 Qatar', '🇰🇼 Kuwait', '🇴🇲 Oman'].map(c => (
                  <span key={c} className="text-xs text-slate-400 px-2 py-0.5 rounded-md bg-slate-800">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © 2026 GulfMarks. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
