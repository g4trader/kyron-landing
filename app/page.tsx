import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Image src="/kyron-logo.png" alt="kyron" width={110} height={32} />
          <span className="text-sm text-slate-500">AI Copilot for ICU Decision Support</span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          AI-powered clinical decision support for the ICU
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          kyron is an AI agent developed from postdoctoral research in applied artificial
          intelligence for hospital ICUs, designed to support on-call physicians with
          real-time insights grounded in clinical data and scientific evidence.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="mailto:contact@kyron.ai" className="rounded-xl bg-slate-900 px-6 py-3 text-white font-semibold no-underline hover:bg-slate-800 transition-colors">
            Request early access
          </a>
          <a href="#how" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold no-underline hover:bg-slate-50 transition-colors">
            How it works
          </a>
        </div>
      </section>

      <section id="how" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="font-semibold">Clinical data synthesis</h3>
            <p className="mt-3 text-sm text-slate-600">
              Consolidates labs, vitals, imaging summaries and notes into a unified,
              clinician-ready view.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="font-semibold">RAG + LLM reasoning</h3>
            <p className="mt-3 text-sm text-slate-600">
              Combines retrieval-augmented generation with large language models
              to contextualize each patient case.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="font-semibold">Scientific validation</h3>
            <p className="mt-3 text-sm text-slate-600">
              Built as part of a postdoctoral thesis, ensuring rigorous evaluation,
              safety principles and clinical relevance.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} kyron — Research-driven healthcare AI
      </footer>
    </main>
  );
}