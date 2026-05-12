import { ArrowUpRight, Phone } from "lucide-react";

const Newsletter = () => {
  return (
    <section id="contact" className="py-32 md:py-40" style={{ backgroundColor: "#111111", color: "#fff" }}>
      <div className="container-x max-w-4xl text-center reveal">
        <p className="label-eyebrow mb-8 text-accent font-medium tracking-[0.2em]" style={{ fontSize: 12 }}>Get In Touch</p>
        <h2 className="h2-display mb-10 text-white leading-tight">
          Ready to fix your positioning? <span className="text-white/40 italic">Let's talk.</span>
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
          Whether you need done-for-you content, a strategy session, or just want to connect, reach out and let's get started.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://linkedin.com/in/magdalinemwihaki"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 px-12 text-[14px] font-semibold uppercase flex items-center justify-center gap-3 bg-white text-black rounded-sm transition-all hover:scale-105 hover:bg-accent hover:text-white shadow-xl shadow-white/5"
            style={{ letterSpacing: "0.15em" }}
          >
            Connect on LinkedIn <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+254718773740"
            className="h-16 px-12 text-[14px] font-semibold uppercase flex items-center justify-center gap-3 border border-white/20 text-white rounded-sm transition-all hover:scale-105 hover:bg-white hover:text-black"
            style={{ letterSpacing: "0.15em" }}
          >
            <Phone className="w-4 h-4" /> Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
