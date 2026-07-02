import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.RESEND_FROM_EMAIL || 'hello@brixs.space';
const LOGO_URL = 'https://www.brixs.space/branding-kit/full_logo_white_on_transparent.png';
const ICON_URL = 'https://www.brixs.space/branding-kit/icon_white_on_transparent.png';

const departmentEmails: Record<string, string> = {
  'General Inquiries': 'hello@brixs.space',
  'Support': 'support@brixs.space',
  'Partnerships': 'partnerships@brixs.space',
  'Legal & Terms': 'legal@brixs.space',
};

function internalTemplate(name: string, email: string, department: string, subject: string, message: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <tr>
          <td style="background:#05070A;padding:28px 36px;border-bottom:3px solid #005BFF;">
            <table width="100%"><tr>
              <td><img src="${LOGO_URL}" alt="BRIXS" height="32" style="display:block;"/></td>
              <td align="right" style="color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:2px;">Internal Inquiry</td>
            </tr></table>
          </td>
        </tr>
        
        <!-- Title -->
        <tr>
          <td style="padding:32px 36px 0 36px;">
            <p style="margin:0 0 4px 0;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">New Inquiry Received</p>
            <h1 style="margin:0;font-size:22px;font-weight:600;color:#111827;letter-spacing:-0.03em;line-height:1.3;">${subject}</h1>
          </td>
        </tr>

        <!-- Info Cards -->
        <tr>
          <td style="padding:24px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
              <tr>
                <td width="50%" style="padding:16px 20px;border-right:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;">
                  <p style="margin:0 0 4px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">From</p>
                  <p style="margin:0;font-size:15px;font-weight:500;color:#111827;">${name}</p>
                </td>
                <td width="50%" style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                  <p style="margin:0 0 4px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">Email</p>
                  <p style="margin:0;font-size:15px;color:#005BFF;">${email}</p>
                </td>
              </tr>
              <tr>
                <td width="50%" style="padding:16px 20px;border-right:1px solid #e5e7eb;">
                  <p style="margin:0 0 4px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">Department</p>
                  <p style="margin:0;font-size:15px;font-weight:500;color:#111827;">${department}</p>
                </td>
                <td width="50%" style="padding:16px 20px;">
                  <p style="margin:0 0 4px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">Priority</p>
                  <p style="margin:0;font-size:15px;font-weight:500;color:#10b981;">● Normal</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Message -->
        <tr>
          <td style="padding:0 36px 32px 36px;">
            <p style="margin:0 0 12px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">Full Message</p>
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:24px;font-size:14px;line-height:1.7;color:#374151;white-space:pre-wrap;">${message}</div>
          </td>
        </tr>
        
        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:20px 36px;border-top:1px solid #e5e7eb;">
            <table width="100%"><tr>
              <td style="font-size:12px;color:#9ca3af;">Brixs Contact Gateway &bull; Automated</td>
              <td align="right" style="font-size:12px;color:#9ca3af;">${new Date().toISOString().split('T')[0]}</td>
            </tr></table>
          </td>
        </tr>
        
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function userTemplate(name: string, department: string, subject: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#05070A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#05070A;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0C0F14;border:1px solid rgba(255,255,255,0.08);border-radius:20px;overflow:hidden;">
        
        <!-- Header with Logo -->
        <tr>
          <td align="center" style="padding:40px 36px 24px 36px;border-bottom:1px solid rgba(255,255,255,0.06);">
            <img src="${ICON_URL}" alt="BRIXS" height="48" style="display:block;margin-bottom:20px;"/>
            <h1 style="margin:0;font-size:26px;font-weight:500;color:#ffffff;letter-spacing:-0.03em;">We've received your request</h1>
            <p style="margin:8px 0 0 0;font-size:14px;color:rgba(255,255,255,0.45);">Our team is on it.</p>
          </td>
        </tr>
        
        <!-- Greeting -->
        <tr>
          <td style="padding:36px 36px 0 36px;">
            <p style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:rgba(255,255,255,0.7);">
              Hi <strong style="color:#ffffff;">${name}</strong>,
            </p>
            <p style="margin:0 0 24px 0;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.55);">
              Thank you for contacting Brixs. We have successfully received your inquiry and a dedicated member from our team will review and respond to you shortly.
            </p>
          </td>
        </tr>

        <!-- Inquiry Summary Card -->
        <tr>
          <td style="padding:0 36px 28px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;overflow:hidden;">
              <tr>
                <td style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.04);">
                  <p style="margin:0 0 4px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.8px;color:rgba(255,255,255,0.3);font-weight:600;">Subject</p>
                  <p style="margin:0;font-size:16px;font-weight:500;color:#ffffff;">${subject}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px;">
                  <table width="100%"><tr>
                    <td width="50%">
                      <p style="margin:0 0 4px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.8px;color:rgba(255,255,255,0.3);font-weight:600;">Department</p>
                      <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.8);">${department}</p>
                    </td>
                    <td width="50%">
                      <p style="margin:0 0 4px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.8px;color:rgba(255,255,255,0.3);font-weight:600;">Response Time</p>
                      <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.8);">Within 24–48 hours</p>
                    </td>
                  </tr></table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- CTA -->
        <tr>
          <td align="center" style="padding:0 36px 36px 36px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#ffffff;border-radius:6px;padding:14px 32px;">
                  <a href="https://www.brixs.space" style="text-decoration:none;font-size:14px;font-weight:600;color:#000000;letter-spacing:-0.01em;">Visit Brixs Platform →</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Divider -->
        <tr>
          <td style="padding:0 36px;">
            <div style="height:1px;background:rgba(255,255,255,0.06);"></div>
          </td>
        </tr>
        
        <!-- Footer -->
        <tr>
          <td style="padding:32px 36px;">
            <p style="margin:0 0 6px 0;font-size:14px;color:rgba(255,255,255,0.55);">Best regards,</p>
            <p style="margin:0 0 20px 0;font-size:15px;font-weight:600;color:#ffffff;">The Brixs Team</p>
            
            <table width="100%"><tr>
              <td>
                <a href="https://www.brixs.space" style="font-size:12px;color:#005BFF;text-decoration:none;margin-right:16px;">Website</a>
                <a href="https://docs.brixs.space" style="font-size:12px;color:#005BFF;text-decoration:none;margin-right:16px;">Documentation</a>
                <a href="https://x.com/BrixsChain" style="font-size:12px;color:#005BFF;text-decoration:none;margin-right:16px;">X (Twitter)</a>
                <a href="https://github.com/Brixs-Chain" style="font-size:12px;color:#005BFF;text-decoration:none;">GitHub</a>
              </td>
            </tr></table>
          </td>
        </tr>

        <!-- Legal -->
        <tr>
          <td style="padding:20px 36px;background:rgba(0,0,0,0.3);border-top:1px solid rgba(255,255,255,0.04);">
            <p style="margin:0;font-size:11px;line-height:1.6;color:rgba(255,255,255,0.25);text-align:center;">
              © ${new Date().getFullYear()} Brixs Chain. All rights reserved.<br/>
              This is an automated response. Please do not reply directly unless you need to add information to your existing inquiry.
            </p>
          </td>
        </tr>
        
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, department, subject, message } = body;

    if (!name || !email || !department || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const internalToEmail = departmentEmails[department] || 'hello@brixs.space';

    // 1. Internal notification to the Brixs team
    const internalEmailResponse = await resend.emails.send({
      from: `Brixs Platform <${SENDER_EMAIL}>`,
      to: [internalToEmail],
      subject: `[${department}] ${subject} — from ${name}`,
      replyTo: email,
      html: internalTemplate(name, email, department, subject, message),
    });

    if (internalEmailResponse.error) {
      console.error('Resend Internal Error:', internalEmailResponse.error);
      return NextResponse.json({ error: 'Failed to process your request. Please try again.' }, { status: 500 });
    }

    // 2. Auto-responder to the user
    const userEmailResponse = await resend.emails.send({
      from: `Brixs <${SENDER_EMAIL}>`,
      to: [email],
      subject: `Request Received — ${subject}`,
      html: userTemplate(name, department, subject),
    });

    if (userEmailResponse.error) {
      console.error('Resend Auto-Responder Error:', userEmailResponse.error);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
