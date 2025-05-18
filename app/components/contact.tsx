'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      ).then(
        () => alert('Message sent successfully!'),
        (error) => alert(`Error: ${error.text}`)
      );
    }
  };

  return (
    <section className="py-20" id="contact">
      <h2 className="text-3xl font-bold mb-12">Let&apos;s Connect</h2>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn-primary w-full md:w-auto"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}