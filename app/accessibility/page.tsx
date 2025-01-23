import Link from "next/link"
import { FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa"

export default function AccessibilityStatement() {
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

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Accessibility Statement</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
            CompareLoans.xyz is committed to ensuring digital accessibility for people with disabilities. We are
            continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Measures to support accessibility</h2>
          <p className="mb-4">CompareLoans.xyz takes the following measures to ensure accessibility of our website:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Include accessibility as part of our mission statement.</li>
            <li>Provide continual accessibility training for our staff.</li>
            <li>Assign clear accessibility targets and responsibilities.</li>
            <li>Employ formal accessibility quality assurance methods.</li>
          </ul>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Conformance status</h2>
          <p className="mb-4">
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve
            accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and
            Level AAA. CompareLoans.xyz is partially conformant with WCAG 2.1 level AA. Partially conformant means that
            some parts of the content do not fully conform to the accessibility standard.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Feedback</h2>
          <p className="mb-4">
            We welcome your feedback on the accessibility of CompareLoans.xyz. Please let us know if you encounter
            accessibility barriers on CompareLoans.xyz:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Phone: [Your phone number]</li>
            <li>E-mail: [Your accessibility email]</li>
            <li>Visitor Address: [Your office address]</li>
          </ul>
          <p>We try to respond to feedback within 3 business days.</p>
        </div>
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

