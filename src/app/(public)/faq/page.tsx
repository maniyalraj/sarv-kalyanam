"use client"

import * as React from "react"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import { Input, Card, CardContent } from "@/components/ui"
import { faqs } from "@/lib/data"

export default function FAQPage() {
  const [search, setSearch] = React.useState("")
  const [openId, setOpenId] = React.useState<string | null>("1")

  const filteredFaqs = React.useMemo(() => {
    if (search === "") return faqs
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  const categories = Array.from(new Set(faqs.map((f) => f.category)))

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">FAQ</h1>
            <p className="mt-2 text-lg text-slate-600">
              Frequently asked questions about our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      <section className="py-8 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">{category}</h2>
              <div className="space-y-3">
                {filteredFaqs
                  .filter((f) => f.category === category)
                  .map((faq) => (
                    <Card key={faq.id}>
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="flex w-full items-center justify-between p-4 text-left"
                      >
                        <span className="font-medium text-slate-900">{faq.question}</span>
                        {openId === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-slate-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-500" />
                        )}
                      </button>
                      {openId === faq.id && (
                        <div className="border-t border-slate-100 px-4 pb-4">
                          <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                        </div>
                      )}
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}