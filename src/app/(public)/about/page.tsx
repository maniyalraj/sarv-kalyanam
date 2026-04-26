"use client"

import Link from "next/link"
import { ArrowRight, Heart, Users, Calendar, Award } from "lucide-react"
import { Button, Card, CardContent } from "@/components/ui"
import { doctors } from "@/lib/data"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">About Us</h1>
            <p className="mt-2 text-lg text-slate-600">
              Committed to providing quality healthcare since 2000
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
              <p className="mt-4 text-slate-600">
                SarvKalyanam Hospital was established in year 2000 with a vision to 
                provide quality healthcare to the communities of Kalyan and surrounding areas. 
                Over the years, we have grown to become one of the most trusted healthcare 
                providers in the region.
              </p>
              <p className="mt-4 text-slate-600">
                Our hospital is equipped with modern facilities and staffed by experienced 
                medical professionals who are dedicated to providing the best possible 
                care to every patient.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="mx-auto h-8 w-8 text-blue-600" />
                  <p className="mt-2 text-3xl font-bold text-slate-900">20+</p>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto h-8 w-8 text-blue-600" />
                  <p className="mt-2 text-3xl font-bold text-slate-900">50K+</p>
                  <p className="text-sm text-slate-500">Happy Patients</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="mx-auto h-8 w-8 text-blue-600" />
                  <p className="mt-2 text-3xl font-bold text-slate-900">24x7</p>
                  <p className="text-sm text-slate-500">Emergency</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto h-8 w-8 text-blue-600" />
                  <p className="mt-2 text-3xl font-bold text-slate-900">15+</p>
                  <p className="text-sm text-slate-500">Specialties</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Our Mission & Vision</h2>
          </div>
          
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
                <p className="mt-2 text-slate-600">
                  To provide accessible, affordable, and quality healthcare to all, with 
                  compassion and dedication. We strive to improve the health and well-being 
                  of our community through excellence in medical care and service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">Vision</h3>
                <p className="mt-2 text-slate-600">
                  To be the leading healthcare provider in the region, recognized for 
                  clinical excellence, patient safety, and compassionate care. We aim to 
                  continuously innovate and improve our services to meet the evolving 
                  healthcare needs of our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Our Team</h2>
            <p className="mt-2 text-slate-600">Experienced doctors dedicated to your care</p>
          </div>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.slice(0, 3).map((doctor) => (
              <Card key={doctor.id}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{doctor.name}</h3>
                  <p className="text-sm text-blue-600">{doctor.specialty}</p>
                  <p className="mt-1 text-xs text-slate-500">{doctor.experience} years experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/doctors">
              <Button variant="outline">
                View All Doctors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}