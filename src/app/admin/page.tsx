"use client"

import * as React from "react"
import { Users, Calendar, CheckCircle, Clock, DollarSign, TrendingUp } from "lucide-react"
import { Card, CardContent, Badge } from "@/components/ui"
import Link from "next/link"

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  change?: string
  trend?: "up" | "down"
}

function StatCard({ title, value, icon, change, trend }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">{title}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
            {change && (
              <p className={`mt-1 text-sm ${trend === "up" ? "text-emerald-600" : "text-rose-600"}`}>
                {trend === "up" ? "+" : "-"}{change} from last month
              </p>
            )}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AdminDashboard() {
  const [bookings, setBookings] = React.useState<any[]>([])

  React.useEffect(() => {
    const stored = localStorage.getItem("bookings")
    if (stored) {
      setBookings(JSON.parse(stored))
    }
  }, [])

  const today = new Date().toISOString().split("T")[0]
  const todayBookings = bookings.filter((b) => b.date === today)
  const pendingBookings = bookings.filter((b) => b.status === "pending")
  const completedBookings = bookings.filter((b) => b.status === "completed")

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500">Welcome back! Here&apos;s an overview.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Today's Appointments"
          value={todayBookings.length}
          icon={<Calendar className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title="Pending Appointments"
          value={pendingBookings.length}
          icon={<Clock className="h-6 w-6 text-amber-600" />}
        />
        <StatCard
          title="Total Patients"
          value={bookings.length}
          icon={<Users className="h-6 w-6 text-purple-600" />}
        />
        <StatCard
          title="This Month"
          value={bookings.length}
          icon={<TrendingUp className="h-6 w-6 text-emerald-600" />}
          change="12%"
          trend="up"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Appointments
              </h2>
              <Link href="/admin/appointments" className="text-sm text-blue-600 hover:underline">
                View all
              </Link>
            </div>
            <div className="mt-4 space-y-4">
              {bookings.length === 0 ? (
                <p className="text-sm text-slate-500">No appointments yet</p>
              ) : (
                bookings.slice(0, 5).map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between border-b border-slate-100 pb-3"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{booking.patientName}</p>
                      <p className="text-sm text-slate-500">
                        {booking.doctorName} - {booking.date} at {booking.time}
                      </p>
                    </div>
                    <Badge
                      variant={
                        booking.status === "confirmed"
                          ? "success"
                          : booking.status === "cancelled"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-slate-900">Quick Actions</h2>
            <div className="mt-4 grid gap-3">
              <Link
                href="/admin/appointments"
                className="flex items-center justify-between rounded-lg border border-slate-200 p-4 hover:bg-slate-50"
              >
                <span className="font-medium text-slate-900">Manage Appointments</span>
                <Calendar className="h-5 w-5 text-slate-400" />
              </Link>
              <Link
                href="/admin/doctors"
                className="flex items-center justify-between rounded-lg border border-slate-200 p-4 hover:bg-slate-50"
              >
                <span className="font-medium text-slate-900">Manage Doctors</span>
                <Users className="h-5 w-5 text-slate-400" />
              </Link>
              <Link
                href="/"
                className="flex items-center justify-between rounded-lg border border-slate-200 p-4 hover:bg-slate-50"
              >
                <span className="font-medium text-slate-900">View Website</span>
                <TrendingUp className="h-5 w-5 text-slate-400" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}