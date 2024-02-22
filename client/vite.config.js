import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const isProduction = mode === 'production';
  const nodeEnv = isProduction ? 'production' : env.NODE_ENV || 'development';

  const host = isProduction ? 'buslah.com' : 'localhost';
  const port = env.PORT || 3000;
  const appURL = env.VITE_REACT_APP_URL || '';
  const baseURL = env.BASE_URL || '';
  const isBeta = env.IS_BETA || false;
  const appName = env.APP_NAME || 'buslah';

  return {
    plugins: [react()],
    server: {
      host: host,
      port: port
    },
    define: {
      // No need for JSON.stringify for URLs
      'process.env.REACT_APP_URL': JSON.stringify(appURL),
      'process.env.BASE_URL': JSON.stringify(baseURL),
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      'process.env.IS_BETA': JSON.stringify(isBeta),
      'process.env.APP_NAME': JSON.stringify(appName)
    },
    resolve: {
      alias: {
        '@': resolve(process.cwd(), 'src'),
        '@app': resolve(process.cwd(), 'src/App'),
        '@pages': resolve(process.cwd(), 'src/pages'),
        '@components': resolve(process.cwd(), 'src/components'),
        '@common': resolve(process.cwd(), 'src/components/Common'),
        '@assets': resolve(process.cwd(), 'src/assets'),
        '@hooks': resolve(process.cwd(), 'src/hooks'),
        '@redux': resolve(process.cwd(), 'src/redux'),
        '@styles': resolve(process.cwd(), 'src/styles'),
        '@shared': resolve(process.cwd(), 'src/shared'),
        '@services': resolve(process.cwd(), 'src/shared/services'),
        '@utils': resolve(process.cwd(), 'src/shared/utils')
      }
    }
  };
});
