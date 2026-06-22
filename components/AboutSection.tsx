'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '6', label: 'Gulf Countries' },
  { value: 'Fast', label: 'Turnaround' },
  { value: '100%', label: 'Mobile Ready' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: '#14B8A6' }}>
              About GulfMarks
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
              We Help Gulf Businesses{' '}
              <span style={{ color: '#14B8A6' }}>Grow Online</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              GulfMarks helps Gulf businesses establish a strong online presence through professional websites and digital growth solutions designed to generate more customers. We understand the local market and build solutions that work for businesses in Saudi Arabia, UAE, Bahrain, Qatar, Kuwait, and Oman.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm"
                >
                  <div className="font-poppins text-2xl font-bold text-[#14B8A6] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — decorative SVG illustration */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <svg
              viewBox="0 0 500 420"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-md lg:max-w-lg"
              aria-hidden="true"
            >
              {/* Background card */}
              <rect x="20" y="20" width="460" height="380" rx="20" fill="#0F172A" />

              {/* Inner card */}
              <rect x="40" y="40" width="420" height="340" rx="16" fill="#1E293B" />

              {/* Browser bar */}
              <rect x="40" y="40" width="420" height="40" rx="16" fill="#334155" />
              <rect x="40" y="56" width="420" height="24" fill="#334155" />
              <circle cx="68" cy="60" r="6" fill="#EF4444" opacity="0.8" />
              <circle cx="88" cy="60" r="6" fill="#F59E0B" opacity="0.8" />
              <circle cx="108" cy="60" r="6" fill="#22C55E" opacity="0.8" />
              <rect x="130" y="54" width="200" height="12" rx="4" fill="#475569" />

              {/* Dashboard header */}
              <rect x="40" y="80" width="420" height="50" fill="#0F172A" />
              <rect x="60" y="94" width="80" height="10" rx="3" fill="#14B8A6" />
              <rect x="60" y="108" width="120" height="7" rx="2" fill="#475569" />
              <rect x="380" y="94" width="60" height="22" rx="6" fill="#14B8A6" opacity="0.9" />

              {/* Chart area */}
              <rect x="60" y="150" width="250" height="140" rx="12" fill="#1E293B" />
              <rect x="60" y="150" width="250" height="28" rx="12" fill="#334155" />
              <rect x="60" y="165" width="250" height="14" fill="#334155" />
              <text x="78" y="170" fontSize="10" fill="#94A3B8" fontFamily="sans-serif">Monthly Visitors</text>

              {/* Bar chart bars */}
              <rect x="80" y="240" width="20" height="38" rx="3" fill="#14B8A6" opacity="0.6" />
              <rect x="110" y="220" width="20" height="58" rx="3" fill="#14B8A6" opacity="0.7" />
              <rect x="140" y="200" width="20" height="78" rx="3" fill="#14B8A6" opacity="0.8" />
              <rect x="170" y="215" width="20" height="63" rx="3" fill="#14B8A6" opacity="0.75" />
              <rect x="200" y="195" width="20" height="83" rx="3" fill="#14B8A6" />
              <rect x="230" y="180" width="20" height="98" rx="3" fill="#14B8A6" opacity="0.9" />
              <rect x="260" y="160" width="20" height="118" rx="3" fill="#14B8A6" />

              {/* Chart x-axis labels */}
              <rect x="80" y="282" width="20" height="4" rx="1" fill="#475569" />
              <rect x="110" y="282" width="20" height="4" rx="1" fill="#475569" />
              <rect x="140" y="282" width="20" height="4" rx="1" fill="#475569" />
              <rect x="170" y="282" width="20" height="4" rx="1" fill="#475569" />
              <rect x="200" y="282" width="20" height="4" rx="1" fill="#475569" />
              <rect x="230" y="282" width="20" height="4" rx="1" fill="#475569" />
              <rect x="260" y="282" width="20" height="4" rx="1" fill="#475569" />

              {/* Stat cards on the right */}
              <rect x="330" y="150" width="130" height="60" rx="10" fill="#334155" />
              <rect x="348" y="163" width="50" height="7" rx="2" fill="#64748B" />
              <rect x="348" y="176" width="70" height="14" rx="3" fill="#14B8A6" opacity="0.9" />
              <rect x="348" y="195" width="40" height="5" rx="2" fill="#475569" />

              <rect x="330" y="222" width="130" height="60" rx="10" fill="#334155" />
              <rect x="348" y="235" width="50" height="7" rx="2" fill="#64748B" />
              <rect x="348" y="248" width="70" height="14" rx="3" fill="#0EA5E9" opacity="0.9" />
              <rect x="348" y="267" width="40" height="5" rx="2" fill="#475569" />

              <rect x="330" y="294" width="130" height="60" rx="10" fill="#334155" />
              <rect x="348" y="307" width="50" height="7" rx="2" fill="#64748B" />
              <rect x="348" y="320" width="70" height="14" rx="3" fill="#A78BFA" opacity="0.9" />
              <rect x="348" y="339" width="40" height="5" rx="2" fill="#475569" />

              {/* Bottom stat row */}
              <rect x="60" y="302" width="250" height="60" rx="10" fill="#334155" />
              <rect x="80" y="315" width="60" height="7" rx="2" fill="#64748B" />
              <rect x="80" y="328" width="80" height="12" rx="3" fill="#14B8A6" opacity="0.8" />
              <rect x="80" y="345" width="50" height="5" rx="2" fill="#475569" />
              <rect x="200" y="315" width="60" height="7" rx="2" fill="#64748B" />
              <rect x="200" y="328" width="80" height="12" rx="3" fill="#F59E0B" opacity="0.8" />
              <rect x="200" y="345" width="50" height="5" rx="2" fill="#475569" />

              {/* Floating accent shapes */}
              <circle cx="460" cy="30" r="25" fill="#14B8A6" opacity="0.15" />
              <circle cx="30" cy="400" r="18" fill="#14B8A6" opacity="0.12" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
