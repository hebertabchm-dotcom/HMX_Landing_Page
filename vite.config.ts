import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const webhookUrl = env.VITE_N8N_WEBHOOK_URL;

  let proxy;
  if (webhookUrl) {
    const parsed = new URL(webhookUrl);
    proxy = {
      '/api/hmx-lead': {
        target: `${parsed.protocol}//${parsed.host}`,
        changeOrigin: true,
        secure: true,
        rewrite: () => parsed.pathname,
      },
    };
  }

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: proxy ? { proxy } : undefined,
  };
});
