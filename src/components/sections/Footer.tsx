export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-2 py-6 text-sm text-neutral-500">
      <span>© 2025 PonGangaiRaman NKS</span>
      <div className="flex items-center">
        <a
          href="https://www.linkedin.com/in/pongangairaman-nks"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-neutral-300 mx-2">/</span>
        <a
          href="https://github.com/pongangairaman-nks"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
