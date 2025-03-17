// app/about/page.tsx
export default function About() {
    return (
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="mb-6">
          <p className="mb-4">I'm a passionate web developer with experience in React, Next.js, and more.</p>
          <p>Add your bio here...</p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc ml-6">
            <li>Next.js & React</li>
            <li>JavaScript/TypeScript</li>
            <li>HTML & CSS/Tailwind</li>
            <li>Add more skills...</li>
          </ul>
        </div>
      </main>
    )
  }