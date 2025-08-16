#Main files structure

react-ts-components/
 ┣ src/
 ┃ ┣ components/
 ┃ ┃ ┣ InputField/
 ┃ ┃ ┃ ┣ InputField.tsx
 ┃ ┃ ┃ ┣ InputField.stories.tsx
 ┃ ┃ ┃ ┗ InputField.css
 ┃ ┃ ┣ DataTable/
 ┃ ┃ ┃ ┣ DataTable.tsx
 ┃ ┃ ┃ ┣ DataTable.stories.tsx
 ┃ ┃ ┃ ┗ DataTable.css
 ┃ ┣ App.tsx
 ┃ ┣ App.css
 ┃ ┗ main.tsx
 ┣ .eslintrc.js
 ┣ .prettierrc
 ┣ package.json
 ┣ tsconfig.json
 ┣ vite.config.ts
 ┣ README.md
 ┗ yarn.lock / package-lock.json


React + TypeScript Components with Storybook
This project contains reusable UI components built with React + TypeScript and documented using Storybook.
The components are designed with scalability, accessibility, and theming (Light/Dark mode) in mind.

✨ Features
📥 InputField → Flexible input with validation states, helper/error text, clear button & password toggle.
📊 DataTable → Display tabular data with sorting, selection, loading & empty states.
🎨 Light / Dark Theme Toggle
⚡ Modern React patterns with TypeScript
📚 Storybook documentation with examples & best practices
♿ Accessible (ARIA roles, keyboard navigation)

📦 Components
🔹 InputField

Variants: filled, outlined, ghost
Sizes: small, medium, large
States: disabled, invalid, loading
Extra: clear button, password toggle, helper text, error messages

🔹 DataTable

Display dynamic data
Column sorting
Row selection (single/multiple)
Loading & Empty states
Configurable via columns and data props

🛠️ Tech Stack

React  + TypeScript
Vite (fast dev build tool)
Storybook (UI documentation & playground)
ESLint + Prettier (code quality & formatting)

⚙️ Getting Started
1. Clone the repo
git clone https://github.com/<your-username>/react-ts-components.git
cd react-ts-components

2. Install dependencies
npm install

3. Run the app
npm run dev
App runs on 👉 http://localhost:5173

4. Run Storybook
npm run storybook
Storybook runs on 👉 http://localhost:6006

🔹 Approach

Scalable Project Structure

Each component (InputField, DataTable) is placed in its own folder with .tsx, .stories.tsx, and optional .css files.
This ensures reusability, readability, and separation of concerns.

Component Design

InputField: Built with props for flexible usage (label, placeholder, helperText, errorMessage, etc.).
Supports variants (filled, outlined, ghost)
Handles states (disabled, invalid, loading)
Added clear button and password toggle for better UX.
DataTable: Accepts data and columns props for dynamic rendering.
Supports sorting, selection, empty/loading states.
Rows are selectable (single/multi) and emit selected rows via callback.

Theming

Implemented Light/Dark mode toggle at the app level.
Used CSS variables to manage background, text, border, and primary colors.
Theme changes are instant across all components.

Storybook Documentation

Each component has its own Storybook entry.
Stories cover variants, states, sizes, and interaction behaviors.
Documented props API with TypeScript types.
Added accessibility addon to validate ARIA roles and keyboard navigation.

Best Practices

Used TypeScript for type safety.
Followed modern React patterns (useState, props-driven components).
Ensured ARIA compliance for accessibility.
Linted and formatted with ESLint + Prettier.
