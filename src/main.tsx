import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { RecoilRoot } from "recoil";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme.ts";

const GlobalStyle = createGlobalStyle`
${reset}`;
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
const client = new QueryClient();

root.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ThemeProvider>
);
