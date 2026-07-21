import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate required fields
    if (
      !data.artistName ||
      !data.email ||
      !data.genre ||
      !data.stage ||
      !data.retainsIP
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create application
    const application = await prisma.application.create({
      data: {
        artistName: data.artistName,
        email: data.email,
        phone: data.phone || null,
        genre: data.genre,
        stage: data.stage,
        portfolioUrls: [
          data.portfolioPrimary,
          ...(data.portfolioSecondary ? [data.portfolioSecondary] : []),
        ].filter(Boolean),
        servicesNeeded: data.servicesNeeded || [],
        whatTheyBuild: data.whatTheyBuild || null,
        whyStudios: data.whyStudios || null,
        retainsIP: data.retainsIP === "yes",
        consent: data.consent === true,
      },
    });

    // Send auto-reply email
    try {
      await resend.emails.send({
        from: "Whole Body Studios <onboarding@wholebody.studios>",
        to: [data.email],
        subject: "Application Received — Whole Body Studios",
        html: `
          <html>
            <body style="background-color: #050505; color: #EDEDED; font-family: monospace; padding: 20px;">
              <h1 style="color: #2BA8A0;">Application Received</h1>
              <p>Thank you for applying to partner with Whole Body Studios.</p>
              <p>We review every submission within <strong>14 days</strong>.</p>
              <p>If your work carries the frequency, we'll reach out.</p>
              <hr style="border-color: #2A2A38; margin: 30px 0;" />
              <p style="color: #8888A0; font-size: 12px;">
                wholebody.studios · The artist eats first. Always.
              </p>
            </body>
          </html>
        `,
      });
    } catch (emailErr) {
      console.error("Email send failed:", emailErr);
      // Continue anyway — don't fail the whole submission
    }

    return NextResponse.json({ success: true, applicationId: application.id });
  } catch (err) {
    console.error("Apply route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
