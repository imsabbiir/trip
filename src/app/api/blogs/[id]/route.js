import dbConnect from "@/lib/mongoose";
import blogs from "@/model/blogs";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    await dbConnect();
    const Blog = await blogs.findById(id);
    return NextResponse.json(Blog)
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching blog", error },
      { status: 500 }
    );
  }
}
