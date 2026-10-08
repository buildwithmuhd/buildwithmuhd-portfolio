import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="paper max-w-xl border border-black/20 p-10 shadow-paper">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em]">404</p>
        <h1 className="mt-4 font-display text-4xl">PAGE MISSING</h1>
        <Link className="mt-8 inline-flex bg-black px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white" href="/">
          Back home
        </Link>
      </div>
    </main>
  );
}
