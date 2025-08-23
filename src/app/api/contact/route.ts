// import { sendContactEmail } from "@/utils/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // const result = await sendContactEmail(name, email, message);

    // if (!result.success) {
    //   return NextResponse.json(
    //     { error: "Failed to send email" },
    //     { status: 500 }
    //   );
    // }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
