import PropTypes from "prop-types";
import Bookmark from "../../components/Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, handelRemoveBookmark }) => {
  return (
    <div className="container px-4 mx-auto my-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {bookmarks.map((bookmark) => (
          <Bookmark 
          key={bookmark.id} 
          bookmark={bookmark}
          handelRemoveBookmark={handelRemoveBookmark}
          />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  handelRemoveBookmark: PropTypes.func.isRequired,
};

export default Bookmarks;
