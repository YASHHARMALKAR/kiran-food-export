import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Cpu, Code2 } from 'lucide-react';

export default function FAQ() {
  const faqData = [
    {
      question: "How does NexusAI integrate with our existing stack?",
      answer: "NexusAI provides 200+ native connectors for popular databases (PostgreSQL, MongoDB, Snowflake), cloud providers (AWS, GCP, Azure), messaging tools (Slack, Teams, Discord), and CRMs (Salesforce, HubSpot). You can also trigger agents via REST endpoints, webhooks, or our Python/Node.js SDKs."
    },
    {
      question: "Is enterprise data kept private and secure?",
      answer: "Yes, data privacy is paramount. NexusAI enforces strict zero data retention policies on model training. Your data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC-2 Type II certified and GDPR/HIPAA compliant."
    },
    {
      question: "Can we plug in custom or self-hosted LLM endpoints?",
      answer: "Absolutely. On our Pro and Enterprise plans, you can connect fine-tuned proprietary models hosted on AWS SageMaker, vLLM, HuggingFace TGI, or Azure OpenAI with full fallback routing."
    },
    {
      question: "What happens if an API dependency fails or times out?",
      answer: "NexusAI features built-in autonomous self-healing. When a third-party API or LLM endpoint fails, the system automatically triggers fallback routing, retries with exponential backoff, and alerts your team via webhook."
    },
    {
      question: "Is there a free trial period?",
      answer: "Yes! All new workspace registrations include a 14-day unrestricted free trial with 500,000 complimentary processing tokens and full access to the Visual Workflow Builder."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#0a0d14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Got Questions? <span className="text-gradient">We Have Answers</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Everything you need to know about setting up and running autonomous AI workflows.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-indigo-600 text-white' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/40 pt-4 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
