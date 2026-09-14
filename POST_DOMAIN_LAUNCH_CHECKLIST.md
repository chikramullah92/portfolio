# 🌐 Post-Domain Purchase Launch Checklist

This document details **only** the tasks that must be performed **after** you purchase your custom domain name (e.g., `ikramullah.com` or `ikramullah.dev`). 

Follow these steps in sequence to link, verify, secure, and index your professional portfolio under your new brand name.

---

## 📅 Step 1: Link Your Domain in Vercel
Once you have chosen and purchased your domain name from a registrar (Namecheap, GoDaddy, Hostinger, etc.), point your deployed Vercel site to it.

1. Log into your [Vercel Dashboard](https://vercel.com).
2. Open your portfolio project.
3. Navigate to **Settings** > **Domains**.
4. Type in your custom domain (e.g., `ikramullah.com`) and click **Add**.
5. Select the option to redirect the `www.` subdomain to the apex domain (e.g., redirect `www.ikramullah.com` to `ikramullah.com` for unified SEO authority).

---

## 🔧 Step 2: Configure Your Registrar DNS Records
To let the internet know that your domain points to Vercel, you need to add DNS records on your domain registrar's portal (e.g. Namecheap, GoDaddy, Hostinger, etc.).

Vercel will display the exact records required under the **Domains** panel. Typically, you will add the following two records:

| Record Type | Host / Name | Value / Points To | Rationale |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` (Apex) | `76.76.21.21` | Points your root domain directly to Vercel's global edge network. |
| **CNAME** | `www` | `cname.vercel-dns.com` | Aliases your `www` subdomain to Vercel. |

> [!IMPORTANT]
> **Propagation Time**: DNS changes can take anywhere from **5 minutes to 24 hours** to propagate globally. Do not panic if your site doesn't load immediately; check the status in Vercel or use a tool like [DNSChecker.org](https://dnschecker.org).

---

## 🔒 Step 3: Verify SSL Encryption (HTTPS)
You do not need to purchase or configure an SSL certificate.
- Once your DNS records resolve successfully, Vercel will automatically provision a **free Let's Encrypt SSL certificate**.
- Visit `https://yourdomain.com` in a browser and check for the "Padlock" lock icon next to the URL bar, ensuring secure, encrypted communication.

---

## 💻 Step 4: Update the Codebase Variables
After the domain is successfully linked and verified, you should update the codebase's SEO references to align search engines with your new brand URL instead of the `.vercel.app` staging URL.

Update the domain strings in the following files:

### 1. `src/app/layout.tsx`
Change the main metadataBase and OpenGraph URL:
```diff
-  metadataBase: new URL("https://dev-ikram.vercel.app"),
+  metadataBase: new URL("https://yourdomain.com"),
   openGraph: {
-    url: "https://dev-ikram.vercel.app",
+    url: "https://yourdomain.com",
```

### 2. `src/app/sitemap.ts`
Update the URL in the sitemap array:
```diff
   return [
     {
-      url: 'https://dev-ikram.vercel.app',
+      url: 'https://yourdomain.com',
```

### 3. `src/app/robots.txt`
Update the sitemap reference link:
```diff
- Sitemap: https://dev-ikram.vercel.app/sitemap.xml
+ Sitemap: https://yourdomain.com/sitemap.xml
```

> [!TIP]
> After saving these modifications, commit the changes (`git commit -am "Update production domain SEO variables"`) and push them to your repository. Vercel will rebuild the site in ~1 minute, applying the production domain SEO index rules.

---

## 📈 Step 5: Configure Production Analytics & SEO
To optimize and track your traffic under your custom domain name:

1. **Vercel Web Analytics**: Go to your Vercel project's **Analytics** tab and enable it to get privacy-friendly user tracking.
2. **Google Search Console**: 
   - Visit [Google Search Console](https://search.google.com/search-console).
   - Add your custom domain as a new property.
   - Verify ownership using a quick **TXT DNS record** on your domain registrar.
   - Submit your sitemap (`https://yourdomain.com/sitemap.xml`) to speed up Google's crawling and ranking of your new portfolio.
3. **Google Analytics (Optional)**: Create a GA4 property, grab your Measurement ID (`G-XXXXXXXXXX`), and insert the script into the `<head>` of your layout.

---

🎉 *Your professional website is now 100% complete and fully optimized. Once you buy the domain, these simple post-purchase steps will make it live to the entire world under your personal brand!*
