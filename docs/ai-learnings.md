# AI Learnings Log

This is a living document that AI coding agents read and update as they work with the Octuple Design System. It captures lessons learned, component quirks, and successful patterns to improve code generation over time.

---

## How This Works

### For AI Agents
1. **Read this file** at the start of every coding session
2. **Update this file** when you:
   - Fix a bug or mistake you made
   - Discover unexpected component behavior
   - Find a pattern that works particularly well
   - User explicitly says "remember this" or "save this for next time"
3. **Check relevant sections** before implementing similar features

### For Users
- Say "remember this" after AI learns something to ensure it's documented
- Review entries periodically to validate they're still accurate
- Remove outdated entries when Octuple updates break old patterns

---

## Entry Format

When adding entries, use this format:

```markdown
### [Brief Title]
**Date:** YYYY-MM-DD
**Context:** What were you trying to do?
**Problem:** What went wrong or what was discovered?
**Solution:** What's the correct approach?
**Code Example:** (if applicable)
```

---

## Lessons Learned

<!-- AI: Add new lessons here. Most recent at the top. -->

### Example Entry (Template)
**Date:** 2024-01-01
**Context:** Creating a toggle switch for settings
**Problem:** Created a custom toggle component instead of using Octuple
**Solution:** Use `<CheckBox toggle />` for toggle switches
**Code Example:**
```typescript
// ✅ Correct
<CheckBox toggle checked={value} onChange={handleChange} />

// ❌ Wrong - Don't create custom toggles
<div className="custom-toggle">...</div>
```

---

## Component Quirks

<!-- AI: Document unexpected Octuple behaviors here -->

### Row Component Requires Explicit Flex Display
**Discovered:** Initial setup
**Behavior:** `<Row>` component doesn't automatically display as flexbox
**Workaround:** Always add `style={{ display: 'flex' }}` to Row components
```typescript
<Row gutter={24} style={{ display: 'flex' }}>
  <Col span={12}>Left</Col>
  <Col span={12}>Right</Col>
</Row>
```

### Card Component Has Internal Max-Width
**Discovered:** Initial setup
**Behavior:** Cards don't expand to full container width by default
**Workaround:** Add CSS override in global styles:
```css
[class*="card-module_card"] {
  width: 100% !important;
  max-width: 100% !important;
}
```

### TextInput Icon Positioning Unreliable
**Discovered:** Initial setup
**Behavior:** `iconProps` and `alignIcon` don't reliably position icons
**Workaround:** Use absolute positioning wrapper:
```typescript
<div style={{ position: 'relative' }}>
  <Icon path={mdiMagnify} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
  <TextInput style={{ paddingLeft: '36px' }} />
</div>
```

---

## Successful Patterns

<!-- AI: Document patterns that work well for reuse -->

### Person Card Layout
**Use Case:** Displaying employee/candidate cards with avatar, info, and actions
**Pattern:**
```typescript
<Card>
  <div style={{ display: 'flex', gap: '20px' }}>
    {/* Left section: Avatar + Name + Actions */}
    <div style={{ minWidth: '320px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <Avatar size="40px">{initials}</Avatar>
        <div>
          <h3 style={{ margin: 0 }}>{name}</h3>
          <p style={{ margin: 0, color: '#666' }}>{title}</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <Button text="Primary Action" variant={ButtonVariant.Primary} />
        <Button text="Secondary" variant={ButtonVariant.Secondary} />
      </div>
    </div>
    
    {/* Vertical Divider */}
    <div style={{ width: '1px', backgroundColor: '#e8e8e8', alignSelf: 'stretch' }} />
    
    {/* Right section: Details */}
    <div style={{ flex: 1 }}>
      {/* Info items */}
    </div>
  </div>
</Card>
```

### Search Input with Icon
**Use Case:** Search bars with magnifying glass icon
**Pattern:**
```typescript
<div style={{ position: 'relative', width: '280px' }}>
  <Icon 
    path={mdiMagnify} 
    size={0.8} 
    style={{ 
      position: 'absolute', 
      left: '12px', 
      top: '50%', 
      transform: 'translateY(-50%)', 
      color: '#8c8c8c',
      pointerEvents: 'none',
      zIndex: 1,
    }} 
  />
  <TextInput
    placeholder="Search..."
    style={{ width: '100%', paddingLeft: '36px' }}
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>
```

---

## Version History

| Date | Change | By |
|------|--------|-----|
| 2024-12-10 | Initial creation with known quirks | AI Setup |

---

*This document is automatically maintained by AI coding agents. Last updated: 2024-12-10*

