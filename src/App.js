import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Browse from "./components/Browse";

function App() {

  const appRouter= createBrowserRouter([
    {
      path:"/",
      element: <Body />,
    },
    {
      path:"/Browse",
      element: <Browse />,
    }
  ])
  return (
  <div>
    <RouterProvider router={appRouter}/>

    
  </div>
  )
}

export default App;
