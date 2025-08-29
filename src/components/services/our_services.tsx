import React, { useState } from "react";

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

const MAIN_IMAGES = [
  "/assets/images/service/service-01.jpg",
  "/assets/images/service/service-02.jpg",
  "/assets/images/service/service-03.jpg",
];

const OurServices: React.FC = () => {
  const [active, setActive] = useState("services");

  return (
    <div
      style={{
        background: "#f5f7fa",
        minHeight: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
        padding: 32,
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: 1200,
          margin: "0 auto",
          gap: 36,
          alignItems: "flex-start",
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            minWidth: 260,
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0,
            border: "1px solid #e6eaf0",
          }}
        >
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

          {/* Contact Card */}
          <div
            style={{
              margin: 24,
              marginTop: 32,
              background: "linear-gradient(135deg, #1bb76e 60%, #0e3c2e 100%)",
              borderRadius: 18,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 6px 24px rgba(27,183,110,0.10)",
              border: "1.5px solid #e6eaf0",
            }}
          >
            <img
              src="/assets/images/author-img.png"
              alt="Technician"
              style={{
                width: 84,
                height: 84,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 12,
                border: "3px solid #fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              }}
            />
            <div
              style={{
                fontSize: 21,
                fontWeight: 700,
                marginBottom: 6,
                color: "#fff",
                textAlign: "center",
                letterSpacing: 0.2,
              }}
            >
              Call us Now
              <br />
              <span style={{ fontSize: 22 }}>+1 716-289-5986</span>
            </div>
            <div
              style={{
                color: "#e6f7f0",
                fontSize: 15,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              Call for a free estimate!
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
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
              src="/assets/images/service/service-02.jpg"
              alt="Hero"
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: 18,
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
                fontWeight: 800,
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
              fontWeight: 800,
              color: "#1bb76e",
              marginBottom: 10,
              letterSpacing: 0.2,
            }}
          >
            Cozy Bros – Heating & Cooling Services for Comfort All Year Round
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
            At Cozy Bros, we know that a comfortable indoor environment fuels
            productivity, boosts moods, and makes every space more welcoming.
            Whether at home or in the office, a well-maintained heating and
            cooling system is essential for health, safety, and satisfaction.
            <br />
            <br />
            A reliable HVAC system isn’t just about comfort—it’s about
            efficiency, air quality, and peace of mind. That’s why having a
            comprehensive heating and cooling service plan is so important.
            <br />
            <br />
            Choosing the right HVAC provider can feel overwhelming, but with Cozy
            Bros, you get a one-stop solution for all your heating and cooling
            needs. From installation to repair, we keep your systems running at
            their best—helping you save money, stay comfortable, and enjoy cleaner
            air, every day.
          </div>

          {/* Highlights + Images in grid (one-to-one) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              marginBottom: 22,
            }}
          >
            {HIGHLIGHTS.map((card, idx) => (
              <div
                key={card.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                {/* Card */}
                <div
                  style={{
                    width: "100%",
                    background: "#fff",
                    borderRadius: 14,
                    boxShadow: "0 2px 8px rgba(27,183,110,0.07)",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontWeight: 700,
                    fontSize: 16,
                    border: "1px solid #e6eaf0",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 22 }}>{card.icon}</span>
                  <span style={{ color: "#222" }}>{card.title}</span>
                </div>

                {/* Matching Image */}
                <div
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                    border: "1px solid #e6eaf0",
                  }}
                >
                  <img
                    src={MAIN_IMAGES[idx]}
                    alt={`Service ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: 150,
                      objectFit: "cover",
                      borderRadius: 16,
                    }}
                  />
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
