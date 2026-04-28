import portrait from "@/assets/magdaline-hero.png";

const Hero = () => {
  return (
    <section id="top" className="pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="md:col-span-7 reveal">
          <p className="label-eyebrow mb-6" style={{ color: "hsl(var(--accent))", fontSize: 11 }}>
            Content Strategist & Positioning Expert
          </p>
          <h1 className="h1-display mb-6">
            Your content is consistent.<br />
            Your clients aren't. Let's fix that.
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-xl mb-10" style={{ fontWeight: 300 }}>
            I help coaches and founders get clients from their content by fixing their message,
            positioning and distribution so the right people find them and buy.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a href="#newsletter" className="btn-primary">Work With Me</a>
            <a href="#services" className="btn-outline">Read Strategic Pen →</a>
          </div>
          <p className="text-[12px] text-muted-foreground" style={{ fontWeight: 300 }}>
            4,500+ LinkedIn followers · 1,500+ newsletter readers · Top 5% Favikon
          </p>
        </div>
        <div className="md:col-span-5 reveal">
          <div className="aspect-square w-full overflow-hidden" style={{ borderRadius: 4 }}>
            <img
              src={portrait}
              alt="Magdaline Mwihaki, content strategist based in Nairobi"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
