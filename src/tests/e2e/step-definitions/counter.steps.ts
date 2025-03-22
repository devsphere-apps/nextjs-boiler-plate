import { test, expect } from '@playwright/test';

/**
 * Direct implementation of BDD steps using Playwright
 * This approach doesn't rely on jest-cucumber and is more straightforward
 */

// Helper class to organize our step definitions
class CounterSteps {
  // Given steps
  static async givenIAmOnTheHomePage(page: any) {
    await page.goto('/');
  }
  
  // When steps
  static async whenIClickTheButton(page: any, buttonText: string) {
    await page.click(`button:has-text("${buttonText}")`);
  }
  
  // Then steps
  static async thenTheCounterValueShouldBe(page: any, expectedValue: string) {
    await expect(page.locator('h2:has-text("Counter:")')).toContainText(`Counter: ${expectedValue}`);
  }
}

// Define tests with BDD pattern
test.describe('Counter Feature', () => {
  test.beforeEach(async ({ page }) => {
    // Common setup: navigate to the home page
    await CounterSteps.givenIAmOnTheHomePage(page);
  });
  
  test('Scenario: Increment the counter', async ({ page }) => {
    // When I click the "Increment" button
    await CounterSteps.whenIClickTheButton(page, 'Increment');
    
    // Then the counter value should be "1"
    await CounterSteps.thenTheCounterValueShouldBe(page, '1');
  });
  
  test('Scenario: Decrement the counter', async ({ page }) => {
    // When I click the "Decrement" button
    await CounterSteps.whenIClickTheButton(page, 'Decrement');
    
    // Then the counter value should be "-1"
    await CounterSteps.thenTheCounterValueShouldBe(page, '-1');
  });
}); 