import React, { useState } from 'react';
import { Check, Zap, Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter Developer',
      tagline: 'Ideal for prototyping & small independent projects.',
      monthlyPrice: 29,
      annualPrice: 24,
      popular: false,
      features: [
        'Up to 500,000 Tokens / mo',
        '3 Active AI Workflows',
        'Standard LLM Access (GPT-4o mini, Llama 3)',
        'Community Discord Support',
        'REST & Webhook API',
        '99.5% Uptime Guarantee'
      ],
      cta: 'Start Free Trial',
      buttonStyle: 'glass-panel text-slate-200 hover:text-white hover:border-slate-600'
    },
    {
      name: 'Pro Team',
      tagline: 'Designed for growing teams scaling production workloads.',
      monthlyPrice: 99,
      annualPrice: 79,
      popular: true,
      badge: 'Most Popular Choice',
      features: [
        '5,000,000 Tokens / mo',
        'Unlimited Active AI Workflows',
        'Full Multimodal LLM Routing (Claude 3.5, GPT-4o)',
        'Visual Workflow Builder & Python SDK',
        'Priority 24/7 Email & Slack Support',
        'Role-Based Access Control (RBAC)',
        'Custom Vector DB Ingestion (Pinecone, PGVector)',
        '99.9% Uptime SLA'
      ],
      cta: 'Get Started with Pro',
      buttonStyle: 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold shadow-glow-sm hover:from-indigo-500 hover:to-cyan-400'
    },
    {
      name: 'Enterprise Scale',
      tagline: 'Custom infrastructure, dedicated SLAs, and VPC deployment.',
      monthlyPrice: 299,
      annualPrice: 239,
      popular: false,
      features: [
        'Custom Unlimited Token Bandwidth',
        'Self-Hosted Private VPC / On-Premise',
        'Custom LLM Fine-Tuning & Weights Ownership',
        'Dedicated Enterprise Solutions Engineer',
        '99.99% Uptime SLA with Financial Backing',
        'SOC-2 Type II & HIPAA Compliance Bundle',
        'Custom SSO (SAML, Okta, Azure AD)',
        'Custom Security Audits & Logs'
      ],
      cta: 'Contact Enterprise Sales',
      buttonStyle: 'glass-panel text-slate-200 hover:text-white hover:border-slate-600'
    }
  ];

  return (
    <section id="pricing" className="py-24 relative bg-[#0a0d14]">
      {/* Background Radial Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Flexible Plans for <span className="text-gradient">Every Scale</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Transparent pricing with zero hidden fees. Scale your AI workflows seamlessly.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                !annual ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                annual ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30 uppercase font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'glass-panel border-2 border-indigo-500 shadow-glow-md bg-gradient-to-b from-indigo-950/40 via-slate-900/90 to-slate-950'
                    : 'glass-card border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Description */}
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{plan.tagline}</p>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">${price}</span>
                    <span className="text-xs text-slate-400 font-medium">/ month per seat</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-6 border-t border-slate-800/80 mb-8">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-3">
                      Included Capabilities:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-indigo-400" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <a
                  href="#demo"
                  className={`w-full py-3.5 rounded-xl text-center text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${plan.buttonStyle}`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
