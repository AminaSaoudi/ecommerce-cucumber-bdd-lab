import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

let loginPage: LoginPage;
let cartPage: CartPage;

Given('I am on the cart page', async function (this: ICustomWorld) {
    loginPage = new LoginPage(this.page!);
    await loginPage.navigate();
    await loginPage.login();
});

Given('I have added items worth {string}', async function (this: ICustomWorld, amount: string){
    cartPage = new CartPage(this.page!);
    await cartPage.addItemsAndCheckout();
});

When('I view the total summary', async function (this: ICustomWorld){
    console.log("Viewing Summary...");
})

Then('the total should be {float}', async function (this: ICustomWorld, expectedTotal: number) {
    const realTotalText = await cartPage.getSummaryTotal();
    const cleanTotal = parseFloat(realTotalText?.replace('Total: $', '') || '0');
    console.log(`Expected: ${expectedTotal}, Actual: ${cleanTotal}`);
    expect(cleanTotal).toBe(expectedTotal);
});

Then('the final price should include a {string} discount', async function (this: ICustomWorld, discount: string) {
    console.log('Step: Verifying ${discount} discount');
    // TODO: Assertion logic
    console.log("Skipping discount check for SwagLabs demo");
});


