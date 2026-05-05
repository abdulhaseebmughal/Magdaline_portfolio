import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're in. Check your inbox for a confirmation.");
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-32 md:py-40" style={{ backgroundColor: "#111111", color: "#fff" }}>
      <div className="container-x max-w-4xl text-center reveal">
        <p className="label-eyebrow mb-8 text-accent font-medium tracking-[0.2em]" style={{ fontSize: 12 }}>Strategic Pen</p>
        <h2 className="h2-display mb-10 text-white leading-tight">
          Get sharper at content strategy — <span className="text-white/40 italic">free, every two weeks.</span>
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
          Join 1,500+ readers who get actionable insights on positioning, messaging and turning content into a client-generation machine.
        </p>
        <div className="flex justify-center">
          <a
            href="https://strategicpen.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 px-12 text-[14px] font-semibold uppercase flex items-center justify-center bg-white text-black rounded-sm transition-all hover:scale-105 hover:bg-accent hover:text-white shadow-xl shadow-white/5"
            style={{ letterSpacing: "0.15em" }}
          >
            Join the Newsletter →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
