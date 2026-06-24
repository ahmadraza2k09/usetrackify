import { useEffect, useRef, useState } from "react";
import { Brain, Calculator, Share2, BarChart3, PieChart, Moon, Wallet, Globe } from "lucide-react";

const FONT = "'Poppins', sans-serif";

const features = [
  { icon: Brain, title: "AI Integrated", desc: "Smart AI assistant that learns your spending habits and provides personalized recommendations." },
  { icon: Calculator, title: "Built-in Calculator", desc: "Perform quick financial calculations directly inside the app without switching context." },
  { icon: Share2, title: "Summary Sharing", desc: "Generate and share beautiful financial reports with teammates or advisors instantly." },
  { icon: BarChart3, title: "Analytics", desc: "Understand spending patterns with powerful visual insights and trend detection." },
  { icon: PieChart, title: "Pie Graphs", desc: "Visualize exactly where your money goes with interactive real-time pie charts." },
  { icon: Moon, title: "Dark Mode", desc: "A comfortable premium interface designed for focused financial work, day or night." },
  { icon: Wallet, title: "Multiple Budgets", desc: "Create and manage separate budgets for different financial goals or life stages." },
  { icon: Globe, title: "Multiple Currencies", desc: "Track finances across global currencies with live exchange rate support." },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f4fdf9 100%)", scrollMarginTop: "72px" }}
    >
      <div className="absolute pointer-events-none" style={{ width: "900px", height: "500px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(27,198,158,0.05) 0%, transparent 70%)", left: "50%", top: "0", transform: "translateX(-50%)", filter: "blur(80px)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center px-5 py-1.5 rounded-full mb-6"
            style={{ background: "transparent", border: "1.5px solid rgba(27,198,158,0.3)" }}
          >
            <span style={{ color: "#1bc69e", fontFamily: FONT, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em" }}>Core Features</span>
          </div>
          <h2 style={{ fontFamily: FONT, fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#111", lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: "1rem" }}>
            Built for the way modern money moves.
          </h2>
          <p style={{ color: "#666", fontFamily: FONT, fontWeight: 400, fontSize: "0.97rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            Everything you need to control spending, organize budgets, and make smarter financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { icon: Icon, title, desc } = feature;
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${(index % 4) * 80}ms`,
      }}
    >
    <div
      className="trk-shine flex flex-col gap-4 p-6 rounded-2xl cursor-default transition-all duration-300"
      style={{
        background: active ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.72)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: active ? "1.5px solid rgba(27,198,158,0.28)" : "1.5px solid rgba(0,0,0,0.07)",
        boxShadow: active
          ? [
              "0 20px 48px rgba(27,198,158,0.11)",
              "0 8px 18px rgba(0,0,0,0.06)",
              "inset 0 1px 0 rgba(255,255,255,0.98)",
              "inset 0 -1px 0 rgba(0,0,0,0.04)",
            ].join(", ")
          : [
              "0 4px 14px rgba(0,0,0,0.04)",
              "0 1px 3px rgba(0,0,0,0.03)",
              "inset 0 1px 0 rgba(255,255,255,0.85)",
              "inset 0 -1px 0 rgba(0,0,0,0.03)",
            ].join(", "),
        transform: active ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Icon badge — skeuomorphic */}
      <div
        className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300"
        style={{
          background: active
            ? "linear-gradient(160deg, #22d4a8, #0f8f70)"
            : "linear-gradient(160deg, rgba(27,198,158,0.12), rgba(15,143,112,0.06))",
          border: active ? "1px solid rgba(15,143,112,0.35)" : "1.5px solid rgba(27,198,158,0.18)",
          boxShadow: active
            ? "0 4px 14px rgba(27,198,158,0.38), inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.12)"
            : "inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -1px 0 rgba(0,0,0,0.04)",
        }}
      >
        <Icon size={20} style={{ color: active ? "#fff" : "#1bc69e" }} />
      </div>

      <div>
        <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.95rem", color: "#111", marginBottom: "6px" }}>{title}</h3>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.82rem", color: "#666", lineHeight: 1.7 }}>{desc}</p>
      </div>
    </div>
    </div>
  );
}
