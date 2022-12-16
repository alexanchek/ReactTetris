import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, "src/assets") },
      { find: '@components', replacement: path.resolve(__dirname, "src/components") },
      { find: '@configs', replacement: path.resolve(__dirname, "src/configs") },
      { find: '@definitions', replacement: path.resolve(__dirname, "src/configs/projectsDefinitions") },
      { find: '@envs', replacement: path.resolve(__dirname, "src/envs") },
      { find: '@hooks', replacement: path.resolve(__dirname, "src/hooks") },
      { find: '@layouts', replacement: path.resolve(__dirname, "src/layouts") },
      { find: '@pages', replacement: path.resolve(__dirname, "src/pages") },
      { find: '@services', replacement: path.resolve(__dirname, "src/services") },
      { find: '@store', replacement: path.resolve(__dirname, "src/store") },
      { find: '@styles', replacement: path.resolve(__dirname, "src/styles") },
      { find: '@utils', replacement: path.resolve(__dirname, "src/utils") },
      { find: '@UI', replacement: path.resolve(__dirname, "src/components/UI") },
    ]
  }
})
