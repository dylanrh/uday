# Audai Shakour Foundation Website

The Audai Shakour Foundation (Audai.org) is a 501(c)(3) non-profit dedicated to enhancing the lives of people living in impoverished conditions. This website showcases our mission, impact, team, and provides a way for people to get in touch with us.

## Features

- 🏠 **Hero Section** - Beautiful introduction to the foundation
- 📖 **About Audai** - Story of Audai's life and legacy
- 🎯 **Programs** - Overview of our three key focus areas
- 📊 **Impact** - Recent projects in Sri Lanka and California
- 👥 **Team** - Meet our dedicated team members
- 📧 **Contact Form** - Powered by Resend (free email service)

## Getting Started Locally

### Prerequisites

- Node.js 18+ installed
- npm or your preferred package manager

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables** (for contact form):
   
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=info@audai.org
   RESEND_FROM_EMAIL=Audai Foundation <onboarding@resend.dev>
   ```
   
   See `RESEND_SETUP.md` for detailed instructions on getting a free Resend API key.

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   
   Navigate to [http://localhost:9002](http://localhost:9002)

## Tech Stack

- **Framework:** Next.js 15 with Turbopack
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Email Service:** Resend (free tier)
- **Forms:** React Hook Form + Zod validation

## Contact Form Setup

The contact form requires a free Resend account. See `RESEND_SETUP.md` for complete setup instructions. The free tier includes 3,000 emails/month with no credit card required.

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── api/          # API routes (contact form)
│   └── page.tsx      # Main homepage
├── components/       # React components
│   ├── layout/       # Header and Footer
│   ├── ui/           # Reusable UI components
│   └── ...
└── lib/              # Utility functions
```

## Contributing

This is a private project for the Audai Shakour Foundation. For questions or suggestions, please use the contact form on the website.

## License

© 2025 Audai Shakour Foundation. All rights reserved.
