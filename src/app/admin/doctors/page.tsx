"use client"

import * as React from "react"
import { Search, Plus, Edit, Trash2, User } from "lucide-react"
import { Button, Card, CardContent, Input, Badge } from "@/components/ui"
import { doctors as allDoctors } from "@/lib/data"
import { formatCurrency } from "@/lib/utils"

export default function AdminDoctorsPage() {
  const [search, setSearch] = React.useState("")
  const [doctors, setDoctors] = React.useState(allDoctors)

  const filteredDoctors = doctors.filter(
    (doctor) =>
      search === "" ||
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase())
  )

  const toggleAvailability = (id: string) => {
    setDoctors(
      doctors.map((d) =>
        d.id === id ? { ...d, available: !d.available } : d
      )
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Doctors</h1>
          <p className="text-slate-500">Manage doctor availability</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search doctors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                  <User className="h-7 w-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">{doctor.name}</h3>
                      <p className="text-sm text-blue-600">{doctor.specialty}</p>
                    </div>
                    <Badge
                      variant={doctor.available ? "success" : "secondary"}
                    >
                      {doctor.available ? "Available" : "Unavailable"}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <p className="text-xs text-slate-500">Experience</p>
                  <p className="font-medium text-slate-900">{doctor.experience} years</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Fees</p>
                  <p className="font-medium text-slate-900">
                    {formatCurrency(doctor.fees)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={doctor.available ? "outline" : "default"}
                    onClick={() => toggleAvailability(doctor.id)}
                  >
                    {doctor.available ? "Mark Unavailable" : "Mark Available"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}