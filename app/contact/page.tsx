'use client';

import { Navbar } from '@/components/Navbar';
import { SocialLinks } from '@/components/SocialLinks';
import { ContactForm } from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { contactEmail } from '@/lib/socials';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-black">
              Let's Build <span className="text-cyan">Together</span>
            </h1>

            <p className="text-xl text-gray-300">
              Have a project in mind? Want to collaborate? Or just want to chat about tech, security, and building legendary products?
            </p>

            {/* Contact Form */}
            <div className="py-12">
              <ContactForm />
            </div>

            {/* Quick Contact Methods */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="text-gray-400 text-sm">Or reach out directly:</div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  as="a"
                  href={`mailto:${contactEmail}`}
                  className="bg-cyan/20 text-cyan border border-cyan/50 font-semibold"
                  variant="bordered"
                  size="lg"
                >
                  📧 Send Email
                </Button>

                <Button
                  as="a"
                  href="https://calendly.com/gauravyadav"
                  target="_blank"
                  className="bg-magenta/20 text-magenta border border-magenta/50 font-semibold"
                  variant="bordered"
                  size="lg"
                >
                  📅 Schedule Call
                </Button>
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-gray-400">Or connect via social media:</p>
              <SocialLinks />
            </motion.div>

            {/* Closing statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="glass-effect rounded-xl p-8 border-gray-700 mt-12"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always interested in ambitious projects that push boundaries. Whether it's a startup looking for a technical cofounder, a company needing a full-stack engineer, or just a fellow builder wanting to collaborate—let's talk.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
