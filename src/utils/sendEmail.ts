import SibApiV3Sdk from "@sendinblue/client";
import { welcomeEmailTemplate } from './welcomeEmailTemplate';

export async function sendWelcomeEmail(name: string, email: string) {

  const brevo = new SibApiV3Sdk.TransactionalEmailsApi();
  brevo.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

  try {
      await brevo.sendTransacEmail({
        sender: { email: process.env.BREVO_SENDER_EMAIL!, name: process.env.BREVO_SENDER_NAME! },
        to: [{ email }],
        subject: "🎉 Welcome to the PexelXus!",
        htmlContent: welcomeEmailTemplate(name),
      });
      console.log("✅ Email sent");
    } catch (error) {
      console.log("❌ Email sending failed: ", error);
    }

};
