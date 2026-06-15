import { useState } from "react";
import appScreenshot from "../../imports/957b5d21-f354-4649-bb3c-e1be04645689__1___1_-1.png";
import { Eye, Target, Grid3X3, TrendingUp } from "lucide-react";

const FONT = "'Poppins', sans-serif";

const cards = [
  { icon: Eye, title: "Clarity", desc: "One calm dashboard for everything." },
  { icon: Target, title: "Control", desc: "Budgets that adapt to your goals." },
  { icon: Grid3X3, title: "Categories", desc: "Visual breakdowns of your spending." },
  { icon: TrendingUp, title: "Confidence", desc: "Stay financially aware every day." },
];

export function ShowcaseSection() {
  return (
    <section id="analytics" className="relative py-32 overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 50% at 10% 50%, rgba(27,198,158,0.05) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Phone — straight, skeuomorphic casing */}
          <div className="flex justify-center relative">
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "560px",
                borderRadius: "48px",
                background: "linear-gradient(160deg, #dedede 0%, #b8b8b8 50%, #cecece 100%)",
                boxShadow: [
                  "0 48px 96px rgba(0,0,0,0.2)",
                  "0 18px 36px rgba(0,0,0,0.1)",
                  "0 4px 10px rgba(0,0,0,0.07)",
                  "inset 0 1px 0 rgba(255,255,255,0.88)",
                  "inset 0 -2px 0 rgba(0,0,0,0.16)",
                  "inset 2px 0 0 rgba(255,255,255,0.4)",
                  "inset -2px 0 0 rgba(0,0,0,0.07)",
                ].join(", "),
                padding: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "40px",
                  background: "#111",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5), inset 0 2px 6px rgba(0,0,0,0.35)",
                }}
              >
                {/* Dynamic island */}
                <div style={{ position: "absolute", top: "12px", left: "50%", transform: "translateX(-50%)", width: "94px", height: "28px", borderRadius: "20px", background: "#000", zIndex: 10, boxShadow: "0 2px 6px rgba(0,0,0,0.55)" }} />
                <img
                  src={appScreenshot}
                  alt="Trackify app"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
                {/* Glare */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(155deg, rgba(255,255,255,0.1) 0%, transparent 55%)", pointerEvents: "none", zIndex: 5, borderRadius: "40px 40px 0 0" }} />
              </div>

              {/* Side buttons */}
              <div style={{ position: "absolute", right: "-10px", top: "110px", width: "5px", height: "62px", borderRadius: "0 4px 4px 0", background: "linear-gradient(180deg, #ccc 0%, #aaa 50%, #bbb 100%)", boxShadow: "3px 0 6px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.38), inset 0 -1px 0 rgba(0,0,0,0.13)" }} />
              <div style={{ position: "absolute", left: "-10px", top: "92px", width: "5px", height: "36px", borderRadius: "4px 0 0 4px", background: "linear-gradient(180deg, #ccc 0%, #aaa 50%, #bbb 100%)", boxShadow: "-3px 0 6px rgba(0,0,0,0.13), inset 0 1px 0 rgba(255,255,255,0.38)" }} />
              <div style={{ position: "absolute", left: "-10px", top: "143px", width: "5px", height: "36px", borderRadius: "4px 0 0 4px", background: "linear-gradient(180deg, #ccc 0%, #aaa 50%, #bbb 100%)", boxShadow: "-3px 0 6px rgba(0,0,0,0.13), inset 0 1px 0 rgba(255,255,255,0.38)" }} />
              <div style={{ position: "absolute", left: "-10px", top: "58px", width: "5px", height: "22px", borderRadius: "4px 0 0 4px", background: "linear-gradient(180deg, #ccc 0%, #aaa 100%)", boxShadow: "-2px 0 5px rgba(0,0,0,0.1)" }} />
            </div>

            {/* Ambient glow under phone */}
            <div className="absolute pointer-events-none" style={{ width: "280px", height: "80px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(27,198,158,0.12) 0%, transparent 70%)", bottom: "-20px", left: "50%", transform: "translateX(-50%)", filter: "blur(20px)" }} />
          </div>

          {/* Right text + cards */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center px-5 py-1.5 rounded-full mb-6" style={{ background: "transparent", border: "1.5px solid rgba(27,198,158,0.3)" }}>
                <span style={{ color: "#1bc69e", fontFamily: FONT, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em" }}>Dashboard Preview</span>
              </div>
              <h2 style={{ fontFamily: FONT, fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 2.75rem)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Every number,{" "}
                <span style={{ background: "linear-gradient(135deg, #1bc69e, #0a7a5c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  in its right place.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((c) => <ShowcaseCard key={c.title} c={c} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({ c }: { c: typeof cards[0] }) {
  const [active, setActive] = useState(false);
  const Icon = c.icon;
  return (
    <div
      className="flex flex-col gap-3 p-5 rounded-2xl transition-all duration-300 cursor-default"
      style={{
        background: active ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.72)",
        backdropFilter: "blur(20px)",
        border: active ? "1.5px solid rgba(27,198,158,0.28)" : "1.5px solid rgba(0,0,0,0.07)",
        boxShadow: active
          ? "0 16px 40px rgba(27,198,158,0.1), 0 6px 14px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.98), inset 0 -1px 0 rgba(0,0,0,0.04)"
          : "0 2px 10px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.82), inset 0 -1px 0 rgba(0,0,0,0.03)",
        transform: active ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
        style={{
          background: active ? "linear-gradient(160deg, #22d4a8, #0f8f70)" : "rgba(27,198,158,0.1)",
          boxShadow: active
            ? "0 4px 12px rgba(27,198,158,0.38), inset 0 1px 0 rgba(255,255,255,0.25)"
            : "inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.04)",
        }}
      >
        <Icon size={18} style={{ color: active ? "#fff" : "#1bc69e" }} />
      </div>
      <div>
        <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.95rem", color: "#111", marginBottom: "4px" }}>{c.title}</div>
        <div style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{c.desc}</div>
      </div>
    </div>
  );
}
