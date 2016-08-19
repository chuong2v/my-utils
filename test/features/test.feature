Feature: As a developer, I want to check validate data funtion is running correcty

Scenario: Developer tests validate data function successfully
    When I send example data
    |number|string|boolean|object                       |array           |arrayOfArray        |
    |12.345|chuong|false  |{"number": 1, "string": "2"} |[1, 3, "string"]|[[1, 2], ["a", "b"]]|