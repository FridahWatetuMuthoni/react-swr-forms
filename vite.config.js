import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: "C:/Users/frida/Desktop/ssl-certificate/key.pem",
      cert: "C:/Users/frida/Desktop/ssl-certificate/cert.pem",
    },
  },
});
