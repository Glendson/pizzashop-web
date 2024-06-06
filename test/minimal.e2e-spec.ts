import { expect, test } from '@playwright/test'

test('minimal test', async ({ page }) => {
  await page.goto('http://example.com')
  const title = await page.title()
  await expect(title).toBe('Example Domain')
})
