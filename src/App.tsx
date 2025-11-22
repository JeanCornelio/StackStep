import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./router/routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
