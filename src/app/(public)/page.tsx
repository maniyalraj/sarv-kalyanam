"use client"

import Link from "next/link"
import { ArrowRight, Phone, Heart, Users, Stethoscope, Building2, Star, Clock, CheckCircle, Award, ChevronRight } from "lucide-react"
import { Button, Card, CardContent } from "@/components/ui"
import { departments, doctors, testimonials, services } from "@/lib/data"

const stats = [
  { label: "Years of Service", value: "20+" },
  { label: "Expert Doctors", value: "50+" },
  { label: "Happy Patients", value: "1L+" },
  { label: "Beds Capacity", value: "200+" },
]

const featuredDoctors = [
  { name: "Dr. Pankaj Kasar", specialty: "Cardiology", image: "https://www.surakshaheartclinic.com/wp-content/uploads/2022/02/Untitled-design3.png" },
  { name: "Dr. Raghunath Khade", specialty: "Orthopedics", image: "https://placehold.co/400x400/7c3aed/ffffff?text=Dr+Raghunath+Khade" },
  { name: "Dr. Pankaj S", specialty: "Neurology", image: "https://placehold.co/400x400/10b981/ffffff?text=Dr+Pankaj+S" },
]

function FeatureCard({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: string }) {
  return ( 
    <div 
      className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-soft transition-all duration-500 hover:shadow-hover hover:-translate-y-1"
      style={{ animationDelay: delay }}
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary-50 transition-transform group-hover:scale-150" />
      <div className="relative">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  )
}

function StatBar({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white md:text-5xl">{value}</div>
      <div className="mt-1 text-sm text-primary-100">{label}</div>
    </div>
  )
}

function FeaturedDoctor({ doctor, index }: { doctor: typeof featuredDoctors[0]; index: number }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
      <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl">
        <img 
          src={doctor.image} 
          alt={doctor.name}
          className="h-48 w-48 object-cover bg-slate-100"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="font-bold text-white">{doctor.name}</p>
        <p className="text-sm text-primary-200">{doctor.specialty}</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(15,118,110,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(15,118,110,0.2),transparent_40%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                </span>
                24x7 Emergency Services Available
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Your Health Is Our{" "}
                <span className="bg-gradient-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent">
                  Priority
                </span>
              </h1>
              
              <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
                Experience world-class healthcare with compassionate care. Our expert team 
                combines advanced technology with personalized treatment.
              </p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/book">
                  <Button size="xl" className="bg-primary-500 hover:bg-primary-600 shadow-glow">
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="tel:+919867452190">
                  <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 9867 4521 90
                  </Button>
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 md:grid-cols-4">
                {stats.map((stat) => (
                  <StatBar key={stat.label} {...stat} />
                ))}
              </div>
            </div>

            {/* Right - Featured Doctors Circle */}
            <div className="hidden lg:flex flex-col items-center">
              <div className="relative">
                <div className="flex items-center justify-center gap-8">
                  {featuredDoctors.map((doctor, index) => (
                    <FeaturedDoctor key={index} doctor={doctor} index={index} />
                  ))}
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                  Meet Our Expert Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary-600 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 overflow-x-auto">
          {['ISO 9001 Certified', 'NABH Accredited', '24x7 Emergency', 'Cashless Insurance'].map((item) => (
            <div key={item} className="flex items-center gap-2 whitespace-nowrap text-white">
              <CheckCircle className="h-5 w-5 text-primary-200" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/doctors" className="group">
              <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-card transition-all group-hover:-translate-y-1 group-hover:shadow-hover">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Find a Doctor</h3>
                  <p className="text-sm text-slate-500">{doctors.length}+ Expert Specialists</p>
                </div>
              </div>
            </Link>
            
            <Link href="/book" className="group">
              <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-card transition-all group-hover:-translate-y-1 group-hover:shadow-hover">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Book Online</h3>
                  <p className="text-sm text-slate-500">Instant Appointment</p>
                </div>
              </div>
            </Link>
            
            <Link href="/rooms-rates" className="group">
              <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-card transition-all group-hover:-translate-y-1 group-hover:shadow-hover">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Room & Rates</h3>
                  <p className="text-sm text-slate-500">Transparent Pricing</p>
                </div>
              </div>
            </Link>
            
            <Link href="/insurance" className="group">
              <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-card transition-all group-hover:-translate-y-1 group-hover:shadow-hover">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Insurance</h3>
                  <p className="text-sm text-slate-500">Cashless Treatment</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Specialties</h2>
              <p className="mt-2 text-slate-600">Comprehensive care across all medical disciplines</p>
            </div>
            <Link href="/departments">
              <Button variant="outline" size="lg">
                View All Departments
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.slice(0, 8).map((dept) => (
              <Link key={dept.id} href="/departments">
                <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-card transition-all hover:shadow-hover hover:-translate-y-1">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-50 opacity-0 transition-opacity group-hover:opacity-100 group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600">{dept.name}</h3>
                    <p className="mt-1 text-sm text-slate-500 line-clamp-2">{dept.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Why Choose Sarvakalyanam</h2>
            <p className="mt-2 text-slate-600">Excellence in healthcare since 2000</p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard 
              icon={Users}
              title="Expert Team"
              description="Our team of 50+ highly qualified doctors across 15+ specialties ensures you receive the best medical care."
              delay="0ms"
            />
            <FeatureCard 
              icon={Heart}
              title="Patient-Centric Care"
              description="We prioritize your comfort with personalized treatment plans and compassionate care throughout your journey."
              delay="100ms"
            />
            <FeatureCard 
              icon={Stethoscope}
              title="Advanced Technology"
              description="State-of-the-art medical equipment and modern facilities for accurate diagnosis and effective treatment."
              delay="200ms"
            />
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-700 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Need Emergency Care?
            </h2>
            <p className="mt-4 text-lg text-red-100">
              Our 24x7 emergency department is equipped to handle all medical emergencies.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="tel:+919867452190">
                <Button size="xl" className="bg-white text-red-600 hover:bg-red-50">
                  <Phone className="mr-2 h-5 w-5" />
                  +91 9867 4521 90
                </Button>
              </Link>
              <Link href="/book">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                  Book Emergency
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Services</h2>
            <p className="mt-2 text-slate-600">Comprehensive healthcare under one roof</p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:shadow-hover hover:border-primary-200"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{service.description}</p>
                  {service.waitingTime && (
                    <p className="mt-2 text-xs font-medium text-primary-600">{service.waitingTime}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">What Patients Say</h2>
            <p className="mt-2 text-primary-100">Stories from our satisfied patients</p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-white/30"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/90">&ldquo;{testimonial.comment}&rdquo;</p>
                <div className="mt-4 border-t border-white/20 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-primary-100">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Book your appointment today and let our expert team take care of your health.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <Link href="/book">
              <Button size="xl" className="bg-primary-500 hover:bg-primary-600">
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}