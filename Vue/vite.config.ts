
// vite.config.ts

import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
// Using Environment Variables in Config
export default defineConfig(({ command, mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '')

    console.log("Title:", env.VITE_APP_TITLE);
    console.log("Mode:", mode);
    console.log("Command:", command) 

    return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [
        vue(),
        vueJsx(),
        VueSetupExtend(),
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      server: {
        // Specify which IP addresses the server should listen on.
        host: '127.0.0.1',
        port: parseInt(env.VITE_APP_PORT, 10),
        strictPort: true,
        open: true,
        proxy: {
            '/api': {
                target: env.VITE_APP_API_BASEURL,
                changeOrigin: true,
                //regExp
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
  }
})


