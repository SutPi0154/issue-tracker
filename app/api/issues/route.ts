import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../../utils/db";
const createIssueSchema = z.object({
  title: z.string().min(4).max(255),
  description: z.string().min(4),
});

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
