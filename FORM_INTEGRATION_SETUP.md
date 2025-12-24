# Form Integration Setup Guide

This guide will help you set up form submissions to automatically save to Google Sheets, send email notifications to Gmail, and integrate WhatsApp.

## 1. Google Sheets Integration

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Pinnacle Nepal - Form Submissions"
3. Add these column headers in the first row:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Country
   - F1: Course
   - G1: Message
   - H1: Form Type

### Step 2: Create Google Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code and paste this:

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

function doGet(e) {
  return ContentService.createTextOutput('Form submission endpoint is working!');
}
```

3. Click **Deploy** > **New deployment**
4. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
5. Configure:
   - Description: "Form Submission Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**
7. **Copy the Web App URL** - you'll need this!

### Step 3: Update Environment Variables
Create a file `.env.local` in your project root with:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=YOUR_WEB_APP_URL_HERE
NEXT_PUBLIC_WHATSAPP_NUMBER=9779800000000
ADMIN_EMAIL=your-email@gmail.com
```

## 2. WhatsApp Integration

The WhatsApp integration is already set up! Just update your phone number in `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=977XXXXXXXXXX
```

Format: Country code + number (no spaces, dashes, or plus sign)
- Nepal: 977XXXXXXXXXX
- Example: 9779801234567

## 3. Email Notifications (Optional - Advanced)

For email notifications, you have two options:

### Option A: Use Google Sheets Email Trigger (Recommended - Easy)
1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Add this function to send emails:

```javascript
function sendEmailNotification(name, email, phone, message) {
  var recipient = 'your-email@gmail.com'; // Your email
  var subject = '🎓 New Form Submission - Pinnacle Nepal';
  var body = 
    'New form submission received!\n\n' +
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Phone: ' + phone + '\n' +
    'Message: ' + message + '\n\n' +
    'Submitted at: ' + new Date();
  
  MailApp.sendEmail(recipient, subject, body);
}

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
    sendEmailNotification(data.name, data.email, data.phone, data.message);
    
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
```

3. **Re-deploy** the script (Deploy > Manage deployments > Edit > Version: New version > Deploy)

### Option B: Use Third-Party Service (Zapier/Make.com)
1. Sign up for [Zapier](https://zapier.com) or [Make.com](https://make.com)
2. Create a Zap/Scenario:
   - Trigger: Google Sheets - New Row
   - Action: Gmail - Send Email
   - Action: WhatsApp Business - Send Message (if you have WhatsApp Business API)

## 4. Testing

1. Fill out the contact form on your website
2. Check your Google Sheet - a new row should appear
3. Check your email for the notification
4. Click the WhatsApp button - it should open WhatsApp with your number

## 5. Viewing Submissions

Access your Google Sheet anytime to view all form submissions:
- Timestamp
- Contact details
- Messages
- Form type (Contact Form or Consultation Popup)

## 6. WhatsApp Business Integration (Advanced)

For automated WhatsApp notifications, you'll need:
1. WhatsApp Business API account
2. Service like Twilio, MessageBird, or Wati
3. This requires a business verification process

For now, the WhatsApp button allows users to directly message you on WhatsApp!

## Troubleshooting

**Google Sheets not receiving data?**
- Check the deployment URL is correct in `.env.local`
- Make sure the script is deployed as "Anyone" can access
- Check the Apps Script execution logs

**WhatsApp not opening?**
- Verify phone number format (no spaces, dashes, or plus)
- Make sure you're using the correct country code

**Need help?**
- Google Apps Script logs: Apps Script > Executions
- Check browser console for errors
- Test the Google Sheets URL directly in browser
