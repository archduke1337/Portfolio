'use client';

import { Input, Button, Textarea } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onSubmit?.(formData);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent! I\'ll get back to you soon.');
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="glass-effect rounded-xl p-8 md:p-12 border-cyan/30 space-y-6 max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-8">
        <Mail className="text-cyan" size={24} />
        <h2 className="text-2xl font-bold text-white">Send a Message</h2>
      </div>

      <Input
        type="text"
        label="Name"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="bg-black/30"
        classNames={{
          label: 'text-cyan',
          input: 'text-white placeholder-gray-500',
          inputWrapper: 'border-cyan/30 hover:border-cyan/60',
        }}
        required
      />

      <Input
        type="email"
        label="Email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="bg-black/30"
        classNames={{
          label: 'text-cyan',
          input: 'text-white placeholder-gray-500',
          inputWrapper: 'border-cyan/30 hover:border-cyan/60',
        }}
        required
      />

      <Textarea
        label="Message"
        placeholder="Your message..."
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="bg-black/30 min-h-32"
        classNames={{
          label: 'text-cyan',
          input: 'text-white placeholder-gray-500',
          inputWrapper: 'border-cyan/30 hover:border-cyan/60',
        }}
        required
      />

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan to-blue text-black font-bold py-6 text-lg"
        endContent={!isSubmitting && <Send size={20} />}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-gray-400 text-center">
        Or email me directly at <span className="text-cyan font-semibold">gaurav@zocav.com</span>
      </p>
    </motion.form>
  );
};
