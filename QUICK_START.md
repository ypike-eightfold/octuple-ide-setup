# 🚀 Quick Start Guide - UPDATED

**Welcome to the Octuple AI Starter Template with Blank Page Prevention!**

## ⚡ 60-Second Setup

```bash
# 1. Navigate to project
cd "Octuple V2 Coding Agent Setup"

# 2. Install dependencies
npm install

# 3. Start development
npm run dev

# 4. Open browser
# Navigate to http://localhost:3000
```

## 🎉 What's New: No More Blank Pages!

### The Problem (SOLVED)
Before: Wrong component props → JavaScript error → blank page → 😢

After: Wrong component props → Error message shown → Fix it → Continue! 😊

### The Solution

**3-Layer Protection:**

1. **Error Boundary** ✅
   - Shows error messages instead of blank page
   - Already active in your app
   - Check `src/components/ErrorBoundary.tsx`

2. **Component Playground** ✅
   - Test components before using
   - See what works
   - Located in `src/pages/ComponentPlayground.tsx`

3. **Verified Examples** ✅
   - Copy patterns that work
   - No more guessing
   - See `docs/verified-octuple-examples.md`

## 🤖 Using with AI (Improved)

### New Prompt Pattern

```
Read @docs/verified-octuple-examples.md first.

Using VERIFIED Octuple patterns, create [FEATURE].

Requirements:
- Copy Layout pattern from verified examples
- Copy Menu pattern from verified examples
- Build incrementally (one component at a time)
- Test as you go

[Your requirements...]

IMPORTANT: Use patterns from verified-octuple-examples.md EXACTLY.
```

### Files AI Should Read (In Order)

1. **`docs/IMPORTANT-AI-RULES.md`** - Critical mistakes to avoid
2. **`docs/verified-octuple-examples.md`** ⭐ **MOST IMPORTANT** - Working patterns
3. **`docs/octuple-api-reference.md`** - Component list
4. **`docs/SETUP-PREVENTION-SYSTEM.md`** - How the system works

## 🛠️ Available Commands

```bash
npm run dev                # Start dev server
npm run build             # Build for production
npm run verify-components # Check Octuple components
npm run playground        # Instructions to run playground
```

## 🧪 Test the System

### 1. See Error Boundary in Action

Edit `src/App.tsx` and uncomment the BrokenComponent to see how errors are caught and displayed.

### 2. Try Component Playground

```tsx
// In src/App.tsx:
import ComponentPlayground from './pages/ComponentPlayground';

function App() {
  return <ComponentPlayground />;
}
```

Then run `npm run dev` and click through components to test them.

### 3. Use Verified Patterns

Open `docs/verified-octuple-examples.md` and copy a pattern:

```tsx
// This pattern is TESTED and WORKS:
import { Layout, Menu } from '@eightfold.ai/octuple';

const { Header, Content } = Layout;

<Layout>
  <Header>Header</Header>
  <Content>Content</Content>
</Layout>
```

## 📚 Key Documentation

| File | Purpose | When to Read |
|------|---------|--------------|
| `docs/SETUP-PREVENTION-SYSTEM.md` | How prevention system works | Setup |
| `docs/verified-octuple-examples.md` | Working code patterns | Before coding |
| `docs/IMPORTANT-AI-RULES.md` | Critical mistakes | Before AI prompts |
| `docs/octuple-api-reference.md` | Component list | Reference |

## ✅ Development Workflow

**New Workflow (No Blank Pages):**

1. Check `docs/verified-octuple-examples.md` for pattern
2. Copy pattern EXACTLY
3. Build incrementally (one component at a time)
4. Test after each addition
5. If error → Error boundary shows what's wrong
6. Fix and continue

**Old Workflow (Caused Blank Pages):**
1. ~~Guess component API~~
2. ~~Build entire page~~
3. ~~Get blank page~~
4. ~~No idea what's wrong~~

## 🎯 Building the Candidate Page

Now that the system is set up, rebuild the candidate page using verified patterns:

```bash
# 1. Check verified examples
cat docs/verified-octuple-examples.md

# 2. Start with basic layout
# Copy Layout pattern from verified examples

# 3. Add sidebar (Aside)
# Copy Aside pattern from verified examples

# 4. Add Stepper for progress
# Copy Stepper pattern from verified examples

# 5. Continue incrementally...
```

## 🆘 If Something Goes Wrong

### Blank Page?
1. Open browser console (F12)
2. Error boundary should show error
3. If not, check `src/main.tsx` has ErrorBoundary wrapper

### Component Not Working?
1. Test in ComponentPlayground first
2. Check `docs/verified-octuple-examples.md`
3. Verify component exists in `docs/octuple-api-reference.md`

### Need Help?
1. Check `docs/SETUP-PREVENTION-SYSTEM.md`
2. Check `docs/troubleshooting.md`
3. Create GitHub issue

## 🎓 Next Steps

1. ✅ Read `docs/SETUP-PREVENTION-SYSTEM.md`
2. ✅ Browse `docs/verified-octuple-examples.md`
3. ✅ Try ComponentPlayground
4. ✅ Build candidate page incrementally
5. ✅ Share with team!

---

**Happy Coding - No More Blank Pages! 🎉**

The system is now bulletproof. Build with confidence!
