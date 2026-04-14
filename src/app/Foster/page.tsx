import Link from "next/link";
import { cases } from "@/lib/invoices";

export default function FosterPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-accent mb-2">
          Young Foster PLLC
        </h1>
        <p className="text-muted">
          Attorney: Michael C. Foster, Esq. &middot; Fort Lauderdale, FL
        </p>
        <p className="text-muted text-sm mt-1">
          Select a case below to view the organized invoice ledger.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/Foster/${c.slug}`}
            className="block bg-card-bg border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold text-accent mb-2">
              {c.title}
            </h2>
            <p className="text-sm text-muted mb-3">{c.description}</p>
            <div className="flex items-center gap-3 text-xs text-muted">
              <span className="bg-accent/10 text-accent px-2 py-1 rounded font-medium">
                {c.invoices.length} invoice{c.invoices.length !== 1 ? "s" : ""}
              </span>
              {c.statements.length > 0 && (
                <span className="bg-gray-100 px-2 py-1 rounded">
                  {c.statements.length} statement
                  {c.statements.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-4 bg-card-bg border border-border rounded-lg">
        <h3 className="font-semibold text-sm mb-2">Summary</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-accent">
              {cases.length}
            </div>
            <div className="text-xs text-muted">Cases</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">
              {cases.reduce((sum, c) => sum + c.invoices.length, 0)}
            </div>
            <div className="text-xs text-muted">Total Invoices</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">
              {cases.reduce((sum, c) => sum + c.statements.length, 0)}
            </div>
            <div className="text-xs text-muted">Account Statements</div>
          </div>
        </div>
      </div>
    </div>
  );
}
