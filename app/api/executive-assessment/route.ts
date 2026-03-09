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

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    /* EMAIL TO AXIS */

    await resend.emails.send({
      from: "Axis Website <noreply@axisstrategiesgroup.com>",
      to: ["daniel@axisstrategiesgroup.com"],
      subject: "New Executive Assessment Request",
      replyTo: email,
      html: `
        <h2>Executive Assessment Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Title:</strong> ${title || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr/>

        <p><strong># Entity Pharmacies:</strong> ${entityPharmacies || "Not provided"}</p>
        <p><strong># Contract Pharmacies:</strong> ${contractPharmacies || "Not provided"}</p>
        <p><strong>Estimated Utilization Rate:</strong> ${utilizationRate || "Not provided"}</p>
      `,
    });

    /* CONFIRMATION EMAIL TO USER */

    await resend.emails.send({
      from: "Axis Strategies <noreply@axisstrategiesgroup.com>",
      to: [email],
      subject: "Your Executive Assessment Request",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#0f172a;">
          <p>Hi ${name},</p>

          <p>Thank you for requesting an executive pharmacy assessment from Axis Strategies.</p>

          <p>A member of our team will review your information and follow up shortly.</p>

          <p>We look forward to the opportunity to connect.</p>

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