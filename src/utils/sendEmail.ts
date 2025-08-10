// utils/mailer.ts
import { Resend } from 'resend'
import { welcomeEmailTemplate } from './welcomeEmailTemplate';
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(name: string, email: string) {
  try {
      await resend.emails.send({
        from: "Pexelxus <noreply@pexelxus.vercel.app>",
        to: email,
        subject: "🎉 Welcome to Pexelxus",
        html: welcomeEmailTemplate(name),
      });
    } catch (error) {
      console.log(`Failed to send email to ${name} --- Erorr: ${error}`);
    }

};
