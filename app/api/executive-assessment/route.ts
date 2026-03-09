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
      entityPharmacies,
      contractPharmacies,
      utilizationRate,
    } = data;

    await resend.emails.send({
      from: "Axis Website <noreply@axisstrategiesgroup.com>",
      to: ["daniel@axisstrategiesgroup.com"],
      subject: "New Executive Assessment Request",
      replyTo: email,
      html: `
        <h2>New Executive Assessment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Title:</strong> ${title || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong># Entity Pharmacies:</strong> ${entityPharmacies || "Not provided"}</p>
        <p><strong># Contract Pharmacies:</strong> ${contractPharmacies || "Not provided"}</p>
        <p><strong>Estimated Utilization Rate:</strong> ${utilizationRate || "Not provided"}</p>
      `,
    });

    await resend.emails.send({
      from: "Axis Strategies <noreply@axisstrategiesgroup.com>",
      to: [email],
      subject: "We received your executive assessment request",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <p>Hi ${name || "there"},</p>

          <p>Thank you for requesting an executive assessment from Axis Strategies.</p>

          <p>We received your submission and a member of our team will review your information and follow up shortly.</p>

          <p><strong>Your submission details:</strong></p>
          <p>
            Organization: ${organization}<br/>
            Title: ${title || "Not provided"}<br/>
            # Entity Pharmacies: ${entityPharmacies || "Not provided"}<br/>
            # Contract Pharmacies: ${contractPharmacies || "Not provided"}<br/>
            Estimated Utilization Rate: ${utilizationRate || "Not provided"}
          </p>

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
    console.error("Executive assessment error:", error);

    return NextResponse.json(
      { error: "Submission failed." },
      { status: 500 }
    );
  }
}