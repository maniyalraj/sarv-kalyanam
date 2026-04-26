"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, Calendar, Users, DollarSign, CheckCircle, XCircle, Clock, Search, LogOut } from "lucide-react"
import { Button, Card, CardContent, Input, Badge, Select, Label } from "@/components/ui"
import { doctors } from "@/lib/data"

const navItems = [
  { id: "dashboard", name: "Dashboard", href: "/admin" },
  { id: "appointments", name: "Appointments", href: "/admin/appointments" },
  { id: "doctors", name: "Doctors", href: "/admin/doctors" },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [authenticated, setAuthenticated] = React.useState(false)

  React.useEffect(() => {
    const auth = localStorage.getItem("admin_auth")
    if (auth === "true") {
      setAuthenticated(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("admin_auth")
    setAuthenticated(false)
    router.push("/admin/login")
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
              <p className="mt-1 text-sm text-slate-500">Sign in to access the admin panel</p>
            </div>
            <AdminLoginForm onSuccess={() => setAuthenticated(true)} />
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/admin" className="text-xl font-bold text-slate-900">
                Admin Panel
              </Link>
              <nav className="hidden md:flex gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-sm font-medium text-slate-600 hover:text-slate-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      <main className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}

function AdminLoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === "admin@sarvkalyanam.com" && password === "admin123") {
      localStorage.setItem("admin_auth", "true")
      onSuccess()
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" className="w-full">
        Sign In
      </Button>
      <p className="text-xs text-slate-500 text-center">
        Demo: admin@sarvkalyanam.com / admin123
      </p>
    </form>
  )
}