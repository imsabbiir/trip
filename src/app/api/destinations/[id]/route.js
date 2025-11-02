import Destination from "@/model/destinations";
import dbConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    await dbConnect();

    // Find destination by slug
    const destination = await Destination.findById(id);

    if (!destination) {
      return NextResponse.json(
        { message: "Destination not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(destination);
  } catch (error) {
    console.error("Error fetching destination:", error);
    return NextResponse.json(
      { message: "Error fetching destination" },
      { status: 500 }
    );
  }
}
