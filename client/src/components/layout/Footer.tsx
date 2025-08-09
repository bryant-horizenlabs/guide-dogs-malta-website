import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="text-white w-8 h-8" />
          <span className="font-semibold text-white">Guide Dogs Malta</span>
        </div>
        <div className="text-sm text-white/90">
          © {new Date().getFullYear()} Guide Dogs Malta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}