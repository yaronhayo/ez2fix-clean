# Ez2Fix Professional Garage Door Services

A complete, production-ready website for Ez2Fix Garage Door Services built with Astro, featuring modern design, comprehensive SEO, and integrated booking system.

**Latest Update**: Console errors fixed, Google Ads CSP optimized, and full tracking enabled.

**FINAL CSP FIX**: HTTP-level CSP headers deployed via Vercel config to override caching issues.

🚀 **Deployment Ready**: Fixed author info for Vercel compatibility.

## 🌟 Features

- **Modern Static Site Generation** - Built with Astro for optimal performance
- **Professional Booking System** - Complete service request forms with reCAPTCHA protection
- **Email Notifications** - Automated email system using Resend for lead management
- **Mobile-First Design** - Responsive UI optimized for all devices
- **SEO Optimized** - Comprehensive meta tags, structured data, and voice search optimization
- **Fast Performance** - Optimized images, lazy loading, and efficient code splitting
- **Vercel Ready** - Pre-configured for seamless deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
git clone https://github.com/yaronhayo/ez2fix-clean.git
cd ez2fix-clean
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:4321` to see the site.

### Build
```bash
npm run build
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file with the following variables:

```env
# reCAPTCHA (required for forms)
PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@ez2fixllc.com
TO_EMAIL=info@ez2fixllc.com

# Business Information
BUSINESS_NAME="Ez2Fix Garage Door Service"
BUSINESS_PHONE="(201) 554-6769"
BUSINESS_EMAIL="info@ez2fix.com"
BUSINESS_ADDRESS="Bergen County, NJ"
BUSINESS_WEBSITE="https://ez2fixllc.com"

# Optional: Google Maps
PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
GOOGLE_MAPS_API_KEY=your_server_side_google_maps_key
```

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── images/            # Site images and icons
│   └── videos/            # Hero background videos
├── src/
│   ├── components/        # Reusable components
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Page sections
│   │   ├── ui/           # UI components
│   │   └── seo/          # SEO components
│   ├── config/           # Configuration files
│   ├── layouts/          # Page layouts
│   ├── lib/              # Utilities and services
│   ├── pages/            # Route pages
│   │   ├── api/          # API endpoints
│   │   ├── blog/         # Blog posts
│   │   ├── services/     # Service pages
│   │   └── service-areas/ # Location pages
│   └── styles/           # Global styles
└── vercel.json           # Vercel deployment config
```

## 🌐 Deployment to Vercel

### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm i -g vercel
vercel --prod
```

### Required Vercel Environment Variables
Set these in your Vercel project settings:
- `RESEND_API_KEY`
- `RECAPTCHA_SECRET_KEY`
- `FROM_EMAIL`
- `TO_EMAIL`
- All other environment variables from the `.env` example above

## 📧 Email Configuration

The site uses [Resend](https://resend.com) for email services:

1. Sign up for Resend account
2. Generate API key
3. Set up domain verification
4. Configure environment variables

## 🔒 Security Features

- reCAPTCHA v3 integration for form protection
- Input validation and sanitization
- Rate limiting on API endpoints
- HTTPS enforcement
- Secure headers configuration

## 📱 Pages Included

- **Home** - Hero, services overview, testimonials
- **Services** - Detailed service pages for each offering
- **Service Areas** - Location-specific landing pages
- **About** - Company information and team
- **Contact** - Contact form and business information
- **Booking** - Service request form with scheduling
- **Blog** - SEO-optimized blog posts
- **FAQ** - Common questions and answers
- **Reviews** - Customer testimonials
- **Legal** - Privacy policy, terms of service

## 🎨 Customization

### Styling
- Built with Tailwind CSS
- Custom color scheme defined in `tailwind.config.mjs`
- Global styles in `src/styles/globals.css`

### Content
- Update business information in `src/config/site.ts`
- Modify service offerings in page content
- Add/edit blog posts in `src/pages/blog/`

## 📊 SEO Features

- Structured data for local business
- Open Graph and Twitter Card meta tags
- Voice search optimization
- Sitemap and robots.txt generation
- Fast loading scores (90+ PageSpeed Insights)

## 🛠 Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro check` | Check for issues |

## 📞 Support

For questions about this codebase, please open an issue on GitHub.

For Ez2Fix services, call [(201) 554-6769](tel:2015546769).

## 📄 License

This project is licensed under the MIT License.