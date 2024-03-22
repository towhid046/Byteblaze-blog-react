import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const ArticleHeader = ({ article, handelBookMark, toggle, setToggle }) => {
  const {
    title,
    reading_time_minutes,
    published_at,
    comments_count,
    public_reactions_count,
  } = article;


  return (
    <div className="mt-16">
      <h2 className="lg:text-5xl text-4xl font-bold mb-7">{title}</h2>
      <div className="">
        <ul className="space-y-2 mb-3">
          <li>
            <span>{reading_time_minutes} min read -</span>{" "}
            <span>{published_at.split("T")[0].split("-").join("/")}</span>
          </li>
          <li>
            <span>{comments_count} comments -</span>{" "}
            <span>{public_reactions_count} views</span>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link onClick={()=>setToggle(false)} className={`flex items-center gap-2 btn ${toggle || 'bg-info'}`}>
            <CiBookmark />
            <span >Content</span>
          </Link>
          <Link onClick={()=>setToggle(true)} className={`flex items-center gap-2 btn ${toggle && 'bg-info'}`}>
            <MdOutlineMenuBook />
            <span>Author</span>
          </Link>
          <Link
            onClick={() => handelBookMark(article)}
            className="btn rounded-full text-green-700 text-lg"
          >
            <MdOutlineBookmarkAdd />
          </Link>
        </div>
      </div>
    </div>
  );
};

ArticleHeader.propTypes = {
  article: PropTypes.object.isRequired,
  handelBookMark: PropTypes.func.isRequired,
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default ArticleHeader;
