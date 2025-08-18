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
    <div className="space-y-6">
      <h1>CONTACT ME</h1>
      <p className="p">
        Please Email me at  
        <a className="underline" href="mailto:pranavp.malleboyina@gmail.com">
             pranavp.malleboyina@gmail.com
        </a> 
        or use the form below.
      </p>

      <form className="max-w-md space-y-4" onSubmit={onSubmit}>
        <input name="name" 
               placeholder="Your name" 
               className="w-full p-3 border rounded-xl" 
               required />
        <input type="email" 
               name="email" 
               placeholder="Your email" 
               className="w-full p-3 border rounded-xl" 
               required />
        <textarea name="message" 
                  placeholder="Your message" 
                  className="w-full p-3 border rounded-xl h-36" 
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
