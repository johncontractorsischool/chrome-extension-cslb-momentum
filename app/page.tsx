export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
        <header className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-900">
            CSLB Momentum Checker
          </h1>
          <p className="text-lg text-slate-700">
            This page explains what the extension does, what data it touches, and how it is handled.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">What this extension does</h2>
              <p className="text-slate-700">
                CSLB Momentum Checker lets users look up CSLB license/application records, check for an existing
                Momentum CRM prospect, and create a new prospect if needed.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Data we process</h2>
              <ul className="list-disc space-y-2 pl-5 text-slate-700">
                <li>User inputs: license/application numbers entered into the popup.</li>
                <li>CSLB results: public business/license information returned by the CSLB API.</li>
                <li>Momentum data: prospect data returned from the Momentum API.</li>
                <li>Local settings: the extension may store minimal preferences (e.g., last search type) using Chrome storage.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">What we do not do</h2>
              <ul className="list-disc space-y-2 pl-5 text-slate-700">
                <li>We do not collect, sell, rent, or share personal data with third parties.</li>
                <li>We do not use analytics, tracking pixels, or advertising identifiers.</li>
                <li>We do not read or modify data on other websites.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Where data goes</h2>
              <ul className="list-disc space-y-2 pl-5 text-slate-700">
                <li>
                  Requests are sent only to the declared API host (https://now-certs-api.vercel.app/*) to fetch CSLB data,
                  search Momentum, and create/update prospects.
                </li>
                <li>No other hosts are contacted.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Storage and retention</h2>
              <ul className="list-disc space-y-2 pl-5 text-slate-700">
                <li>Only minimal preferences may be stored locally via Chrome storage.</li>
                <li>We do not maintain server-side logs tied to user identities beyond what the API host may need for basic operation.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Security</h2>
              <ul className="list-disc space-y-2 pl-5 text-slate-700">
                <li>All API calls use HTTPS.</li>
                <li>No remote scripts or external code are executed beyond the packaged extension code.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Children</h2>
              <p className="text-slate-700">The extension is not directed to children under 13.</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Changes</h2>
              <p className="text-slate-700">
                We may update this policy; material changes will be reflected in an updated version of this text.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
              <p className="text-slate-700">For questions, contact: john@contractorsischool.com.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
