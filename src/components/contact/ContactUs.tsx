import React, { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";

const ContactCard = ({
  title,
  lines,
  icon: Icon,
}: {
  title: string;
  lines: string[];
  icon: any;
}) => {
  return (
    <div
      className="contact-card mb-4 bg-white"
      style={{
        padding: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        position: "relative",
        transition: "all 0.3s ease",
      }}
    >
      {/* Title */}
      <h4
        className="fw-bold mb-2"
        style={{ fontSize: "15px", color: "#111827" }}
      >
        {title}
      </h4>

      {/* Info Lines */}
      {lines.map((line, i) => (
        <p
          key={i}
          className="mb-1"
          style={{ fontSize: "14px", color: "#374151", margin: 0 }}
        >
          {line}
        </p>
      ))}

      {/* Icon Box */}
      <div
        style={{
          marginTop: "14px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "#f0fdf4",
          color: "#16a34a",
          fontSize: "22px",
        }}
      >
        <Icon />
      </div>

      {/* Arrow button */}
      <button
        className="arrow-btn"
        style={{
          position: "absolute",
          right: "-18px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          background: "#16a34a",
          border: "3px solid #fff",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <FiArrowUpRight size={18} />
      </button>
    </div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every(
    (field) => field.trim() !== ""
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error when typing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("⚠️ Please fill all fields before submitting.");
      return;
    }
    alert("✅ Form submitted successfully!");
  };

  return (
    <div className="page-content">
      <section className="section-xl">
        <div className="container">
          <div className="row">
            {/* Left - Contact Info */}
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-4">
                <ContactCard
                  title="Mail Us 24/7"
                  lines={[
                    "cozybrosheatingandcooling@gmail.com",
                    "support@cozybrosheating.com",
                  ]}
                  icon={FiMail}
                />
                <ContactCard
                  title="Our Location"
                  lines={[
                    "85 Preston, Inglewood,",
                    "Maine, 98380, Hoofddorp Noord-2132",
                  ]}
                  icon={FiMapPin}
                />
                <ContactCard
                  title="Call Us 24/7"
                  lines={["+1 716-289-5986", "+1 000-000-0000"]}
                  icon={FiPhone}
                />
                <ContactCard
                  title="Working Days"
                  lines={["Mon to Sat - 09:00am To 06:00pm", "Sunday - Closed"]}
                  icon={FiClock}
                />
              </div>
            </div>

            {/* Right - Form + Map */}
            <div className="col-lg-8">
              <div className="row">
                {/* Form */}
                <div className="col-12">
                  <div
                    className="contact-form-section p-5 mb-4"
                    style={{
                      background: "#f1f5f9",
                      borderRadius: "20px",
                      border: "none",
                    }}
                  >
                    <div className="mb-4">
                      <h6
                        className="text-primary mb-2"
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          letterSpacing: "0.5px",
                        }}
                      >
                        ❄️ CONTACT US
                      </h6>
                      <h2
                        className="fw-bold mb-3"
                        style={{ fontSize: "1.8rem", color: "#1e293b" }}
                      >
                        Dedicated to Helping You Every Step of the Way
                      </h2>
                      <p
                        className="text-muted"
                        style={{ fontSize: "15px", lineHeight: "1.6" }}
                      >
                        With our carefully selected staff, you can trust that
                        your home will always receive top-quality service.
                      </p>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="form-control"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            rows={4}
                            name="message"
                            placeholder="Message"
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                        {error && (
                          <div className="col-12">
                            <p style={{ color: "red", fontSize: "14px" }}>
                              {error}
                            </p>
                          </div>
                        )}
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-outline-success"
                            disabled={!isFormValid}
                          >
                            Get Cost Estimate <FiArrowUpRight size={16} />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Map */}
                <div className="col-12">
                  <div
                    className="map-section rounded overflow-hidden"
                    style={{ height: "350px", borderRadius: "14px" }}
                  >
                    <iframe
                      src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                      title="London Eye, London, United Kingdom"
                      aria-label="London Eye, London, United Kingdom"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "14px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra CSS */}
      <style>{`
        .contact-card:hover {
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }
        .contact-card .arrow-btn:hover {
          background: #15803d;
          transform: translateY(-50%) scale(1.1) rotate(15deg);
        }
        .form-control {
          padding: 12px;
          border: 1px solid #16a34a;
          border-radius: 12px;
          font-size: 14px;
          background: #f1f5f9;
          transition: all 0.3s ease;
        }
        .form-control:focus {
          border-color: #16a34a !important;
          box-shadow: 0 0 0 3px rgba(22,163,74,0.2);
          background: #fff;
        }
        .btn-outline-success {
          background: transparent;
          border: 2px solid #16a34a;
          color: #16a34a;
          padding: 10px 22px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-outline-success:disabled {
          background: #d1d5db;
          border-color: #d1d5db;
          color: #6b7280;
          cursor: not-allowed;
        }
        .btn-outline-success:hover:enabled {
          background: #16a34a;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
