import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  dev: {
    port: 3001,
    assetPrefix: 'http://localhost:3001'
  },
  output: {
    assetPrefix: 'auto',
  },
  runtime: {
    router: true,
  },
  server: {
    port: 3001,
  },
  plugins: [appTools({ bundler: 'rspack' }), moduleFederationPlugin()],
});
