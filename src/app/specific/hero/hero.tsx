'use client'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  const handleButtonClick = () => {
    console.log('Button clicked, navigating to /specific/service')
    router.push('/specific/service')
  }

  const handleAboutClick = () => {
    router.push('/specific/about')
  }

  const handleFAQClick = () => {
    router.push('/specific/faq')
  }

  const handleContactClick = () => {
    router.push('/specific/contact')
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Full Screen Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
        backgroundImage: "url('https://i.pinimg.com/736x/e5/12/ef/e512efeb5c054a08860b3d7f1e333fcd.jpg')"
        }}
      ></div>

      
      {/* Top Navigation Bar */}
      <nav className="relative z-20 w-full p-6">
        <div className="flex justify-center space-x-6">
          <button
            onClick={handleAboutClick}
            className="bg-gray-500 bg-opacity-20 text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
          >
            About Us Page
          </button>
          <button
            onClick={handleFAQClick}
            className="bg-gray-500 bg-opacity-20 text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
          >
            Frequently Asked Question
          </button>
          <button
            onClick={handleContactClick}
            className="bg-gray-500 bg-opacity-20 text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
          >
            Contact Us
          </button>
        </div>
      </nav>
      
      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative z-10 text-center text-grey px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-4xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl" style={{ color: '#708090' }}>
            Psychological Care For
          </h2>
          
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-light mb-12  drop-shadow-xl"style={{ color: '#708090' }}>
           Change,Insight,and Well-Being
          </h3>
          <h4 className="text-2xl md:text-4xl lg:text-2xl font-light mb-12 drop-shadow-xl" style={{ color: '#708090' }}>
           Offering individual psychotherapy and counseling services
          </h4>
          <button
            onClick={handleButtonClick}
            className="text-white px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-semibold rounded-full hover:opacity-80 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            style={{ backgroundColor: '#708090' }}
          >
            Let us Start Healing
          </button>
        </div>
      </div>
      
    </div>
  )
}
