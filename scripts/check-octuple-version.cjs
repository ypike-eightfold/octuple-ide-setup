#!/usr/bin/env node

/**
 * Script to check installed Octuple version and compare with documented version
 * Usage: node scripts/check-octuple-version.cjs
 */

const fs = require('fs');
const path = require('path');

// Get installed Octuple version
function getInstalledVersion() {
  try {
    const packageJsonPath = path.join(__dirname, '../node_modules/@eightfold.ai/octuple/package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version;
  } catch (error) {
    console.error('❌ Error: Could not read Octuple package.json');
    console.error('   Make sure @eightfold.ai/octuple is installed');
    return null;
  }
}

// Get documented version from various documentation files
function getDocumentedVersion() {
  const docsToCheck = [
    'docs/verified-octuple-examples.md',
    'docs/octuple-api-reference.md',
    'docs/IMPORTANT-AI-RULES.md',
    'README.md'
  ];

  const versions = new Set();

  docsToCheck.forEach(docPath => {
    const fullPath = path.join(__dirname, '..', docPath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      // Look for version patterns like "v2.54.2" or "2.54.2"
      const versionMatches = content.match(/(?:v|version|octuple\s+)(\d+\.\d+\.\d+)/gi);
      if (versionMatches) {
        versionMatches.forEach(match => {
          const version = match.match(/(\d+\.\d+\.\d+)/)[1];
          versions.add(version);
        });
      }
    }
  });

  return Array.from(versions);
}

// Main function
function checkVersion() {
  console.log('\n🔍 Checking Octuple version...\n');

  const installedVersion = getInstalledVersion();
  if (!installedVersion) {
    process.exit(1);
  }

  console.log(`📦 Installed version: ${installedVersion}`);

  const documentedVersions = getDocumentedVersion();
  if (documentedVersions.length === 0) {
    console.log('⚠️  No documented version found in docs');
    console.log('   Documentation may need version labels');
  } else {
    console.log(`📝 Documented versions: ${documentedVersions.join(', ')}`);
  }

  console.log('');

  // Compare versions
  const isUpToDate = documentedVersions.includes(installedVersion);

  if (isUpToDate) {
    console.log('✅ Documentation is up to date!');
    console.log('');
    return true;
  } else {
    console.log('⚠️  Version mismatch detected!');
    console.log('');
    console.log('📋 Action Items:');
    console.log('   1. Run: npm run extract-apis');
    console.log('   2. Test all verified examples');
    console.log('   3. Update component guides if APIs changed');
    console.log('   4. Update version numbers in documentation');
    console.log('   5. Update CHANGELOG.md');
    console.log('');
    console.log('📖 See: docs/CONTRIBUTING-TO-DOCS.md#updating-documentation-when-octuple-updates');
    console.log('');
    return false;
  }
}

// Run if called directly
if (require.main === module) {
  const isUpToDate = checkVersion();
  process.exit(isUpToDate ? 0 : 1);
}

module.exports = { getInstalledVersion, getDocumentedVersion, checkVersion };

