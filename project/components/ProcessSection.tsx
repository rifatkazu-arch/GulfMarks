'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Code2, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Tell Us About Your Business',
    description:
      'Fill out our short form or send us a WhatsApp message. We\'ll have a free 15-minute call to understand your goals, your market, and exactly what you need.',
    detail: 'Free consultation — no commitment',
    color: '#14B8A6',
  },
  {
    number: '02',
    icon: Code2,
    title: 'We Design & Build It Fast',
    description:
      'Our team gets to work immediately. You\'ll receive a design preview within 48 hours and a fully ready website within 3–7 business days — built to convert.',
    detail: 'Average delivery: 5 business days',
    color: '#0EA5E9',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Go Live & Get More Customers',
    description:
      'Your website launches and starts working for you around the clock. More WhatsApp inquiries, more Google visibility, more customers walking through your door.',
    detail: 'Support included after launch',
    color: '#8B5CF6',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
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
            Our Process
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Simple, fast, and stress-free — from first contact to live website
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Arrow between steps (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 -right-5 z-10 items-center justify-center w-10">
                    <ArrowRight size={20} className="text-slate-300" />
                  </div>
                )}

                {/* Card */}
                <div
                  className="rounded-2xl p-7 h-full flex flex-col gap-5 border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                  style={{ borderTop: `4px solid ${step.color}` }}
                >
                  {/* Header row */}
                  <div className="flex items-center gap-4">
                    {/* Number badge */}
                    <span
                      className="font-poppins text-xs font-bold px-2.5 py-1 rounded-lg"
                      style={{ backgroundColor: `${step.color}15`, color: step.color }}
                    >
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${step.color}12` }}
                  >
                    <Icon size={26} style={{ color: step.color }} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="font-poppins text-lg font-semibold text-[#0F172A] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Detail pill */}
                  <div
                    className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: `${step.color}10`, color: step.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: step.color }} />
                    {step.detail}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-14 rounded-2xl p-8 text-center"
          style={{ backgroundColor: '#0F172A' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-poppins text-xl font-bold text-white mb-2">
            Ready to start? It only takes 2 minutes.
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Send us a message and we'll begin your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#14B8A6] text-white text-sm font-semibold rounded-xl hover:bg-[#0E9E8D] transition-colors duration-200"
            >
              Get a Free Consultation
            </a>
            <a
              href="https://wa.me/966500000000?text=Hello%20GulfMarks%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003C6.483 2.003 2 6.487 2 12.008c0 1.762.457 3.43 1.257 4.883L2 22l5.247-1.377C8.659 21.471 10.3 22 12.004 22c5.521 0 10.004-4.484 10.004-10.005 0-5.52-4.483-9.992-10.004-9.992zm0 18.304c-1.571 0-3.11-.425-4.445-1.225l-.319-.189-3.112.816.831-3.03-.207-.31C3.89 15.157 3.396 13.6 3.396 12.008c0-4.745 3.862-8.607 8.608-8.607 4.745 0 8.607 3.862 8.607 8.607 0 4.746-3.862 8.299-8.607 8.299z" />
    </svg>
  );
}
