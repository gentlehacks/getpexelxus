// import { NumberMap } from "framer-motion";
// import {brevo} from "./brevo";

// const CONTACT_TEMPLATE_ID = 123456;
// const WAITLIST_TEMPLATE_ID = 654321;

// export async function sendContactEmail(
//   name: string,
//   email: string,
//   message: string
// ) {
//   try {
//     await brevo.sendTransacEmail({
//       to: [{ email: process.env.CONTACT_EMAIL_TO as string }],
//       templateId: CONTACT_TEMPLATE_ID,
//       params: { name, email, message },
//     });
//     return { success: true };
//   } catch (error) {
//     console.error("Brevo Contact Email Error:", error);
//     return { success: false, error };
//   }
// }


// export async function sendWaitlistEmail(name: string, email: string) {
//   try {
//     await brevo.sendTransacEmail({
//       to: [{ email }], // send to user directly
//       templateId: WAITLIST_TEMPLATE_ID,
//       params: { name },
//     });
//     return { success: true };
//   } catch (error) {
//     console.error("Brevo Waitlist Email Error:", error);
//     return { success: false, error };
//   }
// }

// export async function sendDonateEmail(name: string, email: string, amount: number) {
//   try {
//     await brevo.sendTransacEmail({
//       to: [{ email }], // send to user directly
//       templateId: WAITLIST_TEMPLATE_ID,
//       params: { name, email, amount },
//     });
//     return { success: true };
//   } catch (error) {
//     console.error("Brevo Donate Email Error:", error);
//     return { success: false, error };
//   }
// }