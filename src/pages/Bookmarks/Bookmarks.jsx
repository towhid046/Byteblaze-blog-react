import PropTypes from "prop-types";
import Bookmark from "../../components/Bookmark/Bookmark";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Bookmarks = ({ bookmarks, handelRemoveBookmark }) => {
  return (
    <div className="container px-4 mx-auto my-12">
      <Helmet>
        <title>Byteblaze | Bookmarks</title>
      </Helmet>
      {bookmarks.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {bookmarks.map((bookmark) => (
            <Bookmark
              key={bookmark.id}
              bookmark={bookmark}
              handelRemoveBookmark={handelRemoveBookmark}
            />
          ))}
        </div>
      ) : (
          <div className="space-y-4 h-[75vh]  flex justify-center items-center flex-col">
          <h2 className="text-2xl font-semibold">No Bookmarks Found</h2>
          <Link to={'/blogs'} className="btn btn-error">Read Blogs</Link>
          </div>
      )}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  handelRemoveBookmark: PropTypes.func.isRequired,
};

export default Bookmarks;
