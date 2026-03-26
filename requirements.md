# Bliss Shore Ayur Care — Website Requirements

## Project Overview
Website for **Bliss Shore Ayur Care Post Natal Care Centre**, Kozhikode, Kerala.

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React (Vite) |
| Backend/DB | Supabase |
| Styling | Vanilla CSS |
| Hosting | Any static host (Vercel, Netlify, Render) |

## Frontend Sections
- **Home** — Hero with CTA buttons (Book Now, WhatsApp, Call)
- **About** — Centre info, mission, feature cards
- **Treatments** — Standard Therapies, Beauty & Wellness, Medical Support
- **Facilities** — Accommodation, Food, Additional Services
- **Gallery** — Photo gallery with lightbox
- **Contact** — Contact info cards + form (Supabase-backed)

## CTA Buttons
- Book Now → scrolls to Contact section
- WhatsApp Chat → `https://wa.me/917090806606`
- Call Now → `tel:+917090806606`

## Supabase Setup
### Required table: `contact_submissions`
```sql
CREATE TABLE contact_submissions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);
```

### Environment Variables
Create a `.env` file:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Design
- Green & white Ayurvedic theme
- Gold accents (#c9a84c)
- Playfair Display + Inter fonts
- Smooth scroll & fade-in animations
- Glassmorphism navbar
- Fully responsive (mobile-first)

## How to Run
```bash
npm install
npm run dev
```

## Contact
Phone: +91 7090 806 606
Location: Thannikundungal, Valiyaparamba, Koduvally, Kozhikode, Kerala
