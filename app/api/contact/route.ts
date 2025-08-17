import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Example: simple email via Resend (or call SendGrid/Mailgun here)
    // const res = await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     from: "Portfolio <onboarding@resend.dev>",
    //     to: "you@example.com",
    //     subject: `New message from ${name}`,
    //     html: `<p><b>From:</b> ${name} (${email})</p><p>${message}</p>`
    //   })
    // });

    // if (!res.ok) throw new Error("Email provider request failed");

    // For now, just log it to the server console and succeed
    console.log("[CONTACT]", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Server error" }, { status: 500 });
  }
}
