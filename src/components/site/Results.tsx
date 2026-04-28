const quotes = [
  {
    quote: "Magdaline rewrote my LinkedIn bio and three weeks later I had two qualified discovery calls from inbound. The positioning shift did what a year of posting hadn't.",
    name: "Sarah K.",
    role: "Executive Coach",
  },
  {
    quote: "She found the sentence I'd been circling for a year. Once we used it, the right clients started introducing themselves.",
    name: "Daniel O.",
    role: "Founder, B2B SaaS",
  },
  {
    quote: "Working with Magdaline is less like hiring a writer and more like hiring a strategist who happens to write extremely well.",
    name: "Wanjiru M.",
    role: "Leadership Consultant",
  },
];

const Results = () => {
  return (
    <section className="py-24 md:py-[100px]">
      <div className="container-x">
        <p className="label-eyebrow text-muted-foreground mb-12 reveal">Results</p>
        <div className="flex flex-col">
          {quotes.map((q, i) => (
            <div
              key={q.name}
              className="reveal grid grid-cols-1 md:grid-cols-12 gap-8 py-10"
              style={{ borderTop: i === 0 ? "1px solid hsl(var(--border))" : undefined, borderBottom: "1px solid hsl(var(--border))" }}
            >
              <p className="md:col-span-8 text-[20px] md:text-[22px] leading-snug" style={{ fontWeight: 300 }}>
                <span style={{ color: "hsl(var(--accent))" }}>"</span>
                {q.quote}
              </p>
              <div className="md:col-span-4 md:text-right">
                <p className="text-[14px] font-semibold">{q.name}</p>
                <p className="text-[13px] text-muted-foreground" style={{ fontWeight: 300 }}>{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
