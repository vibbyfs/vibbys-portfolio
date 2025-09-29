import { NextResponse } from "next/server";

export async function GET() {
  const num = process.env.WHATSAPP_NUMBER;
  if (!num) return NextResponse.json({ error: "no-number" }, { status: 500 });

  // Optional: add rate limiting, captcha check, token, atau verification di sini.
  return NextResponse.redirect(`https://wa.me/${num}`);
}
