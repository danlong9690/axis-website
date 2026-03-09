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

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    /* EMAIL TO AXIS */

    await resend.emails.send({
      from: "Axis Website <noreply@axisstrategiesgroup.com>",
      to: ["daniel@axisstrategiesgroup.com"],
      replyTo: email,
      subject: "New Axis Website Contact Submission",
      html: `
        <h2>New Contact Form Submission</h2>

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

    /* CONFIRMATION EMAIL TO SUBMITTER */

    await resend.emails.send({
      from: "Axis Strategies <noreply@axisstrategiesgroup.com>",
      to: [email],
      subject: "We received your message",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#0f172a; max-width:600px; margin:auto;">

          <div style="text-align:center; padding:20px 0;">
            <a href="https://axisstrategiesgroup.com" style="text-decoration:none;">
              <img 
                src="https://axisstrategiesgroup.com/logo.png" 
                alt="Axis Strategies"
                style="max-width:220px; height:auto;"
              />
            </a>

            <div style="margin-top:10px; font-size:14px; letter-spacing:1px; color:#475569;">
              Where Pharmacy Strategy Meets Performance
            </div>
          </div>

          <hr style="border:none; border-top:1px solid #e2e8f0; margin:20px 0;" />

          <p>Hi ${name},</p>

          <p>
            Thank you for contacting <strong>Axis Strategies</strong>.
          </p>

          <p>
            We received your message and a member of our team will follow up shortly.
          </p>

          <p>
            We appreciate the opportunity to connect.
          </p>

          <p style="color:#334155;">
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