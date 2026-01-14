import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/kyron-logo.png" alt="kyron" width={110} height={32} />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Features</a>
            <a href="#tech" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Tech</a>
            <a href="#research" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Research</a>
          </nav>
          <a href="mailto:contact@kyron.ai" className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">THE FUTURE OF CRITICAL CARE</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-slate-900">AI-powered clinical</span>{" "}
          <span className="text-blue-600">decision support</span>{" "}
          <span className="text-slate-900">for the ICU</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          kyron is an AI agent developed from postdoctoral research in applied artificial
          intelligence for hospital ICUs, designed to support on-call physicians with
          real-time insights grounded in clinical data and scientific evidence.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:contact@kyron.ai" className="rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold no-underline hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            Request early access →
          </a>
          <a href="#how" className="rounded-xl border-2 border-slate-300 px-8 py-4 font-semibold no-underline hover:bg-slate-50 hover:border-slate-400 transition-colors">
            How it works
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Advanced AI capabilities designed specifically for critical care environments
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Clinical data synthesis</h3>
              <p className="text-slate-600 leading-relaxed">
                Consolidates labs, vitals, imaging summaries and notes into a unified,
                clinician-ready view.
              </p>
            </div>
            
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">RAG + LLM reasoning</h3>
              <p className="text-slate-600 leading-relaxed">
                Combines retrieval-augmented generation with large language models
                to contextualize each patient case.
              </p>
            </div>
            
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Scientific validation</h3>
              <p className="text-slate-600 leading-relaxed">
                Built as part of a postdoctoral thesis, ensuring rigorous evaluation,
                safety principles and clinical relevance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Technology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Real-time analysis powered by advanced AI
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                kyron leverages state-of-the-art machine learning models trained on clinical data 
                and medical literature to provide evidence-based recommendations in real-time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Continuous learning from clinical outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Integration with existing hospital systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Secure, HIPAA-compliant infrastructure</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-lg">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="text-sm font-medium text-slate-500 mb-2">Data Processing</div>
                  <div className="text-2xl font-bold text-slate-900">Real-time</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="text-sm font-medium text-slate-500 mb-2">Evidence Sources</div>
                  <div className="text-2xl font-bold text-slate-900">Peer-reviewed</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="text-sm font-medium text-slate-500 mb-2">Clinical Validation</div>
                  <div className="text-2xl font-bold text-slate-900">Rigorous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="relative bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Research Foundation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built on rigorous academic research
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              kyron represents years of postdoctoral research in applied artificial intelligence for critical care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-xl font-semibold mb-4">Academic Rigor</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Developed as part of a comprehensive postdoctoral research program, kyron has been 
                subjected to rigorous evaluation and peer review processes.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every recommendation is grounded in scientific evidence and validated against 
                established clinical guidelines and outcomes data.
              </p>
            </div>
            
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-xl font-semibold mb-4">Safety First</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Patient safety is at the core of kyron's design. The system includes multiple 
                layers of validation and safety checks before presenting recommendations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                All outputs are designed to support, not replace, clinical judgment, ensuring 
                physicians remain in control of all decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to transform ICU decision-making?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading healthcare institutions exploring how AI can enhance critical care outcomes
          </p>
          <a href="mailto:contact@kyron.ai" className="inline-block rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold no-underline hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            Request early access →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/kyron-logo.png" alt="kyron" width={110} height={32} />
              <span className="text-sm text-slate-500">Research-driven healthcare AI</span>
            </div>
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} kyron — All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}