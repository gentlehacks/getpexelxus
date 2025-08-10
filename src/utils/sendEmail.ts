// utils/mailer.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(name: string, email: string) {
  try {
    await resend.emails.send({
      from: 'Pexelxus <onboarding@resend.dev>',
      to: email,
      subject: '🎉 Welcome to Pexelxus!',
      html: `<strong>Hi ${name},</strong><br />Thanks for joining our waitlist. We’ll keep you posted!`,
    });
    console.log("✅ Email sent successfully.");
  } catch (err) {
    console.error("❌ Email sending error:", err);
  }

}
