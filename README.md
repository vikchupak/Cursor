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

1. **Install recommended VS Code extensions** (you'll get a prompt when opening the project)
2. Write your TypeScript code in the `src/` directory
3. Code will be **automatically formatted on save** with Prettier
4. **ESLint errors will be auto-fixed** on save when possible
5. Use `npm run dev` for development with hot reloading
6. Use `npm run lint` and `npm run format` to ensure code quality
7. Use `npm run build` to compile for production

## VS Code Integration

The project includes VS Code workspace settings that:
- **Format code on save** using Prettier
- **Auto-fix ESLint errors** on save
- **Validate TypeScript/JavaScript** files with ESLint
- Configure proper **tab size and spacing**
- **Trim trailing whitespace** and ensure final newlines

## Project Structure

```
├── src/                 # TypeScript source files
├── dist/                # Compiled JavaScript output
├── .vscode/             # VS Code workspace settings
│   ├── settings.json    # Editor settings (format on save, etc.)
│   └── extensions.json  # Recommended extensions
├── eslint.config.js     # ESLint configuration
├── .prettierrc.json     # Prettier configuration
├── .prettierignore      # Prettier ignore patterns
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```
