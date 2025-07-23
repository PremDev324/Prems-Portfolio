import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  // Optional: run dev-only logic here
  if (isDev) {
    console.log("Running in development mode");
    // You can also set variables or configs conditionally
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      // no dev-only plugin here
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // You can conditionally add more config options
    define: {
      __DEV__: isDev,
    },
  };
});
