# TypeScript Project

A TypeScript project with ESLint and Prettier configured for modern development.

## Setup

This project is configured with:
- **TypeScript** - Type-safe JavaScript development
- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **tsx** - Fast TypeScript execution for development

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Run TypeScript files directly in development
- `npm start` - Run the compiled JavaScript
- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Fix auto-fixable linting errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted
- `npm run type-check` - Run TypeScript type checking

## Development

1. Write your TypeScript code in the `src/` directory
2. Use `npm run dev` for development with hot reloading
3. Use `npm run lint` and `npm run format` to ensure code quality
4. Use `npm run build` to compile for production

## Project Structure

```
├── src/           # TypeScript source files
├── dist/          # Compiled JavaScript output
├── eslint.config.js     # ESLint configuration
├── .prettierrc.json     # Prettier configuration
├── .prettierignore      # Prettier ignore patterns
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```
