"use client"

import Link from "next/link"
import { Check, BedDouble, ArrowRight } from "lucide-react"
import { Button, Card, CardContent, Badge } from "@/components/ui"
import { rooms } from "@/lib/data"
import { formatCurrency } from "@/lib/utils"

export default function RoomsRatesPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">Rooms & Rates</h1>
            <p className="mt-2 text-lg text-slate-600">
              Transparent pricing for all room categories
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rooms.map((room) => (
              <Card
                key={room.id}
                className={`h-full ${room.type === "icu" ? "border-blue-300" : ""}`}
              >
                <CardContent className="flex flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                      <BedDouble className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge
                      variant={room.available ? "success" : "secondary"}
                    >
                      {room.available ? "Available" : "Full"}
                    </Badge>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {room.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 capitalize">
                    {room.type.replace("-", " ")}
                  </p>

                  <div className="mt-4">
                    <span className="text-3xl font-bold text-slate-900">
                      {formatCurrency(room.price)}
                    </span>
                    <span className="text-sm text-slate-500">
                      {" "}{room.priceUnit}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {room.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <Check className="h-4 w-4 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4">
                    <Link href="/book">
                      <Button className="w-full">Book Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Additional Information</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-slate-700">Check-in Time</p>
                <p className="text-sm text-slate-500">12:00 PM</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">Check-out Time</p>
                <p className="text-sm text-slate-500">10:00 AM</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">Cancellation</p>
                <p className="text-sm text-slate-500">Free cancellation upto 24 hours before</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">Payment</p>
                <p className="text-sm text-slate-500">Cash, Card, UPI, Insurance accepted</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}