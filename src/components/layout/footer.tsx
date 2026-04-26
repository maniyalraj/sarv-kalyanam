import * as React from "react"
import Link from "next/link"
import { Heart, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, ArrowRight, Shield } from "lucide-react"

const quickLinks = [
  { name: "Our Doctors", href: "/doctors" },
  { name: "Facilities", href: "/facilities" },
  { name: "Room Rates", href: "/rooms-rates" },
  { name: "Insurance", href: "/insurance" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
]

const departments = [
  { name: "Cardiology", href: "/departments" },
  { name: "Neurology", href: "/departments" },
  { name: "Orthopedics", href: "/departments" },
  { name: "Pediatrics", href: "/departments" },
  { name: "Gynecology", href: "/departments" },
  { name: "General Medicine", href: "/departments" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Sarvakalyanam</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Super Speciality Hospital, providing quality healthcare services to Kalyan and surrounding areas for over 20 years.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span>Kalyan (W), Thane, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span>+91 9867 4521 90</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span>info@sarvkalyanam.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-primary-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Departments</h3>
            <ul className="space-y-2">
              {departments.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-primary-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Emergency</h3>
            <div className="rounded-xl bg-slate-800 p-4">
              <p className="text-sm text-slate-400">24x7 Emergency Helpline</p>
              <p className="text-2xl font-bold text-white">+91 9867 4521 90</p>
              <Link href="/book" className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary-500 px-3 py-2 text-sm text-white hover:bg-primary-600">
                Book Emergency <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Sarvakalyanam Super Speciality Hospital. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Shield className="h-4 w-4" />
              <span>NABH Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}