import Navbar from "./components/navComponents/Navbar";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Navbar />,
  //     errorElement: <ErrorPage />,
  //     children: [
  //       {
  //         path: "/",
  //         index: true,
  //         element: <HomePage />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <div className="App overflow-x-hidden">
      {/* <RouterProvider router={router} /> */}
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
