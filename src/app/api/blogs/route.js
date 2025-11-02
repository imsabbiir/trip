import dbConnect from "@/lib/mongoose";
import blogs from "@/model/blogs";
import { NextResponse } from "next/server";

export async function GET(req) {
    try{
        await dbConnect();
        const Blogs = await blogs.find();
        return NextResponse.json(Blogs);
    }catch(error){
        return NextResponse.json(
            {message: "fetching blog is unsuccess"},
            {status: 500}
        )
    }
}