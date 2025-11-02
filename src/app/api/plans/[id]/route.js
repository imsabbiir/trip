// /app/api/plans/[id]/route.js
import dbConnect from "@/lib/mongoose";
import Plans from "@/model/plans";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params; 

  try {
    await dbConnect();
    const plan = await Plans.findById(id);

    if (!plan) {
      return NextResponse.json({ message: "Plan not found" }, { status: 404 });
    }

    return NextResponse.json({ plan });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching plan", error: error.message },
      { status: 500 }
    );
  }
}
