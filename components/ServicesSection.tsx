'use client';

import { motion } from 'framer-motion';
import { Monitor, MapPin, Search, Shield, Bot, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Design & Development',
    description:
      'Modern, mobile-first websites engineered to convert visitors into paying customers — fast-loading, beautiful, and built to rank.',
    tags: ['Landing Pages', '5-Page Sites', 'E-commerce Ready'],
    color: '#14B8A6',
  },
  {
    icon: MapPin,
    title: 'Google Business Profile Setup',
    description:
      'Fully optimized Google Business Profile so your business shows up on Maps and Local Search when customers in your area are ready to buy.',
    tags: ['Google Maps', 'Local Pack', 'Reviews Setup'],
    color: '#0EA5E9',
  },
  {
    icon: Search,
    title: 'Local SEO',
    description:
      'Rank higher in your city. We optimize your website and listings so nearby customers find you — not your competitors.',
    tags: ['Keyword Research', 'On-Page SEO', 'Citations'],
    color: '#8B5CF6',
  },
  {
    icon: Shield,
    title: 'Website Maintenance',
    description:
      'Monthly care plans to keep your website secure, updated, backed up, and running at peak speed — so you never have to think about it.',
    tags: ['Security Updates', 'Speed Monitoring', 'Backups'],
    color: '#F59E0B',
  },
  {
    icon: Bot,
    title: 'AI Chatbot Setup',
    description:
      'Install an intelligent chatbot that answers customer questions 24/7, qualifies leads, and routes them to WhatsApp — automatically.',
    tags: ['24/7 Support', 'Lead Capture', 'WhatsApp Handoff'],
    color: '#10B981',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style={{ color: '#14B8A6', backgroundColor: 'rgba(20,184,166,0.08)' }}>
            What We Do
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Our Services
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Everything your business needs to grow online — under one roof
          </p>
        </motion.div>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto md:max-w-none md:grid-cols-2 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i + 3} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-slate-500 text-sm mb-4">
            Not sure which service is right for you?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] text-white text-sm font-semibold rounded-xl hover:bg-[#1E293B] transition-colors duration-200"
          >
            Get a Free Consultation
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  color: string;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      className="group relative bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      {/* Colored top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
        style={{ backgroundColor: service.color }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${service.color}18` }}
      >
        <Icon size={22} style={{ color: service.color }} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-poppins text-base font-semibold text-[#0F172A] leading-snug">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-1">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: `${service.color}12`, color: service.color }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
