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
    <section id="newsletter" className="py-24 md:py-[100px]" style={{ backgroundColor: "hsl(var(--accent))", color: "#fff" }}>
      <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 reveal">
          <p className="label-eyebrow mb-6" style={{ color: "rgba(255,255,255,0.85)", fontSize: 11 }}>Strategic Pen</p>
          <h2 className="h2-display" style={{ color: "#fff" }}>
            Get sharper at content strategy — free, every two weeks.
          </h2>
        </div>
        <form onSubmit={onSubmit} className="md:col-span-5 reveal w-full">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@work.com"
              className="flex-1 h-12 px-4 bg-white text-foreground placeholder:text-muted-foreground outline-none"
              style={{ borderRadius: 4, border: "1px solid #fff" }}
            />
            <button
              type="submit"
              className="h-12 px-6 text-[13px] font-semibold uppercase"
              style={{ letterSpacing: "0.1em", backgroundColor: "#fff", color: "hsl(var(--accent))", borderRadius: 4 }}
            >
              Subscribe →
            </button>
          </div>
          <p className="text-[12px] mt-4" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 300 }}>
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
