import { useState } from "react";
import { ExternalLink, Palette, Code2 } from "lucide-react";

const FONT = "'Poppins', sans-serif";

const team = [
  {
    name: "Muhammad Ahmad Raza",
    role: "App Designer",
    bio: "Crafts premium interfaces with a focus on fintech aesthetics, micro-interactions, and user-centered design systems.",
    icon: Palette,
    initials: "MA",
    linkedin: "https://linkedin.com/in/ahmadraza2k09",
    gradA: "#1bc69e",
    gradB: "#0f8f70",
  },
  {
    name: "Faizan Ali",
    role: "App Developer",
    bio: "Full-stack developer specialising in AI-integrated financial applications and high-performance mobile experiences.",
    icon: Code2,
    initials: "FA",
    linkedin: "https://linkedin.com/in/faizanali2k05",
    gradA: "#0f8f70",
    gradB: "#1bc69e",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="relative py-32 overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(27,198,158,0.05) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 style={{ fontFamily: FONT, fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
            The minds behind{" "}
            <span style={{ background: "linear-gradient(135deg, #1bc69e, #0a7a5c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Trackify.
            </span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          {team.map((m) => <TeamCard key={m.name} member={m} />)}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: typeof team[0] }) {
  const [active, setActive] = useState(false);
  const Icon = member.icon;

  return (
    <div
      className="flex-1 flex flex-col gap-5 p-8 rounded-3xl transition-all duration-300 cursor-default"
      style={{
        background: active ? "rgba(255,255,255,0.99)" : "rgba(255,255,255,0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: active ? "1.5px solid rgba(27,198,158,0.28)" : "1.5px solid rgba(0,0,0,0.07)",
        boxShadow: active
          ? [
              "0 28px 64px rgba(27,198,158,0.11)",
              "0 10px 24px rgba(0,0,0,0.06)",
              "inset 0 1px 0 rgba(255,255,255,0.99)",
              "inset 0 -1px 0 rgba(0,0,0,0.05)",
            ].join(", ")
          : [
              "0 4px 18px rgba(0,0,0,0.04)",
              "0 1px 4px rgba(0,0,0,0.03)",
              "inset 0 1px 0 rgba(255,255,255,0.88)",
              "inset 0 -1px 0 rgba(0,0,0,0.03)",
            ].join(", "),
        transform: active ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Avatar */}
      <div className="relative w-16 h-16">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
          style={{
            background: `linear-gradient(145deg, ${member.gradA}, ${member.gradB})`,
            boxShadow: active
              ? `0 8px 24px ${member.gradA}50, inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.14)`
              : `0 4px 12px ${member.gradA}30, inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -2px 0 rgba(0,0,0,0.1)`,
          }}
        >
          <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: "1.2rem", color: "#fff" }}>{member.initials}</span>
        </div>
        <div
          className="absolute -bottom-1 -right-1 w-7 h-7 rounded-xl flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.95)",
            border: "1.5px solid rgba(27,198,158,0.2)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          <Icon size={13} style={{ color: "#1bc69e" }} />
        </div>
      </div>

      <div className="flex-1">
        <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1rem", color: "#111", marginBottom: "2px" }}>{member.name}</div>
        <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: "0.78rem", color: "#1bc69e", marginBottom: "12px" }}>{member.role}</div>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.84rem", color: "#666", lineHeight: 1.7 }}>{member.bio}</p>
      </div>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 w-fit transition-all duration-200"
        style={{ color: "#ccc", fontFamily: FONT, fontWeight: 500, fontSize: "0.78rem" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#1bc69e")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
      >
        <ExternalLink size={12} />
        LinkedIn Profile
      </a>
    </div>
  );
}
