import * as React from "react"
import Link from "next/link"
import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react"

const departments = [
  { name: "Cardiology", href: "/departments" },
  { name: "Neurology", href: "/departments" },
  { name: "Orthopedics", href: "/departments" },
  { name: "Pediatrics", href: "/departments" },
  { name: "Gynecology", href: "/departments" },
  { name: "General Medicine", href: "/departments" },
]

const quickLinks = [
  { name: "Our Doctors", href: "/doctors" },
  { name: "Facilities", href: "/facilities" },
  { name: "Room Rates", href: "/rooms-rates" },
  { name: "Insurance", href: "/insurance" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SarvKalyanam</span>
            </div>
            <p className="text-sm leading-relaxed">
              Providing quality healthcare services to Kalyan and surrounding areas for over 20 years. Your health is our priority.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>SarvKalyanam Hospital, Kalyan (W), Thane, Maharashtra 421301</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91 9867 4521 90</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@sarvkalyanam.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Emergency: 24x7 | Outpatient: 8AM - 8PM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Departments
            </h3>
            <ul className="space-y-3">
              {departments.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Emergency Services
            </h3>
            <div className="space-y-3 rounded-xl bg-slate-800 p-4">
              <p className="text-sm">
                For medical emergencies, call our 24x7 emergency helpline:
              </p>
              <p className="text-xl font-bold text-white">+91 9867 4521 90</p>
              <Link
                href="/book"
                className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Book Emergency
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} SarvKalyanam Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}