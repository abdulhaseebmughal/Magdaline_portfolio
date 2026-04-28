const items = [
  {
    title: "Content Strategy",
    desc: "A documented system for what to say, where to say it, and why it earns attention from buyers — not just readers.",
  },
  {
    title: "Done-For-You Writing",
    desc: "LinkedIn posts, newsletters and long-form pieces written in your voice, engineered to move pipeline.",
  },
  {
    title: "Positioning & Messaging",
    desc: "The sentence that makes the right person stop scrolling — and the wrong person keep going.",
  },
];

const WhatIDo = () => {
  return (
    <section id="work" className="py-24 md:py-[100px]">
      <div className="container-x">
        <p className="label-eyebrow text-muted-foreground mb-10 reveal">The Work</p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20">
          <div className="md:col-span-7 reveal">
            <h2 className="h2-display">
              Most people have a content problem.<br />
              You actually have a positioning problem.
            </h2>
          </div>
          <div className="md:col-span-5 reveal">
            <p className="text-foreground/75" style={{ fontWeight: 300 }}>
              I don't start with calendars or hooks. I start with the diagnosis: who you're for,
              what you actually sell, and the gap between how you describe it and how they search for it.
              Once that's clear, the content writes itself — and the right buyers show up.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {items.map((it) => (
            <div key={it.title} className="reveal">
              <h3 className="text-[18px] font-semibold mb-3">{it.title}</h3>
              <p className="text-foreground/70 text-[15px]" style={{ fontWeight: 300 }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
