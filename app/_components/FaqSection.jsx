'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does your law firm provide?',
    answer:
      'We offer legal consultation, case representation, corporate law, family law, and civil litigation services.',
  },
  {
    question: 'How can I schedule a consultation?',
    answer:
      'You can schedule a consultation by filling out the form on our contact page or calling us directly.',
  },
  {
    question: 'Do you offer free consultations?',
    answer:
      'Yes, we offer a free 30-minute consultation for new clients to discuss your legal needs.',
  },
  {
    question: 'Are your lawyers specialized in specific legal areas?',
    answer:
      'Yes, our lawyers are specialized in areas like criminal law, corporate law, intellectual property, and more.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fff9f6] py-16 px-4 sm:px-8 lg:px-20">
      <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              layout
              initial={{ borderRadius: 16 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-6 py-5 text-left text-gray-800 font-medium text-lg hover:bg-gray-100 transition-colors"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pt-0 pb-6 text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
