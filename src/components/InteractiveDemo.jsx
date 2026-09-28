import React, { useState } from 'react';
import { Terminal, Play, RefreshCw, CheckCircle, Copy, Check, Sparkles, Send, Cpu, ShieldCheck } from 'lucide-react';

export default function InteractiveDemo() {
  const samplePrompts = [
    {
      id: 'lead-scoring',
      label: 'Autonomous Lead Qualifier',
      prompt: 'Extract tech stack, budget tier, and buyer intent score from incoming enterprise contact submission.',
      output: {
        status: 'SUCCESS',
        latency: '112ms',
        tokensUsed: 248,
        confidence: '99.2%',
        json: {
          company: 'Acme Global Cloud Inc.',
          estimatedBudget: '$50,000 - $100,000',
          techStackDetected: ['React', 'PostgreSQL', 'AWS EKS', 'Kafka'],
          intentScore: 0.94,
          suggestedAction: 'Route immediately to Enterprise SDR (High Priority)'
        }
      }
    },
    {
      id: 'code-review',
      label: 'Security & Vulnerability Audit',
      prompt: 'Scan Python backend code for SQL injection, exposed API keys, and memory leaks before PR merge.',
      output: {
        status: 'PASSED WITH RECOMMENDATION',
        latency: '145ms',
        tokensUsed: 412,
        confidence: '98.7%',
        json: {
          vulnerabilitiesFound: 0,
          performanceAlerts: 1,
          details: 'Discovered unindexed JOIN query on line 42 in users_repository.py.',
          recommendation: 'Add composite index on (tenant_id, created_at) to avoid table scan.'
        }
      }
    },
    {
      id: 'support-agent',
      label: 'Customer Ticket Resolver',
      prompt: 'Analyze user billing discrepancy ticket and generate personalized refund approval response.',
      output: {
        status: 'RESOLVED & SYNCED',
        latency: '95ms',
        tokensUsed: 190,
        confidence: '99.8%',
        json: {
          actionTaken: 'Stripe Refund Issued',
          refundAmount: '$49.00',
          emailTemplateSent: 'Dear Alex, your subscription overcharge has been credited to your card within 3 business days.',
          sentimentScore: 'Positive (+0.88)'
        }
      }
    }
  ];

  const [selectedPrompt, setSelectedPrompt] = useState(samplePrompts[0]);
  const [customText, setCustomText] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(selectedPrompt.output.json, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-24 relative bg-grid-pattern bg-[#0a0d14]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Terminal className="w-3.5 h-3.5" />
            Live Interactive Sandbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Test the <span className="text-gradient-cyan">NexusAI Engine</span> Live
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Select an automated scenario below to see real-time agent output, JSON payload structure, and performance metrics.
          </p>
        </div>

        {/* Simulator Panel */}
        <div className="max-w-5xl mx-auto glass-panel rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Preset Scenario Selector Buttons */}
          <div className="p-4 sm:p-6 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Preset Workflows:</span>
            {samplePrompts.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedPrompt(item);
                  handleRun();
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border flex items-center gap-2 ${
                  selectedPrompt.id === item.id
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-glow-sm'
                    : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-600 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Simulator Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Left Column: Input Prompt */}
            <div className="p-6 bg-slate-950/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    Agent Input Instructions
                  </label>
                  <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                    Model: Nexus-3-Ultra
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 font-mono leading-relaxed min-h-[140px]">
                  {selectedPrompt.prompt}
                </div>
              </div>

              {/* Run Trigger CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Deterministic Output</span>
                </div>
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-xs shadow-glow-sm hover:from-indigo-500 hover:to-cyan-400 transition-all disabled:opacity-50"
                >
                  {isRunning ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>Execute Workflow</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Output JSON & Telemetry */}
            <div className="p-6 bg-[#0a0d14]/90 flex flex-col justify-between">
              <div>
                {/* Output Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    Structured Response Output
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-1 text-xs"
                    title="Copy JSON Payload"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Response Visualizer */}
                <div className="relative rounded-xl bg-slate-950 p-4 font-mono text-xs text-emerald-300 border border-slate-800 overflow-x-auto min-h-[140px]">
                  {isRunning ? (
                    <div className="h-full min-h-[120px] flex items-center justify-center gap-3 text-slate-400">
                      <RefreshCw className="w-5 h-5 text-indigo-400 animate-spin" />
                      <span>Running multi-agent consensus...</span>
                    </div>
                  ) : (
                    <pre>{JSON.stringify(selectedPrompt.output.json, null, 2)}</pre>
                  )}
                </div>
              </div>

              {/* Execution Telemetry Stats */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Execution Speed</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">{selectedPrompt.output.latency}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Tokens Used</div>
                  <div className="text-sm font-bold text-indigo-400 mt-0.5">{selectedPrompt.output.tokensUsed}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Confidence</div>
                  <div className="text-sm font-bold text-cyan-400 mt-0.5">{selectedPrompt.output.confidence}</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
