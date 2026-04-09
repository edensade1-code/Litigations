export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400 shrink-0 hidden sm:block" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
              <h1 className="text-base sm:text-lg font-bold tracking-tight truncate">
                Rutledge Case Summary
              </h1>
            </div>
            <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5">
              Prepared for Michael Foster
            </p>
          </div>
          <div className="text-[10px] sm:text-xs text-slate-400 text-right shrink-0">
            <p className="flex items-center justify-end gap-1">
              <svg className="w-3 h-3 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <span className="hidden sm:inline">County:</span> <span className="font-mono">50-2025-CC-018057</span> <span className="text-slate-500">(closed)</span>
            </p>
            <p className="flex items-center justify-end gap-1 mt-0.5">
              <svg className="w-3 h-3 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <span className="hidden sm:inline">Circuit:</span> <span className="font-mono">50-2026-CA-003650</span> <span className="text-green-400">(open)</span>
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-8 w-full">
        {/* Plain-Language Summary for Michael */}
        <section className="mb-12 animate-in">
          <SectionTitle icon={<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}>Plain-Language Summary</SectionTitle>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6 text-blue-900 text-sm leading-relaxed space-y-3">
            <p>
              <strong>Michael</strong> — here is the short version of what happened:
            </p>
            <p>
              The case began on November 5, 2025 when we filed an <strong>Unlawful Detainer complaint</strong> in Palm Beach County Court against Melde Rutledge Jr., who was occupying our property at 8155 Cypress Point Road in West Palm Beach (held through a land trust). Rather than proceeding to trial, the parties entered into a stipulation agreement requiring Rutledge to vacate by November 30, 2025. When he failed to leave, a second stipulation extended the deadline to December 15, 2025 in exchange for payments. Ultimately, a third and final stipulation transformed the arrangement into a purchase opportunity — giving Rutledge until March 1, 2026 to buy the property for $650,000 or be removed.
            </p>
            <p>
              After the third and final agreement set a hard deadline of March 1, 2026, the title company (Co-Op Title, handled by Aaron Schneider) set up everything needed to close — including creating a trust structure with an LLC called Falcon Axos Financial LLC. However, Rutledge never connected the title company with a lender, never executed the trust documents, and never closed.
            </p>
            <p>
              On March 6, 2026, we formally declared him in default. He then hired a lawyer (Philippe Revah) who filed an opposition. The judge moved the case from county court to circuit court. We expect Rutledge to be out by late April 2026, and we plan to sell the property around May 2026 for approximately $650,000.
            </p>
            <p>
              All the emails with Aaron at the title company — and with the buyer&apos;s email (SeniorSecured@gmail.com) — are documented below in the timeline and email sections.
            </p>
          </div>
        </section>

        {/* Case Overview — consolidated */}
        <section id="overview" className="mb-12 animate-in" style={{ animationDelay: "0.1s" }}>
          <SectionTitle icon={<svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>Case Overview</SectionTitle>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            {/* Summary */}
            <div className="p-4 sm:p-6 border-b border-slate-100">
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Real estate litigation and eviction case in Palm Beach County, Florida. Reward Florida LLC obtained{" "}
                <strong>8155 Cypress Point Road, West Palm Beach, FL 33412</strong>{" "}
                and filed an unlawful detainer action against occupant{" "}
                <strong>Melde De Rutledge Jr</strong>. The parties entered into stipulation agreements — first requiring Rutledge to vacate, then ultimately offering a purchase option.
                After three stipulation agreements, a final deadline of{" "}
                <strong>March 1, 2026</strong> was set. Rutledge failed to close and was declared in default on{" "}
                <strong>March 6, 2026</strong>. The judge transferred the case to circuit court.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 stagger">
                <StatCard label="County Case (closed)" value="50-2025-CC-018057-XXXA-NB" icon={<svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
                <StatCard label="Circuit Case (open)" value="50-2026-CA-003650-XXXA-MB" icon={<svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
                <StatCard label="Court" value="15th Judicial Circuit, Palm Beach County" icon={<svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>} />
                <StatCard label="Sale & Purchase Price" value="$650,000" icon={<svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
              </div>
            </div>

            {/* Property Details — expandable */}
            <details id="property" className="border-b border-slate-100">
              <summary className="px-4 sm:px-6 py-4 cursor-pointer select-none flex items-center justify-between hover:bg-slate-50 transition-colors">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  <span className="font-semibold text-slate-800 text-sm">Property Details</span>
                </span>
                <svg className="w-4 h-4 text-slate-400 chevron-icon shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 sm:px-6 pb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <DetailRow label="Address" value="8155 Cypress Point Road, West Palm Beach, FL 33412" />
                  <DetailRow label="Title File #" value="26-157 (Co-Op Title)" />
                  <DetailRow label="Seller Entity" value="Reward Florida LLC, Trustee of the Lareece Long Family Florida Land Trust" />
                  <DetailRow label="Buyer Entity (Trust)" value="Falcon Axos Financial LLC, as Trustee of the Florida Cypress Point Road Land Trust (dated Feb 20, 2026)" />
                  <DetailRow label="Buyer LLC EIN" value="41-4596164" />
                  <DetailRow label="Trust Beneficiary" value="David Rutledge" />
                  <DetailRow label="HOA" value="No right of first refusal" />
                </div>
              </div>
            </details>

            {/* Seller's Team — expandable */}
            <details id="parties" className="border-b border-slate-100">
              <summary className="px-4 sm:px-6 py-4 cursor-pointer select-none flex items-center justify-between hover:bg-slate-50 transition-colors">
                <span className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-semibold text-slate-800 text-sm shrink-0">Seller&apos;s Team</span>
                  <span className="text-xs text-slate-400 truncate hidden sm:inline">Eden Sade, Brian Kowal, Jocelyn Cruz</span>
                </span>
                <svg className="w-4 h-4 text-slate-400 chevron-icon shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 sm:px-6 pb-5">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-3 text-sm text-emerald-900">
                  <p className="font-semibold">Reward Florida LLC</p>
                  <p className="text-emerald-700 text-xs mt-0.5">Trustee of the Lareece Long Family Florida Land Trust &mdash; 8155 Cypress Point Road, West Palm Beach, FL 33412</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 stagger">
                  <PartyCard name="Eden Sade" role="CEO, ASAP Cash Home Buyers" email="eden@asapcashhomebuyers.com" detail="Managing the transaction on behalf of the seller. Declared the buyer's default on March 6, 2026." />
                  <PartyCard name="Brian P. Kowal, Esq." role="Seller's Attorney" email="bpkowal@gmail.com" detail="Law Office of Brian P. Kowal, PA. Drafted and recorded stipulation agreements. Represents the seller in court." />
                  <PartyCard name="Jocelyn Cruz" role="Transaction Coordinator" email="jocelyn@asapcashhomebuyers.com" detail="Coordinated with title company, provided entity documents, managed day-to-day closing logistics." />
                </div>
              </div>
            </details>

            {/* Buyer's Team — expandable */}
            <details className="border-b border-slate-100">
              <summary className="px-4 sm:px-6 py-4 cursor-pointer select-none flex items-center justify-between hover:bg-slate-50 transition-colors">
                <span className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
                  <span className="font-semibold text-slate-800 text-sm shrink-0">Buyer&apos;s Team</span>
                  <span className="text-xs text-slate-400 truncate hidden sm:inline">Melde Rutledge Jr, Philippe Revah</span>
                </span>
                <svg className="w-4 h-4 text-slate-400 chevron-icon shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 sm:px-6 pb-5">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3 text-sm text-red-900">
                  <p className="font-semibold">Falcon Axos Financial LLC</p>
                  <p className="text-red-700 text-xs mt-0.5">As Trustee of the Florida Cypress Point Road Land Trust (dated Feb 20, 2026) &mdash; EIN: 41-4596164 &mdash; Beneficiary: David Rutledge</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <PartyCard name="Melde De Rutledge Jr ('Mel')" role="Buyer / Defendant / Occupant" email="SeniorSecured@gmail.com" detail="The individual who was supposed to purchase the property. Failed to close by the March 1, 2026 deadline and was declared in default." />
                  <PartyCard name="Philippe Revah, Esq." role="Rutledge's Attorney (retained March 2026)" email="phil@revahlaw.com" detail="Filed Notice of Appearance and Response in Opposition on March 22, 2026." />
                </div>
              </div>
            </details>

            {/* Title Company — expandable */}
            <details>
              <summary className="px-4 sm:px-6 py-4 cursor-pointer select-none flex items-center justify-between hover:bg-slate-50 transition-colors">
                <span className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="font-semibold text-slate-800 text-sm shrink-0">Title Company</span>
                  <span className="text-xs text-slate-400 truncate hidden sm:inline">Aaron Schneider, Chris Meadows</span>
                </span>
                <svg className="w-4 h-4 text-slate-400 chevron-icon shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 sm:px-6 pb-5">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3 text-sm text-blue-900">
                  <p className="font-semibold">Co-Op Title Agency of Florida</p>
                  <p className="text-blue-700 text-xs mt-0.5">File 26-157 &mdash; Handling closing, trust setup, and lender coordination</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <PartyCard name="Aaron Schneider" role="Closing Agent" email="Aaron@cooptitle.com" detail="Handled title, closing documents, trust setup, and coordinated with all parties." />
                  <PartyCard name="Chris Meadows" role="Co-Closing Agent" email="chris@cooptitle.com" detail="Worked alongside Aaron Schneider. Spoke with Eden and Mel about trust structure." />
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mb-12 animate-in" style={{ animationDelay: "0.2s" }}>
          <SectionTitle icon={<svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>Complete Timeline</SectionTitle>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
            <div className="space-y-0">
              <TimelineItem date="Nov 5, 2025" title="Case Filed — Unlawful Detainer Complaint & Summons Issued" detail="Brian Kowal files a Complaint for Unlawful Detainer against Melde De Rutledge Jr. in Palm Beach County Court (Case No. 50-2025-CC-018057-XXXA-NB). Civil Cover Sheet, Complaint, and Summons are all filed on the same day. Summons issued to Rutledge." type="court" docs={[{ label: "Civil Cover Sheet", href: "/docs/court-filings/Civil_Cover_Sheet.pdf" }, { label: "Complaint for Unlawful Detainer", href: "/docs/court-filings/Complaint_Unlawful_Detainer.pdf" }, { label: "Summons Issued", href: "/docs/court-filings/Summons_Issued.pdf" }]} />
              <TimelineItem date="Nov 16, 2025" title="First Stipulation Agreement" detail="Brian Kowal (seller's attorney) sends the initial Stipulation Agreement to Eden Sade. Agreement settles the unlawful detainer action: Rutledge acknowledges he is 'not a Tenant but solely an occupant' and agrees to vacate the property by November 30, 2025. Executed via DocuSign on Nov 17. Filed with court on Nov 18." type="legal" href="/docs/stipulations/1st_Stipulation.pdf" email={{ from: "Brian Kowal <bpkowal@gmail.com>", to: "Eden Sade <eden@asapcashhomebuyers.com>", body: "Law Office of Brian P. Kowal, PA\n7351 Wiles Road, Suite 103\nCoral Springs, Florida 33067", attachments: ["STIPULATION AGREEMENT.docx"] }} />
              <TimelineItem date="Dec 2, 2025" title="Second Stipulation — Extension Granted" detail="Rutledge fails to vacate by Nov 30 and requests an extension. Eden sends Brian a skeleton for the Second Stipulation. In exchange, Rutledge pays $7,000 that day with $4,000 more due Friday. New vacate deadline: December 15, 2025. $4,000 designated as rent for December. Brian finalizes the legal language and returns the executed document. Filed with court on Jan 20, 2026." type="legal" href="/docs/stipulations/2nd_Stipulation.pdf" email={{ from: "Eden Sade <eden@asapcashhomebuyers.com>", to: "Brian Kowal <bpkowal@gmail.com>", body: "Hi Brian,\n\nAttached below is a short skeleton for the Second Stipulation. He requested an extension, and in exchange he paid $7,000 today and will pay another $4,000 this Friday.\n\nThe only changes needed from the original stipulation are the new move-out date and the payment terms. Please review, tighten the legal language, and prepare the final version for execution.\n\nLet me know if you need anything clarified.", attachments: ["Second_Stipulation.docx"] }} />
              <TimelineItem date="Jan 11, 2026" title="Third & Final Stipulation Drafted — Purchase Agreement" detail="Eden sends Brian the Term Sheet and draft Stipulation Settlement Agreement. This third stipulation transforms the case from an eviction into a real estate purchase-and-sale: Rutledge is designated 'Buyer' at a purchase price of $650,000. His prior payments of $32,500 are credited toward the purchase price (total payments to date: ~$36,500). Balance of $617,500 due by March 1, 2026 at 4:00 PM Eastern via wire through Co-Op Title. No financing contingency. No grace periods. No extensions. All closing costs on buyer, including seller's attorney fees. Pre-signed judgment and writ of possession attached in case of default. Brian reviews and responds on Jan 13: 'This is tremendous. It doesn't need any revisions.' Final version executed and sent for filing on Jan 16. Filed with court on Jan 20, 2026." type="legal" href="/docs/stipulations/Term_Sheet.pdf" email={{ from: "Eden Sade <eden@asapcashhomebuyers.com>", to: "Brian Kowal <bpkowal@gmail.com>", subject: "Case No. 502025CC018057XXXANB | Proposed Final Agreement & Term sheet", body: "Brian, good evening.\n\nPlease see the attached documents:\n1. Term sheet\n2. Draft agreement prepared based on the term sheet.\n\nI'd appreciate your review and suggested edits to the attached agreement. If you think it's better to start from scratch, that's fine as well. My preference is to use the draft I prepared as the baseline where possible.", attachments: ["TERM SHEET - 3rd Stipulation / Purchase agreement.pdf", "Stipulation Settlement Agreement.pdf"] }} />


              <TimelineItem date="Feb 10, 2026" title="Title Company Opens File — Closing Process Begins" detail="Aaron Schneider at Co-Op Title sends initial closing package to Mel Rutledge (File 26-157). Eden forwards all four stipulation documents to Aaron. This begins the main closing thread between Aaron, Eden, Mel, Chris Meadows, and Jocelyn." type="title" email={{ from: "Eden Sade <eden@asapcashhomebuyers.com>", to: "Aaron Schneider <aaron@cooptitle.com>", subject: "Fwd: Third & Final stipulation & LOI", body: "See below.\n\n(Forwarded the Jan 16 email with all 4 stipulation documents.)", attachments: ["1st Stipulation.pdf", "2nd Stipulation.pdf", "LETTER_OF_INTENT.pdf", "Third & Final Stipulation - 8155 WPB 01 16 26.pdf"] }} />
              <TimelineItem date="Feb 11, 2026" title="Title Company Follow-Up" detail="Aaron sends FOLLOW UP email to Mel (cc'ing Eden), requesting buyer info sheet completion. Notes buyer may want to close via a Trust." type="title" />
              <TimelineItem date="Feb 12, 2026" title="Phone Call & Deadline Confirmed" detail="Aaron speaks with Mel by phone. Three items flagged: (1) how buyer takes title, (2) land survey needed?, (3) cash or loan? Contract deadline: March 1, 2026 (Sunday). Target closing: Feb 27. Aaron notes: 'Time is of the essence.'" type="title" />
              <TimelineItem date="Feb 12, 2026" title="Eden Clarifies Title Options" detail="Eden tells Mel he can take title via new trust, existing trust, LLC, or corporation. Confirms HOA has no right of first refusal." type="title" />
              <TimelineItem date="Feb 17, 2026" title="Trust Structure Discussed" detail="Chris Meadows speaks with Eden, then emails Mel: plan is to create '8155 Cypress Point Land Trust' with Mel's new LLC as Trustee. Mel needs to create the LLC first." type="title" email={{ from: "Chris Meadows <chris@cooptitle.com>", to: "Aaron Schneider <Aaron@cooptitle.com>, Melde Rutledge <Seniorsecured@gmail.com>", subject: "RE: FOLLOW UP : Rutledge p/f Reward Florida LLC --- File 26-157: 8155 Cypress Point Road, West Palm Beach, FL 33412", body: "Hi Melde,\n\nI just spoke to Eden about opening the new 8155 Cypress Point Land Trust (Your New LLC, as Trustee). As soon as you create your new LLC, let us know, and we will add that name as the Trustee and create the documents.\n\nQuestions we need answered-\n\nDo you require a Land Survey?\n\nPlease complete our info sheet asap." }} />
              <TimelineItem date="Feb 17, 2026" title="Mel Calls Co-Op Title" detail="Chris Meadows reports: 'Melde De Rutledge, Jr. called — 561-723-8155. Somebody called him and told him that a Trust was already approved.' Chris tells Aaron to call him back." type="title" email={{ from: "Chris Meadows <chris@cooptitle.com>", to: "Aaron Schneider <Aaron@cooptitle.com>", subject: "Please call Melde De Rutledge- 561-723-8155- 8155 Cypress Point Rd., 26-157", body: "Hi Aaron and Eden-\n\nI told him Aaron would call him back tomorrow when he returns.\n\nMelde De Rutledge, Jr. called- 561-723-8155\n\nSomebody called him and told him that a Trust was already approved with the Association and he wants to make sure that the trust name can be updated to his trust name.\n\nHe thought he was assuming Reward LLC, the company.- please clarify with him.\n\nClosing is March 1st." }} />
              <TimelineItem date="Feb 18, 2026" title="Buyer Info Sheet Received" detail="Completed Buyer Information Sheet arrives showing buyer entity: Falcon Axos Financial LLC. Aaron requests operating agreement, articles of organization, and EIN letter." type="title" email={{ from: "Aaron Schneider <Aaron@cooptitle.com>", to: "Melde Rutledge <Seniorsecured@gmail.com>", subject: "RE: FOLLOW UP : Rutledge p/f Reward Florida LLC --- File 26-157: 8155 Cypress Point Road, West Palm Beach, FL 33412", body: "Good morning,\n\nWe are in receipt of the completed buyer info sheet which reflects Falcon Axos Financial LLC\n\nPlease provide the following for Falcon Axos Financial LLC ASAP:\n\n- Companies operating agreement, if applicable\n- State they are organized in and articles\n- Certificate of Good Standing and other company related documents\n- Companies EIN number\n- Number of member(s) for the company\n- Is the company member-managed or manager-managed?\n- Each member's name and their title\n- Mailing address\n- Email and phone number of the signer with a photo or copy of their ID", attachments: ["Buyer Info Sheet (Company or Corporation).pdf"] }} />
              <TimelineItem date="Feb 19, 2026" title="Entity Documents Submitted" detail="Jocelyn sends the Operating Agreement for Falcon Axos Financial LLC (dated Feb 19, 2026) to Aaron. Confirms Seller Info Sheet was submitted Feb 17." type="title" href="/docs/title-closing/Operating_Agreement_Falcon_Axos.pdf" email={{ from: "Jocelyn ASAP <jocelyn@asapcashhomebuyers.com>", to: "Aaron Schneider <Aaron@cooptitle.com>", cc: "Chris Meadows <chris@cooptitle.com>, Eden Sade <eden@asapcashhomebuyers.com>", subject: "Re: FOLLOW UP : Rutledge p/f Reward Florida LLC --- File 26-157: 8155 Cypress Point Road, West Palm Beach, FL 33412", body: "Hi Aaron,\n\nPlease see the attached operating agreement for Mel's entity. The Seller Information Sheet was submitted via the provided link on Tuesday. Please confirm that everything is in order or advise if anything further is needed. Thank you.", attachments: ["Operating Agreement - Falcon Axos Financial LLC 02 19 26.pdf"] }} />
              <TimelineItem date="Feb 20, 2026" title="Trust Agreement Finalized" detail="Aaron proposes full vesting name. Jocelyn confirms trust details: Beneficiary = David Rutledge, Successor Trustee = Charles Lovely, Holder of Power = David Rutledge. Mel will get a mortgage (not cash). Aaron drafts preliminary Trust Agreement. Jocelyn approves: 'Looks good. Please send it to Mel.'" type="title" href="/docs/title-closing/Trust_Agreement.pdf" email={{ from: "Aaron Schneider <Aaron@cooptitle.com>", to: "Jocelyn ASAP <jocelyn@asapcashhomebuyers.com>", subject: "RE: FOLLOW UP : Rutledge p/f Reward Florida LLC --- File 26-157: 8155 Cypress Point Road, West Palm Beach, FL 33412", body: "Falcon Axos Financial LLC, a Florida Limited Liability Company, as Trustee of the Florida Cypress Point Road Land Trust dated February 20, 2026" }} />
              <TimelineItem date="Feb 23, 2026" title="Trust Agreement Sent to Buyer" detail="Aaron sends executed trust agreement to Mel and urges: 'Please connect us with lender ASAP to start the process with them to close.'" type="title" href="/docs/title-closing/Trust_Agreement.pdf" email={{ from: "Aaron Schneider <Aaron@cooptitle.com>", to: "Melde Rutledge <Seniorsecured@gmail.com>", subject: "RE: Rutledge p/f Reward Florida LLC --- File 26-157: 8155 Cypress Point Road, West Palm Beach, FL 33412", body: "Good afternoon Mel,\n\nSee attached trust agreement attached.\n\nPlease connect us with lender asap to start the process with them to close", attachments: ["Falcon Axos Financial LLC, a Florida Limited Liability Company, as Trustee of the Florida Cypress Point Road Land Trust dated February 20, 2026.pdf"] }} />
              <TimelineItem date="Feb 24, 2026" title="No Response from Buyer" detail="Aaron follows up to Mel: 'Following up on the lender contact info. Was trust executed and provided to lender?' No response received. Aaron also reaches out to the supposed lender contact (Olympic Capital) — no response ever received, confirming the lender never engaged." type="warning" email={{ from: "Aaron Schneider <Aaron@cooptitle.com>", to: "Melde Rutledge <Seniorsecured@gmail.com>", subject: "RE: Rutledge p/f Reward Florida LLC --- File 26-157: 8155 Cypress Point Road, West Palm Beach, FL 33412", body: "Good afternoon,\n\nFollowing up on the lender contact info.\n\nWas trust executed and provided to lender?" }} />
              <TimelineItem date="Mar 1, 2026" title="DEADLINE DAY (Sunday) — No Closing" detail="March 1, 2026 is the contractual deadline per the Third Stipulation (closing by 4:00 PM Eastern). March 1 falls on a Sunday — title company closed, wire transfers cannot process. No closing occurs. On Monday March 2, Aaron follows up: 'Is the buyer still moving forward? We have not heard from any lender or received the executed trust agreement.' Eden formally states: 'The buyer has until the end of today to close. If they do not close by the end of the day, they will be in default. The seller remains ready, willing, and able.' No lender contacted, no trust agreement executed. Brian Kowal prepares Affidavit of Non-Compliance (filed March 3)." type="critical" href="/docs/court-filings/Affidavit_of_NonCompliance.pdf" email={{ from: "Brian Kowal <bpkowal@gmail.com>", to: "Eden Sade <eden@asapcashhomebuyers.com>", body: "Law Office of Brian P. Kowal, PA\n7351 Wiles Road, Suite 103\nCoral Springs, Florida 33067", attachments: ["AFFIDAVIT OF NON COMPLIANCE.docx"] }} />
              <TimelineItem date="Mar 2, 2026" title="Last-Minute EIN Request" detail="Mel calls to request EIN for Falcon Axos Financial LLC. Eden relays: EIN 41-4596164. Sends IRS CP 575 confirmation to Aaron privately. Nothing further happens — deadline passes without closing." type="warning" />
              <TimelineItem date="Mar 6, 2026" title="BUYER DECLARED IN DEFAULT" detail="Aaron asks for an update. Eden replies definitively: 'Aaron, the buyer has defaulted. The terms of the sale are no longer applicable as the March 1, 2026 deadline (Sunday, extended to March 2 at the latest) has passed, and no extension was granted under any circumstances.'" type="critical" email={{ from: "Eden Sade <eden@asapcashhomebuyers.com>", to: "Aaron Schneider <Aaron@cooptitle.com>", cc: "Seniorsecured@gmail.com, Chris Meadows, bpkowal@gmail.com, Jocelyn ASAP", subject: "Re: Rutledge p/f Reward Florida LLC --- File 26-157: 8155 Cypress Point Road, West Palm Beach, FL 33412", body: "Aaron, the buyer has defaulted. The terms of the sale are no longer applicable as the March 1, 2026 deadline (Sunday, extended to March 2 at the latest) has passed, and no extension was granted under any circumstances." }} />
              <TimelineItem date="Mar 19, 2026" title="Notice of Hearing Filed" detail="Notice of Hearing filed for March 23, 2026 at 9AM before Judge Stephens." type="court" href="/docs/court-filings/Notice_of_Hearing.pdf" />
              <TimelineItem date="Mar 22, 2026" title="Rutledge Retains Attorney — Notice of Appearance & Opposition Filed" detail="Philippe Revah (305-315-4605) files Notice of Appearance and Response in Opposition on behalf of Melde De Rutledge Jr. Brian Kowal alerts Eden: 'Hey, he retained a lawyer.'" type="court" href="/docs/court-filings/Notice_of_Appearance_Revah.pdf" email={{ from: "Brian Kowal <bpkowal@gmail.com>", to: "Eden Sade <eden@asapcashhomebuyers.com>", subject: "Fwd: SERVICE OF COURT DOCUMENT CASE NUMBER 502025CC018057XXXANB", body: "Eden,\n\nHey, he retained a lawyer.\n\n--- Forwarded e-filing notice ---\nFiling #244315835\nFiler: Philippe Revah (305-315-4605)\nDocuments: Notice of Appearance, Response in Opposition" }} />
              <TimelineItem date="Mar 23, 2026" title="ORDER — Motion for Final Judgment Denied" detail="Judge Debra Moses Stephens denies motion for final judgment. Finds that the 2nd stipulation's rent payment and the 3rd stipulation's 5% deposit ($32,500) toward the $650,000 purchase price place this case outside county court jurisdiction under Florida Statute 83.42(2). Orders plaintiff to transfer case to Circuit Court within 30 days or case will be dismissed." type="court" href="/docs/court-filings/Order_Denying_Final_Judgment.pdf" isLast />
            </div>
          </div>
        </section>

        {/* Court Docket — expandable */}
        <div id="docket" className="mb-12 bg-white rounded-xl shadow-sm border border-slate-200 animate-in" style={{ animationDelay: "0.25s" }}>
          <details>
            <summary className="px-4 sm:px-6 py-4 cursor-pointer select-none flex items-center justify-between hover:bg-slate-50 transition-colors">
              <span className="flex items-center gap-2 flex-wrap">
                <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                <span className="font-semibold text-slate-800 text-sm">Court Docket</span>
                <span className="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full badge-pop">County (closed)</span>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full badge-pop" style={{ animationDelay: "0.1s" }}>Circuit (open)</span>
              </span>
              <svg className="w-4 h-4 text-slate-400 chevron-icon shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="border-t border-slate-100">
              {/* County Court */}
              <div className="px-4 sm:px-6 pt-4 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-slate-900 text-sm">County Court Docket</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Closed</span>
                </div>
                <p className="text-xs text-slate-500 font-mono">Case No. 50-2025-CC-018057-XXXA-NB</p>
              </div>
              <div className="overflow-x-auto table-responsive">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200">
                      <th className="text-left px-3 sm:px-4 py-2 font-semibold text-slate-600 text-xs uppercase tracking-wide w-12 sm:w-16">DIN</th>
                      <th className="text-left px-3 sm:px-4 py-2 font-semibold text-slate-600 text-xs uppercase tracking-wide w-24 sm:w-28">Date</th>
                      <th className="text-left px-3 sm:px-4 py-2 font-semibold text-slate-600 text-xs uppercase tracking-wide">Description</th>
                      <th className="text-left px-3 sm:px-4 py-2 font-semibold text-slate-600 text-xs uppercase tracking-wide">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <DocketRow din="2" date="11/5/2025" description="CIVIL COVER SHEET" notes="F/B PLT" href="/docs/court-filings/Civil_Cover_Sheet.pdf" />
                    <DocketRow din="3" date="11/5/2025" description="COMPLAINT FOR UNLAWFUL DETAINER" notes="F/B PLT" href="/docs/court-filings/Complaint_Unlawful_Detainer.pdf" />
                    <DocketRow din="4" date="11/5/2025" description="SUMMONS ISSUED" notes="bpkowal@gmail.com" href="/docs/court-filings/Summons_Issued.pdf" />
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
                    <DocketRow din="19" date="3/3/2026" description="AFFIDAVIT OF NON-COMPLIANCE" highlight href="/docs/court-filings/Affidavit_of_NonCompliance_Court.pdf" />
                    <DocketRow din="20" date="3/19/2026" description="NOTICE OF HEARING" notes="3/23/26 9AM Judge Stephens" href="/docs/court-filings/Notice_of_Hearing.pdf" />
                    <DocketRow din="21" date="3/22/2026" description="NOTICE OF APPEARANCE CIVIL" notes="F/B DFT (Revah for Rutledge)" highlight href="/docs/court-filings/Notice_of_Appearance_Revah.pdf" />
                    <DocketRow din="22" date="3/22/2026" description="OBJECTION / RESPONSE IN OPPOSITION" notes="F/B DFT - w/ Memo of Law" highlight href="/docs/court-filings/Response_in_Opposition.pdf" />
                    <DocketRow din="23" date="3/23/2026" description="ORDER DENYING MOTION FOR FINAL JUDGMENT" notes="After default in stipulation. Signed Judge Stephens 3/23/2026" highlight href="/docs/court-filings/Order_Denying_Final_Judgment.pdf" />
                    <DocketRow din="26" date="3/23/2026" description="DO NOT DOCKET ON THIS CASE" notes="TRANSFER TO CIRCUIT COURT" />
                    <DocketRow din="24" date="3/31/2026" description="CORRESPONDENCE" notes="Request for fees - bpkowal@gmail.com" />
                    <DocketRow din="25" date="4/1/2026" description="RECEIPT OF TRANSFER" notes="County Civil to Circuit Civil Palm Beach" href="/docs/court-filings/Receipt_of_Transfer.pdf" />
                    <DocketRow din="27" date="4/1/2026" description="RECEIPT OF TRANSFER TO CIRCUIT" notes="New Case# 2026CA003650" href="/docs/court-filings/Receipt_of_Transfer_Circuit.pdf" />
                  </tbody>
                </table>
              </div>

              {/* Circuit Court */}
              <div className="px-4 sm:px-6 pt-6 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-slate-900 text-sm">Circuit Court Docket</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Open</span>
                </div>
                <p className="text-xs text-slate-500 font-mono">Case No. 50-2026-CA-003650-XXXA-MB</p>
                <p className="text-xs text-slate-400 mt-0.5">Transferred from County Court on 4/1/2026</p>
              </div>
              <div className="overflow-x-auto table-responsive">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200">
                      <th className="text-left px-3 sm:px-4 py-2 font-semibold text-slate-600 text-xs uppercase tracking-wide w-12 sm:w-16">DIN</th>
                      <th className="text-left px-3 sm:px-4 py-2 font-semibold text-slate-600 text-xs uppercase tracking-wide w-24 sm:w-28">Date</th>
                      <th className="text-left px-3 sm:px-4 py-2 font-semibold text-slate-600 text-xs uppercase tracking-wide">Description</th>
                      <th className="text-left px-3 sm:px-4 py-2 font-semibold text-slate-600 text-xs uppercase tracking-wide">Notes</th>
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

              {/* Legend */}
              <div className="px-4 sm:px-6 py-4 border-t border-slate-100 bg-slate-50 rounded-b-xl">
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block w-3 h-3 rounded bg-amber-50 border border-amber-200" />
                    Key filings &amp; orders
                  </span>
                  <span>DIN = Docket Index Number</span>
                  <span>F/B PLT = Filed by Plaintiff</span>
                  <span>F/B DFT = Filed by Defendant</span>
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* Document Index — expandable with full design */}
        <div id="documents" className="mb-12 bg-white rounded-xl shadow-sm border border-slate-200 animate-in" style={{ animationDelay: "0.3s" }}>
          <details>
            <summary className="px-4 sm:px-6 py-4 cursor-pointer select-none flex items-center justify-between hover:bg-slate-50 transition-colors">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span className="font-semibold text-slate-800 text-sm">Document Index</span>
                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full badge-pop">20 documents</span>
              </span>
              <svg className="w-4 h-4 text-slate-400 chevron-icon shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="border-t border-slate-100 px-4 sm:px-6 py-6 space-y-8">
              {/* Stipulation Agreements */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900">Stipulation Agreements</h3>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">6 documents</span>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
                  <DocumentEntry name="1st Stipulation Agreement" filename="STIPULATION AGREEMENT.docx" date="Nov 16, 2025" source="Email #1 — Brian Kowal to Eden Sade" description="Initial agreement settling the unlawful detainer action. Rutledge acknowledges he is not a tenant but solely an occupant and agrees to vacate by November 30, 2025. Signed via DocuSign on Nov 17, 2025. Filed with court on Nov 18." href="/docs/stipulations/1st_Stipulation.pdf" />
                  <DocumentEntry name="2nd Stipulation Agreement" filename="SECOND STIPULATION AGREEMENT.pdf" date="Dec 2, 2025" source="Email #4 — Brian Kowal to Eden Sade" description="Extension granted to Rutledge in exchange for $7,000 payment (plus $4,000 due Friday). New move-out date and payment terms. Filed with court on Jan 20, 2026." href="/docs/stipulations/2nd_Stipulation.pdf" />
                  <DocumentEntry name="Letter of Intent (LOI)" filename="LETTER_OF_INTENT.pdf" date="Jan 2026" source="Email #7 — Eden Sade to Brian Kowal" description="Letter of Intent outlining the proposed purchase terms for 8155 Cypress Point Road." href="/docs/stipulations/Letter_of_Intent.pdf" />
                  <DocumentEntry name="Term Sheet" filename="TERM SHEET - 3rd Stipulation / Purchase agreement.pdf" date="Jan 11, 2026" source="Email #5 — Eden Sade to Brian Kowal" description="Detailed term sheet accompanying the Third Stipulation, outlining purchase price, conditions, and deadlines." href="/docs/stipulations/Term_Sheet.pdf" />
                  <DocumentEntry name="Stipulation Settlement Agreement (Draft)" filename="Stipulation Settlement Agreement.pdf" date="Jan 11, 2026" source="Email #5 — Eden Sade to Brian Kowal" description="Full draft settlement agreement based on the term sheet. Attorney Brian Kowal approved without revisions: 'This is tremendous.'" href="/docs/stipulations/Settlement_Agreement_Draft.pdf" />
                  <DocumentEntry name="Third & Final Stipulation" filename="Third & Final Stipulation - 8155 WPB 01 16 26.pdf" date="Jan 16, 2026" source="Email #7 — Eden Sade to Brian Kowal" description="Final stipulation transforming the case into a $650,000 purchase-and-sale. Rutledge designated as Buyer. $32,500 credited toward purchase price. Balance of $617,500 due by March 1, 2026 at 4:00 PM via wire. No financing contingency, no grace periods, no extensions. Pre-signed judgment attached. Filed with court on Jan 20, 2026." href="/docs/stipulations/3rd_Final_Stipulation.pdf" />
                </div>
              </div>

              {/* Court Filings & Legal */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900">Court Filings &amp; Legal</h3>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">9 documents</span>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
                  <DocumentEntry name="Civil Cover Sheet" filename="502025CC018057XXXANB_2.pdf" date="Nov 5, 2025" source="Court Docket DIN #2" description="Civil cover sheet filed by plaintiff (Brian Kowal) initiating the case." href="/docs/court-filings/Civil_Cover_Sheet.pdf" />
                  <DocumentEntry name="Complaint for Unlawful Detainer" filename="502025CC018057XXXANB_3.pdf" date="Nov 5, 2025" source="Court Docket DIN #3" description="Original complaint for unlawful detainer filed by plaintiff." href="/docs/court-filings/Complaint_Unlawful_Detainer.pdf" />
                  <DocumentEntry name="Summons Issued" filename="502025CC018057XXXANB_4.pdf" date="Nov 5, 2025" source="Court Docket DIN #4" description="Summons issued to Melde De Rutledge Jr." href="/docs/court-filings/Summons_Issued.pdf" />
                  <DocumentEntry name="Affidavit of Non-Compliance" filename="502025CC018057XXXANB_19.pdf" date="Mar 3, 2026" source="Court Docket DIN #19" description="Affidavit documenting the buyer's failure to comply with the stipulation terms by the March 1, 2026 deadline." href="/docs/court-filings/Affidavit_of_NonCompliance_Court.pdf" />
                  <DocumentEntry name="Notice of Hearing" filename="502025CC018057XXXANB_20.pdf" date="Mar 19, 2026" source="Court Docket DIN #20" description="Notice of hearing scheduled for March 23, 2026 at 9AM before Judge Stephens." href="/docs/court-filings/Notice_of_Hearing.pdf" />
                  <DocumentEntry name="Notice of Appearance — Philippe Revah" filename="502025CC018057XXXANB_21.pdf" date="Mar 22, 2026" source="Court Docket DIN #21" description="Attorney Philippe Revah files appearance on behalf of Melde De Rutledge Jr." href="/docs/court-filings/Notice_of_Appearance_Revah.pdf" />
                  <DocumentEntry name="Response in Opposition" filename="502025CC018057XXXANB_22.pdf" date="Mar 22, 2026" source="Court Docket DIN #22" description="Rutledge's attorney files response opposing the seller's motion, with Memorandum of Law." href="/docs/court-filings/Response_in_Opposition.pdf" />
                  <DocumentEntry name="Order Denying Motion for Final Judgment" filename="502025CC018057XXXANB_23.pdf" date="Mar 23, 2026" source="Court Docket DIN #23" description="Judge Stephens denies motion for final judgment. Finds county court lacks jurisdiction under FL Statute 83.42(2) due to rent payments and 5% deposit. Orders transfer to circuit court within 30 days." href="/docs/court-filings/Order_Denying_Final_Judgment.pdf" />
                  <DocumentEntry name="Receipt of Transfer to Circuit" filename="502025CC018057XXXANB_27.pdf" date="Apr 1, 2026" source="Court Docket DIN #27" description="Receipt of transfer from county civil to circuit court. New Case# 2026CA003650." href="/docs/court-filings/Receipt_of_Transfer_Circuit.pdf" />
                </div>
              </div>

              {/* Title & Closing */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900">Title &amp; Closing Documents</h3>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">3 documents</span>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
                  <DocumentEntry name="Operating Agreement — Falcon Axos Financial LLC" filename="Operating Agreement - Falcon Axos Financial LLC 02 19 26.pdf" date="Feb 19, 2026" source="Jocelyn Cruz to Aaron Schneider (Co-Op Title thread)" description="LLC operating agreement for the buyer's entity (Falcon Axos Financial LLC), dated Feb 19, 2026." href="/docs/title-closing/Operating_Agreement_Falcon_Axos.pdf" />
                  <DocumentEntry name="Trust Agreement — Florida Cypress Point Road Land Trust" filename="Trust Agreement (Preliminary)" date="Feb 20, 2026" source="Aaron Schneider / Co-Op Title thread" description="Preliminary trust agreement with Falcon Axos Financial LLC as Trustee. Beneficiary: David Rutledge. Never executed by the buyer." href="/docs/title-closing/Trust_Agreement.pdf" />
                  <DocumentEntry name="IRS CP 575 — EIN Confirmation" filename="IRS CP 575 Letter" date="Mar 2, 2026" source="Eden Sade to Aaron Schneider (private)" description="IRS EIN Confirmation Letter for Falcon Axos Financial LLC (EIN: 41-4596164)." />
                </div>
              </div>

              {/* Correspondence */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900">Correspondence &amp; Preparation</h3>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">2 documents</span>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
                  <DocumentEntry name="Court Script / Q&A Preparation" filename="brian_court_script.pdf" date="Mar 22, 2026" source="Email #14 — Eden Sade to Brian Kowal" description="Prepared questions and responses document for the court hearing." href="/docs/correspondence/Court_Script_QA.pdf" />
                  <DocumentEntry name="Case Update to 21st Mortgage" filename="(Email body + 4 stipulation attachments)" date="Mar 31, 2026" source="Email #15 — Eden Sade to Rob Longworth" description="Eden reports the court ruling (transfer to circuit court), expected vacate date (late April), and anticipated sale timeline." />
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* Email Archive — expandable with all emails inline */}
        <div id="emails" className="mb-12 bg-white rounded-xl shadow-sm border border-slate-200 animate-in" style={{ animationDelay: "0.35s" }}>
          <details>
            <summary className="px-4 sm:px-6 py-4 cursor-pointer select-none flex items-center justify-between hover:bg-slate-50 transition-colors">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="font-semibold text-slate-800 text-sm">Email Archive</span>
                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full badge-pop">15 emails</span>
              </span>
              <svg className="w-4 h-4 text-slate-400 chevron-icon shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="border-t border-slate-100 divide-y divide-slate-100">
              <ArchiveEmail num={1} label="Brian Kowal sends 1st Stipulation draft" from="Brian Kowal <bpkowal@gmail.com>" to="Eden Sade <eden@asapcashhomebuyers.com>" date="Nov 16, 2025" body="Law Office of Brian P. Kowal, PA&#10;7351 Wiles Road, Suite 103&#10;Coral Springs, Florida 33067" attachments={["STIPULATION AGREEMENT.docx"]} />
              <ArchiveEmail num={2} label="DocuSign Completed: STIPULATION AGREEMENT" from="Eden Sade via Docusign <dse_NA4@docusign.net>" to="Eden Sade <Eden@biggerequity.com>" date="Nov 17, 2025" subject="Completed: Complete with Docusign: STIPULATION AGREEMENT.docx" body="All parties have completed Complete with Docusign: STIPULATION AGREEMENT.docx." attachments={["STIPULATION AGREEMENT.docx.pdf"]} />
              <ArchiveEmail num={3} label="Eden sends 2nd Stipulation skeleton to Kowal" from="Eden Sade <eden@asapcashhomebuyers.com>" to="Brian Kowal <bpkowal@gmail.com>" date="Dec 2, 2025" body={"Hi Brian,\n\nAttached below is a short skeleton for the Second Stipulation. He requested an extension, and in exchange he paid $7,000 today and will pay another $4,000 this Friday.\n\nThe only changes needed from the original stipulation are the new move-out date and the payment terms. Please review, tighten the legal language, and prepare the final version for execution.\n\nLet me know if you need anything clarified."} attachments={["Second_Stipulation.docx"]} />
              <ArchiveEmail num={4} label="Brian returns executed 2nd Stipulation" from="Brian Kowal <bpkowal@gmail.com>" to="Eden Sade <eden@asapcashhomebuyers.com>" date="Dec 2, 2025" body="Law Office of Brian P. Kowal, PA&#10;7351 Wiles Road, Suite 103&#10;Coral Springs, Florida 33067" attachments={["SECOND STIPULATION AGREEMENT.pdf"]} />
              <ArchiveEmail num={5} label="Eden sends Term Sheet & Draft Agreement to Kowal" from="Eden Sade <eden@asapcashhomebuyers.com>" to="Brian Kowal <bpkowal@gmail.com>" date="Jan 11, 2026" subject="Case No. 502025CC018057XXXANB | Proposed Final Agreement & Term sheet" body={"Brian, good evening.\n\nPlease see the attached documents:\n1. Term sheet\n2. Draft agreement prepared based on the term sheet.\n\nI'd appreciate your review and suggested edits to the attached agreement. If you think it's better to start from scratch, that's fine as well. My preference is to use the draft I prepared as the baseline where possible."} attachments={["TERM SHEET - 3rd Stipulation / Purchase agreement.pdf", "Stipulation Settlement Agreement.pdf"]} />
              <ArchiveEmail num={6} label="Brian approves 3rd Stipulation" from="Brian Kowal <bpkowal@gmail.com>" to="Eden Sade <eden@asapcashhomebuyers.com>" date="Jan 13, 2026" body={"Eden,\n\nThis is tremendous. It doesn't need any revisions."} attachments={["Third and Final Stipulation.docx"]} />
              <ArchiveEmail num={7} label="All 4 executed docs sent to Kowal for filing" from="Eden Sade <eden@asapcashhomebuyers.com>" to="Brian Kowal <bpkowal@gmail.com>" date="Jan 16, 2026" subject="Third & Final stipulation & LOI" body={"Brian see attached:\n1. First stipulation\n2. Second Stipulation\n3. Letter of Intent\n4. Third & Final Stipulation.\n\nAll executed. Can you record the 2nd and 3rd stipulations please."} attachments={["1st Stipulation.pdf", "2nd Stipulation.pdf", "LETTER_OF_INTENT.pdf", "Third & Final Stipulation - 8155 WPB 01 16 26.pdf"]} />
              <ArchiveEmail num={8} label="E-Filing Confirmation — 2nd & 3rd Stipulations filed" from="Brian Kowal <bpkowal@gmail.com>" to="eden@asapcashhomebuyers.com" date="Jan 20, 2026" subject="Fwd: SERVICE OF COURT DOCUMENT CASE NUMBER 502025CC018057XXXANB" body={"Forwarded from eservice@myflcourtaccess.com\n\nFiling #239834847\nFiling Time: 01/20/2026 10:58:27 AM ET\nFiler: Brian P Kowal\n\nDocuments filed:\n  - 2nd Stipulation.pdf\n  - Third and Final Stipulation.pdf\n\nE-served to Brian P Kowal.\nCourt: Fifteenth Judicial Circuit, Palm Beach County."} />
              <ArchiveEmail num={9} label="Stipulations forwarded to Co-Op Title" from="Eden Sade <eden@asapcashhomebuyers.com>" to="Aaron Schneider <aaron@cooptitle.com>" date="Feb 10, 2026" subject="Fwd: Third & Final stipulation & LOI" body={"See below.\n\n(Forwarded the Jan 16 email with all 4 stipulation documents.)"} attachments={["1st Stipulation.pdf", "2nd Stipulation.pdf", "LETTER_OF_INTENT.pdf", "Third & Final Stipulation - 8155 WPB 01 16 26.pdf"]} />
              <ArchiveEmail num={10} label="Affidavit of Non-Compliance" from="Brian Kowal <bpkowal@gmail.com>" to="Eden Sade <eden@asapcashhomebuyers.com>" date="Mar 2, 2026" body="Law Office of Brian P. Kowal, PA&#10;7351 Wiles Road, Suite 103&#10;Coral Springs, Florida 33067" attachments={["AFFIDAVIT OF NON COMPLIANCE.docx"]} />
              <ArchiveEmail num={11} label="Eden formally declares buyer default" from="Eden Sade <eden@asapcashhomebuyers.com>" to="Aaron Schneider <Aaron@cooptitle.com>" cc="Seniorsecured@gmail.com, Chris Meadows, bpkowal@gmail.com, Jocelyn ASAP" date="Mar 6, 2026" subject="Re: Rutledge p/f Reward Florida LLC --- File 26-157" body="Aaron, the buyer has defaulted. The terms of the sale are no longer applicable as the March 1, 2026 deadline (Sunday, extended to March 2 at the latest) has passed, and no extension was granted under any circumstances." critical />
              <ArchiveEmail num={12} label="Brian Kowal sends court documents" from="Brian Kowal <briankowal@bkowallaw.com>" to="eden@asapcashhomebuyers.com" date="Mar 19, 2026" attachments={["IMG_1024.PNG"]} />
              <ArchiveEmail num={13} label="Revah files Notice of Appearance & Response in Opposition" from="Brian Kowal <bpkowal@gmail.com>" to="Eden Sade <eden@asapcashhomebuyers.com>" date="Mar 22, 2026" subject="Fwd: SERVICE OF COURT DOCUMENT CASE NUMBER 502025CC018057XXXANB" body={"Eden,\n\nHey, he retained a lawyer.\n\n--- Forwarded e-filing notice ---\nFiling #244315835\nFiler: Philippe Revah (305-315-4605)\nDocuments: Notice of Appearance, Response in Opposition"} critical />
              <ArchiveEmail num={14} label="Eden's prepared Q&A for court hearing" from="Eden Sade <eden@asapcashhomebuyers.com>" to="Brian Kowal <bpkowal@gmail.com>" date="Mar 22, 2026" subject="Re: SERVICE OF COURT DOCUMENT..." body={"Hi Brian,\n\nPlease see the attached document, which outlines the specific questions I would like you to ask me and my prepared responses. I will provide these same answers if the judge addresses me directly."} attachments={["brian_court_script.pdf"]} />
              <ArchiveEmail num={15} label="Case update — Judge transfers to Circuit Court" from="Eden Sade <eden@asapcashhomebuyers.com>" to="RobLongworth@21stmortgage.com" date="Mar 31, 2026" subject="Re: 21st CA$H Program" body={"Hi Rob,\n\nPlease see the details regarding the case we discussed. The sale was originally scheduled for March 1, 2026, but the individual defaulted. According to the attached stipulation, I needed to obtain a judgment; however, the judge ruled that the case must pass to circuit court.\n\nAs a result, the individual will be out in late April, and I expect to be able to sell the property around May 2026."} attachments={["1st Stipulation.pdf", "2nd Stipulation.pdf", "LETTER_OF_INTENT.pdf", "Third & Final Stipulation - 8155 WPB 01 16 26.pdf"]} />
            </div>
          </details>
        </div>

        {/* Current Status */}
        <section id="status" className="mb-12 animate-in" style={{ animationDelay: "0.4s" }}>
          <SectionTitle icon={<svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}>Current Status</SectionTitle>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-amber-900 text-base sm:text-lg mb-2">
                  Case Transferred to Circuit Court
                </h3>
                <ul className="text-amber-800 space-y-2.5 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>March 6, 2026:</strong> Buyer (Melde Rutledge) officially declared in default after missing the March 1/2 closing deadline.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <span><strong>March 22, 2026:</strong> Rutledge retained attorney Philippe Revah, who filed a Response in Opposition.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    <span><strong>March 23, 2026:</strong> Judge Stephens ruled the county court lacked subject matter jurisdiction under FL Statute 83.42(2) — Rutledge's rent payments and 5% deposit ($32,500) placed this outside landlord/tenant law. Ordered transfer to Circuit Court.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>Expected outcome:</strong> Rutledge expected to vacate by late April 2026. Property expected to be available for sale around May 2026 at approximately $650,000.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-[11px] sm:text-xs py-5 sm:py-6 text-center px-4">
        <p className="flex items-center justify-center gap-1.5">
          <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          Confidential — Prepared for Michael Foster | ASAP Cash Home Buyers
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

function SectionTitle({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </h2>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-100 hover-lift">
      <div className="flex items-center gap-1.5 mb-1">
        {icon && <span className="shrink-0">{icon}</span>}
        <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide">
          {label}
        </p>
      </div>
      <p className="text-xs sm:text-sm font-semibold text-slate-800 break-all leading-tight">{value}</p>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-2 border-b border-slate-50 last:border-0">
      <p className="text-xs text-slate-500 uppercase tracking-wide">{label}</p>
      <p className="text-sm text-slate-800 mt-0.5">{value}</p>
    </div>
  );
}

function PartyCard({
  name,
  role,
  email,
  detail,
}: {
  name: string;
  role: string;
  email: string;
  detail: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-5 hover-lift">
      <div className="flex items-center gap-2 mb-1">
        <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <h3 className="font-bold text-slate-900 text-sm">{name}</h3>
      </div>
      <p className="text-xs text-blue-600 mt-0.5">{role}</p>
      <p className="text-[11px] text-slate-400 mt-1 font-mono break-all">{email}</p>
      <p className="text-sm text-slate-600 mt-2 leading-relaxed">{detail}</p>
    </div>
  );
}

interface TimelineEmail {
  from: string;
  to: string;
  cc?: string;
  subject?: string;
  body: string | null;
  attachments?: string[];
}

function TimelineItem({
  date,
  title,
  detail,
  type,
  isLast,
  href,
  docs,
  email,
}: {
  date: string;
  title: string;
  detail: string;
  type: "legal" | "payment" | "title" | "court" | "warning" | "critical";
  isLast?: boolean;
  href?: string;
  docs?: { label: string; href: string }[];
  email?: TimelineEmail;
}) {
  const colors = {
    legal: "bg-purple-500",
    payment: "bg-green-500",
    title: "bg-blue-500",
    court: "bg-orange-500",
    warning: "bg-yellow-500",
    critical: "bg-red-600",
  };

  const typeIcons: Record<string, React.ReactNode> = {
    legal: <svg className="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    payment: <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    court: <svg className="w-3.5 h-3.5 text-orange-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    warning: <svg className="w-3.5 h-3.5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
    critical: <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  };

  return (
    <div className="flex gap-3 sm:gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`w-3 h-3 rounded-full ${colors[type]} mt-1.5 shrink-0 ${type === "critical" ? "pulse-dot" : ""}`}
        />
        {!isLast && <div className="w-px flex-1 bg-slate-200 my-1" />}
      </div>
      <div className="pb-6 min-w-0 flex-1">
        <p className="text-[11px] sm:text-xs text-slate-400 font-mono">{date}</p>
        <h4 className="font-semibold text-slate-800 text-sm mt-0.5 flex items-center gap-1.5">
          <span className="shrink-0 hidden sm:inline-flex">{typeIcons[type]}</span>
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{detail}</p>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-100 transition-all hover:shadow-sm active:scale-95"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View PDF
            </a>
          )}
          {docs && docs.map((doc, i) => (
            <a
              key={i}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-100 transition-all hover:shadow-sm active:scale-95"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {doc.label}
            </a>
          ))}
          {email && (
            <details className="w-full sm:w-auto">
              <summary className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-800 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 transition-all hover:shadow-sm active:scale-95 cursor-pointer select-none">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                View Email
              </summary>
              <div className="mt-2 bg-slate-50 rounded-lg border border-slate-200 overflow-hidden animate-in">
                <div className="p-3 text-xs space-y-1 border-b border-slate-200">
                  <div className="flex gap-1 sm:gap-2"><span className="text-slate-400 font-semibold w-10 sm:w-12 shrink-0 text-right">From:</span><span className="text-slate-700 font-mono break-all text-[11px] sm:text-xs">{email.from}</span></div>
                  <div className="flex gap-1 sm:gap-2"><span className="text-slate-400 font-semibold w-10 sm:w-12 shrink-0 text-right">To:</span><span className="text-slate-700 font-mono break-all text-[11px] sm:text-xs">{email.to}</span></div>
                  {email.cc && <div className="flex gap-1 sm:gap-2"><span className="text-slate-400 font-semibold w-10 sm:w-12 shrink-0 text-right">Cc:</span><span className="text-slate-700 font-mono break-all text-[11px] sm:text-xs">{email.cc}</span></div>}
                  {email.subject && <div className="flex gap-1 sm:gap-2"><span className="text-slate-400 font-semibold w-10 sm:w-12 shrink-0 text-right">Subj:</span><span className="text-slate-700 break-all text-[11px] sm:text-xs">{email.subject}</span></div>}
                </div>
                {email.body ? (
                  <div className="p-3">
                    <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed">{email.body}</p>
                  </div>
                ) : (
                  <div className="p-3">
                    <p className="text-xs sm:text-sm text-slate-400 italic">No text body — attachment only.</p>
                  </div>
                )}
                {email.attachments && email.attachments.length > 0 && (
                  <div className="px-3 pb-3">
                    <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">Attachments</p>
                    <div className="flex flex-wrap gap-1.5">
                      {email.attachments.map((file, i) => (
                        <span key={i} className="inline-flex items-center gap-1 bg-white border border-slate-200 rounded px-2 py-0.5 text-[11px] sm:text-xs text-slate-600">
                          <svg className="w-3 h-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                          {file}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </details>
          )}
        </div>
      </div>
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
    <div className="px-3 sm:px-5 py-4 hover:bg-slate-50/50 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
        <div className="min-w-0">
          <h4 className="font-semibold text-slate-800 text-sm flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            {name}
          </h4>
          <p className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5 truncate">{filename}</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 mt-1 sm:mt-0">
          {href && (
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-100 transition-all hover:shadow-sm active:scale-95">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              View PDF
            </a>
          )}
          <span className="text-[11px] sm:text-xs text-slate-400 whitespace-nowrap">{date}</span>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-slate-500 mt-1.5">{description}</p>
      <p className="text-[11px] sm:text-xs text-slate-400 mt-1 flex items-center gap-1">
        <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
        {source}
      </p>
    </div>
  );
}

function ArchiveEmail({
  num,
  label,
  from,
  to,
  cc,
  date,
  subject,
  body,
  attachments,
  critical,
}: {
  num: number;
  label: string;
  from: string;
  to: string;
  cc?: string;
  date: string;
  subject?: string;
  body?: string;
  attachments?: string[];
  critical?: boolean;
}) {
  return (
    <div className={`p-4 sm:p-6 ${critical ? "bg-red-50/40" : ""}`}>
      {/* Number badge + label */}
      <div className="flex items-start gap-2 sm:gap-3 mb-4">
        <span className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full text-white text-xs font-bold flex items-center justify-center ${critical ? "bg-red-600" : "bg-slate-900"}`}>
          {num}
        </span>
        <h3 className="font-bold text-slate-900 text-sm leading-snug pt-0.5 sm:pt-1">{label}</h3>
      </div>

      {/* Header fields */}
      <div className="bg-slate-50 rounded-lg p-3 sm:p-4 text-xs sm:text-sm space-y-1.5 border border-slate-100 mb-4">
        <div className="flex gap-1 sm:gap-2"><span className="text-slate-400 font-semibold w-12 sm:w-16 text-right shrink-0">From:</span><span className="text-slate-700 font-mono break-all text-[11px] sm:text-xs">{from}</span></div>
        <div className="flex gap-1 sm:gap-2"><span className="text-slate-400 font-semibold w-12 sm:w-16 text-right shrink-0">To:</span><span className="text-slate-700 font-mono break-all text-[11px] sm:text-xs">{to}</span></div>
        {cc && <div className="flex gap-1 sm:gap-2"><span className="text-slate-400 font-semibold w-12 sm:w-16 text-right shrink-0">Cc:</span><span className="text-slate-700 font-mono break-all text-[11px] sm:text-xs">{cc}</span></div>}
        <div className="flex gap-1 sm:gap-2"><span className="text-slate-400 font-semibold w-12 sm:w-16 text-right shrink-0">Date:</span><span className="text-slate-700 font-mono text-[11px] sm:text-xs">{date}</span></div>
        {subject && <div className="flex gap-1 sm:gap-2"><span className="text-slate-400 font-semibold w-12 sm:w-16 text-right shrink-0">Subj:</span><span className="text-slate-700 break-all text-[11px] sm:text-xs">{subject}</span></div>}
      </div>

      {/* Body */}
      {body ? (
        <div className="bg-white border border-slate-100 rounded-lg p-3 sm:p-4 mb-4">
          <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed">{body}</p>
        </div>
      ) : (
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 sm:p-4 mb-4">
          <p className="text-xs sm:text-sm text-slate-400 italic">No text body &mdash; attachment only.</p>
        </div>
      )}

      {/* Attachments */}
      {attachments && attachments.length > 0 && (
        <div>
          <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide font-semibold mb-2 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
            Attachments
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {attachments.map((file, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs text-slate-600">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                {file}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DocketRow({
  din,
  date,
  description,
  notes,
  highlight,
  href,
}: {
  din: string;
  date: string;
  description: string;
  notes?: string;
  highlight?: boolean;
  href?: string;
}) {
  return (
    <tr className={highlight ? "bg-amber-50 hover:bg-amber-100 transition-colors" : "hover:bg-slate-50 transition-colors"}>
      <td className="px-3 sm:px-4 py-2.5 text-slate-500 font-mono text-xs">{din}</td>
      <td className="px-3 sm:px-4 py-2.5 text-slate-600 whitespace-nowrap text-xs">{date}</td>
      <td className={`px-3 sm:px-4 py-2.5 text-xs ${highlight ? "font-bold text-slate-900" : "text-slate-700"}`}>
        {description}
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 ml-2 text-blue-600 hover:text-blue-800 font-medium transition-all hover:underline active:scale-95">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            PDF
          </a>
        )}
      </td>
      <td className="px-3 sm:px-4 py-2.5 text-slate-500 text-xs">{notes}</td>
    </tr>
  );
}

function DocRow({
  name,
  date,
  description,
}: {
  name: string;
  date: string;
  description: string;
}) {
  return (
    <div className="px-5 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="font-semibold text-slate-800 text-sm">{name}</h4>
        <span className="text-xs text-slate-400 whitespace-nowrap">{date}</span>
      </div>
      <p className="text-sm text-slate-500 mt-1">{description}</p>
    </div>
  );
}
