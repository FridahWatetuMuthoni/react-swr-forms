import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import "./dist/output.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </GlobalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
