import logo from "@/assets/MM-logo.png";

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid hsl(var(--border))" }}>
      <div className="container-x py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-muted-foreground" style={{ fontWeight: 300 }}>
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt="MM logo" 
            className="h-6 w-auto object-contain grayscale brightness-0" 
          />
          <p className="font-semibold text-foreground uppercase tracking-[0.2em] text-[13px]">Magdaline Mwihaki</p>
          <span className="hidden md:block w-px h-3 bg-border" />
          <p className="uppercase tracking-widest text-[10px]">Content strategy & positioning</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#newsletter" className="hover:text-accent transition-colors">Newsletter</a>
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-accent transition-colors">LinkedIn</a>
        </div>

        <div className="flex items-center gap-4">
          <p>© {new Date().getFullYear()}</p>
          <span className="hidden md:block w-px h-3 bg-border" />
          <p>
            Build by{" "}
            <a 
              href="https://www.linkedin.com/in/abdul-haseeb-developer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-accent transition-colors underline underline-offset-4"
            >
              Abdul Haseeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
