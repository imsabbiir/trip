
import Image from "next/image";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import Logo from "@/images/logo.png";
import BlogCard from "@/components/Blog/BlogCard";
import Link from "next/link";

async function page({params}) {

  const { id } = params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`, {
    cache: "no-store", 
  });
  const blog = await response.json();

  console.log("blog", blog)
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    cache: "no-store", 
  });
  const blogs = await res.json();
  const relatedBlogs = blogs.filter((b) => b._id !== id).slice(0, 3);
  console.log("RelatedBlogs", relatedBlogs)



  if (!blog) return <p className="text-center mt-20">Blog not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-28">
      <div className="w-9/10 mx-auto bg-white overflow-hidden rounded-2xl">
        {/* Featured Image */}
        <div className="relative w-full h-96 overflow-hidden group">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="w-full h-full bg-[#000000a6] absolute top-0 left-0  flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{blog.title}</h1>
            <h3 className="text-lg text-gray-300 mb-4">{blog.subtitle}</h3>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-8 md:p-12">
          {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
          <h3 className="text-lg text-gray-500 mb-4">{blog.subtitle}</h3> */}

          <div className="flex items-center text-gray-500 text-sm mb-6 space-x-4">
            <span className="flex items-center gap-1">
              <FaUser /> {blog.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt /> {blog.date}
            </span>
          </div>

          <p className="text-lg text-gray-700 mb-6">{blog.excerpt}</p>

          {/* Blog Full Content */}
          <div className="prose prose-lg max-w-none text-gray-800">
            <ReactMarkdown
              components={{
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-xl font-bold text-[#555] mt-6 mb-2"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-4 text-gray-700" {...props} />
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Author / Share Section */}
        <div className="p-8 md:p-12 bg-gray-50 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              alt={blog.author}
              width={60}
              height={60}
              className=""
            />
            <div>
              <p className="font-bold">{blog.author}</p>
              <p className="text-gray-500 text-sm">Travel Blogger</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Share
            </button>
            <Link
              href={'/blogs'}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
            >
              Back
            </Link>
          </div>
        </div>
        {relatedBlogs.length > 0 && (
          <div className="p-8 md:p-12 bg-gray-100 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible">
              {relatedBlogs.map((post) => (
                <BlogCard key={post?._id} blog={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
