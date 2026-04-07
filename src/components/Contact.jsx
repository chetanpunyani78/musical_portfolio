import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { C, FD, FB } from "../styles/theme";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../data/config";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async () => {
    const form = formRef.current;
    const name = form.querySelector("[name='from_name']").value;
    const email = form.querySelector("[name='from_email']").value;
    const message = form.querySelector("[name='message']").value;

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: 13,
    background: C.panel,
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    color: C.text,
    fontFamily: FB,
    fontSize: 13,
    marginBottom: 14,
    outline: "none",
    transition: "border-color .3s",
  };

  const focus = (e) => (e.target.style.borderColor = C.orange);
  const blur = (e) => (e.target.style.borderColor = C.border);

  const btnMap = {
    idle: { bg: `linear-gradient(135deg, ${C.orange}, ${C.coral})`, text: "DROP THE MESSAGE →" },
    sending: { bg: C.amber, text: "MIXING..." },
    sent: { bg: "#28c840", text: "✓ DELIVERED" },
    error: { bg: "#ff5555", text: "CHECK ALL FIELDS" },
  };

  return (
    <div style={{ maxWidth: 480 }}>
      <form ref={formRef} style={{ display: "contents" }}>
        <input name="from_name" placeholder="Your name" style={inputStyle} onFocus={focus} onBlur={blur} />
        <input name="from_email" type="email" placeholder="Your email" style={inputStyle} onFocus={focus} onBlur={blur} />
        <textarea name="message" placeholder="Your message" rows={5} style={{ ...inputStyle, resize: "vertical" }} onFocus={focus} onBlur={blur} />
      </form>
      <button
        onClick={handleSubmit}
        disabled={status === "sending"}
        style={{
          background: btnMap[status].bg,
          color: C.white,
          fontFamily: FD,
          fontWeight: 700,
          fontSize: 13,
          padding: "13px 36px",
          border: "none",
          borderRadius: 8,
          cursor: status === "sending" ? "wait" : "pointer",
          transition: "all .3s",
          letterSpacing: 2,
          boxShadow: status === "idle" ? `0 0 20px ${C.orangeGlow}` : "none",
        }}
      >
        {btnMap[status].text}
      </button>
      {status === "sent" && (
        <p style={{ color: "#28c840", fontSize: 12, marginTop: 10 }}>
          Message received! I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: C.coral, fontSize: 12, marginTop: 10 }}>
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </div>
  );
}
