export default function TermsPage() {
  return (
    <div className="pt-16 min-h-screen px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-3xl text-bone mb-8">
          TERMS OF SERVICE
        </h1>
        <div className="space-y-4 font-body text-ghost leading-relaxed">
          <p>
            Whole Body Studios (operated by Whole Body Guild LLC) provides
            production, distribution, sync licensing, and artist development
            services. All artist contracts are partnership agreements, not
            employment or ownership transfers.
          </p>
          <p>
            Artists retain 100% of their masters, publishing, and
            intellectual property at all times. Whole Body Studios earns on
            services rendered — never on ownership.
          </p>
          <p>
            These terms will be expanded as partnership agreements are
            finalized. For questions, contact{" "}
            <a
              href="mailto:partnership@wholebody.studios"
              className="text-water hover:underline"
            >
              partnership@wholebody.studios
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
