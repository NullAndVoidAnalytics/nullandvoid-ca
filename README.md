# Null&Void Analytics Inc. — Website

Static HTML website for nullandvoid.ca — deployable to GitHub Pages.

## Pages

### Main
- `index.html` — Homepage

### Services
- `healthcare.html` — Healthcare & PHSA analytics
- `justice.html` — Justice & Public Safety analytics
- `first-nations.html` — First Nations & Indigenous analytics
- `transit.html` — Transit & Transportation analytics
- `power-platform.html` — Power Platform (PowerApps, Power Automate, Power Pages, Dataverse)

### Company
- `about.html` — About Null&Void Analytics
- `portfolio.html` — Project portfolio (6 case studies)
- `blog.html` — Blog index + add-post widget
- `blog-pbi-fails.html` — Blog post 1
- `blog-ocap.html` — Blog post 2
- `blog-ed-analytics.html` — Blog post 3
- `data-governance.html` — Data Governance Policy
- `privacy-policy.html` — Privacy Policy

## Deployment to GitHub Pages

1. Create a GitHub repository (public)
2. Upload all HTML files to the root of the repository
3. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your site will be live at `https://[username].github.io/[repo-name]`

For custom domain (nullandvoid.ca):
1. In Cloudflare, add a CNAME record: `www` → `[username].github.io`
2. Add an A record: `@` → GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
3. In GitHub Pages settings, add custom domain: `nullandvoid.ca`
4. Enable "Enforce HTTPS"

## Contact Emails
- General / discovery calls: hello@nullandvoid.ca
- RFP submissions: rfp@nullandvoid.ca
- All other contact defaults to hello@nullandvoid.ca
