import React from 'react';
import { Cpu, Zap, Shield, GitBranch, BarChart3, Lock, RefreshCw, Sparkles, Sliders } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: Cpu,
      title: 'Multimodal Neural Processing',
      description: 'Orchestrate tasks using Claude 3.5, GPT-4o, and open-source models with automatic cost and latency routing.',
      badge: 'Core Engine',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: GitBranch,
      title: 'Visual Workflow Designer',
      description: 'Drag, drop, and configure complex multi-agent logic chains without writing boilerplate infrastructure code.',
      badge: 'No-Code & Code',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Real-Time Vector Ingestion',
      description: 'Stream unstructured PDFs, database rows, and customer tickets directly into high-speed vector embeddings.',
      badge: 'High Speed',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics Engine',
      description: 'Gain real-time telemetry on token costs, execution latencies, and agent task completion efficiency.',
      badge: 'Real-Time',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise SOC-2 Security',
      description: 'Zero model retention guarantees, granular RBAC permissions, and full audit trail compliance.',
      badge: 'Compliance',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: RefreshCw,
      title: 'Autonomous Self-Healing',
      description: 'Agents automatically catch exception errors, retry fallback providers, and self-correct broken API calls.',
      badge: 'Auto-Retry',
      color: 'from-violet-500 to-indigo-500'
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-[#0a0d14]">
      {/* Background Radial Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Modern <span className="text-gradient">AI Operations</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Everything you need to build, deploy, scale, and monitor autonomous AI solutions across your entire tech stack.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} p-0.5 shadow-md group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-800/80 border border-slate-700/80 px-2.5 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Interactive Link */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>Explore documentation</span>
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
