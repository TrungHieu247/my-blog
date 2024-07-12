import { MdArrowOutward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const tagsData = {
  Design: {
    backgroundColor: "bg-[#F9F5FF]",
    textColor: "text-[#6941C6]",
  },
  Research: {
    backgroundColor: "bg-green-500",
    textColor: "text-white",
  },
  Presentation: {
    backgroundColor: "bg-yellow-500",
    textColor: "text-black",
  },
};

function Blog({ title, author, date, description, imageUrl, tags, slug }) {
  return (
    <div className="">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-[#6941C6] text-[14px] mb-2 flex gap-1 items-center font-semibold">
          {author} <GoDotFill /> {date}
        </p>
        <h2 className="text-[24px] font-semibold mb-2">
          <a href={`/blog/${slug}`} className="w-full flex justify-between">
            {title} <MdArrowOutward className="" />
          </a>
        </h2>
        <p className="text-[#667085] dark:text-[#C0C5D0] mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-7">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 rounded-full text-xs ${tagsData[tag]?.backgroundColor} ${tagsData[tag]?.textColor}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Blog;
