import React from "react";
import Title from "../Title";
import BlogCard from "./BlogCard";
async function  Blogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  const limitedBlogs = data.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <Title title={"Inspiration"} subTitle={"Blog"} />
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {limitedBlogs?.map((blog) => {
          return (
            <BlogCard
              key={blog?._id}
              blog={blog}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
