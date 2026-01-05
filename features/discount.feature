Feature: Dynamic Discount Calculator
    As a marketing manager
    I want the cart to apply logic-based discounts
    So that we can increase sales volume

Scenario: Customer gets 10% off when spending over $100
    Given I am on the cart page
    And I have added items worth $110.00
    When I view the total summary
    Then the final price should include a "10%" discount
    And the total should be $99.00