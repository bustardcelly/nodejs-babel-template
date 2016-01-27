Feature: Developer wants to use es2015 and babel to write feature specs
        As a Developer
        I want to write features specs as I used to, utilizing Cucumber, but with es2015 syntax
        Because, Future!

        @babel
        Scenario: Module export loaded
                Given I have a module I want imported
                When I use the import directive
                Then The module exports are loaded and accessible
