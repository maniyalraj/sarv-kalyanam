import * as React from "react"
import Link from "next/link"
import { Heart, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, ArrowRight, Shield } from "lucide-react"

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

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">SarvKalyanam</span>
                <p className="-mt-1 text-xs text-primary-200">Hospital & Research Center</p>
              </div>
            </Link>
            
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Providing quality healthcare services to Kalyan and surrounding areas for over 20 years. 
              Your health is our priority. We are committed to delivering compassionate, patient-centric care 
              using advanced medical technology.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 text-primary-400" />
                <span>SarvKalyanam Hospital, Kalyan (W), Thane, Maharashtra 421301</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-primary-400" />
                <span>+91 9867 4521 90</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-primary-400" />
                <span>info@sarvkalyanam.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Clock className="h-4 w-4 shrink-0 text-primary-400" />
                <span>Emergency: 24x7 | Outpatient: 8AM - 8PM</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-primary-300"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Departments
            </h3>
            <ul className="space-y-3">
              {departments.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-primary-300"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Emergency Services
            </h3>
            <div className="space-y-4 rounded-2xl bg-white/5 p-5">
              <p className="text-sm text-slate-400">
                For medical emergencies, call our 24x7 emergency helpline:
              </p>
              <p className="text-2xl font-bold text-white">+91 9867 4521 90</p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
              >
                Book Emergency
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <Shield className="h-4 w-4" />
              <span>NABH Accredited Hospital</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-slate-500">
              &copy; {currentYear} SarvKalyanam Hospital. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link href="#" className="hover:text-primary-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary-300">Terms of Service</Link>
              <Link href="#" className="hover:text-primary-300">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}