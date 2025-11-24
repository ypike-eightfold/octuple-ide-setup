/**
 * Extract real Octuple component APIs for AI documentation
 * Run: node scripts/extract-octuple-apis.js
 */

const octuple = require('@eightfold.ai/octuple');
const fs = require('fs');
const path = require('path');

console.log('🔍 Extracting Octuple component APIs...\n');

// Get all exports
const allExports = Object.keys(octuple).sort();

// Key components to document
const keyComponents = [
  'Button',
  'Card',
  'Layout',
  'Menu',
  'Breadcrumb',
  'Stepper',
  'Avatar',
  'Badge',
  'TextInput',
  'TextArea',
  'Select',
  'CheckBox',
  'RadioButton',
  'DatePicker',
  'Table',
  'Modal',
  'Dialog',
  'Drawer',
  'Dropdown',
  'Form',
  'Tabs',
  'Pagination',
  'Spinner',
  'Pill',
  'Row',
  'Col',
];

let report = `# Octuple Component API Reference (Auto-Generated)\n\n`;
report += `Generated: ${new Date().toISOString()}\n\n`;
report += `## Available Components\n\n`;

const foundComponents = [];
const missingComponents = [];

keyComponents.forEach((comp) => {
  if (octuple[comp]) {
    foundComponents.push(comp);
    report += `- ✅ **${comp}**\n`;

    // Check for subcomponents
    if (typeof octuple[comp] === 'function' || typeof octuple[comp] === 'object') {
      const props = Object.keys(octuple[comp]).filter(
        (k) => typeof octuple[comp][k] === 'function' || k === 'Item' || k === 'Group'
      );
      if (props.length > 0) {
        report += `  - Sub-components: ${props.join(', ')}\n`;
      }
    }
  } else {
    missingComponents.push(comp);
    report += `- ❌ ${comp} (NOT FOUND)\n`;
  }
});

report += `\n## Summary\n\n`;
report += `- Found: ${foundComponents.length} components\n`;
report += `- Missing: ${missingComponents.length} components\n`;
report += `- Total Octuple exports: ${allExports.length}\n\n`;

report += `## All Exports\n\n`;
report += `\`\`\`\n${allExports.join('\n')}\`\`\`\n`;

// Save report
const outputPath = path.join(__dirname, '..', 'docs', 'octuple-api-reference.md');
fs.writeFileSync(outputPath, report);

console.log(`✅ Report saved to: docs/octuple-api-reference.md`);
console.log(`\n📊 Found ${foundComponents.length}/${keyComponents.length} key components`);

if (missingComponents.length > 0) {
  console.log(`\n⚠️  Missing components:`);
  missingComponents.forEach((c) => console.log(`   - ${c}`));
}

