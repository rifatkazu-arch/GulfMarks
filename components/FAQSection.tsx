'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to build my website?',
    answer:
      'Most websites are delivered within 3–7 business days depending on the package and complexity. Our Starter package is typically live in 3 days, Business in 5, and Growth in 7. We\'ll give you a firm date before we start.',
  },
  {
    question: 'Do you provide hosting?',
    answer:
      'Yes — we handle everything. We set up fast, reliable hosting optimized for Gulf-region visitors and configure your domain. You\'ll never need to touch a server.',
  },
  {
    question: 'Can I update my website after it\'s live?',
    answer:
      'Absolutely. We offer ongoing maintenance packages, and we can train you to make basic updates (text changes, images) yourself. Any larger changes are handled by our team, usually within 24 hours.',
  },
  {
    question: 'Will my website look good on mobile phones?',
    answer:
      'Yes — 100%. Every website we build is designed mobile-first and tested across all devices and screen sizes, including the most popular phones used in Saudi Arabia and the Gulf.',
  },
  {
    question: 'How will customers find my website on Google?',
    answer:
      'Our Growth Package includes Local SEO setup and Google Business Profile optimization — the most powerful tools for getting found in local searches. Even the basic packages include SEO-friendly structure out of the box.',
  },
  {
    question: 'Do I need to pay everything upfront?',
    answer:
      'No. We work on a 50% deposit to start, 50% on delivery model. You only pay the final amount once you\'re happy with the result and ready to go live.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
            FAQ
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know before we get started
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left — Accordion */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-slate-100"
                >
                  <AccordionTrigger className="font-poppins font-semibold text-[#0F172A] text-left text-sm hover:no-underline hover:text-[#14B8A6] py-5 leading-snug">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right — Still have questions CTA */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl p-8 sticky top-24" style={{ backgroundColor: '#0F172A' }}>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: 'rgba(20,184,166,0.15)' }}
              >
                <MessageCircle size={26} style={{ color: '#14B8A6' }} />
              </div>

              <h3 className="font-poppins text-xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Can't find the answer you're looking for? Chat with us directly on WhatsApp — we respond within minutes.
              </p>

              <a
                href="https://wa.me/966500000000?text=Hello%20GulfMarks%2C%20I%20have%20a%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-[#14B8A6] text-white text-sm font-semibold rounded-xl text-center hover:bg-[#0E9E8D] transition-colors duration-200 mb-4"
              >
                Chat on WhatsApp
              </a>

              <a
                href="#contact"
                className="block w-full py-3.5 border border-slate-600 text-slate-300 text-sm font-semibold rounded-xl text-center hover:bg-slate-800 transition-colors duration-200"
              >
                Send Us a Message
              </a>

              <div className="mt-6 pt-5 border-t border-slate-700">
                <p className="text-xs text-slate-500 text-center">
                  We typically reply within <span className="text-[#14B8A6] font-semibold">15 minutes</span> during business hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
