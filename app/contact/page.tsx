"use client";
import { useState } from "react";

export default function ContactPage() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value
    };
    setState("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    setState(res.ok ? "sent" : "error");
    if (res.ok) form.reset();
  }

  return (
    <div className="container px-4 mx-auto text-center-y-6">
      <h2 className="mb-8 h2">CONTACT ME</h2>
      <p className="p">
        Do you hav a  project, idea or opportunity ? I would love to hear from you. Please reach out to me via email 
        <br />
        or through the form below.
      </p>

      <form className="max-w-lg mx-auto space-y-4" onSubmit={onSubmit}>
        <input name="name" 
               placeholder="Your name" 
               className="w-full px-4 py-3 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" 
               required />
        <input type="email" 
               name="email" 
               placeholder="Your email" 
               className="w-full px-4 py-3 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" 
               required />
        <textarea name="message" 
                  placeholder="Your message" 
                  rows={6}
                  className="w-full px-4 py-3 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" 
                  required />
        <button disabled={state==="sending"} className="btn btn-primary">
          {state==="sending" ? "Sending..." : "Send"}
        </button>
      </form>

      {state==="sent" && <p className="text-sm text-green-600">Thank you for your time! I’ll get back to you as soon as possible.</p>}
      {state==="error" && <p className="text-sm text-red-600">Something went wrong. Try again.</p>}
    </div>
  );
}
