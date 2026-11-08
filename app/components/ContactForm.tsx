 "use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your message.");
      setStatus("success");
      setMessage("Thanks for reaching out! Your message has been sent to Karan.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span>DROP A MESSAGE</span><span>✳</span></div>
      <label htmlFor="name">Your name</label>
      <input id="name" name="name" placeholder="Enter your name" required maxLength={100} />
      <label htmlFor="email">Your email</label>
      <input id="email" name="email" type="email" placeholder="you@example.com" required maxLength={200} />
      <label htmlFor="subject">Subject</label>
      <input id="subject" name="subject" placeholder="What would you like to discuss?" required maxLength={150} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Write your message here..." rows={5} required maxLength={5000} />
      <button className="button button-primary submit-button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"} <span>↗</span>
      </button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p>
      <p className="privacy-note">Your message will be delivered to Karan&apos;s email inbox.</p>
    </form>
  );
}
