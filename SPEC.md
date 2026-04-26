# Sarvakalyanam Super Speciality Hospital - Technical Specification

## Overview
A modern, production-ready hospital website for Sarvakalyanam Super Speciality Hospital, Kalyan, India. Features appointment booking, doctor management, admin panel, and modern UI design.

## Hospital Info
- **Name:** Sarvakalyanam Super Speciality Hospital
- **Location:** Kalyan (W), Thane, Maharashtra 421301
- **Phone:** +91 9867 4521 90
- **Emergency:** 24x7
- **Founded:** 2000+

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom shadcn-style components
- **Icons:** Lucide React
- **State:** React hooks + localStorage
- **Build:** Working npm build

## Color Palette
```css
--primary: #0F766E;        /* Teal - trust, health */
--primary-light: #14B8A6;
--primary-dark: #0D9488;
--secondary: #7C3AED;     /* Purple - premium */
--accent: #F59E0B;        /* Amber */
--success: #10B981;        /* Green */
--background: #FFFFFF;
--surface: #F8FAFC;
--dark: #0F172A;          /* Dark theme accent */
--text-primary: #1E293B;
--text-secondary: #64748B;
```

## Featured Doctors (Homepage Hero)
1. Dr. Pankaj Kasar - Cardiology
2. Dr. Raghunath Khade - Orthopedics
3. Dr. Pankaj S - Neurology

## Design System
- **Typography:** 
  - Headings: Poppins (bold, modern)
  - Body: Inter (clean, readable)
- **Spacing:** 4px base unit system
- **Border Radius:** 8px (cards), 12px (buttons), 24px (large)
- **Shadows:** Soft, layered (sm, md, lg variants)
- **Animations:** Smooth transitions, hover effects

## Project Structure
```
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx          # Homepage
│   │   ├── doctors/
│   │   ├── departments/
│   │   ├── rooms-rates/
│   │   ├── facilities/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── insurance/
│   │   ├── faq/
│   │   └── book/             # Appointment booking
│   ├── admin/                 # Protected admin routes
│   ├── api/                   # API routes
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                    # Base UI components
│   ├── layout/                 # Header, Footer
│   ├── home/
│   ├── doctors/
│   ├── booking/
│   └── admin/
├── lib/
│   ├── data/                  # Mock data
│   └── utils/                  # Utilities
└── types/                      # TypeScript types
```

## Core Features

### 1. Homepage
- Hero with dark theme and featured doctors circle
- Quick action cards (Doctors, Book, Rooms, Insurance)
- Departments grid
- Services listing
- Testimonials carousel
- Trust badges (ISO, NABH, etc.)

### 2. Doctors
- Grid view with filters
- Doctor cards with images
- Search by name/specialty
- Filter by department

### 3. Departments
- List of all departments
- Department cards with descriptions

### 4. Appointment Booking System
- Multi-step wizard: Department → Doctor → Date/Time → Patient Details → Confirm
- Real-time slot generation
- Booking confirmation with ID
- localStorage persistence

### 5. Admin Panel
- Dashboard with stats
- Appointment management (approve/cancel/complete)
- Doctor availability toggle
- Login: admin@sarvkalyanam.com / admin123

### 6. Additional Pages
- Rooms & Rates
- Facilities
- About
- Contact (with form)
- FAQ (accordion)
- Insurance/TPA

## API Endpoints
```
GET    /api/doctors              - List doctors
GET    /api/doctors/[id]        - Get doctor details
POST   /api/appointments       - Create appointment
GET    /api/appointments       - List appointments
```

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Image Sources
- Dr. Pankaj Kasar: https://www.surakshaheartclinic.com/wp-content/uploads/2022/02/Untitled-design3.png
- Placeholders: placehold.co (fallback)

## Admin Credentials
- **URL:** /admin
- **Email:** admin@sarvkalyanam.com
- **Password:** admin123