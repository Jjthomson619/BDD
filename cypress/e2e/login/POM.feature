Scenario: multiple successful login case

Given user is on main page
When user enters "id" and "password"
Then user should be able to login


Examples:
    | id | password |
    | standard_user  | secret_sauce  |
    | locked_out_user  | secret_sauce  |
    | problem_user  | secret_sauce  |