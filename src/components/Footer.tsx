import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-mercury bg-void/80 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-3 text-center">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 font-mono text-xs text-ghost">
            <Link
              href="/legal/privacy"
              className="hover:text-water transition-colors duration-200"
            >
              Privacy
            </Link>
            <span className="text-mercury">|</span>
            <Link
              href="/legal/terms"
              className="hover:text-water transition-colors duration-200"
            >
              Terms
            </Link>
            <span className="text-mercury">|</span>
            <Link
              href="/contact"
              className="hover:text-water transition-colors duration-200"
            >
              Contact
            </Link>
            <span className="text-mercury">|</span>
            <a
              href="https://wholebody.earth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-water transition-colors duration-200"
            >
              wholebody.earth
            </a>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs text-ghost/60">
            wholebody.studios · Copyright © 2026 Whole Body Guild LLC
          </p>

          {/* Privacy stance */}
          <p className="font-mono text-xs text-ghost/40">
            This site does not track you. We do not sell your data. We
            protect it.
          </p>
        </div>
      </div>
    </footer>
  );
}
