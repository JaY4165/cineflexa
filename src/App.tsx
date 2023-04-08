import Navbar from "./components/navComponents/Navbar";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [{ path: "/", element: <HomePage />, index: true }],
    },
  ]);

  return (
    <div className="App overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
