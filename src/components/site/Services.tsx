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
    <section id="services" className="py-24 md:py-[100px]" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-x">
        <p className="label-eyebrow text-muted-foreground mb-10 reveal">Offers</p>
        <h2 className="h2-display mb-14 max-w-2xl reveal">Four ways to work together.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal p-10 bg-background"
              style={{
                border: "1px solid hsl(var(--border))",
                borderTop: "3px solid hsl(var(--accent))",
                borderRadius: 4,
              }}
            >
              <h3 className="text-[20px] font-semibold mb-3">{s.title}</h3>
              <p className="text-foreground/70 mb-8" style={{ fontWeight: 300 }}>{s.desc}</p>
              <a
                href="#newsletter"
                className="text-[13px] font-semibold uppercase"
                style={{ color: "hsl(var(--accent))", letterSpacing: "0.1em" }}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
