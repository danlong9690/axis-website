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
      from: "Axis Website <onboarding@resend.dev>",
      to: ["daniel@axisstrategiesgroup.com"],
      subject: "New Executive Assessment Request",
      replyTo: email,

      html: `
        <h2>New Executive Assessment Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Title:</strong> ${title || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr/>

        <p><strong># Entity Pharmacies:</strong> ${entityPharmacies || "Not provided"}</p>
        <p><strong># Contract Pharmacies:</strong> ${contractPharmacies || "Not provided"}</p>
        <p><strong>Estimated Utilization Rate:</strong> ${utilizationRate || "Not provided"}</p>
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