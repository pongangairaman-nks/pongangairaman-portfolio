export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      <div className="max-w-4xl mx-auto px-8 py-8 flex items-center justify-between">
        <span className="text-sm text-neutral-500">© 2025 PonGangaiRaman NKS</span>
        <div className="flex items-center text-sm text-neutral-500">
          <a
            href="https://www.linkedin.com/in/pongangairaman-nks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-neutral-700 mx-2">/</span>
          <a
            href="https://github.com/pongangairaman-nks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
