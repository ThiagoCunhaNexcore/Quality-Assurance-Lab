export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#user');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#btnLogin');
    this.errorMessage = page.locator('.invalid_input');
  }

  async open() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
