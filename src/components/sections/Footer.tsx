export default function Footer() {
  return (
    <footer className="border-t border-neutral-300">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between">
        <span className="text-sm text-neutral-500">© {new Date().getFullYear()} PonGangaiRaman NKS</span>
        <div className="flex items-center text-sm text-neutral-500">
          <a
            href="https://www.linkedin.com/in/pongangairaman-nks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-neutral-400 mx-3">/</span>
          <a
            href="https://github.com/pongangairaman-nks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
