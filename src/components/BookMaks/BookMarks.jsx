import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 rounded-xl p-4">
        <div>
            <h3 className="text-4xl"> Reading Time: {readingTime}</h3>
        </div>
      <h2 className="text-2xl">Bookmarked Blogs:{bookmarks.length}</h2>
      {bookmarks.map((bookmark, index) => (
        <BookMark bookmark={bookmark} key={index}></BookMark>
      ))}
    </div>
  );
};

BookMarks.propTypes={
    bookmarks:PropTypes.object.isRequired,
    readingTime:PropTypes.number.isRequired,
}
export default BookMarks;
