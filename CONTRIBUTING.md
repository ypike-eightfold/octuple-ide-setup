# Contributing to Octuple AI Starter

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Process](#development-process)
4. [Coding Standards](#coding-standards)
5. [Submitting Changes](#submitting-changes)
6. [Documentation](#documentation)
7. [Testing](#testing)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Expected Behavior

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Trolling or insulting/derogatory comments
- Publishing others' private information
- Any other conduct that could reasonably be considered inappropriate

---

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm, yarn, or pnpm
- Git
- Code editor (VS Code, Cursor recommended)

### Fork and Clone

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/octuple-ai-starter.git
   cd octuple-ai-starter
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/octuple-ai-starter.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Create a branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## Development Process

### Branch Naming

Use descriptive branch names:

- `feature/add-new-pattern` - New features
- `fix/button-styling` - Bug fixes
- `docs/update-readme` - Documentation
- `refactor/form-component` - Code refactoring
- `test/add-unit-tests` - Tests

### Commit Messages

Follow conventional commit format:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
git commit -m "feat(components): add new dashboard layout pattern"
git commit -m "fix(forms): resolve validation error handling"
git commit -m "docs(readme): update installation instructions"
```

### Development Workflow

1. **Keep your fork updated:**
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow coding standards (see below)
   - Add comments for complex logic

3. **Test your changes:**
   ```bash
   npm run dev      # Manual testing
   npm run lint     # Check for linting errors
   npm run build    # Ensure it builds
   ```

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: your descriptive message"
   ```

5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

---

## Coding Standards

### TypeScript

- Use TypeScript for all code
- Enable strict mode
- Define interfaces for all props
- Avoid `any` type

**Example:**
```tsx
interface ComponentProps {
  title: string;
  onAction: (id: string) => void;
  optional?: boolean;
}

const Component: React.FC<ComponentProps> = ({ title, onAction, optional = false }) => {
  // Implementation
};
```

### Component Structure

```tsx
// 1. Imports (external first, then internal)
import React, { useState } from 'react';
import { Button, Card } from '@eightfold.ai/octuple';

// 2. Types/Interfaces
interface MyComponentProps {
  // ...
}

// 3. Component
const MyComponent: React.FC<MyComponentProps> = (props) => {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Event handlers
  const handleClick = () => {
    // ...
  };
  
  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 7. Export
export default MyComponent;
```

### Octuple Component Usage

**Always use Octuple components:**

```tsx
// ✅ DO
import { Button, Input, Form } from '@eightfold.ai/octuple';

<Button text="Submit" variant="primary" />
<Input placeholder="Enter text" />
<Form.Item label="Name" name="name">
  <Input />
</Form.Item>
```

```tsx
// ❌ DON'T
<button className="btn">Submit</button>
<input className="form-control" />
<div className="flex p-4">...</div>
```

### Code Style

- **Indentation:** 2 spaces
- **Quotes:** Single quotes for strings
- **Semicolons:** Yes
- **Trailing commas:** Yes
- **Line length:** Max 100 characters

**Run Prettier:**
```bash
npm run format
```

**Run ESLint:**
```bash
npm run lint
```

### File Organization

```
src/
├── components/           # Reusable components
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── index.ts
├── pages/               # Page components
├── utils/               # Utility functions
├── types/               # TypeScript types
└── App.tsx
```

---

## Submitting Changes

### Pull Request Process

1. **Update documentation** if needed
   - Update README.md
   - Update relevant docs in `docs/`
   - Add comments to complex code

2. **Ensure all checks pass:**
   ```bash
   npm run lint     # No linting errors
   npm run build    # Builds successfully
   ```

3. **Create Pull Request:**
   - Go to GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in the template

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Changes Made
- Change 1
- Change 2

## Testing
- [ ] Tested manually
- [ ] All checks pass
- [ ] Documentation updated

## Screenshots (if applicable)
Add screenshots here

## Related Issues
Closes #123
```

### Review Process

- PRs require at least one approval
- Address review feedback promptly
- Keep discussions focused and professional
- Update your PR based on feedback

---

## Documentation

### When to Update Docs

Update documentation when you:

- Add new components or patterns
- Change component APIs
- Add new features
- Fix bugs that affect usage
- Update dependencies

### Documentation Standards

**In `docs/design-system-ai.md`:**
```markdown
### ComponentName

**Import:** `import { ComponentName } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<ComponentName prop1="value" prop2={value} />
```

**Common Props:**
- `prop1?: string` - Description
- `prop2?: number` - Description
```

**In code comments:**
```tsx
/**
 * ComponentName displays...
 * 
 * @param {string} title - The title to display
 * @param {Function} onAction - Callback when action occurs
 */
```

### Documentation Checklist

- [ ] README.md updated (if needed)
- [ ] Component documented in `design-system-ai.md`
- [ ] Example added to `component-patterns.md`
- [ ] Sample prompt added to `ai-prompts.md`
- [ ] Code comments added for complex logic

---

## Testing

### Manual Testing

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Test in browser:**
   - Check functionality
   - Test responsive design
   - Verify styling
   - Test interactions

3. **Test with AI:**
   - Open project in Cursor
   - Test relevant prompts
   - Verify AI uses correct components

### Build Testing

```bash
npm run build
npm run preview
```

Verify production build works correctly.

### Linting and Formatting

```bash
npm run lint     # Check for errors
npm run format   # Format code
```

---

## Types of Contributions

### Bug Fixes

- Check if issue already exists
- Create issue if it doesn't
- Submit PR with fix
- Reference issue in PR

### New Features

- Discuss in an issue first
- Get approval from maintainers
- Implement feature
- Add documentation
- Submit PR

### Documentation

- Fix typos or unclear sections
- Add examples
- Improve explanations
- Update outdated information

### Component Patterns

Add to `docs/component-patterns.md`:
- Common use cases
- Best practices
- Complete examples
- Anti-patterns to avoid

### AI Prompts

Add to `docs/ai-prompts.md`:
- Useful prompts you've discovered
- Complex feature examples
- Debugging prompts

---

## Questions?

- **General questions:** Open a GitHub Discussion
- **Bug reports:** Create an Issue
- **Feature requests:** Create an Issue with "Feature Request" label
- **Security issues:** Email maintainers (don't create public issue)

---

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing! Your efforts help make this project better for everyone.** 🎉

