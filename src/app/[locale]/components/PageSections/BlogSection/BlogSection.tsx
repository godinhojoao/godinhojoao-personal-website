"use client";
import { useState } from "react";
import { Card } from "../../Card/Card";
import { BlogPost } from "@/app/[locale]/types/BlogPost";

interface BlogSectionProps {
  blogPosts: BlogPost[];
  translations: any;
}

const BlogSection = ({ blogPosts, translations }: BlogSectionProps) => {
  const initialPostsToShow = 2;
  const [postsToShow, setPostsToShow] = useState(initialPostsToShow);

  const handleSeeMoreClick = () => {
    setPostsToShow((currentPosts) => currentPosts + initialPostsToShow);
  };

  return (
    <section
      id="blog"
      className="relative text-black lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-6 bg-[#091a41]"
    >
      <div
        className="absolute inset-0 bg-gradient-to-tr from-[#003ec0] to-[#808cff] opacity-10"
        style={{
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      ></div>

      <h2 className="text-3xl text-center font-semibold mb-8 text-white relative z-10">
        Blog
      </h2>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap -m-4">
          {blogPosts.slice(0, postsToShow).map((post, index) => (
            <Card key={index} blogPost={post} translations={translations} />
          ))}
        </div>
        {postsToShow < blogPosts.length && (
          <div className="flex justify-center mt-6">
            <button
              className="px-3.5 py-2.5 text-white text-sm font-semibold bg-[#004fff] hover:bg-[#033091] hover:shadow-cla-blue hover:scale-105 transition-all duration-300 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg"
              onClick={handleSeeMoreClick}
            >
              {translations.seeMore}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
