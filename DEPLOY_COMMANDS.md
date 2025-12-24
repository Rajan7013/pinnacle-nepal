# 🚀 Complete GitHub Pages Deployment Guide

## 📋 Prerequisites Checklist

Before starting, make sure you have:
- [ ] Node.js installed (v18 or higher)
- [ ] Git installed
- [ ] GitHub account created
- [ ] Project dependencies installed (`npm install`)
- [ ] Google Sheets integration configured (optional but recommended)

## ⚠️ STEP 0: Update Repository Name

**CRITICAL**: Before deploying, update your repository name in `next.config.ts`

1. Open `next.config.ts`
2. Find lines 24-25:
   ```typescript
   basePath: process.env.NODE_ENV === 'production' ? '/pinnacle-nepal' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/pinnacle-nepal/' : '',
   ```
3. Replace `/pinnacle-nepal` with `/YOUR-REPO-NAME`
4. Save the file

**Example**: If your repo is named `my-consultancy`, change to:
```typescript
basePath: process.env.NODE_ENV === 'production' ? '/my-consultancy' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/my-consultancy/' : '',
```

## 📝 STEP 1: Initialize Git Repository

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Check status
git status
```

You should see all your files listed as "untracked files".

## 📦 STEP 2: Commit Your Code

```bash
# Add all files to staging
git add .

# Verify files are staged
git status

# Commit with a message
git commit -m "Initial commit: Pinnacle Nepal Educational Consultancy Platform"
```

**Expected output**: "X files changed, Y insertions(+)"

## 🌐 STEP 3: Create GitHub Repository

### Option A: Via GitHub Website (Recommended)
1. Go to https://github.com/new
2. Fill in:
   - **Repository name**: `pinnacle-nepal` (or your choice)
   - **Description**: "Educational Consultancy Platform for Study Abroad"
   - **Visibility**: Choose **Public** (so friends can see it)
   - **DO NOT** check "Add a README file" (you already have one)
   - **DO NOT** add .gitignore or license (you already have them)
3. Click **"Create repository"**

### Option B: Via GitHub CLI (Advanced)
```bash
gh repo create pinnacle-nepal --public --source=. --remote=origin
```

## 🔗 STEP 4: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote origin
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/pinnacle-nepal.git

# Verify remote was added
git remote -v

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Expected output**: 
```
Enumerating objects: X, done.
Writing objects: 100% (X/X), Y MiB | Z MiB/s, done.
To https://github.com/YOUR_USERNAME/pinnacle-nepal.git
 * [new branch]      main -> main
```

## 🚀 STEP 5: Deploy to GitHub Pages

Now deploy your site to the `gh-pages` branch:

```bash
npm run deploy
```

**What this does:**
1. Builds your Next.js app (`next build`)
2. Exports static files to `out/` folder
3. Creates `gh-pages` branch (if doesn't exist)
4. Pushes `out/` contents to `gh-pages` branch

**Expected output:**
```
> consultancy-platform@0.1.0 deploy
> npm run export && npx gh-pages -d out -b gh-pages

Route (app)                              Size     First Load JS
┌ ○ /                                    ...      ...
├ ○ /about                               ...      ...
...
Published
```

**First time?** The `gh-pages` package will be automatically installed via `npx`.

## ⚙️ STEP 6: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/pinnacle-nepal`
2. Click **"Settings"** tab (top right)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source**: Deploy from a branch
   - **Branch**: Select `gh-pages` from dropdown
   - **Folder**: Select `/ (root)`
5. Click **"Save"**

You should see a message: "Your site is ready to be published at https://YOUR_USERNAME.github.io/pinnacle-nepal/"

## ⏳ STEP 7: Wait for Deployment

- GitHub Pages takes **2-5 minutes** to build and deploy
- Refresh the Settings > Pages page to see status
- When ready, you'll see: "Your site is live at https://..."

## ✅ STEP 8: Verify Your Deployment

### Check Your Live Site
Visit: `https://YOUR_USERNAME.github.io/pinnacle-nepal/`

### Test These Features:
- [ ] Homepage loads correctly
- [ ] Navigation works (all menu items)
- [ ] Destinations page shows countries
- [ ] Individual country pages work
- [ ] Contact form submits to Google Sheets
- [ ] WhatsApp button opens correctly
- [ ] Images load properly
- [ ] Mobile responsive design works

### Check Browser Console
1. Press **F12** to open Developer Tools
2. Go to **Console** tab
3. Look for any errors (red text)
4. Common issues:
   - 404 errors for images → Check image paths
   - Failed to load resources → Check basePath in config

## 🎉 STEP 9: Share with Friends

Your website is now live! Share this URL:

```
https://YOUR_USERNAME.github.io/pinnacle-nepal/
```

**Ways to share:**
- Direct link via WhatsApp/Email
- QR code (use qr-code-generator.com)
- Social media posts
- Add to your resume/portfolio

## 🔄 STEP 10: Making Updates

When you want to update your website:

### For Code Changes:
```bash
# 1. Make your changes in the code

# 2. Test locally
npm run dev

# 3. Commit changes
git add .
git commit -m "Updated: describe what you changed"

# 4. Push to GitHub
git push origin main

# 5. Deploy to GitHub Pages
npm run deploy
```

### For Content Changes Only:
```bash
# If you only changed text/images, you can skip git push:
npm run deploy
```

**Deployment time**: 2-3 minutes after running `npm run deploy`

## 📊 Monitoring Your Site

### View Deployment Status
1. Go to your repo on GitHub
2. Click **"Actions"** tab
3. See deployment history and status

### View Traffic (Optional)
1. Repository → Insights → Traffic
2. See visitor stats (after 14 days of data)

### Form Submissions
- Check your Google Sheet for form submissions
- Check email for notifications

## 🐛 Troubleshooting

### Issue: `npm run deploy` fails

**Solution 1**: Clear cache and try again
```bash
rm -rf .next out node_modules
npm install
npm run deploy
```

**Solution 2**: Check if gh-pages is installed
```bash
npm install --save-dev gh-pages
npm run deploy
```

### Issue: Site shows 404 error

**Cause**: basePath mismatch

**Solution**: 
1. Check `next.config.ts` basePath matches your repo name
2. Redeploy: `npm run deploy`

### Issue: Images not loading

**Cause**: Image paths incorrect

**Solution**:
1. Verify images are in `public/images/`
2. Check image paths don't have leading `/` in production
3. Clear browser cache (Ctrl+Shift+R)

### Issue: Forms not submitting

**Cause**: Environment variables not set

**Solution**:
1. Check `.env.local` has Google Sheets URL
2. Verify Google Apps Script is deployed
3. Test with `test-google-sheets.html`

### Issue: CSS not loading

**Cause**: Asset prefix issue

**Solution**:
1. Check `assetPrefix` in `next.config.ts`
2. Clear browser cache
3. Redeploy: `npm run deploy`

### Issue: "Permission denied" error

**Cause**: Git authentication issue

**Solution**:
```bash
# Use personal access token
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/pinnacle-nepal.git
```

Or use SSH:
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/pinnacle-nepal.git
```

## 📚 Additional Resources

### Documentation
- **GitHub Pages**: https://pages.github.com
- **Next.js Static Export**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **gh-pages package**: https://www.npmjs.com/package/gh-pages

### Detailed Guides in This Project
- `GITHUB_PAGES_DEPLOYMENT.md` - Comprehensive deployment guide
- `SETUP_COMPLETE.md` - Google Sheets setup
- `GOOGLE_SHEETS_DEBUG.md` - Troubleshooting forms
- `README.md` - Complete project documentation

## 🎯 Quick Reference

### Essential Commands
```bash
# Local development
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Check git status
git status

# View remote URL
git remote -v
```

### Your URLs
- **Repository**: `https://github.com/YOUR_USERNAME/pinnacle-nepal`
- **Live Site**: `https://YOUR_USERNAME.github.io/pinnacle-nepal/`
- **Source Branch**: `main`
- **Deploy Branch**: `gh-pages`

## ✨ Success Checklist

After deployment, verify:
- [x] Code pushed to GitHub `main` branch
- [x] `gh-pages` branch created automatically
- [x] GitHub Pages enabled in Settings
- [x] Site accessible at GitHub Pages URL
- [x] All pages load correctly
- [x] Forms submit to Google Sheets
- [x] WhatsApp button works
- [x] Images display properly
- [x] Mobile responsive
- [x] No console errors

## 🎊 Congratulations!

Your website is now live on GitHub Pages! 

**What you've accomplished:**
✅ Built a professional educational consultancy website
✅ Deployed it to GitHub for free
✅ Made it accessible to anyone with the URL
✅ Set up automatic deployments
✅ Integrated Google Sheets for form submissions
✅ Added WhatsApp integration

**Share your achievement:**
- Show it to friends and family
- Add it to your portfolio
- Share on LinkedIn
- Use it for your business!

---

**Need Help?** 
- Check `GITHUB_PAGES_DEPLOYMENT.md` for detailed explanations
- Open an issue on GitHub
- Review the troubleshooting section above

**Built with ❤️ by Pinnacle Nepal Team**
