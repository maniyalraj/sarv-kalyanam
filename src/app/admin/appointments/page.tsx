"use client"

import * as React from "react"
import { Search, CheckCircle, XCircle, Clock, Calendar, Eye } from "lucide-react"
import { Button, Card, CardContent, Input, Badge, Select } from "@/components/ui"

export default function AdminAppointmentsPage() {
  const [bookings, setBookings] = React.useState<any[]>([])
  const [search, setSearch] = React.useState("")
  const [status, setStatus] = React.useState("all")

  React.useEffect(() => {
    const stored = localStorage.getItem("bookings")
    if (stored) {
      setBookings(JSON.parse(stored))
    }
  }, [])

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      search === "" ||
      booking.patientName.toLowerCase().includes(search.toLowerCase()) ||
      booking.doctorName?.toLowerCase().includes(search.toLowerCase()) ||
      booking.id.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      status === "all" || booking.status === status

    return matchesSearch && matchesStatus
  })

  const updateStatus = (id: string, newStatus: string) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: newStatus } : b
    )
    setBookings(updated)
    localStorage.setItem("bookings", JSON.stringify(updated))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Appointments</h1>
          <p className="text-slate-500">Manage all appointments</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search appointments..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              options={[
                { label: "All Status", value: "all" },
                { label: "Pending", value: "pending" },
                { label: "Confirmed", value: "confirmed" },
                { label: "Completed", value: "completed" },
                { label: "Cancelled", value: "cancelled" },
              ]}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full sm:w-40"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">
                    Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredBookings.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                      No appointments found
                    </td>
                  </tr>
                ) : (
                  filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <p className="font-medium text-slate-900">{booking.patientName}</p>
                        <p className="text-sm text-slate-500">{booking.patientPhone}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-slate-900">{booking.doctorName}</p>
                        <p className="text-sm text-slate-500">{booking.department}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-slate-900">{booking.date}</p>
                        <p className="text-sm text-slate-500">{booking.time}</p>
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={
                            booking.status === "confirmed"
                              ? "success"
                              : booking.status === "cancelled"
                              ? "destructive"
                              : booking.status === "completed"
                              ? "secondary"
                              : "warning"
                          }
                        >
                          {booking.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {booking.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                variant="success"
                                onClick={() => updateStatus(booking.id, "confirmed")}
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="danger"
                                onClick={() => updateStatus(booking.id, "cancelled")}
                              >
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                          {booking.status === "confirmed" && (
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => updateStatus(booking.id, "completed")}
                            >
                              Complete
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}