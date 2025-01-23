import Link from "next/link"
import { FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-blue-800">
            CompareLoans.xyz
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="https://x.com/CompareLoans_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaTwitter size={24} />
              <span className="sr-only">Follow us on X (Twitter)</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@CompareLoans_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaTiktok size={24} />
              <span className="sr-only">Follow us on TikTok</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/CompareLoans_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={24} />
              <span className="sr-only">Follow us on LinkedIn</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </Link>
      </main>

      <footer className="bg-gray-100 mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <Link
              href="https://x.com/CompareLoans_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaTwitter size={24} />
              <span className="sr-only">Follow us on X (Twitter)</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@CompareLoans_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaTiktok size={24} />
              <span className="sr-only">Follow us on TikTok</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/CompareLoans_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={24} />
              <span className="sr-only">Follow us on LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

