"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Phone, Heart, ChevronDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Doctors", href: "/doctors" },
  { name: "Departments", href: "/departments" },
  { name: "Facilities", href: "/facilities" },
  { name: "Rooms", href: "/rooms-rates" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-slate-900">Sarvakalyanam</span>
                <p className="-mt-1 text-xs text-primary-600">Super Speciality Hospital</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  pathname === item.href
                    ? "text-primary-600"
                    : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/book">
              <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                Book Now
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-600" />
            ) : (
              <Menu className="h-6 w-6 text-slate-600" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-medium",
                  pathname === item.href
                    ? "bg-primary-50 text-primary-600"
                    : "text-slate-600 hover:bg-slate-50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/book">
                <Button className="w-full bg-primary-500 hover:bg-primary-600">Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}