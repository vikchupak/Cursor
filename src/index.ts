interface User {
  id: number;
  name: string;
  email: string;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}! Welcome to our TypeScript project.`;
}

function main(): void {
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const greeting = greetUser(user);
  console.log(greeting);
}

// Run main function when this file is executed directly
main();
