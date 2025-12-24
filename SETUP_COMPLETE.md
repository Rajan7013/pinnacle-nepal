# ✅ Form Integration Complete!

I've successfully set up your form submissions with Google Sheets, Email notifications, and WhatsApp integration!

## 🎯 What's Been Implemented:

### 1. **Google Sheets Integration** ✅
- Contact Form now submits to Google Sheets
- Consultation Popup now submits to Google Sheets
- All form data is automatically saved with timestamp

### 2. **WhatsApp Button** ✅
- Floating WhatsApp button added to all pages
- Located at bottom-right corner
- Animated with pulse effect
- Opens WhatsApp chat with pre-filled message
- Tooltip shows "Chat with us on WhatsApp"

### 3. **Form Data Captured:**
- **Contact Form**: Name, Email, Phone, Country, Course, Full Message
- **Consultation Popup**: Name, Email, Phone, Destination Country

## 📋 Next Steps - YOU NEED TO DO:

### Step 1: Create Google Sheet
1. Go to https://sheets.google.com
2. Create new spreadsheet: "Pinnacle Nepal - Form Submissions"
3. Add these headers in Row 1:
   ```
   A1: Timestamp
   B1: Name
   C1: Email
   D1: Phone
   E1: Country
   F1: Course
   G1: Message
   H1: Form Type
   ```

### Step 2: Set Up Google Apps Script
1. In your sheet: **Extensions** → **Apps Script**
2. Delete existing code and paste this:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.country || '',
      data.course || '',
      data.message,
      data.formType || 'Contact'
    ]);
    
    // Send email notification
    sendEmailNotification(data.name, data.email, data.phone, data.message, data.formType);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(name, email, phone, message, formType) {
  var recipient = 'YOUR_EMAIL@gmail.com'; // ⚠️ CHANGE THIS TO YOUR EMAIL
  var subject = '🎓 New ' + formType + ' - Pinnacle Nepal';
  var body = 
    'New form submission received!\n\n' +
    'Form Type: ' + formType + '\n' +
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Phone: ' + phone + '\n' +
    'Message: ' + message + '\n\n' +
    'Submitted at: ' + new Date();
  
  MailApp.sendEmail(recipient, subject, body);
}

function doGet(e) {
  return ContentService.createTextOutput('Form submission endpoint is working!');
}
```

3. **IMPORTANT**: Change `YOUR_EMAIL@gmail.com` to your actual email!

### Step 3: Deploy the Script
1. Click **Deploy** → **New deployment**
2. Click gear icon ⚙️ → Choose **Web app**
3. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/XXXXX/exec`)

### Step 4: Update Environment Variables
Create file `.env.local` in your project root:

```env
# Google Sheets URL from Step 3
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

# Your WhatsApp Number (Country code + number, no spaces)
NEXT_PUBLIC_WHATSAPP_NUMBER=9779800000000

# Your email for notifications (already in Google Script)
ADMIN_EMAIL=your-email@gmail.com
```

**Replace:**
- `YOUR_DEPLOYMENT_ID` with the actual ID from your deployment URL
- `9779800000000` with your WhatsApp number (format: 977XXXXXXXXXX)
- `your-email@gmail.com` with your email

### Step 5: Restart Development Server
```bash
npm run dev
```

## 🎉 That's It!

Now when someone fills out a form:
1. ✅ Data saves to Google Sheets automatically
2. ✅ You get an email notification
3. ✅ They can click WhatsApp button to chat with you directly

## 📱 WhatsApp Button Features:
- Always visible on all pages
- Floating at bottom-right
- Pulsing animation to attract attention
- Opens WhatsApp with your number
- Pre-filled message: "Hello! I'm interested in studying abroad. Can you help me?"

## 📊 View Form Submissions:
Just open your Google Sheet anytime to see all submissions with:
- Timestamp
- Contact details
- Which form they used (Contact Form or Consultation Popup)

## 🔧 Troubleshooting:

**Forms not saving to Google Sheets?**
- Check `.env.local` has correct Google Sheets URL
- Verify script is deployed as "Anyone" can access
- Check Apps Script execution logs

**WhatsApp button not working?**
- Verify phone number format in `.env.local` (no spaces, dashes, or +)
- Example: `9779801234567` for Nepal

**Not receiving emails?**
- Check the email address in Google Apps Script
- Check your spam folder

## 📝 Need Help?
Refer to `FORM_INTEGRATION_SETUP.md` for detailed instructions!
