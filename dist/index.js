"use strict";
function greetUser(user) {
    return `Hello, ${user.name}! Welcome to our TypeScript project.`;
}
function main() {
    const user = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
    };
    const greeting = greetUser(user);
    console.log(greeting);
}
// Run main function when this file is executed directly
main();
//# sourceMappingURL=index.js.map