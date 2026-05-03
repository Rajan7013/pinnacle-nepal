/**
 * Pinnacle Nepal - Email Automation Script
 * 
 * This Google Apps Script automatically sends emails when forms are submitted:
 * 1. Welcome email to the user
 * 2. Notification email to the team
 * 3. Scheduled follow-up email (24-48 hours later)
 * 
 * Setup Instructions:
 * 1. Open your Google Sheet with form responses
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code
 * 4. Update the configuration variables below
 * 5. Set up trigger: Edit > Current project's triggers > Add Trigger
 *    - Choose function: onFormSubmit
 *    - Event type: From spreadsheet, On form submit
 */

// ==================== CONFIGURATION ====================

// Your business email addresses
const CONFIG = {
  // Team notification emails (comma-separated) - ALL 4 emails will receive notifications
  TEAM_EMAILS: 'ceo@pinnaclenepal.org,contact@pinnaclenepal.org,vivek@pinnaclenepal.org,rajanprasaila@gmail.com',
  
  // Email sender (must be your Google Workspace email)
  SENDER_EMAIL: 'contact@pinnaclenepal.org',
  SENDER_NAME: 'Pinnacle Nepal',
  
  // Google Sheet ID (from your sheet URL)
  SHEET_ID: '1BFfpu7UoKnlcPrqAwYNFoL6NS7NzRiFdFelvMn9fVSM',
  
  // Follow-up email delay (in hours)
  FOLLOWUP_DELAY_HOURS: 24,
  
  // Website URL
  WEBSITE_URL: 'https://pinnaclenepal.org'
};

// ==================== MAIN TRIGGER FUNCTION ====================

/**
 * Main function triggered when form is submitted
 * This runs automatically when someone submits a form
 */
function onFormSubmit(e) {
  try {
    // Get form data
    const userData = extractFormData(e);
    
    // Send welcome email to user
    sendWelcomeEmail(userData);
    
    // Send notification to team
    sendTeamNotification(userData);
    
    // Schedule follow-up email
    scheduleFollowUpEmail(userData);
    
    Logger.log('✅ All emails sent successfully for: ' + userData.name);
    
  } catch (error) {
    Logger.log('❌ Error in onFormSubmit: ' + error.message);
    // Send error notification to team
    sendErrorNotification(error, e);
  }
}

// ==================== DATA EXTRACTION ====================

/**
 * Extract and format data from form submission
 * Columns: Timestamp, Name, Email, Phone, Country, Course, Message, Form Type
 */
function extractFormData(e) {
  // Check if event object exists and has values
  if (!e || !e.values) {
    Logger.log('⚠️ Warning: Event object or values is undefined. This might be a manual trigger.');
    Logger.log('Event object: ' + JSON.stringify(e));
    throw new Error('Invalid form submission event. Please ensure the trigger is set to "On form submit" and not "On edit" or "On change".');
  }
  
  const row = e.values;
  const sheet = e.source.getActiveSheet();
  
  return {
    timestamp: row[0] || new Date(),
    name: row[1] || 'Valued User',
    email: row[2] || '',
    phone: row[3] || 'Not provided',
    country: row[4] || 'Not specified',
    course: row[5] || 'Not specified',
    message: row[6] || 'No message provided',
    formType: row[7] || 'Contact Form',
    sheetId: CONFIG.SHEET_ID
  };
}

// ==================== WELCOME EMAIL ====================

/**
 * Send welcome email to the user
 */
function sendWelcomeEmail(userData) {
  const subject = 'Welcome to Pinnacle Nepal - Your Study Abroad Journey Begins! 🎓';
  
  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <tr>
                        <td style="background: linear-gradient(135deg, #003893 0%, #0052CC 50%, #DC143C 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">
                                Welcome to Pinnacle Nepal! 🎓
                            </h1>
                            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.95;">
                                Your Study Abroad Journey Begins Here
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                                Hi <strong>${userData.name}</strong>,
                            </p>
                            <p style="color: #555555; font-size: 15px; line-height: 1.6; margin: 0 0 25px 0;">
                                Thank you for reaching out to <strong>Pinnacle Nepal</strong>! We're thrilled to help you achieve your dream of studying abroad. Your inquiry has been received, and our expert team is already reviewing your details.
                            </p>
                            <div style="background-color: #f8f9fa; border-left: 4px solid #003893; padding: 20px; margin: 25px 0; border-radius: 6px;">
                                <h2 style="color: #003893; margin: 0 0 15px 0; font-size: 20px;">
                                    🎯 What Happens Next?
                                </h2>
                                <ol style="color: #555555; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                                    <li>Our team will review your inquiry within <strong>24 hours</strong></li>
                                    <li>We'll contact you via phone/email to discuss your goals</li>
                                    <li>We'll create a <strong>personalized study abroad plan</strong> for you</li>
                                    <li>Get guidance on universities, applications, and visa process</li>
                                </ol>
                            </div>
                            <div style="background-color: #e3f2fd; padding: 20px; margin: 25px 0; border-radius: 6px;">
                                <h3 style="color: #003893; margin: 0 0 15px 0; font-size: 18px;">
                                    📞 Need Immediate Assistance?
                                </h3>
                                <p style="color: #555555; font-size: 14px; line-height: 1.6; margin: 0;">
                                    <strong>Phone:</strong> <a href="tel:+9779863481519" style="color: #0052CC; text-decoration: none;">+977 9863481519</a><br>
                                    <strong>Email:</strong> <a href="mailto:contact@pinnaclenepal.org" style="color: #0052CC; text-decoration: none;">contact@pinnaclenepal.org</a><br>
                                    <strong>Office:</strong> New Baneshwor, Kathmandu, Nepal<br>
                                    <strong>Hours:</strong> Sunday-Friday, 9:00 AM - 6:00 PM
                                </p>
                            </div>
                            <div style="text-align: center; margin: 30px 0;">
                                <a href="${CONFIG.WEBSITE_URL}" style="display: inline-block; background: linear-gradient(135deg, #003893, #0052CC); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 16px; font-weight: bold;">
                                    Visit Our Website
                                </a>
                            </div>
                            <p style="color: #555555; font-size: 15px; line-height: 1.6; margin: 25px 0 0 0;">
                                We look forward to being part of your success story!
                            </p>
                            <p style="color: #555555; font-size: 15px; line-height: 1.6; margin: 10px 0 0 0;">
                                Best regards,<br>
                                <strong>Team Pinnacle Nepal</strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 30px; border-top: 1px solid #e0e0e0;">
                            <!-- Logo and Contact Info Footer -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 20px;">
                                        <!-- Logo placeholder - You can add your logo URL here -->
                                        <div style="background: linear-gradient(135deg, #003893, #DC143C); padding: 15px 30px; border-radius: 8px; display: inline-block;">
                                            <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 1px;">PINNACLE NEPAL</h2>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px 0; border-top: 3px solid #003893; border-bottom: 3px solid #003893;">
                                        <table width="100%" cellpadding="8" cellspacing="0">
                                            <tr>
                                                <td width="50%" style="vertical-align: top;">
                                                    <p style="margin: 0 0 8px 0; color: #555555; font-size: 13px;">
                                                        <strong style="color: #003893;">📍 Address:</strong><br>
                                                        New Baneshwor<br>
                                                        Kathmandu, Nepal
                                                    </p>
                                                </td>
                                                <td width="50%" style="vertical-align: top;">
                                                    <p style="margin: 0 0 8px 0; color: #555555; font-size: 13px;">
                                                        <strong style="color: #003893;">📞 Phone:</strong><br>
                                                        +977 9863481519
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="50%" style="vertical-align: top;">
                                                    <p style="margin: 0; color: #555555; font-size: 13px;">
                                                        <strong style="color: #003893;">✉️ Email:</strong><br>
                                                        contact@pinnaclenepal.org
                                                    </p>
                                                </td>
                                                <td width="50%" style="vertical-align: top;">
                                                    <p style="margin: 0; color: #555555; font-size: 13px;">
                                                        <strong style="color: #003893;">🌐 Website:</strong><br>
                                                        www.pinnaclenepal.org
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-top: 15px;">
                                        <p style="color: #777777; font-size: 12px; margin: 0 0 5px 0;">
                                            © 2026 Pinnacle Nepal. All rights reserved.
                                        </p>
                                        <p style="color: #28a745; font-size: 11px; margin: 0; font-style: italic;">
                                            🌿 Please consider the environment before printing this email
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
  
  MailApp.sendEmail({
    to: userData.email,
    subject: subject,
    htmlBody: htmlBody,
    name: CONFIG.SENDER_NAME,
    replyTo: CONFIG.SENDER_EMAIL
  });
  
  Logger.log('✅ Welcome email sent to: ' + userData.email);
}

// ==================== TEAM NOTIFICATION ====================

/**
 * Send notification email to team
 */
function sendTeamNotification(userData) {
  const subject = `🔔 New Form Submission - ${userData.name}`;
  const formattedTime = Utilities.formatDate(new Date(userData.timestamp), Session.getScriptTimeZone(), 'MMM dd, yyyy \'at\' hh:mm a');
  
  const htmlBody = `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; background-color: #f4f7fa; padding: 20px;">
    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; margin: 0 auto;">
        <tr>
            <td style="background: linear-gradient(135deg, #DC143C 0%, #003893 100%); padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px;">
                    🔔 New Form Submission
                </h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 30px;">
                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                    <h2 style="color: #003893; margin: 0 0 15px 0;">📋 Submission Details</h2>
                    <table width="100%" cellpadding="8">
                        <tr>
                            <td style="font-weight: bold; color: #666;">Name:</td>
                            <td>${userData.name}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; color: #666;">Email:</td>
                            <td><a href="mailto:${userData.email}">${userData.email}</a></td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; color: #666;">Phone:</td>
                            <td><a href="tel:${userData.phone}">${userData.phone}</a></td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; color: #666;">Country:</td>
                            <td>${userData.country}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; color: #666;">Course:</td>
                            <td>${userData.course}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; color: #666;">Form Type:</td>
                            <td>${userData.formType}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; color: #666;">Submitted:</td>
                            <td>${formattedTime}</td>
                        </tr>
                    </table>
                </div>
                <div style="background-color: #e3f2fd; border-left: 4px solid #0052CC; padding: 15px; margin-bottom: 20px;">
                    <h3 style="margin: 0 0 10px 0; color: #003893;">💬 Message:</h3>
                    <p style="margin: 0; white-space: pre-wrap;">${userData.message}</p>
                </div>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="https://docs.google.com/spreadsheets/d/${userData.sheetId}" style="display: inline-block; background-color: #003893; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; margin: 5px;">
                        📊 View in Google Sheets
                    </a>
                    <a href="mailto:${userData.email}" style="display: inline-block; background-color: #0052CC; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; margin: 5px;">
                        ✉️ Reply to User
                    </a>
                </div>
                <div style="background-color: #fff3cd; padding: 15px; text-align: center; border-radius: 6px;">
                    <p style="margin: 0; color: #856404;">
                        ⏰ <strong>Action Required:</strong> Please respond within 24 hours
                    </p>
                </div>
            </td>
        </tr>
        <tr>
            <td style="background-color: #f8f9fa; padding: 25px; border-top: 1px solid #e0e0e0;">
                <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td align="center" style="padding-bottom: 15px;">
                            <div style="background: linear-gradient(135deg, #003893, #DC143C); padding: 12px 25px; border-radius: 6px; display: inline-block;">
                                <h3 style="color: #ffffff; margin: 0; font-size: 18px; font-weight: bold; letter-spacing: 1px;">PINNACLE NEPAL</h3>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px 0; border-top: 2px solid #003893; border-bottom: 2px solid #003893;">
                            <table width="100%" cellpadding="6">
                                <tr>
                                    <td width="50%" style="font-size: 12px; color: #555;">
                                        <strong style="color: #003893;">📍 Address:</strong> New Baneshwor, Kathmandu, Nepal
                                    </td>
                                    <td width="50%" style="font-size: 12px; color: #555;">
                                        <strong style="color: #003893;">📞 Phone:</strong> +977 9863481519
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 12px; color: #555;">
                                        <strong style="color: #003893;">✉️ Email:</strong> contact@pinnaclenepal.org
                                    </td>
                                    <td style="font-size: 12px; color: #555;">
                                        <strong style="color: #003893;">🌐 Website:</strong> www.pinnaclenepal.org
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-top: 12px;">
                            <p style="color: #777; font-size: 11px; margin: 0;">
                                © 2026 Pinnacle Nepal | Automated Notification System
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
  
  MailApp.sendEmail({
    to: CONFIG.TEAM_EMAILS,
    subject: subject,
    htmlBody: htmlBody,
    name: 'Pinnacle Nepal Website',
    replyTo: userData.email
  });
  
  Logger.log('✅ Team notification sent to: ' + CONFIG.TEAM_EMAILS);
}

// ==================== FOLLOW-UP EMAIL ====================

/**
 * Schedule follow-up email using time-based trigger
 */
function scheduleFollowUpEmail(userData) {
  const triggerTime = new Date();
  triggerTime.setHours(triggerTime.getHours() + CONFIG.FOLLOWUP_DELAY_HOURS);
  
  // Store user data in script properties for later retrieval
  const properties = PropertiesService.getScriptProperties();
  const triggerId = Utilities.getUuid();
  properties.setProperty(triggerId, JSON.stringify(userData));
  
  // Create time-based trigger
  ScriptApp.newTrigger('sendFollowUpEmail')
    .timeBased()
    .at(triggerTime)
    .create();
  
  Logger.log(`✅ Follow-up email scheduled for ${userData.name} at ${triggerTime}`);
}

/**
 * Send follow-up email (called by trigger)
 */
function sendFollowUpEmail() {
  // This function will be called by the time-based trigger
  // You'll need to implement logic to retrieve stored user data
  // For now, this is a placeholder
  Logger.log('Follow-up email function triggered');
}

// ==================== ERROR HANDLING ====================

/**
 * Send error notification to team
 */
function sendErrorNotification(error, eventData) {
  const subject = '⚠️ Email Automation Error';
  const body = `
An error occurred in the email automation script:

Error: ${error.message}
Stack: ${error.stack}

Event Data: ${JSON.stringify(eventData, null, 2)}

Please check the script logs for more details.
  `;
  
  MailApp.sendEmail({
    to: CONFIG.TEAM_EMAILS,
    subject: subject,
    body: body
  });
}

// ==================== TESTING FUNCTIONS ====================

/**
 * Test function - Run this manually to test emails
 */
function testEmails() {
  const testData = {
    timestamp: new Date(),
    name: 'Test User',
    email: 'test@example.com',
    phone: '+977 9812345678',
    country: 'India',
    course: 'MBBS',
    message: 'This is a test message from the email automation system.',
    formType: 'Contact Form (Test)',
    sheetId: CONFIG.SHEET_ID
  };
  
  Logger.log('🧪 Testing email automation...');
  
  try {
    sendWelcomeEmail(testData);
    sendTeamNotification(testData);
    Logger.log('✅ Test emails sent successfully!');
  } catch (error) {
    Logger.log('❌ Test failed: ' + error.message);
  }
}
