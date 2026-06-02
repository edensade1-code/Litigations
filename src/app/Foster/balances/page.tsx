"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

type Status = "paid" | "unpaid" | "zero-billed";

interface Inv {
  num: string;
  caseTitle: string;
  period: string;
  date: string;
  amount: number;
  status: Status;
  paidDate?: string;
  balance: number;
}

const invoices: Inv[] = [
  { num: "02157", caseTitle: "Sade v. Shahmram", period: "Jan 2025", date: "2025-02-15", amount: 12534.89, status: "paid", paidDate: "2025-02-25", balance: 0 },
  { num: "02241", caseTitle: "Sade v. Shahmram", period: "Feb 2025", date: "2025-03-23", amount: 9171.69, status: "paid", paidDate: "2025-07-11", balance: 0 },
  { num: "02277", caseTitle: "Sade v. Shahmram", period: "Mar 2025", date: "2025-04-16", amount: 17545.95, status: "paid", paidDate: "2025-07-11", balance: 0 },
  { num: "02316", caseTitle: "Sade v. Shahmram", period: "May 2025", date: "2025-05-18", amount: 15860.5, status: "paid", paidDate: "2025-07-11", balance: 0 },
  { num: "02379", caseTitle: "Sade v. Shahmram", period: "Jun 2025", date: "2025-06-14", amount: 9526, status: "paid", paidDate: "2025-07-11", balance: 0 },
  { num: "02419", caseTitle: "Sade v. Shahmram", period: "Jun 2025", date: "2025-07-09", amount: 5800.5, status: "paid", paidDate: "2025-12-15", balance: 0 },
  { num: "02488", caseTitle: "Sade v. Shahmram", period: "Jul 2025", date: "2025-08-16", amount: 4976, status: "paid", paidDate: "2025-12-10", balance: 0 },
  { num: "02542", caseTitle: "Sade v. Shahmram", period: "Aug 2025", date: "2025-09-24", amount: 10791.9, status: "unpaid", balance: 10791.9 },
  { num: "02586", caseTitle: "Sade v. Shahmram", period: "Sep 2025", date: "2025-10-11", amount: 5471.5, status: "paid", paidDate: "2025-12-10", balance: 0 },
  { num: "02643", caseTitle: "Sade v. Shahmram", period: "Oct 2025", date: "2025-11-22", amount: 3455, status: "paid", paidDate: "2025-12-10", balance: 0 },
  { num: "02679", caseTitle: "Sade v. Shahmram", period: "Nov 2025", date: "2025-12-13", amount: 1093, status: "unpaid", balance: 1093 },
  { num: "02717", caseTitle: "Sade v. Shahmram", period: "Dec 2025", date: "2026-01-17", amount: 4994, status: "unpaid", balance: 4994 },
  { num: "02759", caseTitle: "Sade v. Shahmram", period: "Jan 2026", date: "2026-02-14", amount: 0, status: "paid", paidDate: "2026-02-18", balance: 0 },
  { num: "02789", caseTitle: "Sade v. Shahmram", period: "Feb 2026", date: "2026-03-18", amount: 12537, status: "unpaid", balance: 12537 },
  { num: "02420", caseTitle: "Reward Florida v. Fleming", period: "Jun 2025", date: "2025-07-09", amount: 2858.5, status: "unpaid", balance: 2858.5 },
  { num: "02487", caseTitle: "Reward Florida v. Fleming", period: "Jul 2025", date: "2025-08-16", amount: 900.5, status: "paid", paidDate: "2025-12-10", balance: 0 },
  { num: "02541", caseTitle: "Reward Florida v. Fleming", period: "Aug 2025", date: "2025-09-24", amount: 286, status: "paid", paidDate: "2025-12-10", balance: 0 },
  { num: "02585", caseTitle: "Reward Florida v. Fleming", period: "Sep 2025", date: "2025-10-11", amount: 268.5, status: "paid", paidDate: "2025-12-15", balance: 0 },
  { num: "02681", caseTitle: "Reward Florida v. Fleming", period: "Nov 2025", date: "2025-12-13", amount: 3004.5, status: "unpaid", balance: 3004.5 },
  { num: "02716", caseTitle: "Reward Florida v. Fleming", period: "Dec 2025", date: "2026-01-17", amount: 5435, status: "unpaid", balance: 5435 },
  { num: "02760", caseTitle: "Reward Florida v. Fleming", period: "Jan 2026", date: "2026-02-14", amount: 0, status: "paid", paidDate: "2026-02-18", balance: 0 },
  { num: "02790", caseTitle: "Reward Florida v. Fleming", period: "Feb 2026", date: "2026-03-18", amount: 3995.5, status: "unpaid", balance: 3995.5 },
  { num: "02300", caseTitle: "General Matters", period: "Rabena closing", date: "2025-05-09", amount: 1638, status: "paid", paidDate: "2025-07-11", balance: 0 },
  { num: "02380", caseTitle: "General Matters", period: "Jun 2025", date: "2025-06-14", amount: 1287, status: "paid", paidDate: "2025-07-11", balance: 0 },
  { num: "02584", caseTitle: "General Matters", period: "Sep 2025", date: "2025-10-11", amount: 1345.5, status: "unpaid", balance: 1345.5 },
  { num: "02680", caseTitle: "General Matters", period: "Nov 2025", date: "2025-12-13", amount: 0, status: "zero-billed", balance: 0 },
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

const caseColor: Record<string, string> = {
  "Sade v. Shahmram": "bg-blue-100 text-blue-800",
  "Reward Florida v. Fleming": "bg-purple-100 text-purple-800",
  "General Matters": "bg-amber-100 text-amber-800",
};

export default function BalancesPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [preset, setPreset] = useState("all");

  const sorted = useMemo(
    () => [...invoices].sort((a, b) => a.date.localeCompare(b.date)),
    []
  );

  const filtered = useMemo(
    () =>
      sorted.filter((i) => {
        if (from && i.date < from) return false;
        if (to && i.date > to) return false;
        return true;
      }),
    [sorted, from, to]
  );

  const billed = filtered.reduce((s, i) => s + i.amount, 0);
  const paid = filtered.filter((i) => i.status === "paid").reduce((s, i) => s + i.amount, 0);
  const outstanding = filtered.reduce((s, i) => s + i.balance, 0);

  function applyPreset(p: string) {
    setPreset(p);
    if (p === "all") {
      setFrom("");
      setTo("");
    } else if (p === "2025") {
      setFrom("2025-01-01");
      setTo("2025-12-31");
    } else if (p === "2026") {
      setFrom("2026-01-01");
      setTo("2026-12-31");
    }
  }

  const chip = (p: string, label: string) => (
    <button
      onClick={() => applyPreset(p)}
      className={
        "px-3 py-1 rounded-full text-xs font-medium border transition-colors " +
        (preset === p
          ? "bg-accent text-white border-accent"
          : "bg-card-bg text-muted border-border hover:border-accent")
      }
    >
      {label}
    </button>
  );

  return (
    <div>
      <div className="mb-6">
        <Link href="/Foster" className="text-sm text-muted hover:text-accent">
          &larr; Back to cases
        </Link>
        <h1 className="text-3xl font-bold text-accent mt-1">Balances &amp; Payments</h1>
        <p className="text-muted text-sm mt-1">
          All invoices across every case, sorted by date. Filter by a date range below.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-6">
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

      <div className="bg-card-bg border border-border rounded-lg p-4 mb-6 flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold text-muted uppercase tracking-wide">Filter by date</span>
        {chip("all", "All")}
        {chip("2025", "2025")}
        {chip("2026", "2026")}
        <div className="flex items-center gap-2 text-sm">
          <label className="text-muted text-xs">From</label>
          <input
            type="date"
            value={from}
            onChange={(e) => { setFrom(e.target.value); setPreset("custom"); }}
            className="border border-border rounded px-2 py-1 text-sm bg-white"
          />
          <label className="text-muted text-xs">To</label>
          <input
            type="date"
            value={to}
            onChange={(e) => { setTo(e.target.value); setPreset("custom"); }}
            className="border border-border rounded px-2 py-1 text-sm bg-white"
          />
        </div>
        {(from || to) && (
          <button onClick={() => applyPreset("all")} className="text-xs text-red-600 hover:underline">
            Clear
          </button>
        )}
        <span className="ml-auto text-xs text-muted">
          Showing {filtered.length} of {invoices.length} invoices
        </span>
      </div>

      <div className="bg-card-bg border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted border-b border-border">
                <th className="px-4 py-2 font-medium">Date</th>
                <th className="px-4 py-2 font-medium">Case</th>
                <th className="px-4 py-2 font-medium">Invoice</th>
                <th className="px-4 py-2 font-medium">Period</th>
                <th className="px-4 py-2 font-medium text-right">Amount</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2 font-medium">Paid On</th>
                <th className="px-4 py-2 font-medium text-right">Balance</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((i) => (
                <tr key={i.num} className="border-b border-border last:border-0">
                  <td className="px-4 py-2 text-muted whitespace-nowrap">{i.date}</td>
                  <td className="px-4 py-2">
                    <span className={"px-2 py-0.5 rounded text-xs font-medium " + (caseColor[i.caseTitle] || "bg-slate-100 text-slate-600")}>
                      {i.caseTitle}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-mono text-xs text-accent">#{i.num}</td>
                  <td className="px-4 py-2 text-muted">{i.period}</td>
                  <td className="px-4 py-2 text-right font-medium">{money(i.amount)}</td>
                  <td className="px-4 py-2">
                    <span className={"px-2 py-0.5 rounded text-xs font-medium " + statusBadge[i.status]}>
                      {statusLabel[i.status]}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-muted text-xs whitespace-nowrap">{i.paidDate ?? "—"}</td>
                  <td className={"px-4 py-2 text-right font-medium " + (i.balance > 0 ? "text-red-600" : "text-muted")}>
                    {money(i.balance)}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-muted text-sm">
                    No invoices in this date range.
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr className="border-t border-border font-semibold bg-slate-50">
                <td className="px-4 py-2" colSpan={4}>Totals ({filtered.length})</td>
                <td className="px-4 py-2 text-right text-accent">{money(billed)}</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2 text-right text-emerald-600 text-xs">Paid {money(paid)}</td>
                <td className="px-4 py-2 text-right text-red-600">{money(outstanding)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
