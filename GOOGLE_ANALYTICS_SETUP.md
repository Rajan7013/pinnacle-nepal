# Google Analytics 4 Setup Guide - Pinnacle Nepal

## 📊 What is Google Analytics?

Google Analytics tracks:
- How many people visit your website
- Which pages they visit
- How long they stay
- Where they come from (Google, Facebook, direct, etc.)
- What devices they use (mobile, desktop)
- Conversions (form submissions, calls, etc.)

**It's FREE and very powerful!**

---

## 🎯 Which Email to Use?

**Use:** `rajanprasaila@gmail.com` (your personal Gmail)

**Why?**
- You already used this for Apps Script
- Easy to manage
- Can add other team members later

---

## 📋 Step-by-Step Setup

### Step 1: Create Google Analytics Account

1. **Go to:** https://analytics.google.com
2. **Sign in** with `rajanprasaila@gmail.com`
3. **Click "Start measuring"**

### Step 2: Set Up Account

**Account name:** Pinnacle Nepal

**Account data sharing settings:**
- ✅ Check all boxes (recommended)

**Click "Next"**

### Step 3: Create Property

**Property name:** Pinnacle Nepal Website

**Reporting time zone:** (UTC+05:45) Kathmandu

**Currency:** Nepalese Rupee (NPR)

**Click "Next"**

### Step 4: Business Information

**Industry category:** Education

**Business size:** Small (1-10 employees)

**How you plan to use Google Analytics:**
- ✅ Examine user behavior
- ✅ Measure advertising ROI

**Click "Create"**

### Step 5: Accept Terms

- ✅ Check "I accept the Google Analytics Terms of Service"
- ✅ Check "I accept the Data Processing Amendment"

**Click "I Accept"**

### Step 6: Set Up Data Stream

**Platform:** Web

**Website URL:** `https://www.pinnaclenepal.org`

**Stream name:** Pinnacle Nepal Main Site

**Enhanced measurement:** ✅ Enable (leave all toggles ON)

**Click "Create stream"**

---

## 🔑 Get Your Measurement ID

After creating the stream, you'll see:

**Measurement ID:** `G-XXXXXXXXXX` (something like G-ABC123DEF4)

**COPY THIS ID!** You'll need it for your website.

---

## 💻 Add Analytics to Your Website

### Option 1: Using Next.js Script Component (Recommended)

**Create file:** `app/analytics.tsx`

```typescript
'use client';

import Script from 'next/script';

export default function Analytics() {
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual ID

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
```

**Then update `app/layout.tsx`:**

Add this import at the top:
```typescript
import Analytics from './analytics';
```

Add this inside the `<body>` tag:
```typescript
<body className={`${inter.variable} ${poppins.variable} antialiased font-sans`}>
  <Analytics />
  <ConsultationPopup />
  <WhatsAppButton />
  {children}
</body>
```

---

## 🚀 Deploy Changes

```bash
cd c:\Users\rajan\.gemini\antigravity\scratch\consultancy-platform

git add .
git commit -m "Add Google Analytics 4 tracking"
git push origin main
```

**Wait 5-10 minutes for deployment.**

---

## ✅ Verify It's Working

### Step 1: Test in Real-Time

1. **Go to Google Analytics:** https://analytics.google.com
2. **Click "Reports"** (left sidebar)
3. **Click "Realtime"**
4. **Open your website** in another tab: https://www.pinnaclenepal.org
5. **You should see yourself** as an active user!

### Step 2: Link to Search Console

1. **In Google Analytics**, click **Admin** (gear icon, bottom left)
2. **Under "Product links"**, click **"Search Console links"**
3. **Click "Link"**
4. **Select your Search Console property:** pinnaclenepal.org
5. **Click "Next"** → **"Submit"**

**Now Search Console and Analytics are connected!**

---

## 📊 What You'll See in Analytics

### After 24 Hours:
- Number of visitors
- Page views
- Average session duration
- Bounce rate

### After 1 Week:
- Traffic trends
- Top pages
- Traffic sources (Google, direct, social)
- User demographics

### After 1 Month:
- Conversion tracking
- User behavior patterns
- Which content performs best
- ROI from marketing efforts

---

## 🎯 Important Metrics to Track

**For Educational Consultancy:**

1. **Users** - How many people visit
2. **Sessions** - Total visits
3. **Conversions** - Form submissions
4. **Traffic Sources** - Where visitors come from
5. **Top Pages** - Which pages are most popular
6. **Bounce Rate** - How many leave immediately
7. **Average Session Duration** - How long they stay

---

## 🔔 Set Up Conversion Tracking (Optional)

**Track form submissions:**

1. **In Analytics**, go to **Admin** → **Events**
2. **Click "Create event"**
3. **Name:** form_submission
4. **Set up trigger** when form is submitted

**This helps you see:**
- How many people contact you
- Which pages lead to conversions
- ROI from Google Ads (if you run ads)

---

## 📱 Google Analytics Mobile App

**Download the app:**
- iOS: App Store
- Android: Google Play

**Benefits:**
- Check stats on the go
- Get notifications
- Monitor real-time traffic

---

## ✅ Summary

**Setup Steps:**
1. ✅ Create account at analytics.google.com
2. ✅ Use rajanprasaila@gmail.com
3. ✅ Get Measurement ID (G-XXXXXXXXXX)
4. ✅ Add tracking code to website
5. ✅ Deploy changes
6. ✅ Link to Search Console
7. ✅ Monitor traffic

**What You Get:**
- Detailed traffic analytics
- User behavior insights
- Conversion tracking
- Marketing ROI measurement

---

## 🎊 Next Steps

**After setting up Analytics:**

1. ⏳ **Google Business Profile** (VERY IMPORTANT!)
2. ⏳ Monitor Analytics daily
3. ⏳ Track conversions
4. ⏳ Optimize based on data

---

**Ready to set up? Let me know your Measurement ID and I'll help you add it to your website!** 🚀
