import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/assets/Unknown.jpeg"
                alt="Dr. Serena Blake"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Right side - Information */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              This is Dr. Serena Blake, PsyD (Clinical Psychologist)
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 mt-8">
              About:
            </h2>
            
            <h3 className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
              with eight years of experience and over 500 client sessions. She blends evidence-based 
              approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
              personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. 
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is 
              committed to creating a safe, supportive space for you to thrive.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
