import { useLoaderData } from "react-router-dom";
import ArticleHeader from "./../ArticleHeader/ArticleHeader";
import PropTypes  from 'prop-types';

const BlogDetails = ({ handelBookMark}) => {
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
  } = article;

  return (
    <article className="max-w-3xl mx-auto px-4">

      <ArticleHeader article={article}  handelBookMark={handelBookMark} />

      <main className="border-2 p-4 my-5">
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
      </main>
    </article>
  );
};

BlogDetails.propTypes = {
    handelBookMark: PropTypes.func.isRequired,
}
export default BlogDetails;
