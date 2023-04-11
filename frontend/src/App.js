import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";

import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Join from "./components/Join";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path:"/join",
    element:<Join/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
