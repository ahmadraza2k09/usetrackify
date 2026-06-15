import { useState, useEffect } from "react";
import { TrendingDown, Bell, Zap, Lightbulb } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const FONT = "'Poppins', sans-serif";
const total = 2720;
const spendData = [
  { name: "Housing", value: 1400, color: "#1bc69e" },
  { name: "Food", value: 620, color: "#0f8f70" },
  { name: "Transport", value: 280, color: "#44e8c0" },
  { name: "Entertainment", value: 180, color: "#0a6048" },
  { name: "Other", value: 240, color: "#7befd6" },
];
const insights = [
  { icon: TrendingDown, label: "Spending Prediction", text: "You're on track to save $340 more than last month." },
  { icon: Lightbulb, label: "Smart Recommendation", text: "Reduce dining spend by 15% to hit your Q3 goal." },
  { icon: Bell, label: "Budget Alert", text: "Entertainment budget is 82% used with 9 days left." },
  { icon: Zap, label: "Instant Insight", text: "Your subscriptions cost $127/mo — 3 are unused." },
];

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { name: string; value: number }[] }) => {
  if (active && payload?.length) {
    const pct = ((payload[0].value / total) * 100).toFixed(1);
    return (
      <div style={{ background: "rgba(255,255,255,0.95)", border: "1.5px solid rgba(27,198,158,0.22)", borderRadius: "14px", padding: "10px 14px", fontFamily: FONT, boxShadow: "0 8px 24px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.95)", backdropFilter: "blur(16px)" }}>
        <div style={{ color: "#1bc69e", fontWeight: 700, fontSize: "0.8rem", marginBottom: "2px" }}>{payload[0].name}</div>
        <div style={{ color: "#333", fontSize: "0.82rem" }}>${payload[0].value.toLocaleString()}</div>
        <div style={{ color: "#1bc69e", fontWeight: 600, fontSize: "0.8rem" }}>{pct}%</div>
      </div>
    );
  }
  return null;
};

export function AISection() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveIndex((i) => (i + 1) % insights.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="ai-insights" className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #f4fdf9 0%, #ffffff 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 80% 40%, rgba(27,198,158,0.06) 0%, transparent 65%)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 style={{ fontFamily: FONT, fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "1rem" }}>
            Your money.{" "}
            <span style={{ background: "linear-gradient(135deg, #1bc69e, #0a7a5c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Smarter with AI.
            </span>
          </h2>
          <p style={{ color: "#666", fontFamily: FONT, fontWeight: 400, fontSize: "0.97rem", maxWidth: "580px", margin: "0 auto", lineHeight: 1.78 }}>
            Trackify's AI engine processes your financial data in real time and delivers predictions, alerts, and recommendations before you even notice the pattern.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart card — skeuomorphic glass */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-sm p-8 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                border: "1.5px solid rgba(27,198,158,0.14)",
                boxShadow: [
                  "0 24px 64px rgba(0,0,0,0.08)",
                  "0 8px 20px rgba(0,0,0,0.04)",
                  "inset 0 1px 0 rgba(255,255,255,0.98)",
                  "inset 0 -1px 0 rgba(0,0,0,0.05)",
                ].join(", "),
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  style={{
                    width: "34px", height: "34px", borderRadius: "10px",
                    background: "linear-gradient(160deg, #22d4a8, #0f8f70)",
                    boxShadow: "0 4px 10px rgba(27,198,158,0.35), inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontSize: "0.85rem",
                  }}
                >◑</div>
                <span style={{ color: "#111", fontFamily: FONT, fontWeight: 700, fontSize: "0.95rem" }}>Spending Breakdown</span>
              </div>

              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={spendData} cx="50%" cy="50%" innerRadius={65} outerRadius={100} paddingAngle={3} dataKey="value" style={{ cursor: "pointer", filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.07))" }}>
                    {spendData.map((entry, i) => <Cell key={i} fill={entry.color} stroke="rgba(255,255,255,0.7)" strokeWidth={2.5} />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-2 gap-2 mt-4">
                {spendData.map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color, boxShadow: `0 1px 4px ${d.color}55` }} />
                    <span style={{ color: "#777", fontFamily: FONT, fontWeight: 400, fontSize: "0.74rem" }}>{d.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights list */}
          <div className="flex flex-col gap-3">
            {insights.map((ins, i) => {
              const Icon = ins.icon;
              const isActive = i === activeIndex;
              return (
                <div
                  key={ins.label}
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-500 cursor-pointer"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(20px)",
                    border: isActive ? "1.5px solid rgba(27,198,158,0.28)" : "1.5px solid rgba(0,0,0,0.06)",
                    boxShadow: isActive
                      ? "0 12px 36px rgba(27,198,158,0.11), 0 4px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.98), inset 0 -1px 0 rgba(0,0,0,0.03)"
                      : "0 1px 4px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.75)",
                    transform: isActive ? "translateX(6px)" : "translateX(0)",
                  }}
                  onClick={() => setActiveIndex(i)}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isActive ? "linear-gradient(160deg, #22d4a8, #0f8f70)" : "rgba(27,198,158,0.08)",
                      boxShadow: isActive
                        ? "0 4px 12px rgba(27,198,158,0.38), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.1)"
                        : "inset 0 1px 0 rgba(255,255,255,0.5)",
                    }}
                  >
                    <Icon size={18} style={{ color: isActive ? "#fff" : "#1bc69e" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: FONT, fontSize: "0.68rem", fontWeight: 600, color: isActive ? "#1bc69e" : "#bbb", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.07em" }}>{ins.label}</div>
                    <div style={{ fontFamily: FONT, fontSize: "0.88rem", fontWeight: isActive ? 500 : 400, color: isActive ? "#222" : "#bbb", lineHeight: 1.55 }}>{ins.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
