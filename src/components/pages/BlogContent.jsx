import React from "react";
import Blog from "../Blog";
const BlogContent = () => {
  return (
    <>
      <p className="mt-[50px] font-bold text-6xl xs:text-[3.5rem] sm:text-[5rem] md:text-[7.97rem] lg:text-[10rem] xl:text-[11.4rem] border-t-2 border-b-2 w-full flex justify-center">
        THE BLOG
      </p>
      <div className="mt-[60px] font-semibold text-[24px] ">
        Recent blog posts
        <div className="mt-[32px] grid grid-cols-1 lg:grid-cols-2 gap-7">
          <Blog
            title="UX review presentations"
            author="Olivia Rhye"
            date="1 Jan 2023"
            description="How do you create compelling presentations that wow your colleagues and impress your managers?"
            imageUrl="https://image.cdn2.seaart.ai/2023-10-21/20503900767426565/3e80dee0bdb3482f1ffd767712ec4c24cd9e5f63_high.webp"
            tags={["Design", "Research", "Presentation"]}
            slug="ux-review-presentations"
            category="Design"
          />
          <Blog
            title="UX review presentations"
            author="Olivia Rhye"
            date="1 Jan 2023"
            description="How do you create compelling presentations that wow your colleagues and impress your managers?"
            imageUrl="https://image.cdn2.seaart.ai/2023-10-21/20503900767426565/3e80dee0bdb3482f1ffd767712ec4c24cd9e5f63_high.webp"
            tags={["Design", "Research", "Presentation"]}
            slug="ux-review-presentations"
            category="Design"
          />
        </div>
        <div className="mt-[32px] ">
          <Blog
            title="UX review presentations"
            author="Olivia Rhye"
            date="1 Jan 2023"
            description="How do you create compelling presentations that wow your colleagues and impress your managers?"
            imageUrl="https://image.cdn2.seaart.ai/2023-10-21/20503900767426565/3e80dee0bdb3482f1ffd767712ec4c24cd9e5f63_high.webp"
            tags={["Design", "Research", "Presentation"]}
            slug="ux-review-presentations"
            category="Design"
          />
        </div>
      </div>
      <div className="mt-[60px] font-semibold text-[24px] ">
        All blog posts{" "}
        <div className="mt-[32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <Blog
            title="UX review presentations"
            author="Olivia Rhye"
            date="1 Jan 2023"
            description="How do you create compelling presentations that wow your colleagues and impress your managers?"
            imageUrl="https://image.cdn2.seaart.ai/2023-10-21/20503900767426565/3e80dee0bdb3482f1ffd767712ec4c24cd9e5f63_high.webp"
            tags={["Design", "Research", "Presentation"]}
            slug="ux-review-presentations"
            category="Design"
          />
          <Blog
            title="UX review presentations"
            author="Olivia Rhye"
            date="1 Jan 2023"
            description="How do you create compelling presentations that wow your colleagues and impress your managers?"
            imageUrl="https://image.cdn2.seaart.ai/2023-10-21/20503900767426565/3e80dee0bdb3482f1ffd767712ec4c24cd9e5f63_high.webp"
            tags={["Design", "Research", "Presentation"]}
            slug="ux-review-presentations"
            category="Design"
          />
          <Blog
            title="UX review presentations"
            author="Olivia Rhye"
            date="1 Jan 2023"
            description="How do you create compelling presentations that wow your colleagues and impress your managers?"
            imageUrl="https://image.cdn2.seaart.ai/2023-10-21/20503900767426565/3e80dee0bdb3482f1ffd767712ec4c24cd9e5f63_high.webp"
            tags={["Design", "Research", "Presentation"]}
            slug="ux-review-presentations"
            category="Design"
          />
          <Blog
            title="UX review presentations"
            author="Olivia Rhye"
            date="1 Jan 2023"
            description="How do you create compelling presentations that wow your colleagues and impress your managers?"
            imageUrl="https://image.cdn2.seaart.ai/2023-10-21/20503900767426565/3e80dee0bdb3482f1ffd767712ec4c24cd9e5f63_high.webp"
            tags={["Design", "Research", "Presentation"]}
            slug="ux-review-presentations"
            category="Design"
          />
          <Blog
            title="UX review presentations"
            author="Olivia Rhye"
            date="1 Jan 2023"
            description="How do you create compelling presentations that wow your colleagues and impress your managers?"
            imageUrl="https://image.cdn2.seaart.ai/2023-10-21/20503900767426565/3e80dee0bdb3482f1ffd767712ec4c24cd9e5f63_high.webp"
            tags={["Design", "Research", "Presentation"]}
            slug="ux-review-presentations"
            category="Design"
          />
          <Blog
            title="UX review presentations"
            author="Olivia Rhye"
            date="1 Jan 2023"
            description="How do you create compelling presentations that wow your colleagues and impress your managers?"
            imageUrl="https://image.cdn2.seaart.ai/2023-10-21/20503900767426565/3e80dee0bdb3482f1ffd767712ec4c24cd9e5f63_high.webp"
            tags={["Design", "Research", "Presentation"]}
            slug="ux-review-presentations"
            category="Design"
          />
        </div>
      </div>
    </>
  );
};

export default BlogContent;
