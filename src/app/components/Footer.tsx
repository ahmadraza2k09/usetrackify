import logoNoBg from "../../imports/Trackify_compressed_page-0004-removebg-preview-1.png";

const FONT = "'Poppins', sans-serif";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative pt-20 pb-10 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0c2418 0%, #081a10 100%)",
        borderTop: "1px solid rgba(27,198,158,0.12)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 70% at 50% 0%, rgba(27,198,158,0.07) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <a href="#" className="flex items-center gap-3">
              <img
                src={logoNoBg}
                alt="Trackify"
                className="h-10 w-10"
                style={{ filter: "brightness(0) invert(1) sepia(1) hue-rotate(120deg) saturate(4) brightness(1.1)", opacity: 0.92 }}
              />
              <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.15rem", color: "#fff", letterSpacing: "-0.01em" }}>Trackify</span>
            </a>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.84rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: "230px" }}>
              AI powered budget and expense management for the modern financial landscape.
            </p>

            <div className="flex gap-3 mt-1">
              {[
                { label: "Instagram", href: "https://www.instagram.com/usetrackify/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/usetrackify" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: FONT,
                    fontWeight: 500,
                    backdropFilter: "blur(12px)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(27,198,158,0.4)";
                    el.style.color = "#1bc69e";
                    el.style.background = "rgba(27,198,158,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.09)";
                    el.style.color = "rgba(255,255,255,0.5)";
                    el.style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.88rem", color: "#fff", marginBottom: "18px", letterSpacing: "0.02em" }}>Product</div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Features", href: "#features" },
                { label: "Analytics", href: "#analytics" },
                { label: "AI Insights", href: "#ai-insights" },
                { label: "Team", href: "#team" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="transition-all duration-200 w-fit"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: FONT, fontWeight: 400, fontSize: "0.84rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1bc69e")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.88rem", color: "#fff", marginBottom: "18px", letterSpacing: "0.02em" }}>Contact</div>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.84rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: "14px" }}>
              Have questions or feedback? Reach out to us directly.
            </p>
            <a
              href="mailto:usetrackify@gmail.com"
              style={{ fontFamily: FONT, fontWeight: 600, fontSize: "0.9rem", color: "#1bc69e", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.72")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              className="transition-opacity duration-200"
            >
              usetrackify@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.78rem", color: "rgba(255,255,255,0.22)" }}>
            © 2026 Trackify. Created with precision.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Security"].map((t) => (
              <a
                key={t}
                href="#"
                className="transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.22)", fontFamily: FONT, fontWeight: 400, fontSize: "0.78rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1bc69e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
