import { useState } from "react";

const SIDEBAR_ITEMS = [
  { key: "ac", label: "Air Conditioning" },
  { key: "furnace", label: "Furnaces" },
  { key: "boiler", label: "Boilers" },
  { key: "mini-split", label: "Mini Split AC" },
  { key: "plumbing", label: "Plumbing & Re-Piping" },
  { key: "estimate", label: "Free estimate on Furnace/AC installs" },
];

const HIGHLIGHTS = [
  { title: "AC and Heater Installation", icon: "🛠️" },
  { title: "AC and Heater System Repair", icon: "🔧" },
  { title: "Emergency HVAC Services", icon: "🚨" },
];

const SIDEBAR_IMAGES: Record<string, string> = {
  "ac": "/assets/images/Home/AirConditioning.svg",
  "furnace": "/assets/images/Home/Furnaces.svg",
  "boiler": "/assets/images/Home/Boilers.svg",
  "mini-split": "/assets/images/Home/AC.svg",
  "plumbing": "/assets/images/Home/Plumbing.svg",
  "estimate": "/assets/images/Home/FreeEstimate.svg",
  "services": "/assets/images/service/service-02.jpg"
};

const OurServices = () => {
  const [active, setActive] = useState("services");

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          {SIDEBAR_ITEMS.map((item) => (
            <div
              key={item.key}
              onClick={() => setActive(item.key)}
              style={{
                padding: "18px 28px",
                fontSize: 17,
                color: active === item.key ? "#1bb76e" : "#222",
                background: active === item.key ? "#e6f7f0" : "transparent",
                borderLeft:
                  active === item.key
                    ? "4px solid #1bb76e"
                    : "4px solid transparent",
                fontWeight: active === item.key ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.2s",
                margin: 0,
                borderRadius: active === item.key ? "12px" : "0",
                letterSpacing: 0.1,
                boxShadow:
                  active === item.key
                    ? "0 2px 8px rgba(27,183,110,0.07)"
                    : "none",
              }}
            >
              {item.label}
            </div>
          ))}

          {/* Contact Card - With technician as background */}
          <div
            className="d-none d-md-block"
            style={{
              margin: 24,
              marginTop: 32,
              borderRadius: 18,
              position: "relative",
              overflow: "hidden",
              height: 620,
              boxShadow: "0 6px 24px rgba(27,183,110,0.15)",
              border: "1.5px solid #e6eaf0",
            }}
          >
            {/* Technician Background Image */}
            <img
              src="/assets/images/Home/Bg_Ac_Main.svg"
              alt="Technician Background"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: -40,
                width: 150,
                height: 150,
                background: "rgba(59, 130, 246, 0.15)",
                borderRadius: "50%",
                transform: "rotate(-20deg)",
                zIndex: 3,
              }}
            />

            {/* Phone icon */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                width: 32,
                height: 32,
                marginTop: 240,
                background: "rgba(255,255,255,0.2)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 4,
              }}
            >
              <div style={{ fontSize: 18, color: "#fff" }}>📞</div>
            </div>

            {/* Text Content */}
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                left: 60,
                zIndex: 4,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                  marginTop: 240,
                  marginBottom: 4,
                  letterSpacing: 0.3,
                }}
              >
                Call us Now
              </div>

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: 0.5,
                }}
              >
                +1 716-289-5986
              </div>
            </div>
            <img
              src="/assets/images/Home/Hero.svg"
              alt="Technician"
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                width: 270,
                objectFit: "contain",
                zIndex: 3,
              }}
            />
            {/* Bottom text */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                color: "rgba(255,255,255,0.95)",
                fontSize: 14,
                textAlign: "center",
                fontWeight: 500,
                zIndex: 4,
              }}
            >
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          {/* Hero Section */}
          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: 18,
              overflow: "hidden",
              marginBottom: 18,
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            }}
          >
            <img
              src={SIDEBAR_IMAGES[active] || "/assets/images/service/service-02.jpg"}
              alt="Hero"
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: 18,
                marginTop: 20
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontSize: 36,

                textShadow: "0 2px 6px rgba(0,0,0,0.4)",
                textAlign: "center",
              }}
            >
              {SIDEBAR_ITEMS.find((i) => i.key === active)?.label || "Services"}
            </div>
          </div>

          {/* Heading */}
          <div
            style={{
              fontSize: 26,
              marginBottom: 10,
              letterSpacing: 0.2,
            }}
          >
            <h2>Cozy Bros – Expert Heating & Cooling Solutions All Year Long</h2>
          </div>

          {/* Description */}
          <div
            style={{
              color: "#444",
              fontSize: 17,
              marginBottom: 22,
              lineHeight: 1.75,
              fontWeight: 500,
              letterSpacing: 0.01,
            }}
          >
            At Cozy Bros, we believe comfort is more than a luxury—it’s a necessity.
            A well-maintained heating and cooling system keeps your home or workplace welcoming,
            boosts productivity, and supports healthier living.
            <br />
            <br />
           Reliable HVAC isn’t just about temperature control. 
           It’s about efficiency, air quality, and peace of mind. 
           That’s why we offer comprehensive service plans designed to keep your systems running smoothly year-round..
            <br />
            <br />
            Choosing the right provider can feel overwhelming—but with Cozy Bros, 
            you get a trusted partner for all your heating and cooling needs. 
            From installation to repairs and maintenance, we deliver solutions that save you money, 
            improve comfort, and ensure cleaner, healthier air every day.
          </div>
          <h5>Our Heating & Cooling Services</h5>
          {/* Highlights + Images in grid (one-to-one) */}
          <div className="row g-4 align-items-stretch" style={{ marginTop: 8 }}>
            {HIGHLIGHTS.map((card: any) => (
              <div key={card.title} className="col-md-6 col-lg-4 d-flex">
                {/* Card */}
                <div className="card h-100 w-100 border-0 shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center p-4" style={{ minHeight: "220px" }}>
                    {/* Example image placeholder, replace with actual image if available */}
                    <img
                      src={`/assets/images/Home/${card.title.replace(/\s+/g, '')}.svg`}
                      alt={card.title}
                      style={{
                        width: "100%",
                        maxWidth: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        marginBottom: "18px"
                      }}
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <span style={{ color: "#222", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{card.title}</span>
                    <span style={{ fontSize: 32 }}>{card.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default OurServices;