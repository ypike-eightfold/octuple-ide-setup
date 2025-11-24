# Download and Use Guide

**Welcome to the Octuple AI Starter Template!** 🎉

This guide will help you get started with the template in less than 5 minutes.

---

## 📦 What You're Getting

A **production-ready** React starter template with:
- ✅ 72 Octuple components fully documented
- ✅ AI-optimized documentation for coding agents
- ✅ Error prevention system built-in
- ✅ Verified, working examples
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Professional MDI icon system
- ✅ 8 real-world UI patterns

---

## 🚀 Quick Start (< 5 Minutes)

### Step 1: Download/Clone Repository

```bash
# Option A: Clone from Git
git clone <repository-url>
cd "Octuple V2 Coding Agent Setup"

# Option B: Download ZIP
# 1. Download ZIP file from repository
# 2. Extract to your desired location
# 3. Open terminal in extracted folder
```

### Step 2: Install Dependencies

```bash
npm install
```

**What gets installed:**
- React 18 + TypeScript
- Vite (build tool)
- Octuple Design System (@eightfold.ai/octuple)
- Material Design Icons (@mdi/js, @mdi/react)
- ESLint + Prettier
- Development tools

**Installation time:** ~2-3 minutes (depending on internet speed)

### Step 3: Verify Setup

```bash
# Verify Octuple components
npm run verify-components

# Check a specific component
npm run check-props Button
```

**What this does:**
- Extracts all available Octuple components
- Creates `docs/octuple-api-reference.md` with actual APIs
- Verifies your installation is correct

### Step 4: Start Development Server

```bash
npm run dev
```

**Result:**
- Development server starts at `http://localhost:3000`
- Opens automatically in your browser
- Hot reload enabled (changes reflect instantly)

---

## 🤖 Using with AI Coding Agents (Cursor, etc.)

### 1. First AI Interaction

When you start a new coding session, tell your AI:

```
Read these files first:
- @docs/IMPORTANT-AI-RULES.md (critical mistakes to avoid)
- @docs/ai-quick-reference.md (component selection)
- @docs/verified-octuple-examples.md (working examples)
```

### 2. Use This Prompt Template

```
Using Octuple components from @docs/ai-quick-reference.md, create a [FEATURE].

Before coding, check:
1. @docs/ai-quick-reference.md for component decision tree
2. @docs/verified-octuple-examples.md for working example
3. @docs/components/[ComponentName].md for detailed API

Requirements:
- [List your specific requirements here]
- Use MDI icons (https://pictogrammers.com/library/mdi/)
- Follow two-column layout from @docs/patterns/two-column-layout.md
- Ensure WCAG 2.1 AA compliance

CRITICAL: 
- Copy examples exactly from docs
- Don't guess component APIs
- Verify props with `npm run check-props [ComponentName]`
```

### 3. Example AI Prompt

```
Using Octuple components, create a user registration form.

Check first:
- @docs/verified-octuple-examples.md for Form example
- @docs/patterns/form-validation.md for validation pattern

Requirements:
- Email, password, confirm password fields
- Name (first, last)
- Date of birth (DatePicker)
- Terms & conditions checkbox
- Form validation with error messages
- Submit button (disabled until valid)
- Use MDI icons for form fields

Reference @docs/components/Form.md for API details.
```

### 4. Component Selection Workflow

**For AI agents:**

1. **Check decision trees** in `docs/ai-quick-reference.md`
   - "Need a button?" → Go to button decision tree
   - "Need user input?" → Go to input decision tree
   - "Need to display data?" → Go to display decision tree

2. **Find verified example** in `docs/verified-octuple-examples.md`
   - Copy the exact code pattern
   - Modify only the data/props

3. **Read detailed guide** in `docs/components/[ComponentName].md`
   - Full API reference
   - Accessibility guidelines
   - Common mistakes to avoid

4. **Verify props** before using:
   ```bash
   npm run check-props [ComponentName]
   ```

---

## 📁 Project Structure

```
Octuple V2 Coding Agent Setup/
├── src/
│   ├── main.tsx              # Entry point with ErrorBoundary
│   ├── App.tsx               # Example: Candidate Details page
│   ├── components/
│   │   └── ErrorBoundary.tsx # Catches runtime errors
│   └── vite-env.d.ts
│
├── docs/
│   ├── IMPORTANT-AI-RULES.md        # ⭐ Critical mistakes to avoid
│   ├── ai-quick-reference.md        # ⭐ Decision trees & lookup
│   ├── verified-octuple-examples.md # ⭐ Working code examples
│   │
│   ├── components/                  # 37 component guides
│   │   ├── Button.md
│   │   ├── Form.md
│   │   ├── Skeleton.md
│   │   └── ... (all 72 components)
│   │
│   ├── patterns/                    # 8 UI patterns
│   │   ├── form-validation.md
│   │   ├── two-column-layout.md
│   │   ├── navigation.md
│   │   └── ... (8 patterns)
│   │
│   ├── design-guidelines.md         # Typography, colors, spacing
│   ├── accessibility.md             # WCAG 2.1 AA compliance
│   ├── PROJECT-FINAL-STATUS.md      # Project overview
│   └── DOWNLOAD-AND-USE.md          # This file
│
├── scripts/
│   ├── extract-octuple-apis.cjs     # Extract component APIs
│   ├── check-component-props.sh     # Check TypeScript props
│   ├── check-octuple-version.cjs    # Verify Octuple version
│   └── detect-api-changes.cjs       # Detect API changes
│
├── .cursorrules                     # AI behavior rules
├── package.json                     # Dependencies & scripts
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript config (strict)
├── .eslintrc.json                   # ESLint rules
└── .prettierrc                      # Prettier formatting
```

---

## 🔧 Available Commands

### Development
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

### Component Verification
```bash
npm run verify-components           # Verify all Octuple components
npm run check-props [ComponentName] # Check specific component props
npm run check-octuple-version       # Verify Octuple version matches docs
npm run detect-api-changes          # Detect API changes after upgrade
```

**Examples:**
```bash
npm run check-props Button
npm run check-props Form
npm run check-props Skeleton
```

---

## 📚 Documentation Navigation

### For AI Agents (Check in This Order)

1. **`docs/ai-quick-reference.md`** (~1,200 lines)
   - 14 component decision trees
   - 5 lookup tables
   - Copy-paste code patterns
   - Quick troubleshooting

2. **`docs/verified-octuple-examples.md`** (~900 lines)
   - Tested, working code
   - Real Confluence APIs
   - Common pitfalls
   - Pattern-based examples

3. **`docs/components/[ComponentName].md`** (37 files)
   - Complete API reference
   - 6-10 usage examples per component
   - Accessibility guidelines
   - Best practices

4. **`docs/patterns/[PatternName].md`** (8 files)
   - Form Validation
   - Two-Column Layout
   - Navigation
   - Data Table
   - And more...

5. **`docs/design-guidelines.md`** (~1,400 lines)
   - Typography system (Poppins, Gilroy)
   - 4px spacing system
   - Color palette
   - Icon usage (MDI)
   - Responsive breakpoints

6. **`docs/accessibility.md`** (~2,100 lines)
   - WCAG 2.1 AA compliance
   - Keyboard navigation
   - Screen reader support
   - Color contrast
   - Testing procedures

### For Human Developers

Start with:
1. `README.md` - Project overview
2. `docs/PROJECT-FINAL-STATUS.md` - Complete status & features
3. `docs/DOWNLOAD-AND-USE.md` - This file
4. Then explore specific component guides as needed

---

## 🎯 Common Use Cases

### Use Case 1: Create a Login Form

```bash
# 1. Check Form examples
open docs/verified-octuple-examples.md  # Search for "Form"

# 2. Check Form validation pattern
open docs/patterns/form-validation.md

# 3. Start coding with AI
# Use the prompt template above with Form requirements
```

### Use Case 2: Build a Dashboard

```bash
# 1. Check dashboard pattern
open docs/patterns/dashboard-layout.md

# 2. Check Card and Layout components
npm run check-props Card
npm run check-props Layout

# 3. Follow the pattern exactly
```

### Use Case 3: Create a Data Table

```bash
# 1. Check Table component
open docs/components/Table.md

# 2. Check data table pattern
open docs/patterns/data-table.md

# 3. Check verified example
open docs/verified-octuple-examples.md  # Search for "Table"
```

### Use Case 4: Implement Navigation

```bash
# 1. Check navigation pattern
open docs/patterns/navigation.md

# 2. Check Menu and Breadcrumb
npm run check-props Menu
npm run check-props Breadcrumb

# 3. Use verified examples
open docs/verified-octuple-examples.md  # Search for "Menu"
```

---

## ⚠️ Critical Rules to Remember

### 1. Always Use Octuple Components

❌ **Don't:**
```tsx
<button>Click me</button>
<input type="text" />
<div className="flex justify-center">
```

✅ **Do:**
```tsx
import { Button, TextInput, Row, Col } from '@eightfold.ai/octuple';
<Button text="Click me" />
<TextInput placeholder="Enter text" />
<Row justify="center">
```

### 2. Always Use MDI Icons

❌ **Don't:**
```tsx
<span>🏠 Home</span>
<span>⭐ Favorite</span>
```

✅ **Do:**
```tsx
import Icon from '@mdi/react';
import { mdiHome, mdiStar } from '@mdi/js';
<Icon path={mdiHome} size={0.8} />
<Icon path={mdiStar} size={0.8} />
```

**Find icons:** https://pictogrammers.com/library/mdi/

### 3. Always Use TypeScript Enums

❌ **Don't:**
```tsx
<Button variant="primary" />
<Skeleton variant="text" />
```

✅ **Do:**
```tsx
import { Button, ButtonVariant, Skeleton, SkeletonVariant } from '@eightfold.ai/octuple';
<Button variant={ButtonVariant.Primary} />
<Skeleton variant={SkeletonVariant.Text} />
```

### 4. Always Verify Props First

Before using a component:
```bash
npm run check-props [ComponentName]
```

This shows you the **exact** TypeScript interface.

### 5. Always Check Verified Examples

Before coding:
```bash
open docs/verified-octuple-examples.md
# Search for your component
# Copy the example exactly
```

---

## 🔍 Troubleshooting

### Problem: Blank white page

**Solution:**
1. Check browser console (F12)
2. Error will be shown in ErrorBoundary
3. Usually a component prop type error
4. Run `npm run check-props [ComponentName]` to see correct props

### Problem: TypeScript error on component prop

**Solution:**
1. Run `npm run check-props [ComponentName]`
2. Check exact prop types in output
3. Use TypeScript enums (e.g., `ButtonVariant.Primary`)
4. Cast MDI icons as `IconName`

### Problem: Component not rendering as expected

**Solution:**
1. Check verified example: `docs/verified-octuple-examples.md`
2. Read component guide: `docs/components/[ComponentName].md`
3. Verify all required props are provided
4. Check for TypeScript errors in IDE

### Problem: Layout not working (content stacked)

**Solution:**
1. For Row/Col: Add explicit flex styles
```tsx
<Row gutter={24} style={{ display: 'flex', flexWrap: 'nowrap' }}>
  <Col span={16} style={{ flex: '0 0 66.666%', maxWidth: '66.666%' }}>
```
2. Check pattern: `docs/patterns/two-column-layout.md`

### Problem: Icons not showing

**Solution:**
1. Install MDI: `npm install @mdi/js @mdi/react`
2. Import correctly:
```tsx
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
```
3. Cast as IconName for Octuple components:
```tsx
import { IconName } from '@mdi/react';
iconProps={{ path: mdiHome as IconName }}
```

---

## 🆘 Getting Help

### Check Documentation

1. **Quick lookup:** `docs/ai-quick-reference.md`
2. **Working examples:** `docs/verified-octuple-examples.md`
3. **Component API:** `docs/components/[ComponentName].md`
4. **Common mistakes:** `docs/IMPORTANT-AI-RULES.md`

### Run Verification Scripts

```bash
npm run verify-components      # Verify all components
npm run check-props [Name]     # Check specific component
npm run check-octuple-version  # Verify version
```

### External Resources

- **Octuple GitHub:** https://github.com/EightfoldAI/octuple
- **MDI Icons:** https://pictogrammers.com/library/mdi/
- **React Docs:** https://react.dev/
- **TypeScript:** https://www.typescriptlang.org/
- **WCAG 2.1:** https://www.w3.org/WAI/WCAG21/quickref/

---

## ✅ Next Steps

1. **Start Development:**
   ```bash
   npm run dev
   ```

2. **Explore Examples:**
   - Open `docs/verified-octuple-examples.md`
   - Check `src/App.tsx` for Candidate Details example

3. **Try a Simple Component:**
   ```tsx
   import { Button, ButtonVariant } from '@eightfold.ai/octuple';
   
   <Button 
     text="My First Button"
     variant={ButtonVariant.Primary}
     onClick={() => alert('It works!')}
   />
   ```

4. **Build Your First Form:**
   - Follow `docs/patterns/form-validation.md`
   - Copy example from `docs/verified-octuple-examples.md`

5. **Use with AI Agent:**
   - Open Cursor (or your AI coding agent)
   - Use the prompt template from this guide
   - Let the AI help you build with Octuple!

---

## 🎉 You're Ready!

The Octuple AI Starter Template is now set up and ready to use. Happy coding!

**Remember:**
- ✅ Always use Octuple components (never raw HTML)
- ✅ Always use MDI icons (never emojis)
- ✅ Always verify props (`npm run check-props [Name]`)
- ✅ Always check verified examples first
- ✅ Always use TypeScript enums

**For AI agents:**
- Read `docs/ai-quick-reference.md` for decision trees
- Copy from `docs/verified-octuple-examples.md` exactly
- Follow `docs/patterns/` for common UI patterns

---

**Questions?** Check `docs/PROJECT-FINAL-STATUS.md` for complete project overview!


