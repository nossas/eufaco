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
    And an email called "contact" should be sent

  Scenario: "when the contact form is wrong"
