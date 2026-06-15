import { useEffect, useRef, useState } from "react";
import appScreenshot from "../../imports/957b5d21-f354-4649-bb3c-e1be04645689__1___1_-1.png";

const FONT = "'Poppins', sans-serif";

export function HeroSection() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!phoneRef.current || !hovered) return;
      const rect = phoneRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setTilt({
        x: ((e.clientX - cx) / rect.width) * 8,
        y: ((e.clientY - cy) / rect.height) * -8,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [hovered]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        paddingTop: "80px",
        background: "linear-gradient(155deg, #f5fefc 0%, #ffffff 45%, #edfaf6 100%)",
      }}
    >
      {/* Teal blob */}
      <div className="absolute pointer-events-none" style={{ width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,198,158,0.07) 0%, transparent 70%)", top: "-200px", right: "-150px", filter: "blur(70px)" }} />
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(27,198,158,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(27,198,158,0.04) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">

        {/* ── Left ── */}
        <div className="flex flex-col gap-8">
          <h1 style={{ fontFamily: FONT, fontWeight: 800, fontSize: "clamp(2.6rem, 5vw, 4.2rem)", lineHeight: 1.1, color: "#111", letterSpacing: "-0.03em" }}>
            Manage Your Budget with{" "}
            <span style={{ background: "linear-gradient(135deg, #1bc69e, #0a7a5c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Ease
            </span>{" "}
            with{" "}
            <span style={{ background: "linear-gradient(135deg, #1bc69e, #0a7a5c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Trackify.
            </span>
          </h1>

          <p style={{ color: "#555", fontFamily: FONT, fontWeight: 400, fontSize: "1rem", lineHeight: 1.8, maxWidth: "500px" }}>
            Trackify transforms scattered spending into clear financial decisions.
            Manage budgets, understand spending habits, and receive intelligent
            AI powered insights tailored to your financial goals.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Primary skeuomorphic button */}
            <button
              className="px-7 py-3.5 rounded-full transition-all duration-150"
              style={{
                background: "linear-gradient(160deg, #22d4a8 0%, #1bc69e 40%, #0f8f70 100%)",
                color: "#fff",
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: "0.93rem",
                border: "1px solid rgba(15,143,112,0.4)",
                boxShadow: [
                  "0 6px 20px rgba(27,198,158,0.38)",
                  "0 2px 6px rgba(0,0,0,0.1)",
                  "inset 0 1px 0 rgba(255,255,255,0.35)",
                  "inset 0 -2px 0 rgba(0,0,0,0.12)",
                ].join(", "),
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(27,198,158,0.48), 0 4px 10px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(27,198,158,0.38), 0 2px 6px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)";
              }}
              onMouseDown={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(2px) scale(0.985)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(27,198,158,0.18), inset 0 3px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(0,0,0,0.05)";
              }}
              onMouseUp={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
            >
              Start Tracking
            </button>

            {/* Secondary glass button */}
            <button
              className="px-7 py-3.5 rounded-full transition-all duration-150"
              style={{
                background: "rgba(255,255,255,0.75)",
                color: "#333",
                fontFamily: FONT,
                fontWeight: 500,
                fontSize: "0.93rem",
                border: "1.5px solid rgba(27,198,158,0.22)",
                backdropFilter: "blur(14px)",
                boxShadow: [
                  "0 2px 10px rgba(0,0,0,0.06)",
                  "inset 0 1px 0 rgba(255,255,255,0.95)",
                  "inset 0 -1px 0 rgba(0,0,0,0.06)",
                ].join(", "),
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(27,198,158,0.45)";
                (e.currentTarget as HTMLElement).style.color = "#1bc69e";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 18px rgba(27,198,158,0.1), 0 2px 6px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(27,198,158,0.22)";
                (e.currentTarget as HTMLElement).style.color = "#333";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.06)";
              }}
              onMouseDown={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(1px) scale(0.98)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.08), inset 0 2px 5px rgba(0,0,0,0.06)";
              }}
              onMouseUp={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
            >
              Explore Features
            </button>
          </div>
        </div>

        {/* ── Right — skeuomorphic phone ── */}
        <div className="flex justify-center items-center relative" ref={phoneRef}>
          {/* Ambient glow */}
          <div className="absolute pointer-events-none" style={{ width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,198,158,0.13) 0%, transparent 70%)", filter: "blur(55px)" }} />

          {/* Outer casing — skeuomorphic aluminium frame */}
          <div
            style={{
              position: "relative",
              width: "284px",
              height: "568px",
              borderRadius: "48px",
              background: "linear-gradient(160deg, #dcdcdc 0%, #b8b8b8 50%, #d0d0d0 100%)",
              boxShadow: [
                "0 50px 100px rgba(0,0,0,0.22)",
                "0 20px 40px rgba(0,0,0,0.12)",
                "0 6px 12px rgba(0,0,0,0.08)",
                "inset 0 1px 0 rgba(255,255,255,0.85)",
                "inset 0 -2px 0 rgba(0,0,0,0.18)",
                "inset 2px 0 0 rgba(255,255,255,0.45)",
                "inset -2px 0 0 rgba(0,0,0,0.08)",
              ].join(", "),
              padding: "10px",
              transform: hovered
                ? `perspective(900px) rotateY(${tilt.x * 0.5}deg) rotateX(${tilt.y * 0.5}deg) translateY(-6px)`
                : "perspective(900px)",
              transition: hovered ? "transform 0.08s ease-out" : "transform 0.5s ease-out",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
          >
            {/* Inner bezel */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "40px",
                background: "#1a1a1a",
                overflow: "hidden",
                position: "relative",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5), inset 0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              {/* Dynamic island */}
              <div style={{ position: "absolute", top: "12px", left: "50%", transform: "translateX(-50%)", width: "96px", height: "28px", borderRadius: "20px", background: "#000", zIndex: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.6)" }} />

              {/* Screen image */}
              <img
                src={appScreenshot}
                alt="Trackify dashboard"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
              />

              {/* Screen glare overlay */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(155deg, rgba(255,255,255,0.1) 0%, transparent 55%)", pointerEvents: "none", zIndex: 5, borderRadius: "40px 40px 0 0" }} />
            </div>

            {/* Physical side buttons */}
            {/* Power button right */}
            <div style={{ position: "absolute", right: "-11px", top: "110px", width: "5px", height: "64px", borderRadius: "0 4px 4px 0", background: "linear-gradient(180deg, #c8c8c8 0%, #aaa 50%, #bbb 100%)", boxShadow: "3px 0 6px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.15)" }} />
            {/* Volume up left */}
            <div style={{ position: "absolute", left: "-11px", top: "95px", width: "5px", height: "38px", borderRadius: "4px 0 0 4px", background: "linear-gradient(180deg, #c8c8c8 0%, #aaa 50%, #bbb 100%)", boxShadow: "-3px 0 6px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.12)" }} />
            {/* Volume down left */}
            <div style={{ position: "absolute", left: "-11px", top: "148px", width: "5px", height: "38px", borderRadius: "4px 0 0 4px", background: "linear-gradient(180deg, #c8c8c8 0%, #aaa 50%, #bbb 100%)", boxShadow: "-3px 0 6px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.12)" }} />
            {/* Silent switch left */}
            <div style={{ position: "absolute", left: "-11px", top: "60px", width: "5px", height: "24px", borderRadius: "4px 0 0 4px", background: "linear-gradient(180deg, #c8c8c8 0%, #aaa 100%)", boxShadow: "-2px 0 5px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.35)" }} />
          </div>

          {/* Floating glassmorphic cards */}
          <div
            className="absolute transition-all duration-300"
            style={{
              right: "-8px",
              top: "85px",
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              border: "1px solid rgba(27,198,158,0.2)",
              borderRadius: "20px",
              padding: "14px 18px",
              boxShadow: "0 10px 32px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ color: "#1bc69e", fontSize: "0.67rem", fontFamily: FONT, fontWeight: 600, marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Monthly Savings</div>
            <div style={{ color: "#111", fontFamily: FONT, fontWeight: 800, fontSize: "1.2rem", lineHeight: 1, letterSpacing: "-0.02em" }}>$1,248.50</div>
            <div style={{ color: "#1bc69e", fontSize: "0.67rem", fontFamily: FONT, fontWeight: 500, marginTop: "4px" }}>↑ 12.4% vs last month</div>
          </div>

          <div
            className="absolute transition-all duration-300"
            style={{
              left: "-16px",
              bottom: "130px",
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              border: "1px solid rgba(27,198,158,0.14)",
              borderRadius: "20px",
              padding: "14px 18px",
              boxShadow: "0 10px 32px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ color: "#aaa", fontSize: "0.67rem", fontFamily: FONT, fontWeight: 500, marginBottom: "5px" }}>AI Insight</div>
            <div style={{ color: "#222", fontFamily: FONT, fontWeight: 500, fontSize: "0.83rem", maxWidth: "138px", lineHeight: 1.45 }}>
              ✨ You're 18% under budget this week
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
