import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import NotFound from "./pages/NotFound/NotFound";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const handelBookMark = (article) => {
    const existedItem = bookmarks.find(bookmark=> bookmark.id === article.id);
    if(!existedItem){
      setBookmarks((b) => [...b, article]);
      toast.success('Item Added!!')
    } else{
      toast.error('Item exist')
    }
  };

  const handelRemoveBookmark = (id) => {
    const filteredItems = bookmarks.filter(bookmark=> bookmark.id !== id);
    toast.info('Item Removed');
    setBookmarks(filteredItems);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blogs",
          loader: () => fetch("https://dev.to/api/articles"),
          element: <Blogs />,
        },
        {
          path: "/blogs/:blogId",
          loader: ({ params }) =>
            fetch(`https://dev.to/api/articles/${params.blogId}`),
          element: <BlogDetails handelBookMark={handelBookMark} />,
        },
        {
          path: "/bookmarks",
          element: <Bookmarks handelRemoveBookmark={handelRemoveBookmark} bookmarks={bookmarks} />,
        },
        {
          path: '/sign-up',
          element: <SignUp/>
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
};

export default App;
