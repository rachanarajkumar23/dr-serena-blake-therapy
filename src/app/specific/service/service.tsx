'use client'
import { useState } from 'react'
import Image from 'next/image'
interface ServiceData {
  id: number
  title: string
  description: string
  emoji: string
  imageSrc?: string
}

export default function Service() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const servicesData: ServiceData[] = [
    {
      id: 1,
      title: "Anxiety & Stress Management",
      description: "Our anxiety and stress management service is designed to help individuals understand the root causes of their stress and develop practical strategies to manage it effectively. Using therapeutic techniques like CBT and mindfulness, we support clients in reducing overwhelm, improving focus, and restoring emotional balance. The goal is to create long-term resilience and more centered daily life.",
      emoji: "🧘‍♀️"
    },
    {
      id: 2,
      title: "Relationship Counseling",
      description: "Relationship counseling provides a supportive environment for couples or individuals to explore and resolve conflicts, improve communication, and strengthen emotional connection. Whether you're navigating challenges, rebuilding trust, or seeking deeper understanding, our sessions are tailored to help you foster healthier and more fulfilling relationships.",
      emoji: "💑"
    },
    {
      id: 3,
      title: "Trauma Recovery",
      description: "Our trauma recovery service offers a safe and supportive space to process and heal from past traumatic experiences. Through evidence-based therapies, we help individuals regain a sense of control, rebuild trust, and develop healthy coping mechanisms. The journey is personalized to each client's needs, empowering them to move forward with resilience and self-compassion.",
      emoji: "🌱"
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
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
            Services & Specialties
          </h1>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {servicesData.map((service) => (
              <div key={service.id} className="text-center">
                {/* Circular Image */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-lg bg-gray-200">
                    <Image
                      src={`/assets/${service.title.toLowerCase().replace(/\s+/g, '-')}.jpeg`}
                      alt={service.title}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Clickable Service Title with Arrow */}
                <div className="mb-4">
                  <h2 
                    onClick={() => toggleItem(service.id)}
                    className="text-xl md:text-2xl font-semibold text-gray-800 cursor-pointer hover:text-indigo-600 transition-colors duration-200 flex items-center justify-center gap-2 select-none"
                  >
                    <span>{service.title}</span>
                    <svg
                      className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                        isOpen(service.id) ? 'rotate-180' : ''
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
                  </h2>
                </div>

                {/* Accordion Content with Animation */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen(service.id) 
                      ? 'max-h-96 opacity-100 transform translate-y-0' 
                      : 'max-h-0 opacity-0 transform -translate-y-4'
                  }`}
                >
                  <div className="bg-gray-50 rounded-lg p-6 shadow-inner">
                    <h3 className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {service.description}
                    </h3>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Session Fees Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            Session Fees:
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600">
              $200 / individual session
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600">
              $240 / couples session
            </h2>
          </div>
        </div>

      </div>
    </div>
  )
}
