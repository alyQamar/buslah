import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, __dirname, '');

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
      'process.env.REACT_APP_URL': JSON.stringify(appURL),
      'process.env.BASE_URL': JSON.stringify(baseURL),
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      'process.env.IS_BETA': JSON.stringify(isBeta),
      'process.env.APP_NAME': JSON.stringify(appName)
    },
    resolve: {
      alias: {
        '@': '',
        '@app': resolve('src/App'),
        '@pages': resolve('src/pages'),
        '@components': resolve('src/components'),
        '@common': resolve('src/components/Common'),
        '@assets': resolve('src/assets'),
        '@hooks': resolve('src/hooks'),
        '@redux': resolve('src/redux'),
        '@styles': resolve('src/styles'),
        '@shared': resolve('src/shared'),
        '@services': resolve('src/shared/services'),
        '@utils': resolve('src/shared/utils')
      }
    }
  };
});
