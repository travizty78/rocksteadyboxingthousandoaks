# Deploying Rock Steady Boxing Thousand Oaks

Everything here is done in the Netlify and GoDaddy web dashboards. No
command line needed.

---

## 1. Add the two photos

The site expects these two files. Until they exist, placeholder art shows
instead (nothing breaks).

| File | What it is | Get it from |
|---|---|---|
| `assets/img/hero.jpg` | Homepage "Parkinson's Boxing / First Class Free" flyer | `https://img1.wsimg.com/isteam/ip/bbbc8fc8-fbbe-4888-aad0-9182aec66b49/IMG_0133.jpeg` |
| `assets/img/gloves.jpg` | Woman with red gloves, on the Rock Steady Boxing page | `https://img1.wsimg.com/isteam/ip/bbbc8fc8-fbbe-4888-aad0-9182aec66b49/C038B567-BDC5-4567-95A9-A4673CFB5062.jpeg` |

Download each, rename it exactly as shown above, then in GitHub open the
`assets/img/` folder → **Add file → Upload files** → drag both in →
**Commit changes**. Netlify redeploys automatically.

Do this before cancelling GoDaddy — once the old site is gone those
image URLs stop working.

---

## 2. Deploy to Netlify

1. Sign in at [app.netlify.com](https://app.netlify.com).
2. **Add new site → Import an existing project → GitHub**.
3. Pick `travizty78/rock-steady-boxing-woodland-hills`.
4. Settings:
   - **Branch to deploy:** `claude/rocksteady-boxing-netlify-qyczjt`
     (or `main`, once this branch is merged)
   - **Build command:** *leave empty* — this is a plain static site
   - **Publish directory:** `.`
5. **Deploy site.**

You get a URL like `random-name-123.netlify.app`. Click through all five
pages and submit a test form before touching DNS.

Rename it under **Site configuration → Change site name** if you want
something tidier.

---

## 3. Send form submissions to boxingforbalance@gmail.com

Submissions are captured automatically, but Netlify does not know where to
email them until you say so.

1. In your site: **Forms** — confirm `contact` and `schedule-free-class`
   are both listed. (They appear after the first deploy; if not, redeploy.)
2. **Site configuration → Forms → Form notifications**.
3. **Add notification → Email notification.**
4. **Email to notify:** `boxingforbalance@gmail.com`
5. Leave **Form** set to *Any form* so both forms notify.
6. Save.

Then submit a test through `/contact` and confirm the email arrives.
Check spam the first time and mark it "not spam" so future ones land in
the inbox.

Every submission is also stored under **Forms** in the dashboard, so
nothing is lost even if an email goes astray.

**Free tier: 100 submissions/month.** Fine for this volume, but worth
knowing.

---

## 4. Point the domain at Netlify

Do this only once the Netlify URL looks right — this is the step visitors
see.

### In Netlify

1. **Domain management → Add a domain**.
2. Enter `rocksteadyboxingthousandoaks.com` → **Verify** → **Add domain**.
3. Netlify shows the DNS records you need. Keep this tab open.

### In GoDaddy

1. [dcc.godaddy.com/domains](https://dcc.godaddy.com/domains) → your
   domain → **DNS**.
2. Edit the **A record** for host `@`:
   - **Points to:** `75.2.60.5` (Netlify's load balancer — confirm against
     what Netlify showed you, as this can change)
3. Edit the **CNAME** for host `www`:
   - **Points to:** your Netlify subdomain, e.g. `your-site.netlify.app`
4. Delete any other `@` or `www` A/CNAME records left over from the
   GoDaddy site builder — leftovers cause intermittent loading of the old
   site.
5. Save.

DNS usually propagates in 15–60 minutes, occasionally up to 48 hours.

### Then back in Netlify

- **Domain management → HTTPS → Verify DNS configuration**, then
  **Provision certificate**. Free Let's Encrypt SSL, auto-renewing.
- Set `https://rocksteadyboxingthousandoaks.com` as the primary domain so
  `www` redirects to it (or the reverse, your preference).

---

## 5. After it's live

- Load the real domain on a phone and a laptop.
- Submit both forms, confirm the email arrives at
  `boxingforbalance@gmail.com`.
- Confirm the YouTube video plays.
- Only now cancel the GoDaddy Website Builder plan. **Keep the domain
  registration** — that stays at GoDaddy unless you deliberately transfer
  it. Cancelling the website builder does not cancel the domain, but
  read the cancellation screen carefully so you don't drop both.

---

## Editing the site later

Text lives in plain HTML — `index.html`, `rock-steady-boxing/index.html`,
etc. Edit on GitHub (pencil icon), commit, and Netlify redeploys in about
a minute. Styling is all in `assets/css/style.css`.
