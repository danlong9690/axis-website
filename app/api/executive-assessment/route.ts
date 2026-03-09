import { NextResponse } from "next/server";

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

    const subject = "New Executive Assessment Request";

    const body = `
Name: ${name}
Organization: ${organization}
Title: ${title}
Email: ${email}

# Entity Pharmacies: ${entityPharmacies}
# Contract Pharmacies: ${contractPharmacies}
Estimated Utilization Rate: ${utilizationRate}
`;

    return NextResponse.json({
      success: true,
      subject,
      body,
    });

  } catch (error) {
    console.error("Executive assessment error:", error);

    return NextResponse.json(
      { error: "Submission failed." },
      { status: 500 }
    );
  }
}