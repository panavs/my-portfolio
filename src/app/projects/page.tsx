// app/projects/[id]/page.tsx
import Link from 'next/link'

export default function Project({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen p-8">
      <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Project {params.id}</h1>
      <p className="mb-4">This is a detailed description of project {params.id}.</p>
      
      {/* Add more project details here */}
    </main>
  )
}