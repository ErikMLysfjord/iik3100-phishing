import EmailTemplate from "../../Template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const template = EmailTemplate(body);
  try {
    const data = await resend.emails.send({
      from: "IIK3100 <onboarding@resend.dev>",
      to: "erik.menkin@lysfjord.no",
      subject: "You got a phish!",
      react: template,
      text: "Someone got phished!",
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
