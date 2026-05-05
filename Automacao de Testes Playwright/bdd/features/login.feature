Feature: Login Authentication

  As a registered user
  I want to authenticate in the system
  So that I can access protected features

  @smoke
  Scenario: Successful login with valid credentials
    Given the user navigates to "/login"
    When the user enters a valid email and password
    And clicks on the login button
    Then the user should be redirected to "/dashboard"
    And the system should display the user name

  @regression
  Scenario: Login with valid credentials
    Given the user accesses the login page
    When the user submits valid credentials
    Then the system should process the authentication

  @negative
  Scenario: Login fails with invalid password
    Given the user navigates to "/login"
    When the user enters a valid email and invalid password
    And clicks on the login button
    Then an error message "Invalid credentials" should be displayed
    And the user should remain on "/login"
