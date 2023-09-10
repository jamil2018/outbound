import { apiResponse } from "@/utils/httpUtils";
import prisma from "@/config/dbClient";
import { User } from "@/models/UserModel";

export async function GET() {
  try {
    const data: User[] = await prisma.user.findMany();
    return apiResponse(data, 200);
  } catch (error) {
    return apiResponse(error, 500);
  }
}

export async function POST() {}

export async function DELETE() {}

export async function PUT() {}
