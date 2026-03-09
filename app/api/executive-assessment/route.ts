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
      replyTo: email,
      subject: "New Executive Assessment Request",
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

    /* CONFIRMATION EMAIL TO SUBMITTER */

    await resend.emails.send({
      from: "Axis Strategies <noreply@axisstrategiesgroup.com>",
      to: [email],
      subject: "Your Executive Assessment Request",
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
            Thank you for requesting an executive pharmacy assessment from
            <strong>Axis Strategies</strong>.
          </p>

          <p>
            We received your submission and a member of our team will review
            your information and follow up shortly.
          </p>

          <p>
            This assessment helps identify opportunities to improve pharmacy
            performance, optimize 340B strategy, strengthen referral capture,
            and evaluate infusion or specialty growth opportunities.
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
    console.error("Executive assessment error:", error);

    return NextResponse.json(
      { error: "Submission failed." },
      { status: 500 }
    );
  }
}