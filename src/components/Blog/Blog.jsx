import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { social_image, description, title } = blog;
  return (
    <div className="p-4 border-2 hover:border-info cursor-pointer transition hover:scale-105">
      <div>
        <img className="rounded-lg w-full" src={social_image} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-8">{title}</h2>
        <p className="mb-5">
          <small>20/ 03/2024</small>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
