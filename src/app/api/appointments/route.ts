import { NextResponse } from "next/server"

export async function GET() {
  if (typeof window === "undefined") {
    return NextResponse.json({ error: "Not available on server" }, { status: 404 })
  }
  
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
  return NextResponse.json(bookings)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { doctorId, doctorName, patientName, patientPhone, patientEmail, department, date, time, reason } = body

    if (!doctorId || !patientName || !patientPhone || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const booking = {
      id: `APT-${Date.now()}`,
      doctorId,
      doctorName,
      department,
      patientName,
      patientPhone,
      patientEmail,
      date,
      time,
      reason,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    if (typeof window !== "undefined") {
      const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
      bookings.push(booking)
      localStorage.setItem("bookings", JSON.stringify(bookings))
    }

    return NextResponse.json(booking, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}