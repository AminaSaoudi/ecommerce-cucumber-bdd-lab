// src/support/hooks.ts
import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser, ConsoleMessage } from '@playwright/test';
import { ICustomWorld } from './custom-world'; 

let browser: Browser;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
})

AfterAll(async function () {
    await browser.close();
})

Before(async function (this: ICustomWorld) {
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
})

After(async function (this: ICustomWorld, {result}){
    if(result?.status === Status.FAILED){
        await this.page?.screenshot({path: './test-results/screenshots/${result.status}.png'});
    }
    await this.page?.close();
    await this.context?.close();
});