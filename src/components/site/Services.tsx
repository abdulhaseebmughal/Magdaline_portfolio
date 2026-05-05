import ParallaxText from "./ParallaxText";

const services = [
  {
    title: "Done-For-You Content",
    desc: "Monthly retainer. I run your LinkedIn and newsletter end-to-end — strategy, writing, distribution.",
  },
  {
    title: "Strategic Pen Newsletter",
    desc: "Free, every two weeks. Sharper thinking on positioning, messaging and getting clients from content.",
  },
  {
    title: "Gumroad Course",
    desc: "The exact framework I use to turn a quiet LinkedIn presence into a steady inbound pipeline.",
  },
  {
    title: "1:1 Strategy Session",
    desc: "90 minutes. We diagnose the message, fix the positioning, and leave with a 30-day plan.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-[100px] relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <ParallaxText text="STRATEGY CONTENT RESULTS" speed={0.2} direction="right" top="10%" />
      <ParallaxText text="POSITIONING MESSAGE GROWTH" speed={0.15} direction="left" top="70%" />
      <div className="container-x">
        <p className="label-eyebrow text-muted-foreground mb-10 reveal">Offers</p>
        <h2 className="h2-display mb-14 max-w-2xl reveal">Four ways to work together.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} stagger-${(i % 2) + 1} p-12 transition-all duration-500 hover:shadow-xl hover:translate-y-[-4px]`}
              style={{
                backgroundColor: "#F9F7F4",
                border: "1px solid hsl(var(--border))",
                borderRadius: 2,
              }}
            >
              <span className="text-[14px] font-medium text-accent/60 mb-6 block tracking-widest uppercase">0{i + 1}</span>
              <h3 className="text-[24px] font-semibold mb-4 tracking-tight">{s.title}</h3>
              <p className="text-foreground/70 mb-10 leading-relaxed" style={{ fontWeight: 300, fontSize: "15px" }}>{s.desc}</p>
              <a
                href="#newsletter"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider group"
                style={{ color: "hsl(var(--accent))" }}
              >
                Learn more 
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
