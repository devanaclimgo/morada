import { QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from "@tanstack/react-router";
import { Route } from "./route";
import { Toaster } from "sonner";
import { MoradaProvider } from "../lib/store";
import { ThemeProvider } from "../lib/theme";

export default function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MoradaProvider>
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
          <Toaster position="top-center" />
        </MoradaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}