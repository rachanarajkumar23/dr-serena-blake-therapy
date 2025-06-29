'use client'
import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission."
    },
    {
      id: 2,
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom."
    },
    {
      id: 3,
      question: "What is your cancellation policy?",
      answer: "24-hour notice request"
    }
  ]

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const isOpen = (id: number) => openItems.includes(id)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Question Header - Clickable */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">
                  {item.question}
                </h3>
                
                {/* Toggle Icon */}
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                      isOpen(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer Content - Collapsible */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen(item.id) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-700 text-lg pt-4 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Have More Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Don't see your question answered here? Feel free to reach out to us directly.
          </p>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="text-black font-semibold">Phone:</span> 
              <span className="text-indigo-600 ml-2">(323) 555-0192</span>
            </p>
            <p className="text-lg">
              <span className="text-black font-semibold">Email:</span> 
              <span className="text-indigo-600 ml-2">serena@blakepsychology.com</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
