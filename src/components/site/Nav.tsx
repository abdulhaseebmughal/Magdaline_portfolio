import { useEffect, useState } from "react";
import logo from "@/assets/MM-logo.png";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-[#F9F7F4] shadow-sm" : "bg-transparent"
      }`}
      style={{
        borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
      }}
    >
      <div className="container-x flex items-center justify-between h-20 md:h-24">
        {/* Monogram mark */}
        <a href="#top" className="flex items-center gap-4 group reveal-blur">
          <img 
            src={logo} 
            alt="Magdaline logo" 
            className={`h-10 md:h-12 w-auto object-contain transition-all duration-700 group-hover:scale-105 ${scrolled ? "grayscale brightness-0" : ""}`}
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className={`text-[13px] font-semibold uppercase tracking-[0.2em] transition-colors duration-700 ${scrolled ? "text-foreground" : "text-white"}`}>Magdaline Mwihaki</span>
            <span
              className={`text-[9px] uppercase mt-1 transition-colors duration-700 ${scrolled ? "text-muted-foreground" : "text-white/40"}`}
              style={{ letterSpacing: "0.2em", fontWeight: 500 }}
            >
              Nairobi · Content Strategy
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <div
            className="flex items-center transition-all duration-500"
            style={{
              border: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
              borderRadius: 2,
              padding: "6px 4px",
              backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
              backdropFilter: scrolled ? "blur(20px)" : "none",
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-5 py-2 text-[13px] font-medium transition-all duration-700 rounded-sm ${scrolled ? "text-foreground/70 hover:text-foreground hover:bg-white" : "text-white/70 hover:text-white hover:bg-white/10"}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
        >
          <span
            className={`block transition-all duration-700 ${scrolled ? "bg-foreground" : "bg-white"}`}
            style={{
              width: 22,
              height: 1.5,
              transform: open ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className={`block transition-all duration-700 ${scrolled ? "bg-foreground" : "bg-white"}`}
            style={{ width: 16, height: 1.5, opacity: open ? 0 : 1 }}
          />
          <span
            className={`block transition-all duration-700 ${scrolled ? "bg-foreground" : "bg-white"}`}
            style={{
              width: 22,
              height: 1.5,
              transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-[#F9F7F4]"
          style={{ borderTop: "1px solid hsl(var(--border))" }}
        >
          <nav className="container-x py-6 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-foreground"
                style={{ borderBottom: "1px solid hsl(var(--border))" }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
