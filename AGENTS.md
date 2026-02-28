```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines are designed to ensure the creation and maintenance of high-quality, robust, and maintainable AI coding agents. Adherence to these principles is mandatory for all development efforts.

## 1. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each agent should have a clearly defined, single responsibility. Avoid creating multiple agents with overlapping functionalities.
*   **Code Reuse:**  Strive to reuse existing components and algorithms whenever possible.  Refactor existing code to improve modularity and reduce duplication.
*   **Abstraction:**  Define abstract interfaces for agents and their interactions. This allows for easier substitution and modification of components.

## 2. KISS (Keep It Simple, Stupid)

*   **Minimalist Design:**  Keep code concise and easy to understand.  Avoid unnecessary complexity.
*   **Single Methods per Agent:** Each agent should have a maximum of one primary method.
*   **Clear Naming Conventions:** Employ consistent and descriptive naming conventions for variables, functions, and classes.

## 3. SOLID Principles

*   **Single Responsibility:** (Reiterated) Ensure each class has only one reason to change.
*   **Open/Closed Principle:**  Design agents to be open for extension but closed for modification. This allows for adding new features without altering core functionality.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Each interface should have a minimal set of methods required by its clients.
*   **Dependency Inversion Principle:** Components should be built in such a way that their dependencies are reverse-engineered.

## 4. YAGNI (You Aren't Gonna Need It)

*   **Avoid Unnecessary Code:**  Implement only the necessary functionality. Do not introduce features that are not currently required.
*   **Progressive Enhancement:** Build the agent gradually, adding functionality incrementally as needed.

## 5. Development Workflow

*   **Code Reviews:**  All code must undergo thorough code reviews by at least two developers.
*   **Unit Testing:**  Implement comprehensive unit tests for all agents and functions.
*   **Integration Testing:**  Perform integration testing to verify interactions between agents and external systems.
*   **Static Analysis:** Utilize static analysis tools (e.g., SonarQube) to identify potential bugs and code quality issues.

## 6.  Testing (Focus on Tests Only)

*   **Mocking and Stubbing:**  Only use mocks and stubs for testing purposes.  Never use real implementations.
*   **Test Coverage:**  Ensure at least 80% of the code is covered by tests.  Utilize automated test discovery tools.
*   **Test Design:**  Each test should focus on a single aspect of the agent's behavior.

## 7.  File Structure & Limits

*   **Maximum File Length:**  Each file should not exceed 180 lines of code.
*   **File Organization:**  Group related files logically. Utilize clear directory structures.
*   **Documentation:** Include clear and concise documentation within each file, explaining its purpose and inputs/outputs.

## 8.  Data Representation

*   **Data Structures:**  Employ appropriate data structures for efficient data handling.  Consider data immutability where applicable.
*   **Data Validation:** Implement validation checks to ensure data integrity.

## 9.  Error Handling

*   **Exception Handling:**  Handle exceptions gracefully and provide informative error messages.
*   **Logging:** Implement structured logging to track errors and events.

## 10.  Code Style & Conventions

*   **Consistent Formatting:** Use a consistent code style (e.g., using a linter) throughout the codebase.
*   **Comments:**  Write clear and concise comments to explain complex logic or non-obvious code.  Focus on *why* the code is written, not *what* it is doing.

## 11.  AI Agent Specific Considerations

*   **State Management:**  Clearly define and manage agent states.
*   **Algorithm Design:**  Prioritize the design of well-defined and testable algorithms.
*   **Resource Management:**  Consider the resource requirements of the agent and implement appropriate memory management.

## 12.  Future Considerations

*   **Version Control:**  Utilize a version control system (e.g., Git) for code management.
*   **Code Formatting:** Implement automated code formatting.
*   **Dependency Management:**  Implement a robust dependency management system.

These guidelines are a foundational framework.  Regular review and refinement are crucial for maintaining the quality and stability of the AGENTS.md repository.
```