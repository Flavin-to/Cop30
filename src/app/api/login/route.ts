import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "segredo");

export async function POST(req: NextRequest) {
  const { user, pass } = await req.json();

  if (user === "COP30" && pass === "cop30admin123") {
    const jwt = await new SignJWT({ role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("2h")
      .sign(secret);

    const response = NextResponse.json({ ok: true });
    response.cookies.set("token", jwt, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 2,
    });
    return response;
  }

  return NextResponse.json({ ok: false, error: "Usuário ou senha inválidos." }, { status: 401 });
}
