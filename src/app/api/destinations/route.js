import Destination from "@/model/destinations";
import dbConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    // Fetch all destinations sorted by title
    const allDestinations = await Destination.find({}).sort({ title: 1 });

    // Fetch top 6 destinations sorted by rating descending
    const topRatedDestinations = await Destination.find({})
      .sort({ rating: -1 })
      .limit(6);

    // Return both lists in one response
    return NextResponse.json({
      allDestinations,
      topRatedDestinations,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching destinations", error },
      { status: 500 }
    );
  }
}
