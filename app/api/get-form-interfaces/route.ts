import { formFields } from "@/constants/form-fields";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(formFields);
}
