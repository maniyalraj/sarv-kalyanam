"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Phone, Heart } from "lucide-react"
import { Button } from "@/components/ui"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Doctors", href: "/doctors" },
  { name: "Departments", href: "/departments" },
  { name: "Facilities", href: "/facilities" },
  { name: "Rooms & Rates", href: "/rooms-rates" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">SarvKalyanam</span>
            </Link>
          </div>

          <nav className="hidden md:flex md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex md:items-center md:gap-4">
            <Link href="/book" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600">
              <Phone className="h-4 w-4" />
              <span>+91 9867 4521 90</span>
            </Link>
            <Link href="/book">
              <Button size="sm">Book Appointment</Button>
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
                  "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-3 py-2 text-base font-medium text-blue-600"
              >
                <Phone className="h-4 w-4" />
                <span>+91 9867 4521 90</span>
              </Link>
              <Link href="/book">
                <Button className="w-full">Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}