"use client"

import * as React from "react"
import { Suspense } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { Check, ArrowLeft, ArrowRight, Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react"
import { Button, Card, CardContent, Input, Label, Textarea, Select, Badge } from "@/components/ui"
import { doctors, departments } from "@/lib/data"
import { Doctor, TimeSlot } from "@/types"
import { formatCurrency, generateId, getAvailableSlots, getTomorrow } from "@/lib/utils"

const steps = [
  { id: 1, name: "Department", description: "Select department" },
  { id: 2, name: "Doctor", description: "Choose doctor" },
  { id: 3, name: "Date & Time", description: "Pick slot" },
  { id: 4, name: "Details", description: "Your information" },
  { id: 5, name: "Confirm", description: "Review & book" },
]

function generateTimeSlots(date: string): TimeSlot[] {
  const slots: TimeSlot[] = []
  for (let hour = 9; hour < 18; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
      slots.push({ time, available: Math.random() > 0.3 })
    }
  }
  return slots
}

function BookContent() {
  const router = useRouter()
  const params = useParams()

  const [step, setStep] = React.useState(1)
  const [selectedDept, setSelectedDept] = React.useState("")
  const [selectedDoctor, setSelectedDoctor] = React.useState("")
  const [selectedDate, setSelectedDate] = React.useState(getTomorrow())
  const [selectedTime, setSelectedTime] = React.useState("")
  const [patientName, setPatientName] = React.useState("")
  const [patientPhone, setPatientPhone] = React.useState("")
  const [patientEmail, setPatientEmail] = React.useState("")
  const [reason, setReason] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [bookingId, setBookingId] = React.useState("")

  const [timeSlots, setTimeSlots] = React.useState<TimeSlot[]>([])

  React.useEffect(() => {
    setTimeSlots(generateTimeSlots(selectedDate))
  }, [selectedDate])

  const filteredDoctors = selectedDept
    ? doctors.filter((d) => d.department === selectedDept && d.available)
    : doctors.filter((d) => d.available)

  const selectedDoctorData = doctors.find((d) => d.id === selectedDoctor)
  const selectedDeptData = departments.find((d) => d.name === selectedDept)

  const canProceed = () => {
    if (step === 1) return selectedDept !== ""
    if (step === 2) return selectedDoctor !== ""
    if (step === 3) return selectedDate !== "" && selectedTime !== ""
    if (step === 4) return patientName !== "" && patientPhone !== ""
    return true
  }

  const handleSubmit = () => {
    const id = `APT-${generateId().toUpperCase()}`
    setBookingId(id)
    setSubmitted(true)

    if (typeof window !== "undefined") {
      const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
      const newBooking = {
        id,
        doctorId: selectedDoctor,
        doctorName: selectedDoctorData?.name,
        department: selectedDeptData?.name,
        patientName,
        patientPhone,
        patientEmail,
        date: selectedDate,
        time: selectedTime,
        reason,
        status: "pending",
        createdAt: new Date().toISOString(),
      }
      bookings.push(newBooking)
      localStorage.setItem("bookings", JSON.stringify(bookings))
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col">
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-slate-900">Book Appointment</h1>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  Appointment Booked!
                </h2>
                <p className="mt-2 text-slate-600">
                  Your appointment has been confirmed. We will send a confirmation to your phone and email.
                </p>
                <div className="mt-6 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Booking ID</p>
                  <p className="text-xl font-bold text-slate-900">{bookingId}</p>
                </div>
                <div className="mt-6 grid gap-4 text-left">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Doctor</span>
                    <span className="font-medium text-slate-900">{selectedDoctorData?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Department</span>
                    <span className="font-medium text-slate-900">{selectedDeptData?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date</span>
                    <span className="font-medium text-slate-900">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Time</span>
                    <span className="font-medium text-slate-900">{selectedTime}</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <Link href="/" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Go to Home
                    </Button>
                  </Link>
                  <Button onClick={() => router.push("/book")} className="flex-1">
                    Book Another
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 text-center">
            Book Appointment
          </h1>
          <div className="mt-8 flex items-center justify-center">
            {steps.map((s, idx) => (
              <React.Fragment key={s.id}>
                <div className="flex items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      step > s.id
                        ? "bg-emerald-600"
                        : step === s.id
                        ? "bg-blue-600"
                        : "bg-slate-200"
                    }`}
                  >
                    {step > s.id ? (
                      <Check className="h-5 w-5 text-white" />
                    ) : (
                      <span className="text-sm font-medium text-white">{s.id}</span>
                    )}
                  </div>
                  <span
                    className={`ml-2 hidden text-sm font-medium sm:block ${
                      step === s.id ? "text-blue-600" : "text-slate-500"
                    }`}
                  >
                    {s.name}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`mx-2 h-0.5 w-8 sm:w-16 ${
                      step > s.id ? "bg-emerald-600" : "bg-slate-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {step === 1 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Select Department
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Choose the department for your appointment
                </p>
                <div className="mt-6 space-y-3">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDept(dept.name)}
                      className={`flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-all ${
                        selectedDept === dept.name
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      <div>
                        <p className="font-medium text-slate-900">{dept.name}</p>
                        <p className="text-sm text-slate-500">{dept.description}</p>
                      </div>
                      {selectedDept === dept.name && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Select Doctor
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Choose your preferred doctor
                </p>
                <div className="mt-6 space-y-3">
                  {filteredDoctors.length === 0 ? (
                    <p className="text-center text-slate-500 py-8">
                      No doctors available for this department
                    </p>
                  ) : (
                    filteredDoctors.map((doctor) => (
                      <button
                        key={doctor.id}
                        onClick={() => setSelectedDoctor(doctor.id)}
                        className={`flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-all ${
                          selectedDoctor === doctor.id
                            ? "border-blue-600 bg-blue-50"
                            : "border-slate-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                            <User className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">
                              {doctor.name}
                            </p>
                            <p className="text-sm text-blue-600">
                              {doctor.specialty}
                            </p>
                            <p className="text-xs text-slate-500">
                              {formatCurrency(doctor.fees)} - {doctor.experience} years exp
                            </p>
                          </div>
                        </div>
                        {selectedDoctor === doctor.id && (
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </button>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Select Date & Time
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Choose your preferred slot
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <Label>Date</Label>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e.target.value)
                        setSelectedTime("")
                      }}
                      min={getTomorrow()}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>Available Time Slots</Label>
                    <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`rounded-lg py-2 text-sm font-medium transition-all ${
                            selectedTime === slot.time
                              ? "bg-blue-600 text-white"
                              : slot.available
                              ? "border border-slate-200 text-slate-700 hover:border-blue-300"
                              : "cursor-not-allowed bg-slate-100 text-slate-300"
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Patient Details
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Fill in your information
                </p>
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name *</Label>
                    <Input
                      placeholder="Enter your name"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number *</Label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Reason for Visit</Label>
                    <Textarea
                      placeholder="Describe your symptoms or reason for visit"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 5 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Review & Confirm
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {selectedDoctorData?.name}
                        </p>
                        <p className="text-sm text-blue-600">
                          {selectedDoctorData?.specialty}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-slate-500" />
                        <p className="text-sm text-slate-500">Date</p>
                      </div>
                      <p className="mt-1 font-semibold text-slate-900">{selectedDate}</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-500" />
                        <p className="text-sm text-slate-500">Time</p>
                      </div>
                      <p className="mt-1 font-semibold text-slate-900">{selectedTime}</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Patient</p>
                    <p className="font-semibold text-slate-900">{patientName}</p>
                    <p className="text-sm text-slate-600">{patientPhone}</p>
                    {patientEmail && (
                      <p className="text-sm text-slate-600">{patientEmail}</p>
                    )}
                  </div>
                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-sm text-blue-600">Consultation Fee</p>
                    <p className="text-xl font-bold text-blue-600">
                      {formatCurrency(selectedDoctorData?.fees || 0)}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button onClick={handleSubmit} className="w-full">
                    <Check className="mr-2 h-4 w-4" />
                    Confirm Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-6 flex gap-4">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="flex-1"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            )}
            {step < 5 && (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="flex-1"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function BookLoading() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">Book Appointment</h1>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-96 rounded-xl bg-slate-200"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function BookPage() {
  return (
    <Suspense fallback={<BookLoading />}>
      <BookContent />
    </Suspense>
  )
}