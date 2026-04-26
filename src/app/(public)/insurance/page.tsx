"use client"

import { Shield, Check, Search } from "lucide-react"
import { Card, CardContent, Input } from "@/components/ui"
import { insurances } from "@/lib/data"
import * as React from "react"

export default function InsurancePage() {
  const [search, setSearch] = React.useState("")

  const filteredInsurances = React.useMemo(() => {
    if (search === "") return insurances
    return insurances.filter((ins) =>
      ins.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">Insurance & TPA</h1>
            <p className="mt-2 text-lg text-slate-600">
              We accept all major insurance and TPA cards
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search insurance..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      <section className="py-8 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredInsurances.map((insurance) => (
              <Card key={insurance.id} className="h-full">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{insurance.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{insurance.type}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-emerald-600">
                    <Check className="h-3 w-3" />
                    <span>Accepted</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900">How to Use Insurance</h2>
            <ol className="mt-6 space-y-4">
              <li className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  1
                </div>
                <div>
                  <p className="font-medium text-slate-900">Check Coverage</p>
                  <p className="text-sm text-slate-500">
                    Verify with your insurance provider about coverage details
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  2
                </div>
                <div>
                  <p className="font-medium text-slate-900">Bring Required Documents</p>
                  <p className="text-sm text-slate-500">
                    Carry insurance card, ID proof, and pre-authorization (if required)
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  3
                </div>
                <div>
                  <p className="font-medium text-slate-900">At Admission</p>
                  <p className="text-sm text-slate-500">
                    Present documents at reception for cashless treatment
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}