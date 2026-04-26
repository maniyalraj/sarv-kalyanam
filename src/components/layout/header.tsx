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

const mobileNavigation = [
  { name: "Home", href: "/" },
  { name: "Doctors", href: "/doctors" },
  { name: "Departments", href: "/departments" },
  { name: "Facilities", href: "/facilities" },
  { name: "Room & Rates", href: "/rooms-rates" },
  { name: "Insurance", href: "/insurance" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-dark/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-white">SarvKalyanam</span>
                <p className="-mt-1 text-xs text-primary-200">Hospital & Research Center</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-300",
                  pathname === item.href
                    ? "text-primary-300"
                    : "text-white/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <MapPin className="h-4 w-4 text-primary-400" />
              <span>Kalyan West</span>
            </div>
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
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-dark">
          <div className="space-y-1 px-4 py-4">
            {mobileNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary-500/20 text-primary-300"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-3 py-2 text-base font-medium text-white"
              >
                <Phone className="h-4 w-4" />
                +91 9867 4521 90
              </Link>
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