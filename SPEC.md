# SarvKalyanam Hospital Website - Technical Specification

## Overview
A modern, production-ready hospital website for SarvKalyanam Hospital, Kalyan, India. Features appointment booking, doctor management, admin panel, and Google Calendar integration.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Calendar**: Google Calendar API
- **State**: React hooks + Context
- **Database**: Simulated with local storage (production-ready structure)

## Color Palette
```css
--primary: #2563EB;        /* Blue - trust, medical */
--primary-light: #3B82F6;
--secondary: #7C3AED;     /* Purple - premium */
--accent: #EC4899;         /* Pink - warmth */
--success: #10B981;       /* Green - health */
--background: #FFFFFF;
--surface: #F8FAFC;
--text-primary: #1E293B;
--text-secondary: #64748B;
```

## Design System
- **Typography**: Inter (headings), system sans-serif fallback
- **Spacing**: 4px base unit system
- **Border Radius**: 8px (cards), 12px (buttons), 16px (modals)
- **Shadows**: Soft, layered (sm, md, lg variants)
- **Gradients**: Soft linear gradients for hero and CTAs
- **Animations**: 200-300ms transitions, subtle hover effects

## Project Structure
```
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx              # Homepage
│   │   ├── doctors/
│   │   ├── departments/
│   │   ├── rooms-rates/
│   │   ├── facilities/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── insurance/
│   │   ├── faq/
│   │   └── book/
│   ├── admin/                    # Protected admin routes
│   └── layout.tsx
├── components/
│   ├── ui/                       # Base UI components
│   ├── layout/                   # Header, Footer, Navigation
│   ├── home/                     # Homepage sections
│   ├── doctors/                  # Doctor components
│   ├── booking/                  # Booking flow
│   └── admin/                     # Admin components
├── lib/
│   ├── data/                     # Mock data
│   ├── utils/                    # Utilities
│   └── hooks/                    # Custom hooks
└── types/                        # TypeScript types
```

## Core Features

### 1. Homepage
- Hero with gradient background, CTAs (Book Appointment, Call Now)
- Quick action cards (Doctors, Specialties, Facilities, Room Rates)
- Emergency banner (24x7 services)
- Testimonials carousel
- Embedded map (Kalyan location)
- Sticky floating CTA button

### 2. Doctors / Panel
- Grid/list view of doctors
- Filters: department, availability, fees
- Doctor profile cards with photo, specialty, experience, fees
- Individual doctor profile pages
- Real-time availability indicators

### 3. Appointment Booking System
- Multi-step wizard: Department → Doctor → Date/Time → Patient Details
- Real-time slot availability from Google Calendar
- WhatsApp/Phone fallback options
- Booking confirmation with details
- Reschedule/Cancel functionality
- Email notification simulation

### 4. Admin Panel
- Dashboard with analytics
- Doctor management (CRUD)
- Schedule management
- Date blocking
- Booking management (approve/cancel/reschedule)
- Room/Rate management
- Content management
- Protected by auth

### 5. Google Calendar Integration
- OAuth2 authentication
- Per-doctor calendar sync
- Double-booking prevention
- Availability slots from calendar events
- Create/update appointments in calendar

### 6. Rooms, Rates, Facilities
- Room categories: ICU, Private, Semi-Private, General
- Transparent pricing tables
- Service listings: Pharmacy, Lab, Ambulance, etc.
- Amenities grid

### 7. Additional Pages
- About (hospital history, mission, team)
- Departments (specialty listings)
- Insurance/TPA (accepted insurers)
- Contact (form, map, details)
- FAQ (accordion style)

## API Design

### Endpoints
```
GET    /api/doctors              - List doctors
GET    /api/doctors/[id]         - Get doctor details
GET    /api/doctors/[id]/slots   - Get available slots
POST   /api/appointments         - Create appointment
GET    /api/appointments         - List appointments
PATCH  /api/appointments/[id]    - Update appointment
DELETE /api/appointments/[id]    - Cancel appointment
GET    /api/rooms                - List rooms
POST   /api/calendar/sync        - Sync with Google Calendar
POST   /api/calendar/auth        - Google OAuth
```

## Authentication
- Admin: Email/password (simulated)
- Patient: Phone number based booking
- JWT tokens for session management

## SEO
- Semantic HTML
- Meta tags per page
- Open Graph tags
- Schema.org medical organization markup
- Sitemap generation ready

## Performance
- Server-side rendering
- Image optimization (next/image)
- Lazy loading components
- Minimal bundle size

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px