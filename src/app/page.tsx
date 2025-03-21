import Image from "next/image";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8">
      <header className="flex justify-center mb-8">
        <div className="flex items-center">
          <Image
            className="dark:invert mr-4"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            priority
          />
          <h1 className="text-2xl font-bold">Next.js Boilerplate</h1>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <Counter />
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold mb-4">Boilerplate Features</h2>
          <ul className="list-disc list-inside text-left max-w-md mx-auto">
            <li className="mb-2">Next.js with App Router</li>
            <li className="mb-2">TypeScript for type safety</li>
            <li className="mb-2">Redux Toolkit for state management</li>
            <li className="mb-2">Tailwind CSS for styling</li>
            <li className="mb-2">ESLint for code quality</li>
          </ul>
        </div>
      </main>

      <footer className="mt-auto py-6 text-center text-sm text-gray-600">
        <p>Next.js Boilerplate Template - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
