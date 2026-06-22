'use client';

import { motion } from 'framer-motion';
import { Zap, BadgeDollarSign, Palette, Smartphone, Target, Check, X } from 'lucide-react';

const advantages = [
  { icon: Zap, title: 'Fast Delivery', description: 'Live in 3–7 business days, not months.', proof: 'Avg. 5 days' },
  { icon: BadgeDollarSign, title: 'Transparent Pricing', description: 'Fixed prices, no hidden fees, no surprises.', proof: 'From 299 SAR' },
  { icon: Palette, title: 'Premium Design', description: 'Custom, modern designs — never templates.', proof: '100% custom' },
  { icon: Smartphone, title: 'Mobile First', description: 'Every site tested on all devices before launch.', proof: 'All screens' },
  { icon: Target, title: 'Gulf-Market Focused', description: 'We know the Gulf market, languages, and culture.', proof: '6 countries' },
];

const comparison = [
  { feature: 'Delivery Time', us: '3–7 Days', them: '4–8 Weeks' },
  { feature: 'Custom Design', us: true, them: false },
  { feature: 'Mobile Optimized', us: true, them: false },
  { feature: 'WhatsApp Integration', us: true, them: false },
  { feature: 'Local SEO Included', us: true, them: false },
  { feature: 'Gulf Market Knowledge', us: true, them: false },
  { feature: 'Transparent Pricing', us: true, them: false },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
            The GulfMarks Difference
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Why Businesses Choose Us
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We built GulfMarks specifically for Gulf small businesses — not global enterprise clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — Feature cards */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {advantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100 hover:border-[#14B8A6] hover:bg-white transition-all duration-200 group"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ backgroundColor: 'rgba(20,184,166,0.1)' }}
                  >
                    <Icon size={20} style={{ color: '#14B8A6' }} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-poppins font-semibold text-[#0F172A] text-sm">
                        {item.title}
                      </h3>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'rgba(20,184,166,0.12)', color: '#14B8A6' }}
                      >
                        {item.proof}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right — Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-[#0F172A] text-white text-xs font-semibold">
                <div className="px-5 py-4 text-slate-400">Feature</div>
                <div className="px-4 py-4 text-center">
                  <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#14B8A6', color: '#fff' }}>
                    GulfMarks
                  </span>
                </div>
                <div className="px-4 py-4 text-center text-slate-500">Typical Agency</div>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 text-sm border-b border-slate-100 last:border-0 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                  }`}
                >
                  <div className="px-5 py-4 text-slate-600 font-medium text-xs flex items-center">
                    {row.feature}
                  </div>
                  <div className="px-4 py-4 flex items-center justify-center">
                    {typeof row.us === 'boolean' ? (
                      <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(20,184,166,0.12)' }}>
                        <Check size={13} style={{ color: '#14B8A6' }} strokeWidth={2.5} />
                      </span>
                    ) : (
                      <span className="text-xs font-bold" style={{ color: '#14B8A6' }}>{row.us}</span>
                    )}
                  </div>
                  <div className="px-4 py-4 flex items-center justify-center">
                    {typeof row.them === 'boolean' ? (
                      row.them ? (
                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-slate-100">
                          <Check size={13} className="text-slate-400" strokeWidth={2.5} />
                        </span>
                      ) : (
                        <span className="w-6 h-6 rounded-full flex items-center justify-center bg-red-50">
                          <X size={13} className="text-red-400" strokeWidth={2.5} />
                        </span>
                      )
                    ) : (
                      <span className="text-xs font-medium text-slate-400">{row.them}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA below table */}
            <div className="mt-6 flex items-center gap-3 p-4 rounded-xl border border-[#14B8A6]/30 bg-[#14B8A6]/5">
              <div className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ backgroundColor: '#14B8A6' }} />
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-[#0F172A]">Ready to see the difference?</span>{' '}
                <a href="#contact" className="font-semibold underline underline-offset-2 transition-colors duration-200" style={{ color: '#14B8A6' }}>
                  Get a free consultation →
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
