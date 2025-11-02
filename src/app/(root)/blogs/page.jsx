import BlogCard from "@/components/Blog/BlogCard";
import Title from "@/components/Title";
import React from "react";


async function page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  return (
    <div className="min-h-screen">
      <div className="w-9/10 mx-auto pt-30 pb-20">
        <Title title={"Inspiration"} subTitle={"Blog"} />
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {data?.map((blog) => {
            return (
              <BlogCard
                key={blog?._id}
                blog={blog}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
