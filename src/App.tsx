import { Suspense } from "react";
import { Toaster } from "sonner";
import {
  createBrowserRouter,
  // Navigate,
  RouterProvider,
} from "react-router-dom";
import { ScreenLoader } from "./components/shared/ScreenLoader";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])


function App() {
  return (
    <>
      <Suspense fallback={<ScreenLoader />}>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
