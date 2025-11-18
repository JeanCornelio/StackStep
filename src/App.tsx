import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./router/routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />;
      <ReactQueryDevtools initialIsOpen={false} />
       <Toaster />
    </QueryClientProvider>
  );
}

export default App;
