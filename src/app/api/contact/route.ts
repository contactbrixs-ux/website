import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789_dummy_key');
const SENDER_EMAIL = process.env.RESEND_FROM_EMAIL || 'hello@brixs.space';
const LOGO_URL = 'https://www.brixs.space/branding-kit/full_logo_black_on_white.png';
const ICON_URL = 'https://www.brixs.space/branding-kit/icon_black_on_transparent.png';

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
          <td style="background:#ffffff;padding:28px 36px;border-bottom:3px solid #005BFF;">
            <table width="100%"><tr>
              <td><img src="${LOGO_URL}" alt="BRIXS" height="32" style="display:block;"/></td>
              <td align="right" style="color:#9ca3af;font-size:11px;text-transform:uppercase;letter-spacing:2px;">Internal Inquiry</td>
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
<body style="margin:0;padding:0;background:#f0f2f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.06);">
        
        <!-- Header Bar with Logo -->
        <tr>
          <td style="background:#ffffff;padding:24px 36px;">
            <table width="100%"><tr>
              <td><img src="${LOGO_URL}" alt="BRIXS" height="30" style="display:block;"/></td>
              <td align="right" style="color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:2px;">Confirmation</td>
            </tr></table>
          </td>
        </tr>

        <!-- Blue Accent Line -->
        <tr><td style="height:4px;background:#005BFF;"></td></tr>
        
        <!-- Title Section -->
        <tr>
          <td align="center" style="padding:40px 36px 20px 36px;">
            <h1 style="margin:0;font-size:28px;font-weight:600;color:#111827;letter-spacing:-0.03em;">We've received your request</h1>
            <p style="margin:8px 0 0 0;font-size:15px;color:#6b7280;">Our team is reviewing your inquiry.</p>
          </td>
        </tr>
        
        <!-- Greeting -->
        <tr>
          <td style="padding:12px 36px 0 36px;">
            <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#374151;">
              Hi <strong style="color:#111827;">${name}</strong>,
            </p>
            <p style="margin:0 0 24px 0;font-size:15px;line-height:1.7;color:#6b7280;">
              Thank you for contacting Brixs. We have successfully received your inquiry and a dedicated member from our team will review and respond to you shortly.
            </p>
          </td>
        </tr>

        <!-- Inquiry Summary Card -->
        <tr>
          <td style="padding:0 36px 28px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
              <tr>
                <td style="padding:20px 24px;border-bottom:1px solid #e2e8f0;">
                  <p style="margin:0 0 4px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.8px;color:#94a3b8;font-weight:600;">Subject</p>
                  <p style="margin:0;font-size:16px;font-weight:600;color:#111827;">${subject}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px;">
                  <table width="100%"><tr>
                    <td width="50%">
                      <p style="margin:0 0 4px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.8px;color:#94a3b8;font-weight:600;">Department</p>
                      <p style="margin:0;font-size:14px;font-weight:500;color:#334155;">${department}</p>
                    </td>
                    <td width="50%">
                      <p style="margin:0 0 4px 0;font-size:10px;text-transform:uppercase;letter-spacing:1.8px;color:#94a3b8;font-weight:600;">Response Time</p>
                      <p style="margin:0;font-size:14px;font-weight:500;color:#334155;">Within 24–48 hours</p>
                    </td>
                  </tr></table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- CTA Button -->
        <tr>
          <td align="center" style="padding:0 36px 32px 36px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#005BFF;border-radius:8px;padding:14px 36px;">
                  <a href="https://www.brixs.space" style="text-decoration:none;font-size:14px;font-weight:600;color:#ffffff;letter-spacing:-0.01em;">Visit Brixs Platform &rarr;</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Divider -->
        <tr><td style="padding:0 36px;"><div style="height:1px;background:#e2e8f0;"></div></td></tr>
        
        <!-- Regards -->
        <tr>
          <td style="padding:28px 36px 20px 36px;">
            <p style="margin:0 0 4px 0;font-size:14px;color:#6b7280;">Best regards,</p>
            <p style="margin:0;font-size:16px;font-weight:600;color:#111827;">The Brixs Team</p>
          </td>
        </tr>

        <!-- Social Icons in Blue -->
        <tr>
          <td align="center" style="padding:0 36px 28px 36px;">
            <table cellpadding="0" cellspacing="0"><tr>
              <!-- X / Twitter -->
              <td style="padding:0 8px;">
                <a href="https://x.com/BrixsChain" style="text-decoration:none;">
                  <img src="https://img.icons8.com/ios-filled/30/005BFF/twitterx--v1.png" alt="X" width="24" height="24" style="display:block;"/>
                </a>
              </td>
              <!-- Telegram -->
              <td style="padding:0 8px;">
                <a href="https://t.me/BrixsChain" style="text-decoration:none;">
                  <img src="https://img.icons8.com/ios-filled/30/005BFF/telegram-app.png" alt="Telegram" width="24" height="24" style="display:block;"/>
                </a>
              </td>
              <!-- Discord -->
              <td style="padding:0 8px;">
                <a href="https://discord.gg/brixs" style="text-decoration:none;">
                  <img src="https://img.icons8.com/ios-filled/30/005BFF/discord-logo.png" alt="Discord" width="24" height="24" style="display:block;"/>
                </a>
              </td>
              <!-- GitHub -->
              <td style="padding:0 8px;">
                <a href="https://github.com/Brixs-Chain" style="text-decoration:none;">
                  <img src="https://img.icons8.com/ios-filled/30/005BFF/github.png" alt="GitHub" width="24" height="24" style="display:block;"/>
                </a>
              </td>
              <!-- Instagram -->
              <td style="padding:0 8px;">
                <a href="https://instagram.com/BrixsChain" style="text-decoration:none;">
                  <img src="https://img.icons8.com/ios-filled/30/005BFF/instagram-new.png" alt="Instagram" width="24" height="24" style="display:block;"/>
                </a>
              </td>
            </tr></table>
          </td>
        </tr>
        
        <!-- Legal Footer -->
        <tr>
          <td style="background:#f8fafc;padding:24px 36px;border-top:1px solid #e2e8f0;">
            <table width="100%">
              <tr>
                <td align="center" style="padding-bottom:12px;">
                  <a href="https://www.brixs.space/company/legal" style="font-size:12px;color:#005BFF;text-decoration:none;margin:0 12px;">Privacy Policy</a>
                  <span style="color:#cbd5e1;">|</span>
                  <a href="https://www.brixs.space/company/legal" style="font-size:12px;color:#005BFF;text-decoration:none;margin:0 12px;">Terms of Use</a>
                  <span style="color:#cbd5e1;">|</span>
                  <a href="https://docs.brixs.space" style="font-size:12px;color:#005BFF;text-decoration:none;margin:0 12px;">Documentation</a>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <p style="margin:0;font-size:11px;line-height:1.6;color:#94a3b8;">
                    &copy; ${new Date().getFullYear()} Brixs Chain. All rights reserved.<br/>
                    This is an automated confirmation. Please do not reply unless you need to add information to your inquiry.
                  </p>
                </td>
              </tr>
            </table>
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
