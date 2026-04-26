export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  experience: number;
  qualifications: string[];
  fees: number;
  image: string;
  bio: string;
  available: boolean;
  availability: AvailabilitySlot[];
  calendarId?: string;
}

export interface AvailabilitySlot {
  day: string;
  startTime: string;
  endTime: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  doctors: string[];
}

export interface Room {
  id: string;
  name: string;
  type: 'icu' | 'private' | 'semi-private' | 'general';
  price: number;
  priceUnit: string;
  features: string[];
  image: string;
  available: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  available: boolean;
  waitingTime?: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  department: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
  notes?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Insurance {
  id: string;
  name: string;
  logo: string;
  type: string;
}

export interface BookingForm {
  department: string;
  doctor: string;
  date: string;
  time: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  reason: string;
}