"use client"

import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button, Card, CardContent, Badge } from "@/components/ui"
import { services } from "@/lib/data"

const amenities = [
  "Wheelchair Accessible",
  "Free Parking",
  "Free WiFi",
  "Patient Attendant Meals",
  "Prayer Room",
  "Garden Area",
  "Cafeteria",
  "ATM",
]

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">Facilities</h1>
            <p className="mt-2 text-lg text-slate-600">
              Modern infrastructure and amenities for patient comfort
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="h-full">
                <CardContent className="flex flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                    <Check className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                  <Badge variant="success" className="mt-3 w-fit">
                    Available
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Amenities</h2>
            <p className="mt-2 text-slate-600">Comfortable facilities for patients and visitors</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-3 rounded-xl bg-white p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium text-slate-900">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Need More Information?</h2>
            <p className="mt-2 text-slate-600">Contact us for any queries about our facilities</p>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/book">
              <Button variant="outline" size="lg">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}