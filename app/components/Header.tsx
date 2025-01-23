import Link from "next/link"
import { FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-800">CompareLoans.xyz</h1>
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
  )
}

