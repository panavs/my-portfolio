// app/photography/page.tsx
import Link from 'next/link'

export default function PhotographyPage() {
  return (
    <main className="min-h-screen p-8 pt-16">
      <div className="max-w-4xl mx-auto">
        {/* Header with back link */}
        <div className="mb-8 flex items-center">
          <Link href="/" className="mr-4">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-white transition-colors">
              ←
            </div>
          </Link>
          <h1 className="text-5xl" style={{ fontFamily: 'Caveat, cursive' }}>
            Photography
          </h1>
        </div>
        
        {/* Divider */}
        <div className="w-full h-4 mb-8 relative">
          <svg viewBox="0 0 400 10" className="w-full h-full">
            <path 
              d="M0,5 C80,15 120,-5 200,5 C280,15 320,-5 400,5" 
              fill="none" 
              stroke="black" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        {/* Gallery placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item} 
              className="aspect-square bg-gray-200 rounded-lg border-2 border-black overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xl" style={{ fontFamily: 'Indie Flower, cursive' }}>
                  Photo {item}
                </p>
              </div>
              
              {/* Scribble decoration */}
              <svg 
                className="absolute bottom-2 right-2 w-12 h-12 opacity-30" 
                viewBox="0 0 50 50"
              >
                <path 
                  d="M10,25 C15,10 35,10 40,25 C35,40 15,40 10,25" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xl mb-8">
          This is a placeholder for your photography portfolio.
          Replace these items with your actual photos.
        </p>
        
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="scribble-button"
            style={{ backgroundColor: 'rgba(42, 157, 143, 0.2)' }}
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}