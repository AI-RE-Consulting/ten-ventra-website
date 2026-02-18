# Contact Form Setup

## Overview
The contact form at `/contact` is currently a visual placeholder. It renders the form UI but does not submit data anywhere. This document describes how to wire it up.

## Recommended Approach

### Option 1: Supabase Edge Function + Database
1. Create a `contact_submissions` table in Supabase with columns: `id`, `full_name`, `email`, `company`, `message`, `created_at`
2. Create a Next.js Server Action in `/src/app/contact/actions.ts` that inserts the form data
3. Update `ContactForm.tsx` to use the server action
4. Add email notification via Supabase Edge Function or webhook

### Option 2: Third-Party Form Service
Use a service like Formspree, Getform, or Basin:
1. Create an account and get a form endpoint URL
2. Update `ContactForm.tsx` to POST to the endpoint
3. Configure email notifications in the service dashboard

## Claude Agent Prompt

Use this prompt to have Claude wire up the contact form:

```
Wire up the contact form in /src/components/ContactForm.tsx. The form currently renders as a visual placeholder.

Requirements:
- Create a Next.js Server Action at /src/app/contact/actions.ts
- The action should validate inputs (required fields, valid email format)
- Store submissions in a Supabase table called contact_submissions
- Show success/error states in the form UI
- Add basic rate limiting (optional)
- Keep the existing visual design unchanged
- All form field labels come from /src/content/content.ts

The form fields are: Full Name, Email Address, Company, Message.
The submit button label is defined in content.ts at contactPage.form.submitLabel.
```

## Database Schema

```sql
create table contact_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  company text,
  message text not null,
  created_at timestamptz default now()
);

-- Enable RLS
alter table contact_submissions enable row level security;

-- Allow inserts from anon/authenticated
create policy "Allow public inserts" on contact_submissions
  for insert with check (true);
```
