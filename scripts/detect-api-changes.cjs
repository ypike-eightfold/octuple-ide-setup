#!/usr/bin/env node

/**
 * Script to detect API changes in Octuple components
 * Compares current component exports with a previously saved snapshot
 * Usage: node scripts/detect-api-changes.cjs [--save]
 */

const fs = require('fs');
const path = require('path');

const SNAPSHOT_FILE = path.join(__dirname, '../.octuple-api-snapshot.json');

// Get current Octuple exports
function getCurrentExports() {
  try {
    const octuple = require('@eightfold.ai/octuple');
    const allExports = Object.keys(octuple).sort();
    
    // Get package version
    const packageJsonPath = path.join(__dirname, '../node_modules/@eightfold.ai/octuple/package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    return {
      version: packageJson.version,
      timestamp: new Date().toISOString(),
      exports: allExports,
      exportCount: allExports.length
    };
  } catch (error) {
    console.error('❌ Error: Could not load Octuple exports');
    console.error(error.message);
    process.exit(1);
  }
}

// Load previous snapshot
function loadSnapshot() {
  if (!fs.existsSync(SNAPSHOT_FILE)) {
    return null;
  }
  
  try {
    const content = fs.readFileSync(SNAPSHOT_FILE, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('⚠️  Warning: Could not parse snapshot file');
    return null;
  }
}

// Save current snapshot
function saveSnapshot(data) {
  try {
    fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(data, null, 2));
    console.log(`✅ Snapshot saved to ${SNAPSHOT_FILE}`);
    return true;
  } catch (error) {
    console.error('❌ Error: Could not save snapshot');
    console.error(error.message);
    return false;
  }
}

// Compare two export sets
function compareExports(oldData, newData) {
  if (!oldData) {
    return {
      isFirstRun: true,
      hasChanges: false
    };
  }

  const oldExports = new Set(oldData.exports);
  const newExports = new Set(newData.exports);

  const added = [...newExports].filter(e => !oldExports.has(e));
  const removed = [...oldExports].filter(e => !newExports.has(e));
  const unchanged = [...newExports].filter(e => oldExports.has(e));

  return {
    isFirstRun: false,
    hasChanges: added.length > 0 || removed.length > 0,
    oldVersion: oldData.version,
    newVersion: newData.version,
    versionChanged: oldData.version !== newData.version,
    added,
    removed,
    unchanged,
    addedCount: added.length,
    removedCount: removed.length,
    unchangedCount: unchanged.length
  };
}

// Main function
function detectChanges(shouldSave = false) {
  console.log('\n🔍 Detecting Octuple API changes...\n');

  const currentData = getCurrentExports();
  const previousData = loadSnapshot();

  console.log(`📦 Current version: ${currentData.version}`);
  console.log(`📊 Current exports: ${currentData.exportCount}`);
  console.log('');

  if (shouldSave) {
    saveSnapshot(currentData);
    console.log('');
    console.log('💡 Snapshot saved. Run this script again (without --save) to detect changes.');
    console.log('');
    return { saved: true };
  }

  const comparison = compareExports(previousData, currentData);

  if (comparison.isFirstRun) {
    console.log('ℹ️  No previous snapshot found.');
    console.log('   Run with --save to create a baseline:');
    console.log('   node scripts/detect-api-changes.cjs --save');
    console.log('');
    return comparison;
  }

  console.log(`📦 Previous version: ${comparison.oldVersion}`);
  console.log('');

  if (!comparison.hasChanges) {
    console.log('✅ No API changes detected!');
    console.log('');
    return comparison;
  }

  console.log('⚠️  API changes detected!\n');

  if (comparison.versionChanged) {
    console.log(`📌 Version changed: ${comparison.oldVersion} → ${comparison.newVersion}\n`);
  }

  if (comparison.added.length > 0) {
    console.log(`✨ Added exports (${comparison.addedCount}):`);
    comparison.added.forEach(name => {
      console.log(`   + ${name}`);
    });
    console.log('');
  }

  if (comparison.removed.length > 0) {
    console.log(`🗑️  Removed exports (${comparison.removedCount}):`);
    comparison.removed.forEach(name => {
      console.log(`   - ${name}`);
    });
    console.log('');
  }

  console.log(`ℹ️  Unchanged exports: ${comparison.unchangedCount}`);
  console.log('');

  console.log('📋 Action Items:');
  console.log('');

  if (comparison.versionChanged) {
    console.log('   1. Update version in all documentation files');
  }

  if (comparison.added.length > 0) {
    console.log('   2. Document new components in:');
    console.log('      - docs/verified-octuple-examples.md');
    console.log('      - docs/ai-quick-reference.md');
    console.log('      - docs/components/[ComponentName].md');
  }

  if (comparison.removed.length > 0) {
    console.log('   3. Update documentation for removed components:');
    comparison.removed.forEach(name => {
      console.log(`      - Mark ${name} as deprecated or removed`);
    });
  }

  console.log('   4. Run: npm run extract-apis');
  console.log('   5. Test all verified examples');
  console.log('   6. Update CHANGELOG.md');
  console.log('');

  if (comparison.hasChanges) {
    console.log('💡 After updating documentation, save new snapshot:');
    console.log('   node scripts/detect-api-changes.cjs --save');
    console.log('');
  }

  console.log('📖 See: docs/CONTRIBUTING-TO-DOCS.md#updating-documentation-when-octuple-updates');
  console.log('');

  return comparison;
}

// Run if called directly
if (require.main === module) {
  const shouldSave = process.argv.includes('--save');
  const result = detectChanges(shouldSave);
  
  if (result.saved) {
    process.exit(0);
  }
  
  if (result.isFirstRun) {
    process.exit(0);
  }
  
  // Exit with error code if changes detected
  process.exit(result.hasChanges ? 1 : 0);
}

module.exports = { getCurrentExports, loadSnapshot, saveSnapshot, compareExports, detectChanges };

