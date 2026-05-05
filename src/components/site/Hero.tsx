import portrait from "@/assets/magdaline-hero.png";
import heroBg from "@/assets/hero-bg.png";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="top" 
      className="pt-32 md:pt-48 pb-20 md:pb-32 relative overflow-hidden min-h-[90vh] flex items-center"
      style={{ 
        backgroundImage: `url(https://i.pinimg.com/736x/14/19/f3/1419f36644d5dcf24cbef95626c98710.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

      <div className="container-x relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 items-center">
          {/* Main Content Area */}
          <div className="lg:col-span-8 lg:pr-12">
            <p className="label-eyebrow mb-10 reveal stagger-1 text-accent font-black tracking-[0.3em]" style={{ fontSize: 16, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Content Strategist & Positioning Expert
            </p>
            <h1 className="h1-display mb-12 reveal-blur text-white leading-[1.05] tracking-tight">
              Your content is consistent.<br />
              Your clients aren't.<br />
              <span className="text-white/40 italic">Let's fix that.</span>
            </h1>
            
            <div className="reveal stagger-2 max-w-xl">
              <p className="text-lg md:text-2xl text-white leading-relaxed mb-12" style={{ fontWeight: 300 }}>
                I help coaches and founders get clients from their content by fixing their message,
                positioning and distribution so the right people find them and buy.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#newsletter" className="btn-primary px-10 h-14 rounded-sm shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] flex items-center gap-2">
                  Work With Me <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#services" className="btn-outline !border-white/20 !text-white hover:!bg-white hover:!text-black px-10 h-14 rounded-sm transition-all flex items-center gap-2">
                  Read Strategic Pen <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Image Area */}
          <div className="lg:col-span-4 lg:pl-8 reveal stagger-3">
            <div className="relative group">
              {/* Decorative accent element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-accent/30 pointer-events-none" />
              
              <div className="h-[480px] md:h-[560px] w-full max-w-[400px] mx-auto lg:ml-auto overflow-hidden relative shadow-2xl" style={{ borderRadius: 2 }}>
                <img
                  src={portrait}
                  alt="Magdaline Mwihaki"
                  className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              
              <div className="mt-8 flex flex-col items-center lg:items-end gap-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40" style={{ fontWeight: 500 }}>
                  Featured On
                </p>
                <div className="flex gap-4 opacity-50 grayscale contrast-150">
                  <span className="text-white font-bold text-xs tracking-tighter italic">Favikon Top 5%</span>
                  <span className="text-white font-bold text-xs tracking-tighter">LinkedIn Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
