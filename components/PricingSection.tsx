'use client';

import { motion } from 'framer-motion';
import { Check, Shield, Zap, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for getting online fast',
    price: '299',
    popular: false,
    dark: false,
    features: [
      { text: '1-Page Professional Website', included: true },
      { text: 'Fully Mobile Responsive', included: true },
      { text: 'WhatsApp Button Integration', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Fast Delivery (3–5 Days)', included: true },
      { text: 'Google Business Setup', included: false },
      { text: 'Local SEO Optimization', included: false },
    ],
  },
  {
    name: 'Business',
    tagline: 'Most businesses start here',
    price: '499',
    popular: true,
    dark: true,
    features: [
      { text: 'Up To 5 Professional Pages', included: true },
      { text: 'Fully Mobile Responsive', included: true },
      { text: 'WhatsApp + Google Maps', included: true },
      { text: 'Contact Form + Analytics', included: true },
      { text: 'Fast Delivery (5–7 Days)', included: true },
      { text: 'Google Business Setup', included: true },
      { text: 'Local SEO Optimization', included: false },
    ],
  },
  {
    name: 'Growth',
    tagline: 'For businesses serious about leads',
    price: '799',
    popular: false,
    dark: false,
    features: [
      { text: 'Full Multi-Page Website', included: true },
      { text: 'Fully Mobile Responsive', included: true },
      { text: 'WhatsApp + Google Maps', included: true },
      { text: 'Contact Form + Analytics', included: true },
      { text: 'Priority Delivery (3–5 Days)', included: true },
      { text: 'Google Business Optimization', included: true },
      { text: 'Basic Local SEO Setup', included: true },
    ],
  },
];

const trustItems = [
  { icon: Shield, text: 'Satisfaction guaranteed or we revise until you\'re happy' },
  { icon: Zap, text: 'No subscriptions — one-time project price' },
  { icon: ArrowRight, text: 'Flexible payment — 50% upfront, 50% on delivery' },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
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
            Pricing
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Pay once, own it forever.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl flex flex-col overflow-hidden ${
                plan.dark
                  ? 'bg-[#0F172A] shadow-2xl'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Top colored bar */}
              {plan.dark ? (
                <div className="h-1 w-full" style={{ backgroundColor: '#14B8A6' }} />
              ) : (
                <div className="h-1 w-full bg-slate-100" />
              )}

              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#14B8A6] text-white text-xs font-bold rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1 gap-6">
                {/* Plan info */}
                <div>
                  <h3 className={`font-poppins text-lg font-bold mb-1 ${plan.dark ? 'text-white' : 'text-[#0F172A]'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs ${plan.dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className={`font-poppins text-5xl font-bold leading-none ${plan.dark ? 'text-white' : 'text-[#0F172A]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm font-medium ${plan.dark ? 'text-slate-400' : 'text-slate-500'}`}>SAR</span>
                </div>

                {/* Divider */}
                <div className={`h-px ${plan.dark ? 'bg-slate-700' : 'bg-slate-100'}`} />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(20,184,166,0.15)' }}>
                          <Check size={11} style={{ color: '#14B8A6' }} strokeWidth={2.5} />
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-slate-100">
                          <span className="w-1.5 h-px bg-slate-300 rounded-full" />
                        </span>
                      )}
                      <span className={`text-sm leading-snug ${
                        feature.included
                          ? plan.dark ? 'text-slate-200' : 'text-slate-700'
                          : plan.dark ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-center transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.dark
                      ? 'bg-[#14B8A6] text-white hover:bg-[#0E9E8D] shadow-lg'
                      : 'bg-[#0F172A] text-white hover:bg-[#1E293B]'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <Icon size={16} style={{ color: '#14B8A6', flexShrink: 0 }} />
                <span className="text-xs text-slate-600">{item.text}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Custom quote */}
        <motion.p
          className="text-center text-slate-400 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Need something custom?{' '}
          <a href="#contact" className="font-semibold underline underline-offset-2" style={{ color: '#14B8A6' }}>
            Contact us for a tailored quote →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
