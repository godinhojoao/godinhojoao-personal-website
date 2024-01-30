import { BlogPost } from "@/app/types/BlogPost";
import Image from "next/image";
import Link from "next/link";

export function Card(blogPost: BlogPost) {
  return (
    <div className="md:w-1/2 p-8 sm:p-4">
      <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-white to-indigo-100 overflow-hidden">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
          src={blogPost.cover_image}
          alt={`Blog post title: ${blogPost.title}`}
          width={1000}
          height={420}
          loading="lazy"
        />
        <div className="p-6">
          <span className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 mt-1">
            {blogPost.tags}
          </span>
          <h3 className="title-font text-lg font-medium text-black mb-3">
            {blogPost.title}
          </h3>
          <p className="leading-relaxed text-black mb-3">
            {blogPost.description}
          </p>
          <div className="flex items-center flex-wrap">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={blogPost.url}
              className="cursor-pointer text-white text-sm font-semibold bg-[#004fff] hover:bg-[#033091] hover:shadow-cla-blue hover:scale-105 transition-all duration-300 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg"
            >
              Ler mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
