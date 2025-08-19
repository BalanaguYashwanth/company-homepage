import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function createTransporter() {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASSWORD ||
    !process.env.EMAIL_SENDER ||
    !process.env.EMAIL_RECEIVER
  ) {
    console.error("SMTP config missing");
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
    }

    const transporter = await createTransporter();
    if (!transporter) {
      return NextResponse.json({ message: "Email service not configured" }, { status: 500 });
    }

    await transporter.sendMail({
      from: `"FormPilot Newsletter" <${process.env.EMAIL_SENDER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "📬 New Newsletter Subscription",
      text: `A new user has subscribed to the FormPilot Newsletter.\n\nEmail: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
          <h2 style="color: #10B981;">New Newsletter Subscriber</h2>
          <p>Hello Team,</p>
          <p>A new user has subscribed to the FormPilot newsletter. Here are the details:</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 400px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
          </table>
          <p style="margin-top: 20px;">Cheers,<br/>FormPilot Team</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Subscribed successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Subscription Error:", error);
    return NextResponse.json({ message: "Failed to subscribe" }, { status: 500 });
  }
}