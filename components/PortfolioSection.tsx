'use client';

import { motion } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  description: string;
  colors: { header: string; hero: string; text: string; accent: string };
}

const projects: Project[] = [
  {
    title: 'Elite Barber Shop',
    category: 'Barber Shop',
    description: 'Modern booking website with WhatsApp integration for a premium barber shop in Riyadh.',
    colors: { header: '#0F172A', hero: '#1E293B', text: '#D4AF37', accent: '#D4AF37' },
  },
  {
    title: 'Prime Car Wash',
    category: 'Car Wash',
    description: 'Clean, conversion-focused website for a car wash service in Dubai.',
    colors: { header: '#1D4ED8', hero: '#2563EB', text: '#DBEAFE', accent: '#93C5FD' },
  },
  {
    title: 'AutoFix Garage',
    category: 'Auto Garage',
    description: 'Professional service website for an auto repair garage in Jeddah.',
    colors: { header: '#1F2937', hero: '#374151', text: '#F97316', accent: '#FB923C' },
  },
  {
    title: 'DentalCare Clinic',
    category: 'Dental Clinic',
    description: 'Trust-building clinic website with appointment booking for a dental practice.',
    colors: { header: '#14B8A6', hero: '#0D9488', text: '#FFFFFF', accent: '#CCFBF1' },
  },
  {
    title: 'Royal Restaurant',
    category: 'Restaurant',
    description: 'Elegant restaurant website with menu showcase and reservation form.',
    colors: { header: '#18181B', hero: '#27272A', text: '#FBBF24', accent: '#FDE68A' },
  },
];

function BrowserMockup({ project }: { project: Project }) {
  const { colors } = project;
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-t-xl">
      {/* Browser frame */}
      <rect width="400" height="260" rx="8" fill="#F1F5F9" />
      {/* Top bar */}
      <rect width="400" height="36" rx="8" fill="#E2E8F0" />
      <rect width="400" height="28" y="8" fill="#E2E8F0" />
      {/* Traffic lights */}
      <circle cx="18" cy="18" r="5" fill="#EF4444" />
      <circle cx="34" cy="18" r="5" fill="#F59E0B" />
      <circle cx="50" cy="18" r="5" fill="#22C55E" />
      {/* URL bar */}
      <rect x="70" y="10" width="260" height="16" rx="4" fill="#CBD5E1" />
      {/* Site header */}
      <rect y="36" width="400" height="48" fill={colors.header} />
      {/* Nav dots in header */}
      <rect x="16" y="54" width="40" height="8" rx="2" fill={colors.text} opacity="0.9" />
      <rect x="64" y="54" width="32" height="6" rx="2" fill="white" opacity="0.4" />
      <rect x="104" y="54" width="32" height="6" rx="2" fill="white" opacity="0.4" />
      <rect x="144" y="54" width="32" height="6" rx="2" fill="white" opacity="0.4" />
      <rect x="310" y="50" width="72" height="14" rx="4" fill={colors.accent} opacity="0.8" />
      {/* Hero section */}
      <rect y="84" width="400" height="90" fill={colors.hero} />
      {/* Hero text lines */}
      <rect x="60" y="100" width="180" height="12" rx="3" fill={colors.text} opacity="0.9" />
      <rect x="60" y="118" width="220" height="8" rx="2" fill="white" opacity="0.3" />
      <rect x="60" y="132" width="160" height="8" rx="2" fill="white" opacity="0.25" />
      {/* CTA button */}
      <rect x="60" y="148" width="80" height="18" rx="4" fill={colors.accent} opacity="0.9" />
      {/* Cards row */}
      <rect y="174" width="400" height="86" fill="#F8FAFC" />
      <rect x="16" y="186" width="110" height="62" rx="6" fill="white" />
      <rect x="16" y="186" width="110" height="16" rx="6" fill={colors.header} opacity="0.8" />
      <rect x="26" y="210" width="70" height="6" rx="2" fill="#CBD5E1" />
      <rect x="26" y="222" width="55" height="5" rx="2" fill="#CBD5E1" />
      <rect x="26" y="234" width="40" height="5" rx="2" fill="#CBD5E1" />

      <rect x="142" y="186" width="110" height="62" rx="6" fill="white" />
      <rect x="142" y="186" width="110" height="16" rx="6" fill={colors.header} opacity="0.8" />
      <rect x="152" y="210" width="70" height="6" rx="2" fill="#CBD5E1" />
      <rect x="152" y="222" width="55" height="5" rx="2" fill="#CBD5E1" />
      <rect x="152" y="234" width="40" height="5" rx="2" fill="#CBD5E1" />

      <rect x="268" y="186" width="110" height="62" rx="6" fill="white" />
      <rect x="268" y="186" width="110" height="16" rx="6" fill={colors.header} opacity="0.8" />
      <rect x="278" y="210" width="70" height="6" rx="2" fill="#CBD5E1" />
      <rect x="278" y="222" width="55" height="5" rx="2" fill="#CBD5E1" />
      <rect x="278" y="234" width="40" height="5" rx="2" fill="#CBD5E1" />
    </svg>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Our Work
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real websites built for Gulf businesses
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 flex flex-col ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Mockup */}
              <div className="overflow-hidden bg-slate-50">
                <BrowserMockup project={project} />
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full self-start" style={{ backgroundColor: 'rgba(20,184,166,0.1)', color: '#14B8A6' }}>
                  {project.category}
                </span>
                <h3 className="font-poppins text-lg font-semibold text-[#0F172A]">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <button className="mt-2 px-4 py-2 border border-[#14B8A6] text-[#14B8A6] text-sm font-semibold rounded-lg hover:bg-[#14B8A6] hover:text-white transition-colors duration-200 self-start">
                  View Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
