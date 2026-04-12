import React, { useState, useRef, useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram, BsWhatsapp, BsArrowUpRight } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const contactLinks = [
  {
    icon: <BsWhatsapp />,
    label: "WhatsApp",
    value: "+62 857-2734-6620",
    href: "https://api.whatsapp.com/send?phone=6285727346620",
    color: "#25D366",
  },
  {
    icon: <MdOutlineEmail />,
    label: "Email",
    value: "adiprimanto.98@gmail.com",
    href: "mailto:adiprimanto.98@gmail.com",
    color: "var(--color-primary)",
  },
  {
    icon: <BsInstagram />,
    label: "Instagram",
    value: "@adiprimanto",
    href: "https://www.instagram.com/adiprimanto/",
    color: "#E1306C",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const sectionRef = useRef(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo, saya ${form.name} (${form.email}).%0A%0A${form.message}`;
    window.open(
      `https://api.whatsapp.com/send?phone=6285727346620&text=${text}`,
      "_blank",
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container contact__container">
        {/* LEFT — heading + contact links */}
        <div className="contact__left">
          <div className="fade-up">
            <div className="section-eyebrow">
              <span>// 04</span> Contact
            </div>
            <h2 className="contact__title">
              Let's build
              <br />
              something <span className="gradient-text">together.</span>
            </h2>
            <p className="contact__desc">
              Punya project menarik? Butuh Software Engineer yang juga paham AI?
              Mari ngobrol — saya selalu terbuka untuk kolaborasi baru.
            </p>
          </div>

          {/* Contact link cards */}
          <div className="contact__links fade-up">
            {contactLinks.map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="contact__link"
                style={{ "--link-color": color }}
              >
                <div className="contact__link-icon">{icon}</div>
                <div className="contact__link-text">
                  <span className="contact__link-label">{label}</span>
                  <span className="contact__link-value">{value}</span>
                </div>
                <BsArrowUpRight className="contact__link-arrow" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="contact__right fade-up">
          <div className="contact__form-wrap">
            <div className="contact__form-header">
              <span className="contact__form-badge">
                <span className="contact__form-badge-dot" />
                Send a message
              </span>
            </div>

            <form onSubmit={handleSubmit} className="contact__form">
              <div
                className={`contact__field ${focused === "name" ? "focused" : ""} ${form.name ? "filled" : ""}`}
              >
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nama lengkap kamu"
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div
                className={`contact__field ${focused === "email" ? "focused" : ""} ${form.email ? "filled" : ""}`}
              >
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@kamu.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div
                className={`contact__field contact__field--textarea ${focused === "message" ? "focused" : ""} ${form.message ? "filled" : ""}`}
              >
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Ceritakan project atau ide kamu..."
                  required
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button type="submit" className="contact__submit">
                <BsWhatsapp className="contact__submit-icon" />
                Send via WhatsApp
                <FiSend className="contact__submit-arrow" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
