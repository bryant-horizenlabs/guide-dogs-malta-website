import { Link, useLocation } from "wouter";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/volunteer", label: "Volunteer" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-sm"
          : "bg-white"
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="text-primary w-8 h-8 md:w-10 md:h-10" />
          <span className="font-semibold text-base md:text-lg">Guide Dogs Malta</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/donate">
            <Button variant="secondary">Donate Now</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-lg font-medium py-2 transition-colors hover:text-primary",
                  location === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
              <Button variant="secondary" className="w-full text-lg py-6">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}