import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import Bookmarks from './pages/Bookmarks/Bookmarks';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      errorElement: <NotFound/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
            path: '/bookmarks',
            element: <Bookmarks/>
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
