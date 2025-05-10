<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { toast, Toaster } from "sonner";
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './pages/About.tsx'
>>>>>>> 09dbc9d621a1e13c10ade555a0205851da001fb3

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => {
      console.log(err, "err");

      if (
        err?.message === "invalid signature" ||
        err?.message === "Unauthenticated." ||
        err?.message === "jwt expired"
      ) {
        toast.warning("Oops!! Kindly Login");
        window.location.href = "/auth/login";
      }
    },
  }),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
<<<<<<< HEAD
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" theme="system" richColors />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
=======
    <App />
    <About/>
  </StrictMode>,
)
>>>>>>> 09dbc9d621a1e13c10ade555a0205851da001fb3
