import { createBrowserRouter } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '1',
        element: <PageOne />,
      },
      {
        path: '2',
        element: <PageTwo />,
      },
      {
        path: '3',
        element: <PageThree />,
      },
    ]
  },
])
