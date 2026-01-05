import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly inventoryitem: Locator;
    readonly cartLink: Locator;
    readonly checkoutButton: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zip: Locator;
    readonly continueButton: Locator;
    readonly summaryTotal: Locator;

    constructor(page: Page){
        this.page = page;
        this.inventoryitem = page.locator('.btn_inventory').first();
        this.cartLink = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('#checkout');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zip = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.summaryTotal = page.locator('.summary_total_label');
    }

    async addItemsAndCheckout() {
        await this.inventoryitem.click();
        await this.cartLink.click();
        await this.checkoutButton.click();
        await this.firstName.fill('QA');
        await this.lastName.fill('Bot');
        await this.zip.fill('12345');
        await this.continueButton.click();


    }

    async getSummaryTotal() {
        return await this.summaryTotal.textContent();
    }
}