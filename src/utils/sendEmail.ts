// utils/mailer.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(name: string, email: string) {
  try {
      await resend.emails.send({
        from: "Pexelxus <noreply@pexelxus.com>",
        to: email,
        subject: "🎉 Welcome to the Pexelxus Waitlist!",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
            <h2 style="color: #4CAF50;">Welcome to Pexelxus 🎉</h2>
            <p style="font-size: 16px; color: #555;">
              Hi <strong>${name}</strong>,<br><br>
              You’ve successfully joined our waitlist! 🚀
              We’re thrilled to have you with us and can’t wait to share updates as we prepare for launch.
            </p>
            <a href="https://getpexelxus.vercel.app" 
               style="display: inline-block; padding: 12px 20px; background-color: #4CAF50; color: white; 
               border-radius: 5px; text-decoration: none; font-weight: bold;">
               Visit Our Website
            </a>
            <p style="margin-top: 20px; font-size: 14px; color: #888;">
              You’re receiving this email because you joined the Pexelxus waitlist.<br>
              If this wasn’t you, please ignore this message.
            </p>
          </div>
        `
      });
    } catch (error) {
      console.log(`Failed to send email to ${name} --- Erorr: ${error}`);
    }

};
