import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
    id
  } = blog;
  return (
    <div className="my-6 space-y-3">
      <img className="rounded-lg w-full" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 ">
          <img className="w-14" src={author_img} alt="" />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">{author}</h3>
            <p className="text-2xl">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookMark(blog)}
            className="hover:scale-90 duration-300 text-2xl"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-xl">Title: {title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            {" "}
            <a>#{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="font-bold text-[#6047EC] underline"
        onClick={()=>handleMarkAsRead(reading_time,id)}
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkAsRead:PropTypes.func.isRequired,
};

export default Blog;
