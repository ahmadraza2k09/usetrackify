import { useState, useEffect } from "react";
import logoImg from "../../imports/Untitled_design.png";

const FONT = "'Poppins', sans-serif";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Features", "Analytics", "AI Insights", "Team", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.65)",
        backdropFilter: "blur(28px) saturate(1.8)",
        WebkitBackdropFilter: "blur(28px) saturate(1.8)",
        borderBottom: "1px solid rgba(27,198,158,0.1)",
        boxShadow: scrolled
          ? "0 2px 20px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.9) inset"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={logoImg}
            alt="Trackify"
            className="h-9 w-9 rounded-xl transition-transform duration-200 group-hover:scale-105"
            style={{ boxShadow: "0 2px 8px rgba(27,198,158,0.2), inset 0 1px 0 rgba(255,255,255,0.3)" }}
          />
          <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.1rem", color: "#111", letterSpacing: "-0.01em" }}>
            Trackify
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              style={{ color: "#666", fontFamily: FONT, fontWeight: 500, fontSize: "0.88rem" }}
              className="transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1bc69e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <button
            className="px-5 py-2 rounded-full text-sm transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #1bc69e, #0f8f70)",
              color: "#fff",
              fontFamily: FONT,
              fontWeight: 600,
              fontSize: "0.88rem",
              boxShadow: "0 4px 14px rgba(27,198,158,0.35), 0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.25)",
              border: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 7px 20px rgba(27,198,158,0.45), 0 2px 6px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(27,198,158,0.35), 0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.25)";
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(1px) scale(0.98)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(27,198,158,0.2), inset 0 2px 5px rgba(0,0,0,0.12)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 7px 20px rgba(27,198,158,0.45), 0 2px 6px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.25)";
            }}
          >
            Start Tracking
          </button>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="block w-5 h-0.5 transition-all duration-300" style={{ background: "#333", transform: mobileOpen ? "rotate(45deg) translate(3px,3px)" : "" }} />
          <span className="block w-5 h-0.5 transition-all duration-300" style={{ background: "#333", opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 transition-all duration-300" style={{ background: "#333", transform: mobileOpen ? "rotate(-45deg) translate(3px,-3px)" : "" }} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(24px)" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-sm py-2 border-b"
              style={{ color: "#555", borderColor: "rgba(0,0,0,0.06)", fontFamily: FONT, fontWeight: 500 }}
              onClick={() => setMobileOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
