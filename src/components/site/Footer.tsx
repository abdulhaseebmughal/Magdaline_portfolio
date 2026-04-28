const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid hsl(var(--border))" }}>
      <div className="container-x py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-[12px] text-muted-foreground" style={{ fontWeight: 300 }}>
        <div>
          <p className="font-semibold text-foreground uppercase" style={{ letterSpacing: "0.08em" }}>Magdaline Mwihaki</p>
          <p className="mt-1">Content strategy & positioning. Nairobi.</p>
        </div>
        <div className="flex md:justify-center gap-6">
          <a href="#newsletter" className="nav-link text-[12px]">Newsletter</a>
          <a href="#services" className="nav-link text-[12px]">Gumroad</a>
          <a href="#" className="nav-link text-[12px]">LinkedIn</a>
        </div>
        <div className="md:text-right">© {new Date().getFullYear()} Magdaline Mwihaki</div>
      </div>
    </footer>
  );
};

export default Footer;
