export async function SendDonatedEmail({
  name,
  email,
  amount,
}: {
  name: string
  email: string
  amount: number
}) {
  try {
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { name: "PexelXus", email: "noreply@pexelxus.com" },
        to: [{ email, name }],
        subject: "Thank You for Your Donation ❤️",
        htmlContent: `
          <h2>Dear ${name},</h2>
          <p>We deeply appreciate your generous donation of <b>₦${amount}</b>.</p>
          <p>Your support fuels our mission at <b>PexelXus</b> 🚀.</p>
          <p>Best regards,<br/>The PexelXus Team</p>
        `,
      }),
    })
    console.log("✅ Thank-you email sent to", email)
  } catch (err) {
    console.error("❌ Failed to send thank-you email:", err)
  }
}
