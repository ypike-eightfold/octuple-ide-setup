#!/bin/bash

# Octuple Component Props Checker
# Usage: npm run check-props Menu

if [ -z "$1" ]; then
  echo "❌ Error: Component name required"
  echo ""
  echo "Usage: npm run check-props <ComponentName>"
  echo ""
  echo "Examples:"
  echo "  npm run check-props Menu"
  echo "  npm run check-props Tabs"
  echo "  npm run check-props Avatar"
  echo "  npm run check-props Button"
  exit 1
fi

COMPONENT=$1
TYPES_FILE="node_modules/@eightfold.ai/octuple/lib/components/$COMPONENT/$COMPONENT.types.d.ts"

if [ ! -f "$TYPES_FILE" ]; then
  echo "❌ Component '$COMPONENT' types file not found"
  echo ""
  echo "Tried: $TYPES_FILE"
  echo ""
  echo "Available components:"
  ls node_modules/@eightfold.ai/octuple/lib/components/ | grep -v "\.d\.ts" | head -20
  exit 1
fi

echo "📋 Checking props for: $COMPONENT"
echo "📁 File: $TYPES_FILE"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

cat "$TYPES_FILE"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ Done! Check the interface definitions above for available props."

