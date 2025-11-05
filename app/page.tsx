import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(24,226,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(24,226,153,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#18e299]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-10">
          {/* Logos */}
          <div className="flex items-center gap-6">
            <div className="p-3  rounded-lg">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={70}
                height={70}
                priority
              />
            </div>
            <span className="text-3xl font-light text-zinc-600">×</span>
            <div className="p-3 rounded-lg">
              <Image
                src="/nuvix.svg"
                alt="Nuvix Logo"
                width={70}
                height={70}
                priority
              />
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Next.js + Nuvix
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl">
              A minimal starter template for building full-stack applications
              with type-safe backend
            </p>
          </div>

          {/* Get Started Section */}
          <div className="w-full max-w-xl bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
            <p className="text-sm text-zinc-400 mb-3">Get started by editing</p>
            <code className="block bg-black px-4 py-3 rounded text-sm font-mono text-[#18e299] border border-zinc-800">
              app/page.tsx
            </code>
          </div>

          {/* Setup Steps */}
          <div className="w-full max-w-xl space-y-3">
            <div className="flex gap-3 items-start p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:border-zinc-700 transition-colors">
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#18e299] text-black flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="text-left flex-1">
                <h3 className="text-sm font-medium text-white mb-1">
                  Configure Nuvix
                </h3>
                <p className="text-xs text-zinc-500">
                  Add your credentials to{" "}
                  <code className="text-[#18e299]">.env.local</code>
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:border-zinc-700 transition-colors">
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#18e299] text-black flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="text-left flex-1">
                <h3 className="text-sm font-medium text-white mb-1">
                  Generate Types
                </h3>
                <p className="text-xs text-zinc-500">
                  Run <code className="text-[#18e299]">npm run types</code> to
                  sync your schema
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:border-zinc-700 transition-colors">
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#18e299] text-black flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="text-left flex-1">
                <h3 className="text-sm font-medium text-white mb-1">
                  Start Building
                </h3>
                <p className="text-xs text-zinc-500">
                  Use <code className="text-[#18e299]">nx</code> client and{" "}
                  <code className="text-[#18e299]">useAuth</code> hook
                </p>
              </div>
            </div>
          </div>

          {/* Documentation Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://docs.nuvix.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg bg-[#18e299] text-black text-sm font-semibold hover:bg-[#15cc88] transition-colors"
            >
              Nuvix Docs →
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg bg-zinc-800 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700"
            >
              Next.js Docs →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
