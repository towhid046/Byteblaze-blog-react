import { useLoaderData } from "react-router-dom";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import Blog from "../../components/Blog/Blog";
import  PropTypes  from 'prop-types';
import { Helmet } from 'react-helmet';

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div className="container mx-auto px-4">
      <Helmet>
        <title>Byteblaze | Blogs</title>
      </Helmet>
      <BlogHeader/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {}
export default Blogs;
