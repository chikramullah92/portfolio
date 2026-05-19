# 🚀 Domain Launch & Deployment Checklist

This document contains the final steps needed to get your portfolio live on the internet after you purchase your custom domain. 

Keep this file handy and check off these steps one by one.

---

## [ ] Step 1: Update Domain Variables in the Codebase
Before deploying, you need to replace the placeholder domain (`https://ikramullah.dev`) with your **actual purchased domain name** so that SEO and sitemaps work correctly.

Update the following files:

1. **`src/app/layout.tsx`**
   - Find `metadataBase: new URL("https://ikramullah.dev")` and replace it with your real URL.
   - Find `url: "https://ikramullah.dev"` inside the `openGraph` object and update it.
2. **`src/app/sitemap.ts`**
   - Find `url: 'https://ikramullah.dev'` and replace it with your real URL.

---

## [ ] Step 2: Push Your Code to GitHub
To easily deploy and manage updates, push your code to a free GitHub repository.
1. Create a new empty repository on [GitHub](https://github.com).
2. Open your terminal in this project folder and run:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

---

## [ ] Step 3: Deploy the Website (Vercel Recommended)
Since this is a Next.js application, **Vercel** is the easiest, fastest, and most optimized platform (and it's free).
1. Go to [Vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New... > Project**.
3. Import your newly created GitHub repository.
4. Leave all build settings as default and click **Deploy**.
5. Wait ~2 minutes for the site to build. Vercel will give you a temporary URL (like `your-portfolio.vercel.app`).

---

## [ ] Step 4: Link Your Custom Domain
Now connect the domain you just bought to your deployed Vercel site.
1. In your Vercel Project Dashboard, go to **Settings > Domains**.
2. Type in your purchased domain (e.g., `ikramullah.com`) and click **Add**.
3. Vercel will show you specific **DNS Records** (usually an `A Record` pointing to `76.76.21.21` or a `CNAME` record).
4. Log into the website where you bought your domain (Namecheap, GoDaddy, Hostinger, etc.).
5. Go to the **DNS Management / Advanced DNS** settings for your domain.
6. Add the records exactly as Vercel instructs.
7. Save the settings. *(Note: It can take anywhere from 5 minutes to 24 hours for DNS changes to propagate globally).*

---

## [ ] Step 5: Verify SSL Encryption (HTTPS)
- Once the domain connects successfully, Vercel will automatically generate a free SSL certificate for you.
- Visit your website `https://yourdomain.com` and ensure the "Padlock" icon appears in the browser URL bar. No manual code changes are required for this!

---

## [ ] Step 6: (Optional) Set Up Analytics
If you want to track how many people are visiting your portfolio:
- **Option A (Easiest)**: Go to your Vercel Dashboard, click on the **Analytics** tab, and click "Enable Web Analytics".
- **Option B**: Create a [Google Analytics](https://analytics.google.com/) property and paste the provided `<script>` tag inside the `<head>` of your `src/app/layout.tsx` file.

---
*Happy Deploying!* 🎉
