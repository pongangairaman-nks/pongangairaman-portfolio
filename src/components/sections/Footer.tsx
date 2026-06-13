export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-2 py-6 text-sm text-neutral-500">
      <span>© 2024 All rights reserved.</span>
      <div className="flex items-center">
        <a href="#" className="hover:text-neutral-900 transition-colors">
          LinkedIn
        </a>
        <span className="text-neutral-300 mx-2">/</span>
        <a href="#" className="hover:text-neutral-900 transition-colors">
          Dribbble
        </a>
        <span className="text-neutral-300 mx-2">/</span>
        <a href="#" className="hover:text-neutral-900 transition-colors">
          Instagram
        </a>
      </div>
    </footer>
  );
}
