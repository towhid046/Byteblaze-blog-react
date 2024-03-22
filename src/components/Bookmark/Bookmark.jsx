import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const Bookmark = ({ bookmark, handelRemoveBookmark }) => {
  const { title, description, id, social_image } = bookmark;
  return (
    <div className="card card-compact bg-base-100 shadow-xl relative">
      <figure>
        <img
          src={social_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={()=>handelRemoveBookmark(id)} className="text-xl absolute -right-4 -top-4 btn rounded-full">
        <MdDeleteForever />
      </button>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  handelRemoveBookmark: PropTypes.func.isRequired,
};

export default Bookmark;
