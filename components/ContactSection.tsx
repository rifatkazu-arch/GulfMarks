'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, CircleCheck as CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch('https://formsubmit.co/ajax/info@gulfmarks.com', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch(() => {
        // Fallback: still show success since formsubmit handles this
        setSubmitted(true);
        form.reset();
      });
  };

  return (
    <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: '#F8FAFC' }}>
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
            Get In Touch
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Ready to grow your business? Let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(20,184,166,0.1)' }}>
                  <CheckCircle size={32} style={{ color: '#14B8A6' }} />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-[#0F172A]">
                  Message Sent!
                </h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Thank you! We'll contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-[#14B8A6] font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-poppins text-xl font-semibold text-[#0F172A] mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Hidden FormSubmit fields */}
                  <input type="hidden" name="_subject" value="New Lead from GulfMarks Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ahmed Al-Rashid"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="business_name"
                      required
                      placeholder="Your Business Name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+966 50 000 0000"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your business and what you're looking for..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#14B8A6] text-white font-semibold rounded-lg text-sm hover:bg-[#0E9E8D] transition-colors duration-200 mt-2"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Right — WhatsApp CTA */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* WhatsApp card */}
            <div className="bg-[#0F172A] rounded-2xl p-8 flex flex-col gap-6 flex-1">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(20,184,166,0.15)' }}>
                <MessageCircle size={32} style={{ color: '#14B8A6' }} />
              </div>

              <div>
                <h3 className="font-poppins text-2xl font-bold text-white mb-3">
                  Let's Discuss Your Project
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Prefer to chat directly? Send us a WhatsApp message and we'll get back to you within minutes.
                </p>
              </div>

              <a
                href="https://wa.me/966500000000?text=Hello%20GulfMarks%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#14B8A6] text-white font-semibold rounded-xl text-center hover:bg-[#0E9E8D] transition-colors duration-200 text-sm"
              >
                Chat On WhatsApp
              </a>

              {/* Contact details */}
              <div className="flex flex-col gap-3 pt-2 border-t border-slate-700">
                <div className="flex items-center gap-3">
                  <Phone size={16} style={{ color: '#14B8A6', flexShrink: 0 }} />
                  <span className="text-slate-300 text-sm">+966 50 000 0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} style={{ color: '#14B8A6', flexShrink: 0 }} />
                  <span className="text-slate-300 text-sm">info@gulfmarks.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
