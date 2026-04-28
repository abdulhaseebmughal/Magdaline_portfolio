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
        <a href="#top" className="flex items-center gap-3 group">
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
            <span className="text-[13px] font-semibold text-foreground">Magdaline Mwihaki</span>
            <span
              className="text-[10px] uppercase text-muted-foreground"
              style={{ letterSpacing: "0.12em", fontWeight: 400 }}
            >
              Nairobi · Content Strategy
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <div
            className="flex items-center"
            style={{
              border: "1px solid hsl(var(--border))",
              borderRadius: 4,
              padding: "4px",
              backgroundColor: "rgba(255,255,255,0.6)",
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-[13px] text-foreground/80 hover:text-foreground transition-colors"
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
            className="block bg-foreground transition-transform"
            style={{
              width: 22,
              height: 1.5,
              transform: open ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block bg-foreground transition-opacity"
            style={{ width: 16, height: 1.5, opacity: open ? 0 : 1 }}
          />
          <span
            className="block bg-foreground transition-transform"
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
                className="flex items-baseline gap-3 py-3 text-[15px] text-foreground"
                style={{ borderBottom: "1px solid hsl(var(--border))" }}
              >
                <span
                  className="text-[11px] tabular-nums"
                  style={{ color: "hsl(var(--accent))", fontWeight: 500 }}
                >
                  {l.num}
                </span>
                {l.label}
              </a>
            ))}
            <span className="flex items-center gap-2 text-[11px] uppercase text-muted-foreground mt-5"
              style={{ letterSpacing: "0.1em" }}>
              <span
                className="inline-flex h-1.5 w-1.5"
                style={{ backgroundColor: "hsl(var(--accent))", borderRadius: 4 }}
              />
              Booking Q3
            </span>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
