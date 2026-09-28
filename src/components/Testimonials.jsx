import React from 'react';
import { Star, Quote, CheckCircle2, TrendingUp, Building2, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "NexusAI reduced our customer support response time by 74% while processing over 120,000 monthly tickets automatically. The ROI was clear within week one.",
      author: "Sarah Jenkins",
      role: "VP of Product Engineering",
      company: "CloudScale Inc.",
      metric: "74% Faster Ticket Resolution",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "The visual workflow builder combined with Python SDK gave our data science team unprecedented speed to deploy fine-tuned agent workflows across SQL databases.",
      author: "David Chen",
      role: "Head of AI Infrastructure",
      company: "FinTech Global",
      metric: "10x Developer Productivity",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "Security and data compliance were non-negotiable for our healthcare application. NexusAI's zero retention guarantee and SOC-2 certification made sign-off effortless.",
      author: "Elena Rostova",
      role: "Chief Information Security Officer",
      company: "HealthPulse Tech",
      metric: "100% Data Security Compliance",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-24 relative bg-[#0a0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Quote className="w-3.5 h-3.5" />
            Customer Success Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by Teams Driving <span className="text-gradient">Real Business Impact</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            See how industry leaders deploy NexusAI to automate mission-critical operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                  {item.metric}
                </div>

                {/* Quote Body */}
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-3">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1">
                    {item.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                  <p className="text-xs font-semibold text-indigo-400">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-16 glass-panel rounded-2xl p-8 border border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">4.9 / 5</div>
            <div className="text-xs text-slate-400 mt-1">Average Customer Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400">12,000+</div>
            <div className="text-xs text-slate-400 mt-1">Active Automated Workflows</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">99.99%</div>
            <div className="text-xs text-slate-400 mt-1">Uptime SLA Guarantee</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">2.5B+</div>
            <div className="text-xs text-slate-400 mt-1">Monthly Tokens Processed</div>
          </div>
        </div>

      </div>
    </section>
  );
}
