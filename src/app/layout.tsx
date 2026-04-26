import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SarvKalyanam Hospital - Quality Healthcare in Kalyan",
  description: "SarvKalyanam Hospital provides quality healthcare services in Kalyan, Thane. 24x7 emergency services, expert doctors, modern facilities.",
  keywords: "hospital, healthcare, Kalyan, Thane, emergency, doctors, medical",
  openGraph: {
    title: "SarvKalyanam Hospital - Quality Healthcare in Kalyan",
    description: "Providing quality healthcare services to Kalyan and surrounding areas for over 20 years.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}