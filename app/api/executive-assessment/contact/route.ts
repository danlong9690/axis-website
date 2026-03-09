import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      organization,
      title,
      email,
      phone,
      message,
    } = data;

    await resend.emails.send({
      from: "Axis Website <noreply@axisstrategiesgroup.com>",
      to: ["daniel@axisstrategiesgroup.com"],
      subject: "New Website Contact Form Submission",
      replyTo: email,
      html: `
        <h2>New Website Contact Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Title:</strong> ${title || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

        <hr/>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    await resend.emails.send({
      from: "Axis Strategies <noreply@axisstrategiesgroup.com>",
      to: [email],
      subject: "We received your message",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <p>Hi ${name || "there"},</p>
          <p>Thank you for contacting Axis Strategies.</p>
          <p>We received your message and a member of our team will follow up shortly.</p>
          <p>We appreciate the opportunity to connect.</p>
          <p>
            Axis Strategies<br/>
            Executive Pharmacy, 340B, Infusion, and Revenue Strategy
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Submission failed." },
      { status: 500 }
    );
  }
}