import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, mobile, email, city } = body;

    // Validate required fields
    if (!name || !mobile || !email || !city) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // For now, we'll use mailto as a fallback
    // In production, you should use an email service like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    // Create email content
    const subject = encodeURIComponent("New Quote Request from Website");
    const emailBody = encodeURIComponent(
      `New Quote Request:\n\n` +
      `Name: ${name}\n` +
      `Mobile: ${mobile}\n` +
      `Email: ${email}\n` +
      `City: ${city}\n\n` +
      `This request was submitted through the website quote popup.`
    );

    // For development/testing, you can log the data
    console.log("Quote Request:", { name, mobile, email, city });

    // In production, replace this with actual email sending logic
    // Example with Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@example.com',
      subject: 'New Quote Request',
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city}</p>
      `,
    });
    */

    // TODO: Replace with actual email service (Resend, SendGrid, etc.)
    // For now, this endpoint receives the data and logs it
    // You can integrate with an email service provider here
    
    // Example email recipient (update with your actual email)
    const recipientEmail = process.env.QUOTE_EMAIL || "hello@deejos.com";

    // For now, return success (you can implement actual email sending later)
    return NextResponse.json(
      { 
        success: true, 
        message: "Quote request received successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

