# Octuple AI Starter Template

A **world-class**, **production-ready**, **AI-optimized** starter template for building React applications with the [Octuple Design System](https://github.com/EightfoldAI/octuple) and AI coding agents.

**🎉 Status:** ✅ **100% COMPLETE - PRODUCTION READY**  
**Version:** 2.1.0  
**Documentation:** ~10,000+ lines across 7 comprehensive guides  
**WCAG Compliance:** Level AA  

**✨ Features:**
- 72 components fully documented (18 core + 54 advanced)
- 8 UI pattern guides
- Verified examples with real APIs
- AI-optimized quick reference
- Complete design system guidelines
- WCAG 2.1 Level AA accessibility compliance

## 🛠️ Tech Stack

- **React 18** + **TypeScript** - Modern React with strict typing
- **Vite** - Lightning-fast build tool
- **Octuple Design System** - Eightfold AI's component library
- **Material Design Icons (MDI)** - Professional icon library (https://pictogrammers.com/library/mdi/)
- **Poppins Font** - Modern, professional typography
- **ESLint + Prettier** - Code quality and formatting

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm, yarn, or pnpm

### Installation

```bash
# 1. Navigate to project
cd "Octuple V2 Coding Agent Setup"

# 2. Install dependencies
npm install

# 3. Verify Octuple components (IMPORTANT!)
npm run verify-components

# 4. Start development
npm run dev
```

Open `http://localhost:3000`

## 🤖 Using with AI Coding Agents

### Critical First Steps

**1. Before ANY code generation, tell the AI:**
```
Read @docs/IMPORTANT-AI-RULES.md and verify component names in @docs/octuple-api-reference.md
```

**2. Use the improved prompt pattern:**
```
Using Octuple components (verify from @docs/octuple-api-reference.md), create a [FEATURE].

Requirements:
- Use Layout with Aside for sidebar
- Use Stepper for progress indicators
- Use TextInput (not Input)
- Use Badge (not Tag)
- Include Poppins font
- Breadcrumb above page title

[Your detailed requirements...]

IMPORTANT: Verify all component names exist in Octuple before coding.
```

### Key Files for AI

| Priority | File | Purpose |
|----------|------|---------|
| ⭐⭐⭐ | `docs/IMPORTANT-AI-RULES.md` | **Critical mistakes to avoid** |
| ⭐⭐⭐ | `docs/octuple-api-reference.md` | **Auto-generated component list** |
| ⭐⭐ | `.cursorrules` | AI behavior rules |
| ⭐ | `docs/design-system-ai.md` | Usage patterns |
| ⭐ | `docs/ai-prompts.md` | Example prompts |

## 🔧 New Verification Tools

### Verify Components

Run this **BEFORE** starting development:
```bash
npm run verify-components
```

This generates `docs/octuple-api-reference.md` with **actual** component names from the installed package.

### Update After Octuple Upgrades

```bash
npm run extract-apis
```

Re-generates component documentation after upgrading Octuple.

### Verify Component Props (CRITICAL!)

**Before using ANY component, check its TypeScript types:**

```bash
# Easy way - use our helper script
npm run check-props Menu
npm run check-props Tabs
npm run check-props Avatar
npm run check-props Button

# Or manually
cat node_modules/@eightfold.ai/octuple/lib/components/Menu/Menu.types.d.ts
```

**Why this matters:**
- ❌ Guessing props leads to runtime errors
- ❌ Assuming APIs from other libraries (Ant Design, Material-UI) fails
- ✅ Reading TypeScript types shows EXACTLY what props exist
- ✅ Prevents "Cannot read properties of undefined" errors

**Example:** Menu component
```typescript
// ❌ WRONG (guessed from Ant Design)
<Menu>
  <Menu.Item icon={<HomeIcon />}>Home</Menu.Item>
</Menu>

// ✅ CORRECT (from TypeScript types)
<Menu items={[
  { key: 'home', text: 'Home', value: 'home', iconProps: { path: mdiHome } }
]} />
```

## ✅ What Was Fixed

Based on real project feedback, we've added:

1. **Component Verification** - Auto-extract actual APIs
2. **Critical Rules Doc** - Common mistakes and solutions
3. **Font Configuration** - Poppins included by default
4. **Accurate Examples** - Using real Octuple component names
5. **Better Prompts** - Templates that work

### Before vs After

| Before ❌ | After ✅ |
|----------|---------|
| Guessed component props | Read TypeScript `.d.ts` files |
| Assumed component names | Verified from package |
| Used `Tag` (doesn't exist) | Use `Badge` or `Pill` |
| Used `Sider` (wrong) | Use `Layout.Aside` |
| Used `Input` (wrong) | Use `TextInput` |
| Guessed `size="large"` | Check types: `size="80px"` |
| Assumed `items` for Tabs | Verified: uses `<Tab>` children |
| Assumed no icons in Menu | Verified: `iconProps` supported |
| Used emojis (🏠, 👤, ⚙️) | Use MDI icons |
| Generic fonts | Poppins configured |
| No verification | `npm run verify-components` |
| Guessed layout structure | Match wireframes exactly |

## 📦 Example Pages

The template includes two fully-functional, production-ready example pages:

### 1. People Page (Default)
**Path:** `/people` (default route)  
**Components used:** Layout, Header, Tabs, TextInput, Button, Card, Avatar, Dropdown, Row/Col  
**Features:**
- Fully responsive (mobile, tablet, desktop)
- Search and location filtering
- Person cards with hover effects
- Hamburger menu for mobile/tablet
- Proper margins (16px mobile, 24px desktop)

### 2. Candidate Details Page
**Path:** `/candidates/details`  
**Components used:** Layout, Aside, Menu, Breadcrumb, Stepper, Tabs, Card, Avatar, Badge  
**Features:**
- Two-column layout (content + evaluations sidebar)
- Stepper for hiring workflow stages
- Timeline for work experience
- Comments section
- Star ratings with MDI icons

**Switch between pages:** Update `App.tsx` routing or navigate to different paths.

## 📁 Project Structure

```
octuple-ai-starter/
├── docs/
│   ├── IMPORTANT-AI-RULES.md    ⭐ Critical - read first!
│   ├── octuple-api-reference.md  ⭐ Auto-generated APIs
│   ├── design-system-ai.md       Component patterns
│   ├── ai-prompts.md             Example prompts
│   ├── components/               72 component guides
│   ├── patterns/                 8 UI pattern templates
│   ├── design-guidelines.md      Design system rules
│   └── accessibility.md          WCAG 2.1 AA compliance
├── scripts/
│   ├── extract-octuple-apis.cjs  Component extraction
│   ├── check-component-props.sh  TypeScript prop checker
│   └── detect-api-changes.cjs    Version change detection
├── src/
│   ├── pages/
│   │   ├── People/               People page (responsive)
│   │   │   ├── PeoplePage.tsx
│   │   │   ├── PersonCard.tsx
│   │   │   ├── types.ts
│   │   │   └── mockPeopleData.ts
│   │   └── CandidateDetails.tsx  Candidate details page
│   ├── components/
│   │   └── ErrorBoundary.tsx     Error handling
│   ├── App.tsx                   Routing (React Router)
│   └── main.tsx                  Entry point
├── .cursorrules                  AI agent configuration
└── package.json                  With verify scripts
```

## 🎯 Best Practices

### 1. Always Verify First
```bash
npm run verify-components
```

### 2. Check Critical Rules
Read `docs/IMPORTANT-AI-RULES.md` before each session

### 3. Use Correct Names
- ✅ `TextInput` not `Input`
- ✅ `Badge` not `Tag`
- ✅ `Layout.Aside` not `Sider`
- ✅ `CheckBox` not `Checkbox`

### 4. Include Fonts
Poppins is configured in `index.html`

### 5. Use Stepper
For progress indicators, use `Stepper` component

## 🛠️ Available Scripts

```bash
npm run dev               # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Check code quality
npm run format           # Format code
npm run verify-components # ⭐ Verify Octuple components
npm run extract-apis     # Regenerate component docs
```

## 📚 Documentation

### Quick Links

- [IMPORTANT AI Rules](./docs/IMPORTANT-AI-RULES.md) - **Read first!**
- [Component API Reference](./docs/octuple-api-reference.md) - Auto-generated
- [Getting Started](./docs/getting-started.md) - Step-by-step guide
- [AI Prompts](./docs/ai-prompts.md) - Example prompts
- [Component Patterns](./docs/component-patterns.md) - UI patterns
- [Troubleshooting](./docs/troubleshooting.md) - Common issues

## 🎓 Learning Path

### For New Users

1. Run `npm install`
2. Run `npm run verify-components`
3. Read `docs/IMPORTANT-AI-RULES.md`
4. Check `docs/octuple-api-reference.md`
5. Try example prompts from `docs/ai-prompts.md`

### For AI-Assisted Development

1. Open project in Cursor: `cursor .`
2. In every prompt, reference: `@docs/IMPORTANT-AI-RULES.md`
3. Verify components: `@docs/octuple-api-reference.md`
4. Use improved prompt patterns
5. Build iteratively, verify often

## ⚠️ Common Mistakes (Now Prevented!)

The setup now **prevents** these mistakes:

1. ✅ Using wrong component names → Auto-verified
2. ✅ Missing fonts → Poppins configured
3. ✅ Wrong layout structure → Documented
4. ✅ Assuming APIs → Extracted from source
5. ✅ No verification → Scripts provided

## 🔄 Keeping Updated

### After Upgrading Octuple

```bash
npm install @eightfold.ai/octuple@latest
npm run extract-apis
```

This regenerates documentation with new component APIs.

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Reporting Issues

If AI generated incorrect code:
1. Check `docs/octuple-api-reference.md` for correct names
2. Update `docs/IMPORTANT-AI-RULES.md` with the mistake
3. Run `npm run extract-apis` to verify
4. Submit PR with improved documentation

## 📄 License

MIT License - see [LICENSE](./LICENSE)

## 🙏 Acknowledgments

- **Eightfold AI** for the Octuple Design System
- **Community feedback** that identified and fixed critical issues

---

**🎉 You're ready!** Start with `npm run verify-components` and `docs/IMPORTANT-AI-RULES.md`

For support, see `docs/troubleshooting.md` or create a GitHub issue.
