import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCaseBySlug, formatDate } from "@/lib/invoices";

export function generateStaticParams() {
  return cases.map((c) => ({ caseName: c.slug }));
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ caseName: string }>;
}) {
  const { caseName } = await params;
  const caseData = getCaseBySlug(caseName);

  if (!caseData) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/Foster"
        className="text-sm text-accent hover:underline mb-4 inline-block"
      >
        &larr; Back to all cases
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-accent mb-2">
          {caseData.title}
        </h1>
        <p className="text-muted">{caseData.description}</p>
        <p className="text-sm text-muted mt-1">
          Parties: {caseData.parties}
        </p>
        {caseData.caseNumber && (
          <p className="text-sm text-muted">
            Case No: {caseData.caseNumber}
          </p>
        )}
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-accent-light mb-4 border-b border-border pb-2">
          Invoices ({caseData.invoices.length})
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-accent/5 text-left">
                <th className="p-3 font-semibold border-b border-border">
                  Invoice #
                </th>
                <th className="p-3 font-semibold border-b border-border">
                  Date
                </th>
                <th className="p-3 font-semibold border-b border-border">
                  Period
                </th>
                <th className="p-3 font-semibold border-b border-border">
                  Notes
                </th>
                <th className="p-3 font-semibold border-b border-border">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {caseData.invoices.map((inv, i) => (
                <tr
                  key={inv.invoiceNumber}
                  className={i % 2 === 0 ? "bg-card-bg" : "bg-gray-50"}
                >
                  <td className="p-3 border-b border-border font-mono font-medium">
                    {inv.invoiceNumber}
                  </td>
                  <td className="p-3 border-b border-border whitespace-nowrap">
                    {formatDate(inv.date)}
                  </td>
                  <td className="p-3 border-b border-border">
                    {inv.periodDescription}
                  </td>
                  <td className="p-3 border-b border-border text-muted text-xs">
                    {inv.notes || "\u2014"}
                  </td>
                  <td className="p-3 border-b border-border">
                    <a
                      href={inv.gmailLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-xs whitespace-nowrap"
                    >
                      View email &rarr;
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {caseData.statements.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-accent-light mb-4 border-b border-border pb-2">
            Account Statements ({caseData.statements.length})
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/5 text-left">
                  <th className="p-3 font-semibold border-b border-border">
                    Statement #
                  </th>
                  <th className="p-3 font-semibold border-b border-border">
                    Date
                  </th>
                  <th className="p-3 font-semibold border-b border-border">
                    Email Subject
                  </th>
                  <th className="p-3 font-semibold border-b border-border">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {caseData.statements.map((stmt, i) => (
                  <tr
                    key={stmt.statementNumber}
                    className={i % 2 === 0 ? "bg-card-bg" : "bg-gray-50"}
                  >
                    <td className="p-3 border-b border-border font-mono font-medium">
                      {stmt.statementNumber}
                    </td>
                    <td className="p-3 border-b border-border whitespace-nowrap">
                      {formatDate(stmt.date)}
                    </td>
                    <td className="p-3 border-b border-border">
                      {stmt.emailSubject}
                    </td>
                    <td className="p-3 border-b border-border">
                      <a
                        href={stmt.gmailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-xs whitespace-nowrap"
                      >
                        View email &rarr;
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
