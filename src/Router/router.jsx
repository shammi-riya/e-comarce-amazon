import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Shared/Pages/Home/Home";



    const router = createBrowserRouter([
        {
          path: "/",
          element: <App/>,
        //   errorElement: <ErrorPage />,
          children: [
            {
              path: "/",
              element: <Home/>,
            },
          ],
        },
      ]);


export default router;