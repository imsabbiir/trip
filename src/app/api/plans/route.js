
import dbConnect from "@/lib/mongoose";
import Plans from "@/model/plans";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();


    const plans = await Plans.find({});

    // Fetch top 6 destinations sorted by rating descending
    const topRatedPlans = await Plans.find({})
      .limit(6);

    // Return both lists in one response
    return NextResponse.json({
      plans,
      topRatedPlans,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching destinations", error },
      { status: 500 }
    );
  }
}
