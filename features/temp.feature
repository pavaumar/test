Feature: Login
  
Scenario: login with correct credentials
    Given I am login screen
    When I enter correct 123 and 'temppassword'
    Then I see homepage 