# Maintenance Guide

**Purpose:** Keep documentation synchronized with Octuple updates  
**Last Updated:** 2024-11-20

---

## Overview

This guide explains how to maintain the Octuple AI Starter documentation as the Octuple Design System evolves.

---

## Automated Tools

### 1. Version Checker

**Purpose:** Verify documentation matches installed Octuple version

**Usage:**
```bash
npm run check-version
```

**Output:**
- ✅ Documentation is up to date
- ⚠️ Version mismatch detected (with action items)

**When to run:**
- After upgrading Octuple
- Before releasing documentation updates
- Weekly as part of maintenance routine

---

### 2. API Change Detector

**Purpose:** Track changes in Octuple exports between versions

**Usage:**
```bash
# First time: Save baseline snapshot
npm run save-snapshot

# After Octuple upgrade: Detect changes
npm run detect-changes
```

**Output:**
- ✨ Added exports (new components)
- 🗑️ Removed exports (deprecated components)
- ℹ️ Unchanged exports (stable components)
- Action items for documentation updates

**When to run:**
- After upgrading Octuple
- Before updating documentation
- When investigating unexpected behavior

---

### 3. Component API Extractor

**Purpose:** Generate comprehensive list of all Octuple exports

**Usage:**
```bash
npm run extract-apis
# or
npm run verify-components
```

**Output:**
- `docs/octuple-api-reference.md` (auto-generated)
- Lists all available components and sub-components
- Identifies missing/non-existent components

**When to run:**
- After Octuple upgrades
- When adding new component documentation
- When verifying component existence

---

### 4. Component Props Checker

**Purpose:** Display exact TypeScript interface for any component

**Usage:**
```bash
npm run check-props ComponentName
# Example:
npm run check-props Button
npm run check-props Menu
```

**Output:**
- Full `.d.ts` file contents
- TypeScript interfaces and enums
- Exact prop names and types

**When to run:**
- Before documenting a component
- When fixing type errors
- When verifying component APIs
- Before creating code examples

---

## Update Workflow

### When Octuple Releases a New Version

#### Step 1: Check Current State (Before Update)

```bash
# Save current API snapshot
npm run save-snapshot

# Note current version
npm run check-version
```

#### Step 2: Update Octuple

```bash
# Update to latest version
npm install @eightfold.ai/octuple@latest

# Or specific version
npm install @eightfold.ai/octuple@2.55.0
```

#### Step 3: Detect Changes

```bash
# Check version mismatch
npm run check-version

# Detect API changes
npm run detect-changes

# Extract new API reference
npm run extract-apis
```

#### Step 4: Test All Verified Examples

```bash
# Start dev server
npm run dev

# Manually test:
# - All verified examples work
# - No TypeScript errors
# - No console errors
# - Interactive features work
# - Keyboard navigation works
```

**Check these files:**
- `src/App.tsx` (main example)
- `docs/verified-octuple-examples.md` (copy-paste examples)

#### Step 5: Update Documentation

For each changed component:

1. **Check props:**
   ```bash
   npm run check-props ComponentName
   ```

2. **Update component guide:**
   - `docs/components/ComponentName.md`
   - Update API Reference section
   - Add new props/variants
   - Mark deprecated props
   - Update examples

3. **Update verified examples:**
   - `docs/verified-octuple-examples.md`
   - Test examples still work
   - Update prop names if changed
   - Add examples for new features

4. **Update quick reference:**
   - `docs/ai-quick-reference.md`
   - Add new components to lookup table
   - Update decision trees
   - Add new patterns

5. **Update design system guide:**
   - `docs/design-system-ai.md`
   - Add new components
   - Update APIs

#### Step 6: Update Version Numbers

Update version in these files:
- `docs/verified-octuple-examples.md`
- `docs/octuple-api-reference.md`
- `docs/IMPORTANT-AI-RULES.md`
- `docs/ai-quick-reference.md`
- `docs/design-guidelines.md`
- `docs/accessibility.md`
- `docs/components/*.md` (each component guide)
- `README.md`
- `CHANGELOG.md`

#### Step 7: Document Changes

**In component guides** (`docs/components/*.md`):
```markdown
## Changelog

### 2024-XX-XX (Octuple v2.XX.X)
- Updated API for new version
- Added [new feature] support
- Deprecated [oldProp] → use [newProp]
- BREAKING: [describe breaking change]
```

**In main CHANGELOG** (`CHANGELOG.md`):
```markdown
## [1.X.0] - 2024-XX-XX - Octuple v2.XX.X Update

### Changed
- Updated for Octuple v2.XX.X
- [Component]: [breaking change details]

### Added
- [New component] documentation
- [New feature] examples

### Deprecated
- [Component].[prop]: Use [alternative]

### Removed
- [Component]: No longer exported by Octuple
```

#### Step 8: Save New Baseline

```bash
# Save new API snapshot
npm run save-snapshot

# Verify documentation is current
npm run check-version
```

#### Step 9: Build and Test

```bash
# Ensure TypeScript compilation succeeds
npm run build

# Test in browser
npm run dev
```

---

## Maintenance Checklist

### Weekly ⏰

- [ ] Check for new Octuple releases
- [ ] Review open GitHub issues for Octuple
- [ ] Test verified examples still work
- [ ] Review analytics (if available) for frequently accessed docs

### Monthly 📅

- [ ] Run `npm run check-version`
- [ ] Run `npm run detect-changes`
- [ ] Update any outdated examples
- [ ] Review and improve existing documentation
- [ ] Add new patterns discovered in projects
- [ ] Check for broken links in documentation

### Quarterly 🗓️

- [ ] Major Octuple version update review
- [ ] Comprehensive accessibility audit
- [ ] Documentation quality review
- [ ] Remove outdated or incorrect information
- [ ] Review and update design guidelines
- [ ] Update Confluence documentation (if available)

---

## Troubleshooting

### Documentation shows wrong version

**Problem:** `npm run check-version` reports mismatch

**Solution:**
1. Check installed version: `npm list @eightfold.ai/octuple`
2. Search for old version numbers in docs
3. Update manually or use find/replace
4. Verify: `npm run check-version`

### API changes not detected

**Problem:** `npm run detect-changes` shows no changes but you know there are

**Solution:**
1. Delete `.octuple-api-snapshot.json`
2. Run `npm run save-snapshot`
3. Make the change (upgrade Octuple)
4. Run `npm run detect-changes` again

### Component props don't match documentation

**Problem:** TypeScript errors or runtime errors

**Solution:**
1. Check exact props: `npm run check-props ComponentName`
2. Compare with documentation
3. Update documentation to match `.d.ts` file
4. NEVER guess - always verify

### Verified examples break after update

**Problem:** Examples from `docs/verified-octuple-examples.md` no longer work

**Solution:**
1. Check console for exact error
2. Verify component still exists: `npm run extract-apis`
3. Check props changed: `npm run check-props ComponentName`
4. Update example with correct props
5. Test example in browser
6. Update documentation

---

## Best Practices

### DO ✅

- **Save snapshot before upgrading**: Always run `npm run save-snapshot` before upgrading Octuple
- **Test before documenting**: Verify all examples work before updating docs
- **Check TypeScript definitions**: Use `npm run check-props` to verify exact APIs
- **Document breaking changes**: Clearly mark breaking changes in CHANGELOG
- **Keep version synced**: Ensure all docs reference the same Octuple version
- **Test incrementally**: Update and test one component at a time

### DON'T ❌

- **Don't guess prop names**: Always verify with `npm run check-props`
- **Don't skip testing**: Never update docs without testing examples
- **Don't forget changelog**: Always document changes in CHANGELOG.md
- **Don't mix versions**: Keep all examples on the same Octuple version
- **Don't ignore warnings**: TypeScript warnings often indicate real issues

---

## Emergency Rollback

If an Octuple update breaks everything:

### Step 1: Rollback Package

```bash
# Install previous version
npm install @eightfold.ai/octuple@2.54.2  # or your last working version
```

### Step 2: Restore Snapshot

```bash
# If you have a backup of .octuple-api-snapshot.json
# Copy it back from backup
```

### Step 3: Verify

```bash
# Check version is correct
npm run check-version

# Test examples
npm run dev
```

### Step 4: Document

Update `CHANGELOG.md`:
```markdown
## [1.X.X] - 2024-XX-XX - Rollback

### Reverted
- Rolled back Octuple from v2.XX.X to v2.54.2
- Reason: [breaking change description]
- Will upgrade after [issue/fix]
```

---

## Getting Help

If you encounter issues during maintenance:

1. **Check the logs**: Scripts provide detailed output
2. **Verify manually**: Use `npm run check-props` to see exact APIs
3. **Test in isolation**: Create a minimal example in `src/App.tsx`
4. **Check Octuple GitHub**: Review release notes and issues
5. **Review this guide**: `docs/MAINTENANCE.md`
6. **Review contribution guide**: `docs/CONTRIBUTING-TO-DOCS.md`

---

## Resources

### Internal Documentation
- `docs/CONTRIBUTING-TO-DOCS.md` - How to update docs
- `docs/CONFLUENCE-INTEGRATION-STATUS.md` - Integration status
- `CHANGELOG.md` - Project changelog

### External Resources
- [Octuple GitHub Releases](https://github.com/EightfoldAI/octuple/releases)
- [Octuple Changelog](https://github.com/EightfoldAI/octuple/blob/main/CHANGELOG.md)
- [Octuple Issues](https://github.com/EightfoldAI/octuple/issues)

### Scripts
- `scripts/check-octuple-version.cjs` - Version checker
- `scripts/detect-api-changes.cjs` - API change detector
- `scripts/extract-octuple-apis.cjs` - API extractor
- `scripts/check-component-props.sh` - Props inspector

---

## Contact

For questions about maintenance:
1. Review this guide thoroughly
2. Check existing documentation for examples
3. Test your changes with a minimal example
4. Open an issue with detailed information

**Remember:** Maintenance is ongoing. Set up reminders and stick to the schedule to keep documentation accurate and useful.

