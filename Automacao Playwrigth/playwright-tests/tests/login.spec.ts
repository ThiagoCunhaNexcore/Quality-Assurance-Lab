import { test, expect } from '@playwright/test';

test('deve permitir login com credenciais válidas', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('heading', { name: 'Login realizado' }).click();
  await page.getByText('Olá, teste@teste.com').click();
  await page.getByRole('button', { name: 'OK' }).click();
});


