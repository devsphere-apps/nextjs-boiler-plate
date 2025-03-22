Feature: Counter Functionality
  As a user
  I want to use the counter functionality
  So that I can increment and decrement a counter value

  Background:
    Given I am on the home page

  Scenario: Increment the counter
    When I click the "Increment" button
    Then the counter value should be "1"

  Scenario: Decrement the counter
    When I click the "Decrement" button
    Then the counter value should be "-1"