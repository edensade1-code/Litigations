export interface Invoice {
  invoiceNumber: string;
  filename: string;
  date: string; // invoice date on the PDF
  periodDescription: string; // e.g. "Services rendered in January 2025"
  emailDate: string; // when the email was sent
  emailSubject: string;
  gmailMessageId: string;
  gmailLink: string;
  notes?: string;
}

export interface AccountStatement {
  statementNumber: string;
  filename: string;
  date: string;
  emailDate: string;
  emailSubject: string;
  gmailMessageId: string;
  gmailLink: string;
}

export interface CaseData {
  slug: string;
  title: string;
  description: string;
  parties: string;
  caseNumber?: string;
  invoices: Invoice[];
  statements: AccountStatement[];
}

export const cases: CaseData[] = [
  {
    slug: "Sade-v-Shahmram",
    title: "Sade v. Shahmram",
    description: "Arbitration (AAA Case 01-23-0003-6486) and related state court litigation",
    parties: "Eden Sade / Dor Sade / Red Sunshine Estates, LLC v. Rami Shahmram",
    caseNumber: "AAA Case 01-23-0003-6486",
    invoices: [
      {
        invoiceNumber: "02157",
        filename: "invoice_02157 Sade adv. Shahmram (2025 02 15).pdf",
        date: "2025-02-15",
        periodDescription: "Services rendered in January 2025",
        emailDate: "2025-02-24",
        emailSubject: "Invoice for January Time",
        gmailMessageId: "195380c4dd836fb7",
        gmailLink: "https://mail.google.com/mail/u/0/#all/195380c4dd836fb7",
        notes: "Retainer applied, leaving balance of $2,109.50",
      },
      {
        invoiceNumber: "02241",
        filename: "invoice_02241 Sade adv. Shahmram (2025 03 23).pdf",
        date: "2025-03-23",
        periodDescription: "Services rendered in February 2025",
        emailDate: "2025-03-24",
        emailSubject: "Invoice for February Time",
        gmailMessageId: "195c8ac02218f0b4",
        gmailLink: "https://mail.google.com/mail/u/0/#all/195c8ac02218f0b4",
      },
      {
        invoiceNumber: "02277",
        filename: "invoice_02277 Sade + Reward adv. Shahmram (2025 04 16).pdf",
        date: "2025-04-16",
        periodDescription: "Services rendered in March 2025",
        emailDate: "2025-04-23",
        emailSubject: "Invoice for March Time",
        gmailMessageId: "19662d56a9fdb86f",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19662d56a9fdb86f",
        notes: "10% discount applied",
      },
      {
        invoiceNumber: "02316",
        filename: "invoice_02316 Sade adv. Shahmram (2025 05 18).pdf",
        date: "2025-05-18",
        periodDescription: "Services rendered in May 2025",
        emailDate: "2025-06-18",
        emailSubject: "Invoices",
        gmailMessageId: "197836b664d93a65",
        gmailLink: "https://mail.google.com/mail/u/0/#all/197836b664d93a65",
        notes: "Last month's invoice (relates to arbitration and state court case against Rami)",
      },
      {
        invoiceNumber: "02379",
        filename: "invoice_02379 Shahmram adv. Sade (2025 06 14).pdf",
        date: "2025-06-14",
        periodDescription: "Services rendered in June 2025",
        emailDate: "2025-06-18",
        emailSubject: "Invoices",
        gmailMessageId: "197836b664d93a65",
        gmailLink: "https://mail.google.com/mail/u/0/#all/197836b664d93a65",
        notes: "This month's invoice (relates to arbitration and state court case against Rami)",
      },
      {
        invoiceNumber: "02419",
        filename: "invoice_02419 Sade adv. Shahmram (2025 07 09).pdf",
        date: "2025-07-09",
        periodDescription: "Services rendered in June 2025",
        emailDate: "2025-07-09",
        emailSubject: "Update + Invoices",
        gmailMessageId: "197efa63a080b7b9",
        gmailLink: "https://mail.google.com/mail/u/0/#all/197efa63a080b7b9",
      },
      {
        invoiceNumber: "02488",
        filename: "invoice_02488 Shahmram adv. Sade + Reward (2025 08 16).pdf",
        date: "2025-08-16",
        periodDescription: "Services rendered in July 2025",
        emailDate: "2025-08-21",
        emailSubject: "Case Update + Invoices",
        gmailMessageId: "198cd1ba501c36a7",
        gmailLink: "https://mail.google.com/mail/u/0/#all/198cd1ba501c36a7",
      },
      {
        invoiceNumber: "02542",
        filename: "invoice_02542 Shahmram adv. Sade (2025 09 24).pdf",
        date: "2025-09-24",
        periodDescription: "Services rendered in August 2025",
        emailDate: "2025-09-26",
        emailSubject: "Update + Invoices",
        gmailMessageId: "199863c433d7e32d",
        gmailLink: "https://mail.google.com/mail/u/0/#all/199863c433d7e32d",
        notes: "10% discount applied to this invoice",
      },
      {
        invoiceNumber: "02586",
        filename: "invoice_02586 Sade adv. Shahmram (2025 10 11).pdf",
        date: "2025-10-11",
        periodDescription: "Services rendered in September 2025",
        emailDate: "2025-10-21",
        emailSubject: "Invoices for Services Rendered - September",
        gmailMessageId: "19a08d3d64be314c",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19a08d3d64be314c",
      },
      {
        invoiceNumber: "02643",
        filename: "invoice_02643 Sade adv. Shahmram (2025 11 22).pdf",
        date: "2025-11-22",
        periodDescription: "Services rendered in October 2025",
        emailDate: "2025-11-22",
        emailSubject: "Invoice for Services in October + Account Statement",
        gmailMessageId: "19aace3c7f156121",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19aace3c7f156121",
      },
      {
        invoiceNumber: "02679",
        filename: "invoice_02679 Sade adv. Shahmram (2025 12 13).pdf",
        date: "2025-12-13",
        periodDescription: "Services rendered in November 2025",
        emailDate: "2025-12-13",
        emailSubject: "Invoices for Services Rendered: November",
        gmailMessageId: "19b18f638b28d482",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19b18f638b28d482",
      },
      {
        invoiceNumber: "02717",
        filename: "invoice_02717 Sade adv. Shahmram (2026 01 17).pdf",
        date: "2026-01-17",
        periodDescription: "Services rendered in December 2025",
        emailDate: "2026-01-17",
        emailSubject: "Invoices for Services Rendered: December",
        gmailMessageId: "19bcdf9132ab2f90",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19bcdf9132ab2f90",
      },
      {
        invoiceNumber: "02759",
        filename: "invoice_02759 Sade adv. Shahmram (2026 02 14).pdf",
        date: "2026-02-14",
        periodDescription: "Services rendered in January 2026",
        emailDate: "2026-02-17",
        emailSubject: "Invoices + Budget for Appeal",
        gmailMessageId: "19c6c15763b04cfd",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19c6c15763b04cfd",
      },
      {
        invoiceNumber: "02789",
        filename: "invoice_02789 Sade adv. Shahmram (2026 03 18).pdf",
        date: "2026-03-18",
        periodDescription: "Services rendered in February 2026",
        emailDate: "2026-03-18",
        emailSubject: "Shahmram Update, Invoices, and Outstanding Receivable",
        gmailMessageId: "19d0247093057c50",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19d0247093057c50",
      },
    ],
    statements: [
      {
        statementNumber: "00139",
        filename: "Sade account_statement_00139 (2025 06 28).pdf",
        date: "2025-06-28",
        emailDate: "2025-06-28",
        emailSubject: "(Statement only)",
        gmailMessageId: "197b713c9ba0cb4a",
        gmailLink: "https://mail.google.com/mail/u/0/#all/197b713c9ba0cb4a",
      },
      {
        statementNumber: "00140",
        filename: "Sade account_statement_00140 (2025 07 09).pdf",
        date: "2025-07-09",
        emailDate: "2025-07-09",
        emailSubject: "Update + Invoices",
        gmailMessageId: "197efa63a080b7b9",
        gmailLink: "https://mail.google.com/mail/u/0/#all/197efa63a080b7b9",
      },
      {
        statementNumber: "00147",
        filename: "Sade account_statement_00147 (2025 08 26).pdf",
        date: "2025-08-26",
        emailDate: "2025-08-26",
        emailSubject: "Account Statement",
        gmailMessageId: "198e8bdb9d165fca",
        gmailLink: "https://mail.google.com/mail/u/0/#all/198e8bdb9d165fca",
      },
      {
        statementNumber: "00153",
        filename: "Sade account_statement_00153 (2025 10 21).pdf",
        date: "2025-10-21",
        emailDate: "2025-10-21",
        emailSubject: "Invoices for Services Rendered - September",
        gmailMessageId: "19a08d3d64be314c",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19a08d3d64be314c",
      },
      {
        statementNumber: "00157",
        filename: "Sade account_statement_00157 (2025 11 22).pdf",
        date: "2025-11-22",
        emailDate: "2025-11-22",
        emailSubject: "Invoice for Services in October + Account Statement",
        gmailMessageId: "19aace3c7f156121",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19aace3c7f156121",
      },
      {
        statementNumber: "00162",
        filename: "Sade account_statement_00162 (2026 01 17).pdf",
        date: "2026-01-17",
        emailDate: "2026-01-17",
        emailSubject: "Invoices for Services Rendered: December",
        gmailMessageId: "19bcdf9132ab2f90",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19bcdf9132ab2f90",
      },
      {
        statementNumber: "00170",
        filename: "Sade account_statement_00170 (2026 03 18).pdf",
        date: "2026-03-18",
        emailDate: "2026-03-18",
        emailSubject: "Shahmram Update, Invoices, and Outstanding Receivable",
        gmailMessageId: "19d0247093057c50",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19d0247093057c50",
      },
      {
        statementNumber: "00175",
        filename: "Sade account_statement_00175 (2026 03 26).pdf",
        date: "2026-03-26",
        emailDate: "2026-03-26",
        emailSubject: "Updated Statement",
        gmailMessageId: "19d2b61ef90b9c5b",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19d2b61ef90b9c5b",
      },
    ],
  },
  {
    slug: "Reward-v-Fleming",
    title: "Reward Florida v. Fleming",
    description: "State court litigation - Reward Florida against Fleming",
    parties: "Reward Florida LLC v. Fleming",
    invoices: [
      {
        invoiceNumber: "02420",
        filename: "invoice_02420 Reward Florida General (2025 07 09).pdf",
        date: "2025-07-09",
        periodDescription: "Services rendered in June 2025",
        emailDate: "2025-07-09",
        emailSubject: "Update + Invoices",
        gmailMessageId: "197efa63a080b7b9",
        gmailLink: "https://mail.google.com/mail/u/0/#all/197efa63a080b7b9",
      },
      {
        invoiceNumber: "02487",
        filename: "invoice_02487 Reward adv. Fleming (2025 08 16).pdf",
        date: "2025-08-16",
        periodDescription: "Services rendered in July 2025",
        emailDate: "2025-08-21",
        emailSubject: "Case Update + Invoices",
        gmailMessageId: "198cd1ba501c36a7",
        gmailLink: "https://mail.google.com/mail/u/0/#all/198cd1ba501c36a7",
      },
      {
        invoiceNumber: "02541",
        filename: "invoice_02541 Sade adv. Fleming (2025 09 24).pdf",
        date: "2025-09-24",
        periodDescription: "Services rendered in August 2025",
        emailDate: "2025-09-26",
        emailSubject: "Update + Invoices",
        gmailMessageId: "199863c433d7e32d",
        gmailLink: "https://mail.google.com/mail/u/0/#all/199863c433d7e32d",
      },
      {
        invoiceNumber: "02585",
        filename: "invoice_02585 Reward Florida adv. Fleming (2025 10 11).pdf",
        date: "2025-10-11",
        periodDescription: "Services rendered in September 2025",
        emailDate: "2025-10-21",
        emailSubject: "Invoices for Services Rendered - September",
        gmailMessageId: "19a08d3d64be314c",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19a08d3d64be314c",
      },
      {
        invoiceNumber: "02681",
        filename: "invoice_02681 Reward Florida adv. Fleming (2025 12 13).pdf",
        date: "2025-12-13",
        periodDescription: "Services rendered in November 2025",
        emailDate: "2025-12-13",
        emailSubject: "Invoices for Services Rendered: November",
        gmailMessageId: "19b18f638b28d482",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19b18f638b28d482",
      },
      {
        invoiceNumber: "02716",
        filename: "invoice_02716 Sade adv.. Fleming (2026 01 17).pdf",
        date: "2026-01-17",
        periodDescription: "Services rendered in December 2025",
        emailDate: "2026-01-17",
        emailSubject: "Invoices for Services Rendered: December",
        gmailMessageId: "19bcdf9132ab2f90",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19bcdf9132ab2f90",
      },
      {
        invoiceNumber: "02760",
        filename: "invoice_02760 Reward adv. Fleming (2026 02 14).pdf",
        date: "2026-02-14",
        periodDescription: "Services rendered in January 2026",
        emailDate: "2026-02-17",
        emailSubject: "Invoices + Budget for Appeal",
        gmailMessageId: "19c6c15763b04cfd",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19c6c15763b04cfd",
      },
      {
        invoiceNumber: "02790",
        filename: "invoice_02790 Sade adv. Fleming (2026 03 18).pdf",
        date: "2026-03-18",
        periodDescription: "Services rendered in February 2026",
        emailDate: "2026-03-18",
        emailSubject: "Shahmram Update, Invoices, and Outstanding Receivable",
        gmailMessageId: "19d0247093057c50",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19d0247093057c50",
      },
    ],
    statements: [],
  },
  {
    slug: "General-Matters",
    title: "General Matters",
    description: "Miscellaneous business and real estate matters (Rabena closing, etc.)",
    parties: "Eden Sade - General Business + Real Estate",
    invoices: [
      {
        invoiceNumber: "02300",
        filename: "invoice_02300 Sade General Matters 2025 05 09.pdf",
        date: "2025-05-09",
        periodDescription: "Rabena closing and general matters",
        emailDate: "2025-05-09",
        emailSubject: "Rabena Invoice",
        gmailMessageId: "196b67418368d7f9",
        gmailLink: "https://mail.google.com/mail/u/0/#all/196b67418368d7f9",
        notes: "Opening of the 'general' file for matters like Rabena",
      },
      {
        invoiceNumber: "02380",
        filename: "invoice_02380 Sade General Matters (2025 06 14).pdf",
        date: "2025-06-14",
        periodDescription: "General matters - June 2025",
        emailDate: "2025-06-18",
        emailSubject: "Invoices",
        gmailMessageId: "197836b664d93a65",
        gmailLink: "https://mail.google.com/mail/u/0/#all/197836b664d93a65",
      },
      {
        invoiceNumber: "02584",
        filename: "invoice_02584 Sade General Business Matters (2025 10 11).pdf",
        date: "2025-10-11",
        periodDescription: "General business matters - September 2025",
        emailDate: "2025-10-21",
        emailSubject: "Invoices for Services Rendered - September",
        gmailMessageId: "19a08d3d64be314c",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19a08d3d64be314c",
      },
      {
        invoiceNumber: "02680",
        filename: "invoice_02680 Sade - Miscellaneous Business + Real Estate Matters (2025 12 13).pdf",
        date: "2025-12-13",
        periodDescription: "Miscellaneous business + real estate - November 2025",
        emailDate: "2025-12-13",
        emailSubject: "Invoices for Services Rendered: November",
        gmailMessageId: "19b18f638b28d482",
        gmailLink: "https://mail.google.com/mail/u/0/#all/19b18f638b28d482",
        notes: "$0-billed, provided for records only",
      },
    ],
    statements: [],
  },
];

export function getCaseBySlug(slug: string): CaseData | undefined {
  return cases.find((c) => c.slug === slug);
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
