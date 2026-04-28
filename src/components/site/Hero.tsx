import portrait from "@/assets/magdaline-hero.png";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section 
      id="top" 
      className="pt-32 md:pt-48 pb-20 md:pb-32 relative overflow-hidden min-h-[90vh] flex items-center"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="container-x relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 items-center">
          {/* Main Content Area */}
          <div className="lg:col-span-8 lg:pr-12">
            <p className="label-eyebrow mb-8 reveal stagger-1" style={{ color: "#F26419", fontSize: 11 }}>
              Content Strategist & Positioning Expert
            </p>
            <h1 className="h1-display mb-10 reveal-blur text-white leading-[1.1]">
              Your content is consistent.<br />
              Your clients aren't.<br />
              <span className="text-white/60">Let's fix that.</span>
            </h1>
            
            <div className="grid grid-cols-1 items-start reveal stagger-2">
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg" style={{ fontWeight: 300 }}>
                I help coaches and founders get clients from their content by fixing their message,
                positioning and distribution so the right people find them and buy.
              </p>
            </div>
          </div>

          {/* Image Area - Positioned higher for a more balanced editorial feel */}
          <div className="lg:col-span-4 lg:pl-4 reveal stagger-2 lg:-translate-y-12">
            <div className="relative group mb-10">
              {/* Decorative background element */}
              <div className="absolute -inset-4 border border-white/10 rounded-sm translate-x-2 translate-y-2 pointer-events-none" />
              
              <div className="aspect-[3/4] w-full max-w-[320px] mx-auto lg:ml-auto overflow-hidden relative" style={{ borderRadius: 2, boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}>
                <img
                  src={portrait}
                  alt="Magdaline Mwihaki"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  loading="eager"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:pl-4">
              <div className="flex flex-col gap-4">
                <a href="#newsletter" className="btn-primary w-full max-w-[320px] mx-auto lg:ml-auto">Work With Me</a>
                <a href="#services" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-black w-full max-w-[320px] mx-auto lg:ml-auto">
                  Read Strategic Pen →
                </a>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-white/40 text-center lg:text-right" style={{ fontWeight: 400 }}>
                4.5k+ LinkedIn · 1.5k+ Newsletter · Top 5% Favikon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
