# 🎓 Pinnacle Nepal - Educational Consultancy Platform

A modern, full-featured educational consultancy website built with Next.js 14, featuring stunning animations, form integrations, and a comprehensive destination/program showcase.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4)

## 🌟 Features

### 🎨 Design & UI
- **Modern Gradient Design** - Blue and red gradient theme throughout
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Layout** - Mobile-first design
- **Interactive Components** - Hover effects, transitions, and micro-animations
- **Animated Counters** - Statistics that count up on scroll
- **Blog-Style Layouts** - Clean, readable content presentation

### 📱 Pages
- **Home** - Hero section, featured destinations, courses, statistics
- **Destinations** - 15+ countries with detailed information
  - Individual country pages with universities, courses, and requirements
  - Top courses section with gradient cards
- **Services** - Comprehensive consultancy services
- **Programs** - Study programs and opportunities
- **Gallery** - Visual showcase
- **About Us** - Company story, values, milestones, team
- **Contact** - Multi-field contact form with validation

### 🔧 Integrations
- **Google Sheets** - Form submissions automatically saved
- **Email Notifications** - Gmail alerts for new submissions
- **WhatsApp** - Floating chat button with pre-filled messages
- **Consultation Popup** - Timed popup for lead generation

### 📊 Data Management
- **15+ Destinations** - USA, UK, Canada, Australia, Germany, and more
- **500+ Universities** - Comprehensive university database
- **Multiple Courses** - Engineering, Business, Medicine, Arts, etc.
- **Dynamic Content** - All data managed through centralized files

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/consultancy-platform.git
cd consultancy-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Google Sheets Integration
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

# WhatsApp Integration
NEXT_PUBLIC_WHATSAPP_NUMBER=9779801234567

# Admin Email (for reference)
ADMIN_EMAIL=your-email@gmail.com
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:3000
```

## 📋 Google Sheets Setup

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet: "Pinnacle Nepal - Form Submissions"
3. Add headers in Row 1:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Country
   - F1: Course
   - G1: Message
   - H1: Form Type

### Step 2: Create Apps Script
1. In your sheet: **Extensions** → **Apps Script**
2. Paste the complete script from `SETUP_COMPLETE.md`
3. **Replace `your-email@gmail.com` with your actual email**
4. Save the script

### Step 3: Deploy
1. Click **Deploy** → **New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy**
6. Copy the Web App URL

### Step 4: Update .env.local
Paste the Web App URL in your `.env.local` file

### Step 5: Restart Server
```bash
# Stop the server (Ctrl+C)
npm run dev
```

## 📧 Email Configuration

Emails are sent via Google Apps Script's MailApp. To prevent emails from going to spam:

1. **Mark as Not Spam** - Open spam email and click "Not Spam"
2. **Create Gmail Filter**:
   - Settings → Filters → Create new filter
   - Subject: `Pinnacle Nepal`
   - Check: "Never send to Spam"
   - Create filter

## 💬 WhatsApp Setup

1. Update your WhatsApp number in `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=9779801234567
```
Format: Country code + number (no spaces, dashes, or +)

2. The floating WhatsApp button will appear on all pages
3. Clicking opens WhatsApp with pre-filled message

## 🏗️ Project Structure

```
consultancy-platform/
├── app/                      # Next.js 14 App Router
│   ├── about/               # About Us page
│   ├── contact/             # Contact page
│   ├── destinations/        # Destinations pages
│   │   └── [country]/      # Dynamic country pages
│   ├── gallery/            # Gallery page
│   ├── programs/           # Programs page
│   ├── services/           # Services page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   ├── ContactForm.tsx     # Contact form
│   ├── ConsultationPopup.tsx # Popup form
│   ├── WhatsAppButton.tsx  # WhatsApp floating button
│   └── ...                 # Other components
├── lib/                     # Utilities and data
│   ├── data/               # Data files
│   │   ├── destinations.ts # Countries & universities
│   │   ├── courses.ts      # Course data
│   │   └── services.ts     # Services data
│   └── animations.ts       # Framer Motion configs
├── public/                  # Static assets
│   └── images/             # Images
│       ├── destinations/   # Country images
│       ├── services/       # Service images
│       └── courses/        # Course images
├── .env.local              # Environment variables (create this)
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS config
├── package.json            # Dependencies
└── README.md               # This file
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: '#003893',    // Blue
  secondary: '#DC143C',  // Red
  // Add your colors
}
```

### Data
- **Destinations**: Edit `lib/data/destinations.ts`
- **Courses**: Edit `lib/data/courses.ts`
- **Services**: Edit `lib/data/services.ts`

### Images
Place images in `public/images/`:
- Destinations: `public/images/destinations/`
- Services: `public/images/services/`
- Courses: `public/images/courses/`

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

## 📦 Dependencies

### Core
- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library

### Icons
- **React Icons** - Icon library (HeroIcons)

### Forms
- **React Hook Form** - Form handling (if used)

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms
- **Netlify**: Similar to Vercel
- **AWS Amplify**: AWS hosting
- **DigitalOcean**: VPS deployment

**Important**: Add environment variables in your deployment platform!

## 📱 Features Breakdown

### Form Submissions
- ✅ Contact Form (7 fields)
- ✅ Consultation Popup (4 fields)
- ✅ Google Sheets integration
- ✅ Email notifications
- ✅ Form validation
- ✅ Success/error states

### Animations
- ✅ Page transitions
- ✅ Scroll animations
- ✅ Hover effects
- ✅ Counter animations
- ✅ Card animations
- ✅ Timeline animations

### Responsive Design
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1440px+)

## 🐛 Troubleshooting

### Forms not submitting to Google Sheets?
- Check `.env.local` has correct URL
- Verify script is deployed as "Anyone"
- Restart dev server after changing `.env.local`
- See `GOOGLE_SHEETS_DEBUG.md`

### WhatsApp button not working?
- Check phone number format (no spaces/dashes)
- Must start with country code
- Example: `9779801234567`

### Emails going to spam?
- Mark first email as "Not Spam"
- Create Gmail filter (see Email Configuration)

### Images not loading?
- Check file paths are correct
- Verify images exist in `public/images/`
- Check Next.js image optimization settings

## 📚 Documentation

- `SETUP_COMPLETE.md` - Quick setup guide
- `FORM_INTEGRATION_SETUP.md` - Detailed form setup
- `GOOGLE_SHEETS_DEBUG.md` - Debugging guide
- `test-google-sheets.html` - Testing tool

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

**Pinnacle Nepal Team**
- Website: [pinnacle-nepal.com](#)
- Email: info@pinnacle-nepal.com
- WhatsApp: +977 980 123 4567

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Google Apps Script for form handling

## 📞 Support

For support, email info@pinnacle-nepal.com or message us on WhatsApp.

---

**Built with ❤️ by Pinnacle Nepal**
