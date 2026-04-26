"use client"

import Link from "next/link"
import { ArrowRight, Heart, Users, Clock } from "lucide-react"
import { Button, Card, CardContent } from "@/components/ui"
import { departments, doctors } from "@/lib/data"

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">Our Departments</h1>
            <p className="mt-2 text-lg text-slate-600">
              Comprehensive healthcare across multiple specialties
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => {
              const deptDoctors = doctors.filter((d) => d.department === dept.name)
              return (
                <Card key={dept.id} className="h-full">
                  <CardContent className="flex flex-col p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                      <Heart className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{dept.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{dept.description}</p>
                    
                    {deptDoctors.length > 0 && (
                      <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                        <Users className="h-4 w-4" />
                        <span>{deptDoctors.length} doctor{deptDoctors.length > 1 ? "s" : ""}</span>
                      </div>
                    )}
                    
                    <div className="mt-auto pt-4">
                      <Link href={`/book?department=${dept.name}`}>
                        <Button variant="outline" className="w-full">
                          Book Appointment
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}