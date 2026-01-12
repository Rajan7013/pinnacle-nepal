# Favicon Not Showing on Vercel - Fix Guide

## Problem
- Favicon shows correctly on localhost
- Shows "Next.js" icon on Vercel deployment
- `logo.jpg` is committed to repository

## Root Cause
Vercel's build cache or browser cache is showing the old Next.js default favicon.

## Solution

### Step 1: Clear Vercel Build Cache
1. Go to Vercel Dashboard
2. Go to your project → Settings → General
3. Scroll down and click **"Clear Build Cache"**
4. Redeploy the project

### Step 2: Force Browser Cache Clear
After redeploying, clear your browser cache:
- **Chrome/Edge:** Ctrl + Shift + Delete → Clear cached images and files
- **Firefox:** Ctrl + Shift + Delete → Cached Web Content
- Or use Incognito/Private mode

### Step 3: Verify Files Are Deployed
Check these URLs after deployment:
- `https://www.pinnaclenepal.org/logo.jpg` (should show logo)
- `https://www.pinnaclenepal.org/favicon.ico` (if exists)

### Step 4: Hard Refresh
On the deployed site:
- **Windows:** Ctrl + F5
- **Mac:** Cmd + Shift + R

## Current Setup
✅ `public/logo.jpg` - Exists and committed
✅ `app/icon.tsx` - Dynamic favicon generator
✅ `app/opengraph-image.tsx` - OG image generator
✅ `app/layout.tsx` - Metadata configured

## If Still Not Working

### Option A: Add favicon.ico
Create a proper ICO file (browsers prefer this):
```bash
# Convert logo.jpg to favicon.ico (use online tool or ImageMagick)
# Place in public/favicon.ico
```

### Option B: Update Metadata
Make sure `layout.tsx` has:
```typescript
icons: {
  icon: [
    { url: '/logo.jpg', type: 'image/jpeg' },
    { url: '/favicon.ico', sizes: 'any' }
  ],
  shortcut: '/logo.jpg',
  apple: '/logo.jpg',
}
```

## Quick Fix Commands
```bash
# 1. Commit any changes
git add .
git commit -m "fix: update favicon configuration"
git push origin main

# 2. In Vercel Dashboard:
# - Clear Build Cache
# - Redeploy

# 3. Hard refresh browser (Ctrl + F5)
```

## Expected Result
After clearing cache and redeploying, you should see your Pinnacle Nepal logo in:
- Browser tab (favicon)
- Bookmarks
- Browser history
- Social media shares (Open Graph)

## Note
Favicon changes can take time to propagate due to aggressive browser caching. Sometimes it takes 24-48 hours for all browsers to update.
