import portrait from "@/assets/magdaline-about.png";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-[100px]" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-7">
          <p className="label-eyebrow text-muted-foreground mb-8 reveal stagger-1">About Magdaline</p>
          <h2 className="h2-display mb-8 reveal-blur">
            A strategist first. A writer second.
          </h2>
          <p className="text-foreground/80 mb-6 reveal stagger-2" style={{ fontWeight: 300 }}>
            I'm a content strategist based in Nairobi, obsessed with one thing: making sure the
            right people find you, understand you, and pay you. Most content advice optimises for
            attention. I optimise for clients.
          </p>
          <p className="text-foreground/70 mb-10 reveal stagger-3" style={{ fontWeight: 300 }}>
            Over the last few years I've helped coaches, consultants and founders turn quiet
            audiences into inbound pipelines — through Strategic Pen, my newsletter, and through
            done-for-you work with a small roster of clients.
          </p>
          <div className="grid grid-cols-2 gap-6 max-w-md">
            <div style={{ borderTop: "1px solid hsl(var(--border))" }} className="pt-4 reveal stagger-3">
              <p className="text-[28px] font-semibold leading-none mb-2">1,500+</p>
              <p className="text-[12px] uppercase text-muted-foreground" style={{ letterSpacing: "0.08em" }}>Newsletter Readers</p>
            </div>
            <div style={{ borderTop: "1px solid hsl(var(--border))" }} className="pt-4 reveal stagger-4">
              <p className="text-[28px] font-semibold leading-none mb-2">4,500+</p>
              <p className="text-[12px] uppercase text-muted-foreground" style={{ letterSpacing: "0.08em" }}>LinkedIn Followers</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 reveal">
          <div className="aspect-square w-full max-w-sm md:ml-auto overflow-hidden" style={{ borderRadius: 4 }}>
            <img src={portrait} alt="Portrait of Magdaline Mwihaki" className="w-full h-full object-cover object-top" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
