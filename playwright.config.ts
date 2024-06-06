import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './test',
  testMatch: /.*\.e2e-spec\.ts$/,
  use: {
    baseURL: 'http://localhost:50789',
  },
  webServer: {
    command: 'npm run dev:test',
    url: 'http://localhost:50789',
    reuseExistingServer: !process.env.CI,
  },
})
