Feature: read FAQ

  @javascript
  Scenario:
    Given I go to "the homepage"
    When I click "view FAQ link"
    And I should see "the FAQ page"
