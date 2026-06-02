import Link from "next/link";

type Status = "paid" | "unpaid" | "zero-billed";

interface Inv {
  num: string;
  period: string;
  date: string;
  amount: number;
  status: Status;
  paidDate?: string;
  balance: number;
}

interface CaseLedger {
  slug: string;
  title: string;
  invoices: Inv[];
}

const ledger: CaseLedger[] = [
  {
    slug: "Sade-v-Shahmram",
    title: "Sade v. Shahmram",
    invoices: [
      { num: "02157", period: "Jan 2025", date: "2025-02-15", amount: 12534.89, status: "paid", paidDate: "2025-02-25", balance: 0 },
      { num: "02241", period: "Feb 2025", date: "2025-03-23", amount: 9171.69, status: "paid", paidDate: "2025-07-11", balance: 0 },
      { num: "02277", period: "Mar 2025", date: "2025-04-16", amount: 17545.95, status: "paid", paidDate: "2025-07-11", balance: 0 },
      { num: "02316", period: "May 2025", date: "2025-05-18", amount: 15860.5, status: "paid", paidDate: "2025-07-11", balance: 0 },
      { num: "02379", period: "Jun 2025", date: "2025-06-14", amount: 9526, status: "paid", paidDate: "2025-07-11", balance: 0 },
      { num: "02419", period: "Jun 2025", date: "2025-07-09", amount: 5800.5, status: "paid", paidDate: "2025-12-15", balance: 0 },
      { num: "02488", period: "Jul 2025", date: "2025-08-16", amount: 4976, status: "paid", paidDate: "2025-12-10", balance: 0 },
      { num: "02542", period: "Aug 2025", date: "2025-09-24", amount: 10791.9, status: "unpaid", balance: 10791.9 },
      { num: "02586", period: "Sep 2025", date: "2025-10-11", amount: 5471.5, status: "paid", paidDate: "2025-12-10", balance: 0 },
      { num: "02643", period: "Oct 2025", date: "2025-11-22", amount: 3455, status: "paid", paidDate: "2025-12-10", balance: 0 },
      { num: "02679", period: "Nov 2025", date: "2025-12-13", amount: 1093, status: "unpaid", balance: 1093 },
      { num: "02717", period: "Dec 2025", date: "2026-01-17", amount: 4994, status: "unpaid", balance: 4994 },
      { num: "02759", period: "Jan 2026", date: "2026-02-14", amount: 0, status: "paid", paidDate: "2026-02-18", balance: 0 },
      { num: "02789", period: "Feb 2026", date: "2026-03-18", amount: 12537, status: "unpaid", balance: 12537 },
    ],
  },
  {
    slug: "Reward-v-Fleming",
    title: "Reward Florida v. Fleming",
    invoices: [
      { num: "02420", period: "Jun 2025", date: "2025-07-09", amount: 2858.5, status: "unpaid", balance: 2858.5 },
      { num: "02487", period: "Jul 2025", date: "2025-08-16", amount: 900.5, status: "paid", paidDate: "2025-12-10", balance: 0 },
      { num: "02541", period: "Aug 2025", date: "2025-09-24", amount: 286, status: "paid", paidDate: "2025-12-10", balance: 0 },
      { num: "02585", period: "Sep 2025", date: "2025-10-11", amount: 268.5, status: "paid", paidDate: "2025-12-15", balance: 0 },
      { num: "02681", period: "Nov 2025", date: "2025-12-13", amount: 3004.5, status: "unpaid", balance: 3004.5 },
      { num: "02716", period: "Dec 2025", date: "2026-01-17", amount: 5435, status: "unpaid", balance: 5435 },
      { num: "02760", period: "Jan 2026", date: "2026-02-14", amount: 0, status: "paid", paidDate: "2026-02-18", balance: 0 },
      { num: "02790", period: "Feb 2026", date: "2026-03-18", amount: 3995.5, status: "unpaid", balance: 3995.5 },
    ],
  },
  {
    slug: "General-Matters",
    title: "General Matters",
    invoices: [
      { num: "02300", period: "Rabena closing", date: "2025-05-09", amount: 1638, status: "paid", paidDate: "2025-07-11", balance: 0 },
      { num: "02380", period: "Jun 2025", date: "2025-06-14", amount: 1287, status: "paid", paidDate: "2025-07-11", balance: 0 },
      { num: "02584", period: "Sep 2025", date: "2025-10-11", amount: 1345.5, status: "unpaid", balance: 1345.5 },
      { num: "02680", period: "Nov 2025", date: "2025-12-13", amount: 0, status: "zero-billed", balance: 0 },
    ],
  },
];

function money(n: number): string {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const statusBadge: Record<Status, string> = {
  paid: "bg-emerald-100 text-emerald-800",
  unpaid: "bg-red-100 text-red-800",
  "zero-billed": "bg-slate-100 text-slate-500",
};

const statusLabel: Record<Status, string> = {
  paid: "Paid",
  unpaid: "Unpaid",
  "zero-billed": "$0",
};

export const metadata = {
  title: "Balances & Payments — Young Foster PLLC",
};

export default function BalancesPage() {
  const all = ledger.flatMap((c) => c.invoices);
  const billed = all.reduce((s, i) => s + i.amount, 0);
  const paid = all.filter((i) => i.status === "paid").reduce((s, i) => s + i.amount, 0);
  const outstanding = all.reduce((s, i) => s + i.balance, 0);

  return (
    <div>
      <div className="mb-6">
        <Link href="/Foster" className="text-sm text-muted hover:text-accent">
          &larr; Back to cases
        </Link>
        <h1 className="text-3xl font-bold text-accent mt-1">Balances &amp; Payments</h1>
        <p className="text-muted text-sm mt-1">
          What was billed, paid, and still owed to Michael C. Foster, Esq.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="bg-card-bg border border-border rounded-lg p-5">
          <div className="text-xs text-muted uppercase tracking-wide">Total Billed</div>
          <div className="text-2xl font-bold text-accent mt-1">{money(billed)}</div>
        </div>
        <div className="bg-card-bg border border-border rounded-lg p-5">
          <div className="text-xs text-muted uppercase tracking-wide">Total Paid</div>
          <div className="text-2xl font-bold text-emerald-600 mt-1">{money(paid)}</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <div className="text-xs text-red-500 uppercase tracking-wide">Outstanding (Owed)</div>
          <div className="text-2xl font-bold text-red-600 mt-1">{money(outstanding)}</div>
        </div>
      </div>

      <div className="space-y-8">
        {ledger.map((c) => {
          const cBilled = c.invoices.reduce((s, i) => s + i.amount, 0);
          const cPaid = c.invoices.filter((i) => i.status === "paid").reduce((s, i) => s + i.amount, 0);
          const cOut = c.invoices.reduce((s, i) => s + i.balance, 0);
          return (
            <div key={c.slug} className="bg-card-bg border border-border rounded-lg overflow-hidden">
              <div className="px-5 py-4 border-b border-border flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-lg font-semibold text-accent">{c.title}</h2>
                <div className="text-sm text-muted">
                  Billed <span className="font-semibold text-accent">{money(cBilled)}</span>
                  <span className="mx-2">&middot;</span>
                  Paid <span className="font-semibold text-emerald-600">{money(cPaid)}</span>
                  <span className="mx-2">&middot;</span>
                  Owed <span className="font-semibold text-red-600">{money(cOut)}</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-muted border-b border-border">
                      <th className="px-5 py-2 font-medium">Invoice</th>
                      <th className="px-5 py-2 font-medium">Period</th>
                      <th className="px-5 py-2 font-medium">Date</th>
                      <th className="px-5 py-2 font-medium text-right">Amount</th>
                      <th className="px-5 py-2 font-medium">Status</th>
                      <th className="px-5 py-2 font-medium">Paid On</th>
                      <th className="px-5 py-2 font-medium text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.invoices.map((i) => (
                      <tr key={i.num} className="border-b border-border last:border-0">
                        <td className="px-5 py-2 font-mono text-xs text-accent">#{i.num}</td>
                        <td className="px-5 py-2 text-muted">{i.period}</td>
                        <td className="px-5 py-2 text-muted">{i.date}</td>
                        <td className="px-5 py-2 text-right font-medium">{money(i.amount)}</td>
                        <td className="px-5 py-2">
                          <span className={"px-2 py-0.5 rounded text-xs font-medium " + statusBadge[i.status]}>
                            {statusLabel[i.status]}
                          </span>
                        </td>
                        <td className="px-5 py-2 text-muted text-xs">{i.paidDate ?? "—"}</td>
                        <td className={"px-5 py-2 text-right font-medium " + (i.balance > 0 ? "text-red-600" : "text-muted")}>
                          {money(i.balance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
