import { logout } from "@/app/actions/auth";

export const metadata = {
  title: "Litigation Ledger — Young Foster PLLC",
  description: "Organized legal invoice ledger for Foster Law matters",
};

export default function FosterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-accent text-white py-4 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/Foster" className="text-xl font-bold tracking-tight">
            Litigation Ledger
          </a>
          <div className="flex items-center gap-4">
            <span className="text-sm opacity-75">Sade Venture</span>
            <form action={logout}>
              <button
                type="submit"
                className="text-white/60 hover:text-white text-xs px-2 py-1 rounded border border-white/20 hover:border-white/50 transition-colors"
                title="Sign Out"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">
        {children}
      </main>
      <footer className="border-t border-border py-4 px-6 text-center text-sm text-muted">
        Young Foster PLLC &middot; Confidential &middot; For authorized use
        only
      </footer>
    </div>
  );
}
