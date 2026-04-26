"use client"

import * as React from "react"
import Link from "next/link"
import { Search, Filter, Calendar, DollarSign, Clock, ArrowRight, User } from "lucide-react"
import { Button, Card, CardContent, Badge, Input, Select } from "@/components/ui"
import { doctors as allDoctors, departments } from "@/lib/data"
import { Doctor } from "@/types"
import { formatCurrency } from "@/lib/utils"

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardContent className="flex flex-col p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
            <User className="h-8 w-8 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-900 truncate">{doctor.name}</h3>
              <Badge variant={doctor.available ? "success" : "secondary"}>
                {doctor.available ? "Available" : "Unavailable"}
              </Badge>
            </div>
            <p className="text-sm text-blue-600">{doctor.specialty}</p>
            <p className="text-xs text-slate-500">{doctor.experience} years experience</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {doctor.qualifications.map((qual) => (
            <Badge key={qual} variant="outline">
              {qual}
            </Badge>
          ))}
        </div>

        <p className="mt-4 line-clamp-2 text-sm text-slate-600">{doctor.bio}</p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-4">
          <div>
            <p className="text-sm text-slate-500">Consultation Fee</p>
            <p className="text-lg font-bold text-slate-900">{formatCurrency(doctor.fees)}</p>
          </div>
          <Link href={`/book?doctor=${doctor.id}`}>
            <Button size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Book
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default function DoctorsPage() {
  const [search, setSearch] = React.useState("")
  const [department, setDepartment] = React.useState("")
  const [availability, setAvailability] = React.useState("all")

  const filteredDoctors = React.useMemo(() => {
    return allDoctors.filter((doctor) => {
      const matchesSearch =
        search === "" ||
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase())

      const matchesDepartment =
        department === "" || doctor.department === department

      const matchesAvailability =
        availability === "all" ||
        (availability === "available" && doctor.available) ||
        (availability === "unavailable" && !doctor.available)

      return matchesSearch && matchesDepartment && matchesAvailability
    })
  }, [search, department, availability])

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">Our Doctors</h1>
            <p className="mt-2 text-lg text-slate-600">
              Meet our team of expert healthcare professionals
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-4 sm:flex-row">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search doctors..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                options={[
                  { label: "All Departments", value: "" },
                  ...departments.map((d) => ({ label: d.name, value: d.name })),
                ]}
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full sm:w-48"
              />
            </div>
            <Select
              options={[
                { label: "All Availability", value: "all" },
                { label: "Available Now", value: "available" },
                { label: "Unavailable", value: "unavailable" },
              ]}
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full sm:w-48"
            />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm text-slate-500">
            Showing {filteredDoctors.length} of {allDoctors.length} doctors
          </p>

          {filteredDoctors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">No doctors found matching your criteria.</p>
              <Button
                variant="ghost"
                onClick={() => {
                  setSearch("")
                  setDepartment("")
                  setAvailability("all")
                }}
                className="mt-2"
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}