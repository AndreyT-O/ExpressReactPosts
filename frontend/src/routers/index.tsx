import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Articles from "../pages/article";
import Error404 from "../pages/errors/404";
import {api} from "../modules/axios";
import {redirect} from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/articles/:id",
    element: <Articles />,
    // loader: async({request, params}) => {
    //   return api(`/articles/${params.id}`).then(({data}) => {
    //     const arr = data.data as [];
    //
    //     if(!arr.length) return false;
    //
    //     return true;
    //   })
    // },
  },
  {
    path: "*",
    element: <Error404 />,
  }
])

export default routers