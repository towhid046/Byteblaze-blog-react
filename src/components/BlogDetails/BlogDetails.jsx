import { useLoaderData } from "react-router-dom";
import ArticleHeader from "./../ArticleHeader/ArticleHeader";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const BlogDetails = ({ handelBookMark }) => {
  const [toggle, setToggle] = useState(false);

  const article = useLoaderData();
  
  const {
    type_of,
    id,
    title,
    description,
    readable_publish_date,
    slug,
    path,
    url,
    // comments_count,
    // public_reactions_count,
    collection_id,
    published_timestamp,
    positive_reactions_count,
    cover_image,
    social_image,
    canonical_url,
    created_at,
    edited_at,
    crossposted_at,
    published_at,
    last_comment_at,
    reading_time_minutes,
    tag_list,
    tags,
    body_html,
    body_markdown,
    user,
  } = article;

  return (
    <article className="max-w-3xl mx-auto px-4">
      <ArticleHeader
        article={article}
        handelBookMark={handelBookMark}
        setToggle={setToggle}
        toggle={toggle}
      />

      <main className=" my-5">
        {!toggle ? (
          <div className="border-2 p-4">
            <div>
              <img className="w-full rounded-lg" src={cover_image} alt="" />
            </div>
            <ul className="flex gap-10 py-8">
              {tags.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {body_html}
          </div>
        ) : (
          <div className="py-10 rounded-xl shadow-lg">
            <div className="flex flex-col justify-center items-center text-center mx-auto space-y-3">
              <img
                className="rounded-full"
                src={user?.profile_image_90}
                alt=""
              />
              <h2>{user?.name}</h2>
              <p className="border-b-2 pb-4">
                <strong>Username: </strong> <span>{user?.username}</span>
              </p>
              <ul className="flex items-center pt-2 justify-center gap-8">
                <FaGithub />
                <FaGithub />
                <FaGithub />
              </ul>
            </div>
          </div>
        )}
      </main>
    </article>
  );
};

BlogDetails.propTypes = {
  handelBookMark: PropTypes.func.isRequired,
};
export default BlogDetails;
