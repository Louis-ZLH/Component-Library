import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import Error from "./pages/Error";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { AppLayout } from "./ui/layout/AppLayout";
import Docs from "./pages/doc/Docs";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/layout/ErrorFallback";
import { docRoutes } from "./pages/pageInfo";
import ThemeListener from "./ThemeListener";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary
        fallbackRender={ErrorFallback}
        onReset={() => {
          window.location.replace("/");
        }}
      >
        <AppLayout />
      </ErrorBoundary>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/docs",
        element: <Docs />,
        children: [
          {
            path: "",
            element: <div>Home</div>,
          },
          ...docRoutes,
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <ThemeListener />
      <Toaster
        position="top-center"
        gutter={20}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
