# Google Sheets Form Debugging Guide

## Common Issues and Solutions:

### Issue 1: Google Sheets URL Not Configured
**Check:** Is the URL in `.env.local` correct?

The URL should look like:
```
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/XXXXX/exec
```

**Important:** The variable MUST start with `NEXT_PUBLIC_` to be accessible in the browser!

### Issue 2: Script Not Deployed Correctly
**Steps to verify:**
1. Open your Google Apps Script
2. Click **Deploy** > **Manage deployments**
3. Check that:
   - Type is "Web app"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Copy the Web app URL (ends with `/exec`)

### Issue 3: CORS Mode Issue
The current code uses `mode: 'no-cors'` which means:
- The request is sent
- But we can't read the response
- This can make debugging difficult

**Let's test if the script is receiving data:**

1. Open your Google Apps Script
2. Click **Executions** (left sidebar)
3. Submit a form on your website
4. Check if a new execution appears in the log

### Issue 4: Script Permissions
When you first deploy, Google asks for permissions:
1. Click "Review Permissions"
2. Choose your Google account
3. Click "Advanced" > "Go to [Project Name] (unsafe)"
4. Click "Allow"

## Quick Test:

### Test 1: Check if URL is accessible
Open this URL in your browser (replace with your actual URL):
```
https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

You should see: "Form submission endpoint is working!"

### Test 2: Test with curl (if you have it)
```bash
curl -X POST "YOUR_GOOGLE_SHEETS_URL" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"123","country":"USA","course":"","message":"Test","formType":"Test"}'
```

### Test 3: Check Browser Console
1. Open your website
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Submit a form
5. Look for any error messages

## What to Check in Your .env.local:

```env
# ✅ CORRECT - Starts with NEXT_PUBLIC_
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/XXXXX/exec

# ❌ WRONG - Missing NEXT_PUBLIC_
GOOGLE_SHEETS_URL=https://script.google.com/macros/s/XXXXX/exec

# ✅ CORRECT - WhatsApp number format
NEXT_PUBLIC_WHATSAPP_NUMBER=9779801234567

# ❌ WRONG - Has spaces or special characters
NEXT_PUBLIC_WHATSAPP_NUMBER=+977 980 123 4567
```

## After Making Changes:

**IMPORTANT:** After updating `.env.local`, you MUST restart the development server:

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

## Still Not Working?

### Alternative: Use FormSubmit.co (Easier)
If Google Sheets is too complex, you can use FormSubmit.co:

1. No setup required
2. Just change the form action to:
   ```
   https://formsubmit.co/your-email@gmail.com
   ```
3. Submissions go directly to your email

### Alternative: Use Google Forms
1. Create a Google Form
2. Embed it on your website
3. Responses automatically save to Google Sheets

## Need More Help?

Please share:
1. The error message from browser console (F12)
2. Whether the test URL shows "Form submission endpoint is working!"
3. Any errors in Google Apps Script Executions log
