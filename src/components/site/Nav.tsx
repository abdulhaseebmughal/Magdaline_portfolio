import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Newsletter", href: "#newsletter" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F9F7F4]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{
        borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
      }}
    >
      <div className="container-x flex items-center justify-between h-16">
        {/* Monogram mark */}
        <a href="#top" className="flex items-center gap-3 group reveal-blur">
          <span
            className="flex items-center justify-center text-[12px] font-semibold text-white"
            style={{
              backgroundColor: "hsl(var(--accent))",
              width: 28,
              height: 28,
              borderRadius: 4,
              letterSpacing: "0.02em",
            }}
          >
            MM
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className={`text-[13px] font-semibold transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>Magdaline Mwihaki</span>
            <span
              className={`text-[10px] uppercase transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/60"}`}
              style={{ letterSpacing: "0.12em", fontWeight: 400 }}
            >
              Nairobi · Content Strategy
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <div
            className="flex items-center transition-all duration-300"
            style={{
              border: scrolled ? "1px solid hsl(var(--border))" : "1px solid rgba(255,255,255,0.2)",
              borderRadius: 4,
              padding: "4px",
              backgroundColor: scrolled ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.2)",
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 text-[13px] transition-colors duration-300 ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"}`}
                style={{ borderRadius: 2, fontWeight: 400 }}
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
            className={`block transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"}`}
            style={{
              width: 22,
              height: 1.5,
              transform: open ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className={`block transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"}`}
            style={{ width: 16, height: 1.5, opacity: open ? 0 : 1 }}
          />
          <span
            className={`block transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"}`}
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
