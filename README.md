# Project: E-Commerce BDD Automation Framework

An automated acceptance testing framework designed to validate dynamic pricing logic and checkout flows for e-commerce platforms. Built to bridge the gap between Product Managers and QA using Gherkin syntax.

# Tech Stack:

Core: TypeScript & Node.js

Browser Automation: Playwright (Chromium/Webkit/Firefox)

BDD Engine: CucumberJS

Design Pattern: Page Object Model (POM) for strict separation of concerns.

# Key Features:

- Context Isolation: Each scenario runs in a fresh browser context (no cookies/cache bleeding).

- Type Safety: leveraged TypeScript for compile-time error checking.

- Living Documentation: Feature files serve as both requirements and tests.

# How to Run: 
```
npm install npx cucumber-js
```