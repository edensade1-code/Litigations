export default function DocketPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              Court Docket Entries
            </h1>
            <p className="text-slate-400 text-xs">
              Rutledge Case &mdash; Palm Beach County, FL
            </p>
          </div>
          <a
            href="/"
            className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <span aria-hidden="true">&larr;</span> Back to Case Summary
          </a>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
        {/* External Link */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-blue-900">
            Official docket records are available on the Palm Beach County
            Clerk&apos;s eCaseView portal.
          </p>
          <a
            href="https://appsgp.mypalmbeachclerk.com/ecaseview/Search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap"
          >
            Open eCaseView &rarr;
          </a>
        </div>

        {/* County Court Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h2 className="text-xl font-bold text-slate-900">
              County Court Docket
            </h2>
            <span className="text-xs font-semibold uppercase tracking-wide bg-red-100 text-red-700 px-2.5 py-1 rounded-full">
              Closed
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-4 font-mono">
            Case No. 50-2025-CC-018057-XXXA-NB
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide w-16">
                      DIN
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide w-28">
                      Date
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">
                      Description
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <DocketRow din="2" date="11/5/2025" description="CIVIL COVER SHEET" notes="F/B PLT" />
                  <DocketRow din="3" date="11/5/2025" description="COMPLAINT FOR UNLAWFUL DETAINER" notes="F/B PLT" />
                  <DocketRow din="4" date="11/5/2025" description="SUMMONS ISSUED" notes="bpkowal@gmail.com" />
                  <DocketRow din="1" date="11/7/2025" description="DIVISION ASSIGNMENT" notes="RH: North Branch Cty Civ, SC, Evictions" />
                  <DocketRow din="5" date="11/7/2025" description="DISBURSEMENT REQUEST" notes="$115.00 Brian Kowal" />
                  <DocketRow din="6" date="11/7/2025" description="PAID $195.00" notes="Receipt 6026894 Fully Paid" />
                  <DocketRow din="9" date="11/11/2025" description="NON-MILITARY AFFIDAVIT/REPORT" notes="Melde De Rutledge Jr" />
                  <DocketRow din="7" date="11/12/2025" description="CERTIFICATE OF MAILING" />
                  <DocketRow din="8" date="11/12/2025" description="PAID $7.00" notes="Receipt 6031815 Fully Paid" />
                  <DocketRow din="10" date="11/14/2025" description="ANSWER TO THE COMPLAINT" />
                  <DocketRow din="11" date="11/14/2025" description="PAID $0.30" notes="Receipt 6036642 Fully Paid" />
                  <DocketRow din="13" date="11/18/2025" description="STIPULATION AGREEMENT" notes="F/B PARTIES" highlight />
                  <DocketRow din="12" date="11/19/2025" description="SERVICE RETURNED (NUMBERED)" notes="Served Melde De Rutledge Jr - 11/07/2025" />
                  <DocketRow din="14" date="11/19/2025" description="NOTICE OF HEARING" notes="12/1/25 at 9:15AM via Zoom, Judge Stephens" />
                  <DocketRow din="15" date="12/3/2025" description="ORDER OF DISMISSAL" notes="Approving Stipulation, w/ directions to Clerk. Signed Judge Stephens" highlight />
                  <DocketRow din="16" date="12/3/2025" description="DISMISSED AFTER HEARING" notes="DA - Dismissed After Hearing" />
                  <DocketRow din="17" date="1/20/2026" description="STIPULATION SECOND AGREEMENT" highlight />
                  <DocketRow din="18" date="1/20/2026" description="STIPULATION THIRD" highlight />
                  <DocketRow din="19" date="3/3/2026" description="AFFIDAVIT OF NON-COMPLIANCE" highlight />
                  <DocketRow din="20" date="3/19/2026" description="NOTICE OF HEARING" notes="3/23/26 9AM Judge Stephens" />
                  <DocketRow din="21" date="3/22/2026" description="NOTICE OF APPEARANCE CIVIL" notes="F/B DFT (Revah for Rutledge)" highlight />
                  <DocketRow din="22" date="3/22/2026" description="OBJECTION / RESPONSE IN OPPOSITION" notes="F/B DFT - w/ Memo of Law" highlight />
                  <DocketRow din="23" date="3/23/2026" description="ORDER DENYING MOTION FOR FINAL JUDGMENT" notes="After default in stipulation. Signed Judge Stephens 3/23/2026" highlight />
                  <DocketRow din="26" date="3/23/2026" description="DO NOT DOCKET ON THIS CASE" notes="TRANSFER TO CIRCUIT COURT" />
                  <DocketRow din="24" date="3/31/2026" description="CORRESPONDENCE" notes="Request for fees - bpkowal@gmail.com" />
                  <DocketRow din="25" date="4/1/2026" description="RECEIPT OF TRANSFER" notes="County Civil to Circuit Civil Palm Beach" />
                  <DocketRow din="27" date="4/1/2026" description="RECEIPT OF TRANSFER TO CIRCUIT" notes="New Case# 2026CA003650" />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Circuit Court Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h2 className="text-xl font-bold text-slate-900">
              Circuit Court Docket
            </h2>
            <span className="text-xs font-semibold uppercase tracking-wide bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
              Open
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-1 font-mono">
            Case No. 50-2026-CA-003650-XXXA-MB
          </p>
          <p className="text-xs text-slate-400 mb-4">
            Transferred from County Court Case 50-2025-CC-018057-XXXA-NB on
            4/1/2026
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide w-16">
                      DIN
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide w-28">
                      Date
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">
                      Description
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <DocketRow din="26" date="4/1/2026" description="RECEIPT OF TRANSFER FROM COUNTY CIVIL" notes="Palm Beach" />
                  <DocketRow din="27" date="4/1/2026" description="DIVISION ASSIGNMENT" notes="AK: Circuit Civil Central - AK" />
                  <DocketRow din="28" date="4/1/2026" description="PAID $401.00" notes="Receipt 6216687 Fully Paid" />
                  <DocketRow din="29" date="4/1/2026" description="CERTIFIED COPY" notes="Judge Stephens Order transferring case from County #50-2025-CC-018057" highlight />
                  <DocketRow din="30" date="4/1/2026" description="CERTIFIED COPY" notes="Docket sheet of County Case #50-2025-CC-018057" />
                  <DocketRow din="31" date="4/1/2026" description="RECEIPT OF TRANSFERRED CASE" notes="Transferred case to Circuit Court" />
                  <DocketRow din="32" date="4/1/2026" description="NOTICE OF FILING" notes="Emailed to bpkowal@gmail.com; phil@revahlaw.com" highlight />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Legend */}
        <section className="mb-12">
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-2">
              Legend
            </h3>
            <div className="flex items-center gap-4 flex-wrap text-xs text-slate-600">
              <span className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded bg-amber-50 border border-amber-200" />
                Highlighted entries indicate key filings and orders
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block font-bold">Bold text</span>
                = Significant docket entries
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              DIN = Docket Index Number. Entries are listed in docket order, not
              necessarily chronological filing order. F/B PLT = Filed by
              Plaintiff. F/B DFT = Filed by Defendant.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-6 text-center">
        <p>
          Confidential &mdash; Prepared for Jason Gordon, Esq. | ASAP Cash Home
          Buyers
        </p>
        <p className="mt-1">
          County Case 50-2025-CC-018057-XXXA-NB | Circuit Case
          50-2026-CA-003650-XXXA-MB
        </p>
      </footer>
    </div>
  );
}

function DocketRow({
  din,
  date,
  description,
  notes,
  highlight,
}: {
  din: string;
  date: string;
  description: string;
  notes?: string;
  highlight?: boolean;
}) {
  return (
    <tr
      className={
        highlight
          ? "bg-amber-50 hover:bg-amber-100 transition-colors"
          : "hover:bg-slate-50 transition-colors"
      }
    >
      <td className="px-4 py-3 text-slate-500 font-mono text-xs">{din}</td>
      <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{date}</td>
      <td
        className={`px-4 py-3 ${
          highlight
            ? "font-bold text-slate-900"
            : "text-slate-700"
        }`}
      >
        {description}
      </td>
      <td className="px-4 py-3 text-slate-500 text-xs">{notes}</td>
    </tr>
  );
}
