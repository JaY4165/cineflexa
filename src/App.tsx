import Navbar from "./components/navComponents/Navbar";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage />, index: true },
        { path: "/movies", element: <MoviesPage /> },
        { path: "/series", element: <SeriesPage /> },
        { path: "/watchlist" },
        { path: "/movies/:movieId", element: <MovieDetailsPage /> },
      ],
    },
  ]);

  return (
    <div className="App overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
