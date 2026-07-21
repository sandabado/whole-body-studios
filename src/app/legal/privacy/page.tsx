export default function PrivacyPage() {
  return (
    <div className="pt-16 min-h-screen px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-3xl text-bone mb-8">
          PRIVACY POLICY
        </h1>
        <div className="space-y-4 font-body text-ghost leading-relaxed">
          <p>
            Whole Body Studios does not track you. We do not sell your data.
            We protect it.
          </p>
          <p>
            Information submitted through our partnership application and
            contact forms is used solely to evaluate applications and
            respond to inquiries. We do not share it with third parties for
            marketing purposes.
          </p>
          <p>
            For questions about your data, contact{" "}
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
