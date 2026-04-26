"use client"

import * as React from "react"
import { Suspense } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Check, ArrowLeft, ArrowRight, Calendar, Clock, User, Phone, Mail, Heart, Star, MapPin } from "lucide-react"
import { Button, Card, CardContent, Input, Label, Textarea } from "@/components/ui"
import { doctors, departments } from "@/lib/data"
import { TimeSlot } from "@/types"
import { formatCurrency, generateId } from "@/lib/utils"

const steps = [
  { id: 1, name: "Department" },
  { id: 2, name: "Doctor" },
  { id: 3, name: "Date & Time" },
  { id: 4, name: "Details" },
  { id: 5, name: "Confirm" },
]

const doctorImages = [
  "https://placehold.co/200x200/0f766e/ffffff?text=Dr",
  "https://placehold.co/200x200/0f766e/ffffff?text=Dr",
  "https://placehold.co/200x200/0f766e/ffffff?text=Dr",
  "https://placehold.co/200x200/0f766e/ffffff?text=Dr",
  "https://placehold.co/200x200/0f766e/ffffff?text=Dr",
  "https://placehold.co/200x200/0f766e/ffffff?text=Dr",
]

function generateTimeSlots(): TimeSlot[] {
  const slots: TimeSlot[] = []
  for (let hour = 9; hour < 18; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
      slots.push({ time, available: Math.random() > 0.3 })
    }
  }
  return slots
}

function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="mb-8 flex items-center justify-center">
      {steps.map((s, idx) => (
        <React.Fragment key={s.id}>
          <div className="flex items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full font-medium transition-all ${
                currentStep > s.id
                  ? "bg-primary-500 text-white"
                  : currentStep === s.id
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                  : "bg-slate-200 text-slate-500"
              }`}
            >
              {currentStep > s.id ? (
                <Check className="h-5 w-5" />
              ) : (
                s.id
              )}
            </div>
            <span
              className={`ml-2 hidden text-sm font-medium sm:block ${
                currentStep === s.id ? "text-primary-600" : "text-slate-500"
              }`}
            >
              {s.name}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div
              className={`mx-2 h-0.5 w-8 sm:w-16 ${
                currentStep > s.id ? "bg-primary-500" : "bg-slate-200"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

function BookingContent() {
  const router = useRouter()

  const [step, setStep] = React.useState(1)
  const [selectedDept, setSelectedDept] = React.useState("")
  const [selectedDoctor, setSelectedDoctor] = React.useState("")
  const [selectedDate, setSelectedDate] = React.useState("")
  const [selectedTime, setSelectedTime] = React.useState("")
  const [patientName, setPatientName] = React.useState("")
  const [patientPhone, setPatientPhone] = React.useState("")
  const [patientEmail, setPatientEmail] = React.useState("")
  const [reason, setReason] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [bookingId, setBookingId] = React.useState("")

  const [timeSlots, setTimeSlots] = React.useState<TimeSlot[]>([])

  React.useEffect(() => {
    setTimeSlots(generateTimeSlots())
  }, [])

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split("T")[0]

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
    const id = `APT-${generateId().toUpperCase().slice(0, 8)}`
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
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-primary-50 px-4 py-12">
        <Card className="mx-auto max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
              <Check className="h-10 w-10 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Appointment Booked!
            </h2>
            <p className="mt-2 text-slate-600">
              Your appointment has been confirmed. We will send a confirmation to your phone and email.
            </p>
            <div className="mt-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 p-4">
              <p className="text-xs font-medium text-slate-500 uppercase">Booking ID</p>
              <p className="text-2xl font-bold text-primary-600">{bookingId}</p>
            </div>
            <div className="mt-6 space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Doctor</span>
                <span className="font-medium text-slate-900">{selectedDoctorData?.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Specialty</span>
                <span className="font-medium text-slate-900">{selectedDoctorData?.specialty}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Date</span>
                <span className="font-medium text-slate-900">{selectedDate}</span>
              </div>
              <div className="flex justify-between text-sm">
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
              <Button onClick={() => router.push("/book")} className="flex-1 bg-primary-500">
                Book Another
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-primary-50 py-12">
      <div className="mx-auto max-w-2xl px-4 w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Book Your <span className="text-primary-600">Appointment</span>
          </h1>
          <p className="mt-2 text-slate-600">Schedule your visit with our expert doctors</p>
        </div>

        <StepIndicator currentStep={step} />

        <Card className="shadow-lg">
          <CardContent className="p-6">
            {step === 1 && (
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Select Department</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDept(dept.name)}
                      className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                        selectedDept === dept.name
                          ? "border-primary-500 bg-primary-50"
                          : "border-slate-200 hover:border-primary-300"
                      }`}
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        selectedDept === dept.name ? "bg-primary-500 text-white" : "bg-slate-100 text-slate-600"
                      }`}>
                        <Heart className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{dept.name}</p>
                        <p className="text-xs text-slate-500">{dept.description}</p>
                      </div>
                      {selectedDept === dept.name && (
                        <Check className="ml-auto h-5 w-5 text-primary-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Select Doctor</h2>
                {filteredDoctors.length === 0 ? (
                  <p className="text-center py-8 text-slate-500">No doctors available</p>
                ) : (
                  <div className="space-y-3">
                    {filteredDoctors.map((doctor, idx) => (
                      <button
                        key={doctor.id}
                        onClick={() => setSelectedDoctor(doctor.id)}
                        className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                          selectedDoctor === doctor.id
                            ? "border-primary-500 bg-primary-50"
                            : "border-slate-200 hover:border-primary-300"
                        }`}
                      >
                        <img 
                          src={doctorImages[idx] || doctorImages[0]}
                          alt={doctor.name}
                          className="h-14 w-14 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-slate-900">{doctor.name}</p>
                          <p className="text-sm text-primary-600">{doctor.specialty}</p>
                          <p className="text-xs text-slate-500">
                            {doctor.experience} yrs exp • {formatCurrency(doctor.fees)}
                          </p>
                        </div>
                        {selectedDoctor === doctor.id && (
                          <Check className="h-5 w-5 text-primary-500" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Select Date & Time</h2>
                <div>
                  <Label className="text-slate-700">Select Date</Label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value)
                      setSelectedTime("")
                      setTimeSlots(generateTimeSlots())
                    }}
                    min={minDate}
                    className="mt-2"
                  />
                </div>
                {selectedDate && (
                  <div>
                    <Label className="text-slate-700">Available Time Slots</Label>
                    <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`rounded-xl py-3 text-sm font-medium transition-all ${
                            selectedTime === slot.time
                              ? "bg-primary-500 text-white"
                              : slot.available
                              ? "bg-white border-2 border-slate-200 text-slate-700 hover:border-primary-300"
                              : "cursor-not-allowed bg-slate-100 text-slate-300"
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Patient Details</h2>
                <div className="space-y-3">
                  <div>
                    <Label className="text-slate-700">Full Name *</Label>
                    <Input
                      placeholder="Enter your full name"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <Label className="text-slate-700">Phone Number *</Label>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-slate-700">Email (optional)</Label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-slate-700">Reason for Visit (optional)</Label>
                    <Textarea
                      placeholder="Describe your symptoms or reason for visit"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Review & Confirm</h2>
                
                <div className="rounded-xl bg-primary-50 p-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={selectedDoctor ? doctorImages[parseInt(selectedDoctor) - 1] || doctorImages[0] : doctorImages[0]}
                      alt={selectedDoctorData?.name}
                      className="h-14 w-14 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">{selectedDoctorData?.name}</p>
                      <p className="text-sm text-primary-600">{selectedDoctorData?.specialty}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-xs">Date</span>
                    </div>
                    <p className="mt-1 font-medium text-slate-900">{selectedDate}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-xs">Time</span>
                    </div>
                    <p className="mt-1 font-medium text-slate-900">{selectedTime}</p>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">Patient</p>
                  <p className="font-medium text-slate-900">{patientName}</p>
                  <p className="text-sm text-slate-600">{patientPhone}</p>
                  {patientEmail && <p className="text-sm text-slate-600">{patientEmail}</p>}
                </div>

                <div className="rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-4 text-white">
                  <p className="text-sm text-primary-100">Consultation Fee</p>
                  <p className="text-2xl font-bold">{formatCurrency(selectedDoctorData?.fees || 0)}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

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
          {step < 5 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className={`flex-1 bg-primary-500 hover:bg-primary-600 ${step === 1 ? 'w-full' : ''}`}
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="flex-1 bg-primary-500 hover:bg-primary-600"
            >
              <Check className="mr-2 h-4 w-4" />
              Confirm Booking
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

function BookingLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="animate-pulse text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-primary-200" />
        <p className="mt-4 text-slate-500">Loading...</p>
      </div>
    </div>
  )
}

export default function BookPage() {
  return (
    <Suspense fallback={<BookingLoading />}>
      <BookingContent />
    </Suspense>
  )
}