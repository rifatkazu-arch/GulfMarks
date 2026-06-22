'use client';

import { motion } from 'framer-motion';
import { Scissors, Sparkles, Droplets, Wrench, UtensilsCrossed, Smile, Dumbbell, Store } from 'lucide-react';

const industries = [
  {
    name: 'Barber Shops',
    icon: Scissors,
    description: 'Booking pages, service menus & WhatsApp links',
    color: '#0F172A',
    bg: 'rgba(15,23,42,0.06)',
  },
  {
    name: 'Salons',
    icon: Sparkles,
    description: 'Showcase services, gallery & appointment requests',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.08)',
  },
  {
    name: 'Car Washes',
    icon: Droplets,
    description: 'Pricing packages, location map & online bookings',
    color: '#0EA5E9',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    name: 'Auto Garages',
    icon: Wrench,
    description: 'Service listings, trust signals & quote requests',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.08)',
  },
  {
    name: 'Restaurants',
    icon: UtensilsCrossed,
    description: 'Digital menus, reservations & delivery links',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.08)',
  },
  {
    name: 'Dental Clinics',
    icon: Smile,
    description: 'Credentials, services & appointment booking',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    name: 'Gyms & Fitness',
    icon: Dumbbell,
    description: 'Membership plans, class schedules & trial offers',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
  },
  {
    name: 'Local Businesses',
    icon: Store,
    description: 'Any business that needs customers to find them online',
    color: '#64748B',
    bg: 'rgba(100,116,139,0.08)',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style={{ color: '#14B8A6', backgroundColor: 'rgba(20,184,166,0.08)' }}>
            Industries We Serve
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Who We Help
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We specialize in local Gulf businesses that need more customers — not just a pretty website
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                className="group bg-white rounded-2xl p-6 flex flex-col gap-4 border border-slate-100 shadow-sm cursor-default transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{ borderTop: `3px solid ${industry.color}` }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: industry.bg }}
                >
                  <Icon size={20} style={{ color: industry.color }} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-poppins font-semibold text-[#0F172A] text-sm mb-1.5">
                    {industry.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-slate-400 text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Don't see your industry?{' '}
          <a href="#contact" className="font-semibold underline underline-offset-2 transition-colors duration-200" style={{ color: '#14B8A6' }}>
            We work with any local business →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
