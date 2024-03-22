import { useLoaderData } from "react-router-dom";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div className="container mx-auto px-4">
      <BlogHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
