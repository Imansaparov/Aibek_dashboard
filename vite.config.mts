import { defineConfig, loadEnv, ServerOptions } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");


  return {
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  };
});
