"use client"

import Link from "next/link"
import { ArrowRight, Phone, Heart, Users, Stethoscope, Building2, Star } from "lucide-react"
import { Button, Card, CardContent } from "@/components/ui"
import { departments, doctors, testimonials, services } from "@/lib/data"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                  </span>
                  24x7 Emergency Services
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Your Health Is Our{" "}
                  <span className="text-gradient">Priority</span>
                </h1>
                
                <p className="max-w-xl text-lg text-slate-600 sm:text-xl">
                  SarvKalyanam Hospital provides quality healthcare with expert doctors, 
                  modern facilities, and compassionate care for you and your family.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/book">
                  <Button size="xl" className="w-full sm:w-auto">
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="tel:+919867452190">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white">
                  <Heart className="h-32 w-32 text-blue-600" />
                  <p className="mt-4 text-2xl font-bold text-slate-900">24x7 Emergency</p>
                  <p className="text-slate-500">+91 9867 4521 90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/doctors" className="group">
              <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition-colors group-hover:bg-blue-600">
                    <Stethoscope className="h-7 w-7 text-blue-600 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Our Doctors</h3>
                  <p className="mt-1 text-sm text-slate-500">{doctors.length}+ Expert Doctors</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/departments" className="group">
              <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 transition-colors group-hover:bg-purple-600">
                    <Building2 className="h-7 w-7 text-purple-600 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Departments</h3>
                  <p className="mt-1 text-sm text-slate-500">{departments.length}+ Specialties</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/facilities" className="group">
              <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 transition-colors group-hover:bg-emerald-600">
                    <Users className="h-7 w-7 text-emerald-600 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Facilities</h3>
                  <p className="mt-1 text-sm text-slate-500">Modern Infrastructure</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/rooms-rates" className="group">
              <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 transition-colors group-hover:bg-amber-600">
                    <Building2 className="h-7 w-7 text-amber-600 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Rooms & Rates</h3>
                  <p className="mt-1 text-sm text-slate-500">Transparent Pricing</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white">Medical Emergency?</h2>
              <p className="text-blue-100">Our 24x7 emergency services are always available</p>
            </div>
            <Link href="tel:+919867452190">
              <Button variant="secondary" size="xl" className="bg-white text-purple-600 hover:bg-blue-50">
                <Phone className="mr-2 h-5 w-5" />
                +91 9867 4521 90
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Our Departments</h2>
            <p className="mt-2 text-slate-600">Comprehensive healthcare across multiple specialties</p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.slice(0, 8).map((dept) => (
              <Link key={dept.id} href="/departments">
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="flex flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                      <Heart className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{dept.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{dept.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/departments">
              <Button variant="outline" size="lg">
                View All Departments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
            <p className="mt-2 text-slate-600">Modern facilities for complete patient care</p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="h-full">
                <CardContent className="flex flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                    <Heart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{service.description}</p>
                  {service.waitingTime && (
                    <p className="mt-2 text-xs font-medium text-blue-600">
                      Wait time: {service.waitingTime}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/facilities">
              <Button variant="outline" size="lg">
                View All Facilities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">What Our Patients Say</h2>
            <p className="mt-2 text-slate-600">Feedback from our satisfied patients</p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="flex flex-col p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-sm text-slate-600">&ldquo;{testimonial.comment}&rdquo;</p>
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Book an Appointment?</h2>
            <p className="mt-2 text-blue-100">Schedule your visit with our expert doctors today</p>
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/book">
              <Button size="xl" className="bg-white text-blue-600 hover:bg-blue-50">
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}