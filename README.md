# Karan Kandu – Portfolio

A responsive, Netflix-inspired cinematic portfolio built with Next.js and prepared for deployment on Vercel. It includes resume details, experience, projects, skills and a contact form that emails `karankabir2002@gmail.com`.

## 1. Run locally

Install Node.js (LTS), then open this folder in VS Code or a terminal:

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, create the env file with:

```powershell
Copy-Item .env.example .env.local
```

Open http://localhost:3000.

## 2. Configure contact form email delivery

The form uses Resend so the API key stays on the server and is not exposed in browser code.

1. Create an account at https://resend.com and create an API key.
2. Add the API key to `.env.local` as `RESEND_API_KEY`.
3. Keep `CONTACT_TO_EMAIL=karankabir2002@gmail.com`.
4. For production, verify a domain you own in Resend and set `CONTACT_FROM_EMAIL` to an address on that verified domain, for example `Karan Kandu <portfolio@yourdomain.com>`.
5. For initial testing, Resend may allow `onboarding@resend.dev`, but its test sender is restricted and should not be relied on for public production contact forms.

The visitor's email is set as `replyTo`, so you can reply directly from the email you receive.

## 3. Deploy to Vercel

1. Create a GitHub repository and push this project.
2. Sign in to https://vercel.com and choose **Add New → Project**.
3. Import the GitHub repository. Vercel should detect Next.js automatically.
4. In **Project → Settings → Environment Variables**, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` = `karankabir2002@gmail.com`
   - `CONTACT_FROM_EMAIL` = your verified Resend sender address
5. Deploy. After adding or changing environment variables, redeploy the project.

## 4. Personal details included

- Name: Karan Kandu
- Role: Java Backend Developer
- Email: karankabir2002@gmail.com
- Phone: +91 74838 03269
- LinkedIn: https://linkedin.com/in/karan-91076b228
- Resume PDF: `public/Karan_Kandu_Resume.pdf`

## 5. Before publishing

Review the content and confirm that each project/module and technology accurately reflects your own contribution. Replace the resume PDF in `public/` if you update your resume. The contact form will not send email until the Resend environment variables and a valid sender are configured.
