import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../component/About";
import Contact from "../component/Contact";
import Projects from "../component/Projects";



const routes =createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
          {
            path:'/about',
            element:<About></About>
          },
          {
            path:'/contact',
            element:<Contact></Contact>
          },
          {
            path:'/projects',
            element:<Projects></Projects>
          }
          
        ]
      },
]);
export default routes;