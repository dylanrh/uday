import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { email, name, message } = body;

    // Validate input
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Audai Foundation <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@audai.org',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Audai Foundation contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

