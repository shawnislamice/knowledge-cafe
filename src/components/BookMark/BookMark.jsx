import PropTypes from "prop-types";
const BookMark = ({ bookmark }) => {
  const {title}=bookmark
    return (
    <div className="bg-slate-200 p-4 mx-1 my-2 rounded-xl w-full">
      <h1 className="text-xl">{title}</h1>
    </div>
  );
};

BookMark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};
export default BookMark;
