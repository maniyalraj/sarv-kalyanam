"use client"

import * as React from "react"
import { Search, Calendar, Clock, Award, CheckCircle, ArrowRight, Phone } from "lucide-react"
import { Button, Card, CardContent, Badge, Input } from "@/components/ui"
import { doctors as allDoctors, departments } from "@/lib/data"
import { Doctor } from "@/types"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"

const doctorImages = [
  "https://placehold.co/300x300/0f766e/ffffff?text=Dr+Sharma",
  "https://placehold.co/300x300/0f766e/ffffff?text=Dr+Patel", 
  "https://placehold.co/300x300/0f766e/ffffff?text=Dr+Kumar",
  "https://placehold.co/300x300/0f766e/ffffff?text=Dr+Reddy",
  "https://placehold.co/300x300/0f766e/ffffff?text=Dr+Singh",
  "https://placehold.co/300x300/0f766e/ffffff?text=Dr+Joshi",
]

const heroImage = "https://placehold.co/1920x600/0f766e/ffffff?text=Our+Expert+Doctors"

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const idx = parseInt(doctor.id) - 1
  const imgUrl = doctorImages[idx] || doctorImages[0]
  
  return (
    <Card className="group h-full overflow-hidden transition-all hover:shadow-hover hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
        <img 
          src={imgUrl}
          alt={doctor.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge 
            variant={doctor.available ? "success" : "secondary"}
            className="shadow-lg"
          >
            {doctor.available ? (
              <><CheckCircle className="mr-1 h-3 w-3" /> Available</>
            ) : (
              "Unavailable"
            )}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
            <p className="text-sm font-medium text-primary-600">{doctor.specialty}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {doctor.qualifications.map((qual) => (
            <Badge key={qual} variant="outline" className="text-xs">
              {qual}
            </Badge>
          ))}
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-slate-600">{doctor.bio}</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4 text-primary-500" />
            <span>{doctor.experience} yrs</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary-500" />
            <span>{doctor.availability.length} days/week</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-500">Consultation Fee</p>
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

  const filteredDoctors = React.useMemo(() => {
    return allDoctors.filter((doctor) => {
      const matchesSearch =
        search === "" ||
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase())

      const matchesDepartment =
        department === "" || doctor.department === department

      return matchesSearch && matchesDepartment
    })
  }, [search, department])

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,118,110,0.3),transparent_50%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Our Expert <span className="text-primary-400">Doctors</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Meet our team of highly qualified healthcare professionals dedicated to providing 
              you with the best medical care.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-card md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search doctors by name or specialty..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">All Departments</option>
                {departments.map((d) => (
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>{filteredDoctors.length} doctors found</span>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-16">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">No Doctors Found</h3>
              <p className="mt-1 text-slate-500">Try adjusting your search criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearch("")
                  setDepartment("")
                }}
                className="mt-4"
              >
                Clear Filters
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

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">Can't find the right doctor?</h2>
              <p className="mt-1 text-primary-100">Our team will help you find the best match for your needs</p>
            </div>
            <div className="flex gap-4">
              <Link href="tel:+919867452190">
                <Button variant="secondary" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}