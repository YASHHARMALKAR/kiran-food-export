import React from 'react';
import { BookOpen, CheckCircle, Cpu, Zap, ArrowRight } from 'lucide-react';

export default function SEOArticle() {
  return (
    <section className="py-20 border-t border-b border-slate-800/80 bg-[#080b11]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <article className="prose prose-invert max-w-none">
          {/* Article Header */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
            <BookOpen className="w-4 h-4" />
            <span>SEO Knowledge Base & Technical Whitepaper</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Why Enterprise AI Automation Requires Next-Generation Autonomous Workflows
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            As global organizations transition from simple conversational LLM interfaces to fully autonomous AI agents, 
            the bottleneck shifts from prompt engineering to <strong>systemic workflow orchestration</strong>. Legacy RPA tools 
            and brittle static scripts lack the cognitive flexibility required to process dynamic, unstructured business data across 
            cloud platforms, vector indexes, and transactional databases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                Multimodal Orchestration
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                By dynamically routing task sub-components to specialized models (such as GPT-4o for vision tasks, Claude 3.5 Sonnet for code synthesis, and Llama 3 for fast classification), NexusAI slashes token latency while reducing API costs by up to 60%.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                Zero-Trust Security Baseline
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enterprise compliance requires strict telemetry boundaries. NexusAI operates with a zero-data-retention guarantee, isolated tenant environments, SOC-2 Type II audit logs, and hardware-backed KMS encryption key management.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">
            Key Architectural Advantages of NexusAI Agent Orchestration:
          </h3>

          <ul className="space-y-3 text-slate-300 text-xs sm:text-sm list-none pl-0 mb-8">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Event-Driven Triggers:</strong> Initiate multi-stage workflows via HTTP webhooks, Kafka messages, or cron schedules.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Deterministic Fallbacks:</strong> Guarantee mission-critical SLA uptime with automated fallback provider chaining.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Granular Telemetry:</strong> Gain full visibility into token consumption, agent step traces, and execution latencies.</span>
            </li>
          </ul>

        </article>

      </div>
    </section>
  );
}
