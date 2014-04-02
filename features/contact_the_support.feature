Feature: contact the support

  Scenario: "when the contact form is right"
    Given I go to "the homepage"
    And I fill in "the contact name field" with "Nícolas"
    And I fill in "the contact email field" with "nicolas@test.com"
    And I fill in "the contact subject field" with "My subject"
    And I fill in "the contact message field" with "My message to the support team"
    When I press "the contact form submit button"
    Then I should be in "the homepage"
    And I should not see "the contact form"
    And I should see "the successful contact message"
    And an email should be sent

  @javascript
  Scenario: "when the contact form is wrong"
    Given I go to "the homepage"
    When I press "the contact form submit button"
    Then I should see "the contact name field error"
    And I should see "the contact email field error"
    And I should see "the contact subject field error"
    And I should see "the contact message field error"
