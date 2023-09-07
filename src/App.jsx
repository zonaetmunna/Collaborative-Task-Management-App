import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/Spinner/Loading";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { routes } from "./routes/routes";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <Suspense fallback={<Loading />}>
            <Toaster position="top-center" reverseOrder={false} />
            <RouterProvider router={routes} />
          </Suspense>
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
