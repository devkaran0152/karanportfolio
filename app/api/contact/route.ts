import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (
      typeof name !== "string" || !name.trim() ||
      typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof subject !== "string" || !subject.trim() ||
      typeof message !== "string" || !message.trim()
    ) {
      return NextResponse.json({ error: "Please complete all fields with a valid email address." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 200 || subject.length > 150 || message.length > 5000) {
      return NextResponse.json({ error: "One or more fields exceed the allowed length." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "karankabir2002@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !from) {
      return NextResponse.json({ error: "Contact form is not configured yet. Please email Karan directly." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact: ${subject.trim()}`,
      text: `You received a new message through your portfolio.\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`,
    });

    if (error) {
      console.error("Resend email error:", error);
      return NextResponse.json({ error: "The email could not be sent. Please try again later." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }
}
