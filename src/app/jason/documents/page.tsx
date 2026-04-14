export default function DocumentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              Document Index
            </h1>
            <p className="text-slate-400 text-xs">
              Rutledge Case &mdash; All Documents by Category
            </p>
          </div>
          <a
            href="/"
            className="text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Case Summary
          </a>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
        <p className="text-slate-500 text-sm mb-8">
          All case documents organized by category. Documents were sourced from
          email exchanges between the parties and court filings.
        </p>

        {/* Stipulation Agreements */}
        <section className="mb-10">
          <CategoryHeader
            title="Stipulation Agreements"
            count={6}
            color="bg-purple-500"
          />
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
            <DocumentEntry
              name="1st Stipulation Agreement"
              filename="STIPULATION AGREEMENT.docx"
              date="Nov 16, 2025"
              source="Email #1 — Brian Kowal to Eden Sade"
              description="Initial agreement between Reward Florida LLC and Melde Rutledge Jr. establishing terms for property purchase or vacating. Signed via DocuSign on Nov 17, 2025."
              href="/docs/stipulations/1st_Stipulation.pdf"
            />
            <DocumentEntry
              name="2nd Stipulation Agreement"
              filename="SECOND STIPULATION AGREEMENT.pdf"
              date="Dec 2, 2025"
              source="Email #4 — Brian Kowal to Eden Sade"
              description="Extension granted to Rutledge in exchange for $7,000 payment (plus $4,000 due Friday). New move-out date and payment terms. Filed with court on Jan 20, 2026."
              href="/docs/stipulations/2nd_Stipulation.pdf"
            />
            <DocumentEntry
              name="Letter of Intent (LOI)"
              filename="LETTER_OF_INTENT.pdf"
              date="Jan 2026"
              source="Email #7 — Eden Sade to Brian Kowal"
              description="Letter of Intent outlining the proposed purchase terms for 8155 Cypress Point Road."
              href="/docs/stipulations/Letter_of_Intent.pdf"
            />
            <DocumentEntry
              name="Term Sheet"
              filename="TERM SHEET - 3rd Stipulation / Purchase agreement.pdf"
              date="Jan 11, 2026"
              source="Email #5 — Eden Sade to Brian Kowal"
              description="Detailed term sheet accompanying the Third Stipulation, outlining purchase price, conditions, and deadlines."
              href="/docs/stipulations/Term_Sheet.pdf"
            />
            <DocumentEntry
              name="Stipulation Settlement Agreement (Draft)"
              filename="Stipulation Settlement Agreement.pdf"
              date="Jan 11, 2026"
              source="Email #5 — Eden Sade to Brian Kowal"
              description="Full draft settlement agreement based on the term sheet. Attorney Brian Kowal approved without revisions: 'This is tremendous.'"
              href="/docs/stipulations/Settlement_Agreement_Draft.pdf"
            />
            <DocumentEntry
              name="Third & Final Stipulation"
              filename="Third & Final Stipulation - 8155 WPB 01 16 26.pdf"
              date="Jan 16, 2026"
              source="Email #7 — Eden Sade to Brian Kowal"
              description="Final stipulation agreement. Sets the absolute deadline of March 1, 2026 for closing. No further extensions. Filed with court on Jan 20, 2026."
              href="/docs/stipulations/3rd_Final_Stipulation.pdf"
            />
          </div>
        </section>

        {/* Court Filings */}
        <section className="mb-10">
          <CategoryHeader
            title="Court Filings & Legal"
            count={5}
            color="bg-orange-500"
          />
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
            <DocumentEntry
              name="E-Filing Confirmation (2nd & 3rd Stipulations)"
              filename="Court Filing #239834847"
              date="Jan 20, 2026"
              source="Email #8 — Brian Kowal (fwd from FL Courts E-Filing Portal)"
              description="Official filing confirmation from the Fifteenth Judicial Circuit, Palm Beach County. Documents filed: 2nd Stipulation and Third & Final Stipulation. E-served to Brian P. Kowal."
            />
            <DocumentEntry
              name="Affidavit of Non-Compliance"
              filename="Affidavit of NonCompliance - 8155 WPB 03 03 26.pdf"
              date="Mar 2, 2026"
              source="Email #10 — Brian Kowal to Eden Sade"
              description="Affidavit prepared by Brian Kowal documenting the buyer's failure to comply with the stipulation terms by the March 1, 2026 deadline."
              href="/docs/court-filings/Affidavit_of_NonCompliance.pdf"
            />
            <DocumentEntry
              name="Notice of Appearance — Philippe Revah"
              filename="Court Filing #244315835"
              date="Mar 22, 2026"
              source="Email #13 — Brian Kowal (fwd from FL Courts E-Filing Portal)"
              description="Attorney Philippe Revah files appearance on behalf of Melde De Rutledge Jr. in Case No. 502025CC018057XXXANB."
            />
            <DocumentEntry
              name="Response in Opposition"
              filename="Filed with Notice of Appearance"
              date="Mar 22, 2026"
              source="Email #13 — Philippe Revah via court e-filing"
              description="Rutledge's attorney files response opposing the seller's motion for judgment."
            />
            <DocumentEntry
              name="Court Documents (Kowal)"
              filename="IMG_1024.PNG"
              date="Mar 19, 2026"
              source="Email #12 — Brian Kowal to Eden Sade"
              description="Court documents sent by Brian Kowal to Eden (image attachment). Likely motion for judgment/eviction based on the default."
            />
          </div>
        </section>

        {/* Title & Closing */}
        <section className="mb-10">
          <CategoryHeader
            title="Title & Closing Documents"
            count={3}
            color="bg-blue-500"
          />
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
            <DocumentEntry
              name="Operating Agreement — Falcon Axos Financial LLC"
              filename="Operating Agreement - Falcon Axos Financial LLC 02 19 26.pdf"
              date="Feb 19, 2026"
              source="Jocelyn Cruz to Aaron Schneider (Co-Op Title thread)"
              description="LLC operating agreement for the buyer's entity (Falcon Axos Financial LLC), dated Feb 19, 2026. Submitted to Co-Op Title as part of entity documentation."
              href="/docs/title-closing/Operating_Agreement_Falcon_Axos.pdf"
            />
            <DocumentEntry
              name="Trust Agreement — Florida Cypress Point Road Land Trust"
              filename="Trust Agreement (Preliminary)"
              date="Feb 20, 2026"
              source="Aaron Schneider / Co-Op Title thread"
              description="Preliminary trust agreement with Falcon Axos Financial LLC as Trustee. Beneficiary: David Rutledge. Successor Trustee: Charles Lovely. Sent to Mel on Feb 23 — never executed by the buyer."
              href="/docs/title-closing/Trust_Agreement.pdf"
            />
            <DocumentEntry
              name="IRS CP 575 — EIN Confirmation"
              filename="IRS CP 575 Letter"
              date="Mar 2, 2026"
              source="Eden Sade to Aaron Schneider (private)"
              description="IRS EIN Confirmation Letter for Falcon Axos Financial LLC (EIN: 41-4596164). Sent privately to Aaron Schneider at Co-Op Title on deadline day."
            />
          </div>
        </section>

        {/* Correspondence & Preparation */}
        <section className="mb-10">
          <CategoryHeader
            title="Correspondence & Preparation"
            count={2}
            color="bg-green-500"
          />
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
            <DocumentEntry
              name="Court Script / Q&A Preparation"
              filename="brian_court_script.pdf"
              date="Mar 22, 2026"
              source="Email #14 — Eden Sade to Brian Kowal"
              description="Prepared questions and responses document. Eden outlines specific questions for Brian to ask in court and Eden's prepared responses for direct address by the judge."
              href="/docs/correspondence/Court_Script_QA.pdf"
            />
            <DocumentEntry
              name="Case Update to 21st Mortgage"
              filename="(Email body + 4 stipulation attachments)"
              date="Mar 31, 2026"
              source="Email #15 — Eden Sade to Rob Longworth"
              description="Eden reports the court ruling (transfer to circuit court), expected vacate date (late April), and anticipated sale timeline (~May 2026 at ~$628K). Includes all four stipulation documents as attachments."
            />
          </div>
        </section>

        {/* Email Archive Link */}
        <section className="mb-10">
          <CategoryHeader
            title="Email Archive"
            count={15}
            color="bg-slate-500"
          />
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <p className="text-sm text-slate-600 mb-4">
              All 15 case emails are preserved in chronological order in the
              full email archive, and are also viewable inline within the{" "}
              <a href="/#timeline" className="text-blue-600 hover:underline">
                main timeline
              </a>
              .
            </p>
            <div className="flex gap-4">
              <a
                href="/jason/emails"
                className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                View Full Email Archive
              </a>
              <a
                href="/#timeline"
                className="inline-flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                View Timeline with Emails
              </a>
            </div>
          </div>
        </section>

        {/* Document Summary */}
        <section className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-blue-900 text-sm leading-relaxed">
            <h3 className="font-bold text-base mb-2">Document Summary</h3>
            <p className="mb-2">
              This case generated <strong>16 key documents</strong> across four
              categories:
            </p>
            <ul className="space-y-1 ml-4">
              <li>
                <strong>6 Stipulation Agreements</strong> — Three rounds of
                agreements plus supporting term sheet, LOI, and settlement draft
              </li>
              <li>
                <strong>5 Court Filings</strong> — E-filing confirmations,
                affidavit of non-compliance, notice of appearance, and opposition
              </li>
              <li>
                <strong>3 Title/Closing Documents</strong> — LLC operating
                agreement, trust agreement, and EIN confirmation
              </li>
              <li>
                <strong>2 Correspondence items</strong> — Court preparation
                script and case update to 21st Mortgage
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-6 text-center">
        <p>
          Confidential &mdash; Rutledge Case Document Index | ASAP Cash Home
          Buyers
        </p>
        <p className="mt-1">
          Case No. 50-2025-CC-018057-XXXA-NB | Last updated April 2026
        </p>
      </footer>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Components                                                                 */
/* -------------------------------------------------------------------------- */

function CategoryHeader({
  title,
  count,
  color,
}: {
  title: string;
  count: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className={`w-3 h-3 rounded-full ${color} shrink-0`} />
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
        {count} document{count !== 1 && "s"}
      </span>
    </div>
  );
}

function DocumentEntry({
  name,
  filename,
  date,
  source,
  description,
  href,
}: {
  name: string;
  filename: string;
  date: string;
  source: string;
  description: string;
  href?: string;
}) {
  return (
    <div className="px-5 py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h4 className="font-semibold text-slate-800 text-sm">{name}</h4>
          <p className="text-xs text-slate-400 font-mono mt-0.5 truncate">
            {filename}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View PDF
            </a>
          )}
          <span className="text-xs text-slate-400 whitespace-nowrap">
            {date}
          </span>
        </div>
      </div>
      <p className="text-sm text-slate-500 mt-1.5">{description}</p>
      <p className="text-xs text-slate-400 mt-1">
        Source: {source}
      </p>
    </div>
  );
}
