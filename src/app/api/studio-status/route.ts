import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Try to get from database first
    const status = await prisma.studioStatus.findFirst({
      orderBy: { updatedAt: "desc" },
    });

    if (status) {
      return NextResponse.json(status);
    }

    // Fallback to default
    return NextResponse.json({
      status: "ACTIVE",
      location: "WHOLE BODY STUDIOS",
      updatedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({
      status: "OFFLINE",
      location: "",
      updatedAt: new Date().toISOString(),
    });
  } finally {
    await prisma.$disconnect();
  }
}

// Admin endpoint to update status (protect with auth later)
export async function PATCH(req: NextRequest) {
  try {
    const data = await req.json();
    const { status, location } = data;

    const existing = await prisma.studioStatus.findFirst();
    const updated = existing
      ? await prisma.studioStatus.update({
          where: { id: existing.id },
          data: { status, location, updatedAt: new Date() },
        })
      : await prisma.studioStatus.create({ data: { status, location } });

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
