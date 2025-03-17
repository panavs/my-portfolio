// app/photography/page.tsx
import Link from 'next/link'

export default function Photography() {
  // Sample photo grid - you would replace this with your actual photos
  const photos = Array.from({ length: 9 }, (_, i) => ({ 
    id: i, 
    src: `/placeholder-${i}.jpg`,
    alt: `Photography sample ${i}`
  }))

  return (
    <main className="min-h-screen p-8">
      <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Photography</h1>
      <p className="mb-8">A collection of my photography work.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="aspect-square bg-gray-200 flex items-center justify-center">
            <span>Photo {photo.id + 1}</span>
            {/* Replace with actual images */}
            {/* <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" /> */}
          </div>
        ))}
      </div>
    </main>
  )
}