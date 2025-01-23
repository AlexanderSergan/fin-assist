import type { Metadata } from "next"
import Link from "next/link"
import { FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa"

export const metadata: Metadata = {
  title: "Privacy Policy | CompareLoans.xyz",
  description:
    "Read our privacy policy to understand how CompareLoans.xyz collects, uses, and protects your personal information.",
}

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Privacy Policy</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
            At CompareLoans.xyz, we are committed to protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you
            use our website and services.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Personal information (e.g., name, email address, phone number)</li>
            <li>Financial information (e.g., credit score range, loan preferences)</li>
            <li>Usage data (e.g., how you interact with our website)</li>
            <li>Device and browser information</li>
          </ul>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide and improve our loan comparison services</li>
            <li>Communicate with you about our services</li>
            <li>Analyze and enhance our website performance</li>
            <li>Comply with legal obligations</li>
          </ul>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Data Sharing and Disclosure</h2>
          <p className="mb-4">
            We may share your information with third-party lenders to facilitate loan comparisons and applications. We
            do not sell your personal information to third parties.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Your Rights and Choices</h2>
          <p className="mb-4">
            You have the right to access, correct, or delete your personal information. You can also opt-out of
            marketing communications at any time.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Security Measures</h2>
          <p className="mb-4">
            We implement industry-standard security measures to protect your data from unauthorized access, disclosure,
            alteration, and destruction.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by
            posting a notice on our website.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy, please contact us at [Your Contact Email].
          </p>
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

