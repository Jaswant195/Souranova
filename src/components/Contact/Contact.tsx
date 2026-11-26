import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../../types';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';

const CONTACT_EMAIL = 'souranova@outlook.com';
const MESSAGE_MAX_LENGTH = 1500;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Native validation (required, type="email") runs before this handler.
  // There is no backend: the enquiry is handed to the visitor's email app.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    // Reject whitespace-only values that pass the native `required` check
    const fields: Array<[keyof ContactForm, string]> = [
      ['name', name],
      ['email', email],
      ['subject', subject],
      ['message', message]
    ];
    const emptyField = fields.find(([, value]) => !value);
    if (emptyField) {
      const input = form.elements.namedItem(emptyField[0]) as HTMLInputElement | HTMLTextAreaElement | null;
      if (input) {
        input.setCustomValidity('Please fill in this field.');
        input.reportValidity();
        input.addEventListener('input', () => input.setCustomValidity(''), { once: true });
      }
      return;
    }

    const body = `${message}\n\n--\nName: ${name}\nEmail: ${email}`;
    // encodeURIComponent (not URLSearchParams) so spaces become %20, not "+"
    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Keep the form filled in so the visitor can retry if no email app opens
    window.location.href = mailtoUrl;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7842603857',
      href: 'tel:+917842603857',
      gradient: 'from-orange-400 to-orange-500'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'A-811, Qualitas Nestilo, Osman Nagar, Hyderabad, 502032',
      href: '#',
      gradient: 'from-orange-600 to-orange-700'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM PST',
      href: '#',
      gradient: 'from-orange-300 to-orange-400'
    }
  ];

  return (
    <section id="contact" className="scroll-mt-20 relative py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Get In Touch
            <span className="ml-2 px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">24/7</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible with our expert team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            id="contact-form"
            className="scroll-mt-24"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-3xl p-10 lg:p-12 shadow-xl border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl overflow-hidden">
              {/* Decorative gradient background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full filter blur-3xl opacity-50" />

              <h3 className="text-3xl font-bold text-gray-900 mb-10 relative z-10">
                Send us a <span className="text-orange-500">message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:border-orange-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    maxLength={MESSAGE_MAX_LENGTH}
                    rows={6}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none hover:border-orange-300"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group relative w-full px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-orange-500/30 hover:shadow-xl transform transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    Send via Email
                  </motion.button>
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed text-center">
                    Clicking Send opens your email app with this message ready to send.
                    If nothing opens, email us at{' '}
                    <span className="font-semibold text-gray-700 select-all">{CONTACT_EMAIL}</span>.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl overflow-hidden group"
                >
                  {/* Gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                      {info.label}
                    </h4>
                    {info.href.startsWith('#') ? (
                      <p className="text-gray-600 text-sm">{info.value}</p>
                    ) : (
                      <a
                        href={info.href}
                        className="text-gray-600 text-sm hover:text-orange-500 transition-colors inline-flex items-center gap-1 group"
                      >
                        {info.value}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 rounded-3xl p-10 lg:p-12 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Animated background illustration */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-20 -right-20 w-48 h-48 bg-white/20 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -90, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/15 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-10 right-10 w-8 h-8 bg-white/20 rounded-full"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <MessageSquare className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold ml-6">
                    Prefer to <span className="text-white/90">chat?</span>
                  </h3>
                </div>
                <p className="text-white/90 mb-8 leading-relaxed text-lg">
                  Schedule a free 30-minute consultation with our expert team to discuss your project needs.
                </p>
                <motion.button
                  type="button"
                  onClick={() => {
                    scrollToSection('contact-form');
                    document.getElementById('name')?.focus({ preventScroll: true });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full px-8 py-5 bg-white text-orange-600 font-bold rounded-2xl hover:bg-orange-50 transform transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                >
                  Schedule a Call
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
