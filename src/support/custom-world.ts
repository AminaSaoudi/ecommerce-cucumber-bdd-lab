// src/support/custom-world.ts
import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { BrowserContext, Page,PlaywrightTestOptions, APIRequestContext } from "@playwright/test";

export interface ICustomWorld extends World {
    context?: BrowserContext;
    page?: Page;
    playwrightOptions?: PlaywrightTestOptions;
}

export class CustomWorld extends World implements ICustomWorld {
    context?: BrowserContext;
    page?: Page;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);