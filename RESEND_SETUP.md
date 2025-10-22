# Resend Email Setup Guide (100% FREE)

This guide will help you set up the contact form with Resend's **completely free** email service.

## Why Resend?

- ✅ **100% FREE** - 3,000 emails/month (100/day) forever
- ✅ No credit card required for free tier
- ✅ Super simple API
- ✅ Developer-friendly interface
- ✅ Great deliverability

## Setup Instructions

### Step 1: Create a Free Resend Account

1. Go to [resend.com](https://resend.com)
2. Click "Start Building" or "Sign Up"
3. Create your account (GitHub login recommended for fastest setup)
4. **No credit card needed!**

### Step 2: Get Your API Key

1. Once logged in, go to **API Keys** in the dashboard
2. Click **"Create API Key"**
3. Give it a name (e.g., "Audai Foundation Contact Form")
4. Select **"Sending access"** permission
5. Click **"Create"**
6. **Copy the API key** (you'll only see it once!)

### Step 3: Verify Your Domain (Optional but Recommended)

For production, you should verify your domain:

1. Go to **Domains** in the Resend dashboard
2. Click **"Add Domain"**
3. Add your domain (e.g., `audai.org`)
4. Follow the DNS setup instructions
5. Wait for verification (usually takes a few minutes)

**For Development/Testing:** You can skip this and use `onboarding@resend.dev` as the sender

### Step 4: Set Up Environment Variables

Create a `.env.local` file in your project root:

```env
# Resend API Key (required)
RESEND_API_KEY=re_your_api_key_here

# Where you want to receive contact form emails
CONTACT_EMAIL=info@audai.org

# The "from" address (use this format)
# For development: onboarding@resend.dev
# For production: noreply@audai.org (after domain verification)
RESEND_FROM_EMAIL=Audai Foundation <onboarding@resend.dev>
```

### Step 5: Restart Your Development Server

```bash
npm run dev
```

## Testing the Contact Form

1. Open your website and navigate to the **Contact Us** section
2. Fill out the form with test information
3. Click **Send Message**
4. Check the email inbox at the address you specified in `CONTACT_EMAIL`

## Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Your Resend API key from the dashboard | `re_123abc...` |
| `CONTACT_EMAIL` | Where contact form submissions will be sent | `info@audai.org` |
| `RESEND_FROM_EMAIL` | The sender email shown in inbox | `Audai Foundation <noreply@audai.org>` |

## Production Setup

Before deploying to production:

1. **Verify your domain** in Resend (see Step 3 above)
2. **Update `RESEND_FROM_EMAIL`** to use your verified domain:
   ```env
   RESEND_FROM_EMAIL=Audai Foundation <noreply@audai.org>
   ```
3. **Set environment variables** in your hosting platform:
   - Firebase: Use `firebase functions:config:set`
   - Vercel: Add in project settings
   - Netlify: Add in site settings

## Free Tier Limits

Resend's free tier includes:
- ✅ **3,000 emails per month**
- ✅ **100 emails per day**
- ✅ No credit card required
- ✅ All features included
- ✅ No time limit

Perfect for a non-profit website! If you ever need more, paid plans start at just $20/month for 50,000 emails.

## Troubleshooting

### "Email service is not configured"
- Make sure `RESEND_API_KEY` is set in `.env.local`
- Restart your development server after adding the variable

### Emails not being received
- Check your spam folder
- Verify the `CONTACT_EMAIL` is correct
- Check Resend dashboard for delivery logs

### API Key errors
- Make sure you copied the full API key (starts with `re_`)
- Check that the API key has "Sending access" permission
- Try creating a new API key

### Rate Limits
- Free tier: 100 emails per day
- If you hit the limit, emails will queue until the next day
- Check your usage in the Resend dashboard

## Security Notes

- ✅ Never commit `.env.local` to version control
- ✅ `.env.local` is already in `.gitignore`
- ✅ Rotate API keys periodically
- ✅ Use environment-specific API keys (dev vs production)

## Support

- 📧 Resend Support: [resend.com/support](https://resend.com/support)
- 📚 Resend Docs: [resend.com/docs](https://resend.com/docs)
- 💬 Need help? Contact your development team

---

**That's it!** Your contact form is now set up with 100% free email delivery. 🎉

