import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!audienceId) {
      // If no audience ID is configured, we can just send an email to the admin notifying them.
      // Alternatively, you can create a contact without an audience if your Resend setup allows it.
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // Update this to your verified domain when going to production
        to: email, // Optionally send to admin: process.env.ADMIN_EMAIL
        subject: 'New Newsletter Subscription',
        html: `<p>A new user has subscribed to the newsletter: <strong>${email}</strong></p>`,
      });
      return NextResponse.json({ success: true, message: 'Subscription recorded (fallback mode)' });
    }

    // Add to Resend Audience/Contacts
    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: audienceId,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Subscription Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
