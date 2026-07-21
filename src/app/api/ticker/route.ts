import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const entries = await prisma.tickerEntry.findMany({
      where: { active: true },
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    if (entries.length === 0) throw new Error("No entries");

    return NextResponse.json(entries);
  } catch {
    // Fallback to hardcoded for now
    return NextResponse.json([
      {
        text: "SANDĀBĀDO • VOL. 1 — RECORDING",
        isSystemLog: false,
        active: true,
      },
      {
        text: "SYS: SYNC LEAD GENERATED — BRAND CAMPAIGN",
        isSystemLog: true,
        active: true,
      },
      {
        text: "LIVING EARTH • COMPILATION — MIXING",
        isSystemLog: false,
        active: true,
      },
      {
        text: "SARAH VEYA • MEMORY EP — MASTERING",
        isSystemLog: false,
        active: true,
      },
    ]);
  } finally {
    await prisma.$disconnect();
  }
}
