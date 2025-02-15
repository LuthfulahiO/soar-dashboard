# Soar Dashboard

A financial dashboard application with multiple views for the
user (overview and settings).

## Tech Stack

- React 19
- TypeScript
- Vite 6
- TailwindCSS 4

## Development Setup

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:LuthfulahiO/soar-dashboard.git

# Install dependencies
yarn install
```

### Available Scripts

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Lint code
yarn lint

# Fix linting issues
yarn lint:fix

# Format code
yarn format

# Check formatting
yarn format:check

# Run all checks (format + lint)
yarn check
```

## Code Style Guide

This project enforces consistent code style using:

- ESLint for code quality and style checking
- Prettier for code formatting
- TypeScript for type safety

### Key Style Rules

- Double quotes for strings and JSX attributes
- Strict TypeScript checks enabled
- Automatic import sorting
- React best practices enforcement
- No console.log statements

### VSCode Setup

The project includes recommended VSCode settings and extensions. Install the following extensions for the best development experience:

- Prettier - Code formatter (esbenp.prettier-vscode)
- ESLint (dbaeumer.vscode-eslint)
- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
- Pretty TypeScript Errors (YoavBls.pretty-ts-errors)

Code will be automatically formatted on save and ESLint errors will be highlighted in your editor.

## Project Structure

```
src/
├── components/     # Reusable components
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```
