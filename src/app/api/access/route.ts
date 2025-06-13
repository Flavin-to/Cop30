import { NextRequest, NextResponse } from "next/server";

type Access = { ip: string; timestamp: string };

let accesses: Access[] = [];

export async function GET() {
  // Retorna os acessos dos últimos 5 minutos
  const now = Date.now();
  accesses = accesses.filter(
    (a) => now - new Date(a.timestamp).getTime() < 5 * 60 * 1000
  );
  return NextResponse.json(accesses);
}

export async function POST(req: NextRequest) {
  // Tenta pegar o IP dos headers
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "desconhecido";
  const timestamp = new Date().toISOString();
  accesses.push({ ip: String(ip), timestamp });
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  accesses = [];
  return NextResponse.json({ ok: true });
}