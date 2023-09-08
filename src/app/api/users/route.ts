import { apiResponse } from "@/utils/httpUtils";
import prisma from "@/config/dbClient";

interface Data {
  name: String | null;
  email: String;
  id: Number;
}

export async function GET() {
  try {
    const data: Data[] = await prisma.user.findMany();
    return apiResponse(data, 200);
  } catch (error) {
    return apiResponse(error, 500);
  }
}
