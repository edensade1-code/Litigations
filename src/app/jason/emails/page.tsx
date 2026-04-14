export default function EmailArchivePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold tracking-tight">Email Archive</h1>
            <p className="text-slate-400 text-xs">
              Rutledge Case &mdash; Case No. 50-2025-CC-018057-XXXA-NB
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
          Full email archive for the Rutledge case, displayed in chronological
          order. Each card contains the complete email content as sent or
          received.
        </p>

        <div className="space-y-6">
          {emails.map((email) => (
            <EmailCard key={email.number} email={email} id={`email-${email.number}`} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-6 text-center mt-8">
        <p>
          Confidential &mdash; Rutledge Case Email Archive | ASAP Cash Home
          Buyers
        </p>
        <p className="mt-1">
          Case No. 50-2025-CC-018057-XXXA-NB | 15 emails archived
        </p>
      </footer>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Email data                                                                 */
/* -------------------------------------------------------------------------- */

interface Email {
  number: number;
  label: string;
  from: string;
  to: string;
  cc?: string;
  date: string;
  subject?: string;
  body: string | null;
  attachments: string[];
}

const emails: Email[] = [
  {
    number: 1,
    label: "Brian Kowal sends 1st Stipulation draft",
    from: "Brian Kowal <bpkowal@gmail.com>",
    to: "Eden Sade <eden@asapcashhomebuyers.com>",
    date: "Nov 16, 2025",
    body: "Law Office of Brian P. Kowal, PA\n7351 Wiles Road, Suite 103\nCoral Springs, Florida 33067",
    attachments: ["STIPULATION AGREEMENT.docx"],
  },
  {
    number: 2,
    label: "DocuSign Completed: STIPULATION AGREEMENT",
    from: "Eden Sade via Docusign <dse_NA4@docusign.net>",
    to: "Eden Sade <Eden@biggerequity.com>",
    date: "Nov 17, 2025",
    subject:
      "Completed: Complete with Docusign: STIPULATION AGREEMENT.docx",
    body: "All parties have completed Complete with Docusign: STIPULATION AGREEMENT.docx.",
    attachments: ["STIPULATION AGREEMENT.docx.pdf"],
  },
  {
    number: 3,
    label: "Eden sends 2nd Stipulation skeleton to Kowal",
    from: "Eden Sade <eden@asapcashhomebuyers.com>",
    to: "Brian Kowal <bpkowal@gmail.com>",
    date: "Dec 2, 2025",
    body: "Hi Brian,\n\nAttached below is a short skeleton for the Second Stipulation. He requested an extension, and in exchange he paid $7,000 today and will pay another $4,000 this Friday.\n\nThe only changes needed from the original stipulation are the new move-out date and the payment terms. Please review, tighten the legal language, and prepare the final version for execution.\n\nLet me know if you need anything clarified.",
    attachments: ["Second_Stipulation.docx"],
  },
  {
    number: 4,
    label: "Brian returns executed 2nd Stipulation",
    from: "Brian Kowal <bpkowal@gmail.com>",
    to: "Eden Sade <eden@asapcashhomebuyers.com>",
    date: "Dec 2, 2025",
    body: "Law Office of Brian P. Kowal, PA\n7351 Wiles Road, Suite 103\nCoral Springs, Florida 33067",
    attachments: ["SECOND STIPULATION AGREEMENT.pdf"],
  },
  {
    number: 5,
    label: "Eden sends Term Sheet & Draft Agreement to Kowal",
    from: "Eden Sade <eden@asapcashhomebuyers.com>",
    to: "Brian Kowal <bpkowal@gmail.com>",
    date: "Jan 11, 2026",
    subject:
      "Case No. 502025CC018057XXXANB | Proposed Final Agreement & Term sheet",
    body: "Brian, good evening.\n\nPlease see the attached documents:\n1. Term sheet\n2. Draft agreement prepared based on the term sheet.\n\nI'd appreciate your review and suggested edits to the attached agreement. If you think it's better to start from scratch, that's fine as well. My preference is to use the draft I prepared as the baseline where possible.",
    attachments: [
      "TERM SHEET - 3rd Stipulation / Purchase agreement.pdf",
      "Stipulation Settlement Agreement.pdf",
    ],
  },
  {
    number: 6,
    label: "Brian approves 3rd Stipulation",
    from: "Brian Kowal <bpkowal@gmail.com>",
    to: "Eden Sade <eden@asapcashhomebuyers.com>",
    date: "Jan 13, 2026",
    body: "Eden,\n\nThis is tremendous. It doesn't need any revisions.",
    attachments: ["Third and Final Stipulation.docx"],
  },
  {
    number: 7,
    label: "All 4 executed docs sent to Kowal for filing",
    from: "Eden Sade <eden@asapcashhomebuyers.com>",
    to: "Brian Kowal <bpkowal@gmail.com>",
    date: "Jan 16, 2026",
    subject: "Third & Final stipulation & LOI",
    body: "Brian see attached:\n1. First stipulation\n2. Second Stipulation\n3. Letter of Intent\n4. Third & Final Stipulation.\n\nAll executed. Can you record the 2nd and 3rd stipulations please.",
    attachments: [
      "1st Stipulation.pdf",
      "2nd Stipulation.pdf",
      "LETTER_OF_INTENT.pdf",
      "Third & Final Stipulation - 8155 WPB 01 16 26.pdf",
    ],
  },
  {
    number: 8,
    label: "E-Filing Confirmation -- 2nd & 3rd Stipulations filed",
    from: "Brian Kowal <bpkowal@gmail.com>",
    to: "eden@asapcashhomebuyers.com",
    date: "Jan 20, 2026",
    subject:
      "Fwd: SERVICE OF COURT DOCUMENT CASE NUMBER 502025CC018057XXXANB",
    body: "Forwarded from eservice@myflcourtaccess.com\n\nFiling #239834847\nFiling Time: 01/20/2026 10:58:27 AM ET\nFiler: Brian P Kowal\n\nDocuments filed:\n  - 2nd Stipulation.pdf\n  - Third and Final Stipulation.pdf\n\nE-served to Brian P Kowal.\nCourt: Fifteenth Judicial Circuit, Palm Beach County.",
    attachments: [],
  },
  {
    number: 9,
    label: "Stipulations forwarded to Co-Op Title",
    from: "Eden Sade <eden@asapcashhomebuyers.com>",
    to: "Aaron Schneider <aaron@cooptitle.com>",
    date: "Feb 10, 2026",
    subject: "Fwd: Third & Final stipulation & LOI",
    body: "See below.\n\n(Forwarded the Jan 16 email with all 4 stipulation documents.)",
    attachments: [
      "1st Stipulation.pdf",
      "2nd Stipulation.pdf",
      "LETTER_OF_INTENT.pdf",
      "Third & Final Stipulation - 8155 WPB 01 16 26.pdf",
    ],
  },
  {
    number: 10,
    label: "Affidavit of Non-Compliance",
    from: "Brian Kowal <bpkowal@gmail.com>",
    to: "Eden Sade <eden@asapcashhomebuyers.com>",
    date: "Mar 2, 2026",
    body: "Law Office of Brian P. Kowal, PA\n7351 Wiles Road, Suite 103\nCoral Springs, Florida 33067",
    attachments: ["AFFIDAVIT OF NON COMPLIANCE.docx"],
  },
  {
    number: 11,
    label: "Eden formally declares buyer default",
    from: "Eden Sade <eden@asapcashhomebuyers.com>",
    to: "Aaron Schneider <Aaron@cooptitle.com>",
    cc: "Seniorsecured@gmail.com, Chris Meadows, bpkowal@gmail.com, Jocelyn ASAP",
    date: "Mar 6, 2026",
    subject:
      "Re: Rutledge p/f Reward Florida LLC --- File 26-157: 8155 Cypress Point Road, West Palm Beach, FL 33412",
    body: "Aaron, the buyer has defaulted. The terms of the sale are no longer applicable as the March 1, 2026 deadline (Sunday, extended to March 2 at the latest) has passed, and no extension was granted under any circumstances.",
    attachments: [],
  },
  {
    number: 12,
    label: "Brian Kowal sends court documents",
    from: "Brian Kowal <briankowal@bkowallaw.com>",
    to: "eden@asapcashhomebuyers.com",
    date: "Mar 19, 2026",
    body: null,
    attachments: ["IMG_1024.PNG"],
  },
  {
    number: 13,
    label: "Revah files Notice of Appearance & Response in Opposition",
    from: "Brian Kowal <bpkowal@gmail.com>",
    to: "Eden Sade <eden@asapcashhomebuyers.com>",
    date: "Mar 22, 2026",
    subject:
      "Fwd: SERVICE OF COURT DOCUMENT CASE NUMBER 502025CC018057XXXANB",
    body: "Eden,\n\nHey, he retained a lawyer.\n\n--- Forwarded e-filing notice ---\nFiling #244315835\nFiler: Philippe Revah (305-315-4605)\nDocuments: Notice of Appearance, Response in Opposition",
    attachments: [],
  },
  {
    number: 14,
    label: "Eden's prepared Q&A for court hearing",
    from: "Eden Sade <eden@asapcashhomebuyers.com>",
    to: "Brian Kowal <bpkowal@gmail.com>",
    date: "Mar 22, 2026",
    subject: "Re: SERVICE OF COURT DOCUMENT...",
    body: "Hi Brian,\n\nPlease see the attached document, which outlines the specific questions I would like you to ask me and my prepared responses. I will provide these same answers if the judge addresses me directly.",
    attachments: ["brian_court_script.pdf"],
  },
  {
    number: 15,
    label: "Case update -- Judge transfers to Circuit Court",
    from: "Eden Sade <eden@asapcashhomebuyers.com>",
    to: "RobLongworth@21stmortgage.com",
    date: "Mar 31, 2026",
    subject: "Re: 21st CA$H Program",
    body: "Hi Rob,\n\nPlease see the details regarding the case we discussed. The sale was originally scheduled for March 1, 2026, but the individual defaulted. According to the attached stipulation, I needed to obtain a judgment; however, the judge ruled that the case must pass to circuit court.\n\nAs a result, the individual will be out in late April, and I expect to be able to sell the property around May 2026.",
    attachments: [
      "1st Stipulation.pdf",
      "2nd Stipulation.pdf",
      "LETTER_OF_INTENT.pdf",
      "Third & Final Stipulation - 8155 WPB 01 16 26.pdf",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Components                                                                 */
/* -------------------------------------------------------------------------- */

function EmailCard({ email, id }: { email: Email; id?: string }) {
  const isCritical =
    email.number === 11 || email.number === 8 || email.number === 13;

  return (
    <div
      id={id}
      className={`bg-white rounded-xl shadow-sm border p-6 ${
        isCritical ? "border-red-300 ring-1 ring-red-100" : "border-slate-200"
      }`}
    >
      {/* Number badge + label */}
      <div className="flex items-start gap-3 mb-4">
        <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
          {email.number}
        </span>
        <h3 className="font-bold text-slate-900 text-sm leading-snug pt-1">
          {email.label}
        </h3>
      </div>

      {/* Header fields */}
      <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-1.5 border border-slate-100 mb-4">
        <HeaderField label="From" value={email.from} />
        <HeaderField label="To" value={email.to} />
        {email.cc && <HeaderField label="Cc" value={email.cc} />}
        <HeaderField label="Date" value={email.date} />
        {email.subject && <HeaderField label="Subject" value={email.subject} />}
      </div>

      {/* Body */}
      {email.body ? (
        <div className="bg-white border border-slate-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">
            {email.body}
          </p>
        </div>
      ) : (
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-slate-400 italic">
            No text body &mdash; image attachment only.
          </p>
        </div>
      )}

      {/* Attachments */}
      {email.attachments.length > 0 && (
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-2">
            Attachments
          </p>
          <div className="flex flex-wrap gap-2">
            {email.attachments.map((file, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-600"
              >
                <svg
                  className="w-3.5 h-3.5 text-slate-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
                {file}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function HeaderField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-slate-400 font-semibold w-16 shrink-0 text-right">
        {label}:
      </span>
      <span className="text-slate-700 font-mono text-xs break-all leading-relaxed pt-px">
        {value}
      </span>
    </div>
  );
}
