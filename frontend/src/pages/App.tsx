import {RouterProvider} from "react-router-dom";
import Routers from "../routers";
import {QueryProvider} from "../providers/query-provider";
export default function App() {
  return (
    <QueryProvider>
      <RouterProvider router={Routers} />
    </QueryProvider>
  );
}