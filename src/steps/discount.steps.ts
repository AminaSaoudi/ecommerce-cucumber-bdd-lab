import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world'; 

Given('I am on the cart page', async function (this: IcustomWorld) {
    // TODO : page initialization
    await this.page!.goto('https://www.saucedemo.com/cart.html');
});

Given('I have added items worth {string}', async function (this: IcustomWorld, amount: string){
    console.log('Simulating adding items worth ${amount}');
});

When('I view the total summary', async function (this: ICustomWorld){
    // TODO : Action logic
})

Then('the final price should include a {string} discount', async function (this: ICustomWorld, discount: string) {
    console.log('Verifying discount: ${discount}');
    // TODO : Assertion logic
});

