import type { Metadata } from "next"
import Link from "next/link"
import { FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa"

export const metadata: Metadata = {
  title: "Terms of Service | CompareLoans.xyz",
  description:
    "Read our terms of service to understand the conditions of using CompareLoans.xyz and our loan comparison services.",
}

export default function TermsOfService() {
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
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Terms of Service</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
            Welcome to CompareLoans.xyz. By using our website and services, you agree to comply with and be bound by the
            following terms and conditions. Please read these Terms of Service carefully before using our platform.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using CompareLoans.xyz, you agree to be bound by these Terms of Service and all applicable
            laws and regulations. If you do not agree with any part of these terms, you may not use our services.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">2. Use of Services</h2>
          <p className="mb-4">
            Our services are intended for individuals seeking to compare loan offers. You must be at least 18 years old
            and capable of forming a binding contract to use our services.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">3. User Responsibilities</h2>
          <p className="mb-4">You agree to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide accurate and complete information when using our services</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not interfere with or disrupt our services or servers</li>
            <li>Not attempt to gain unauthorized access to any part of our services</li>
          </ul>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">4. Intellectual Property</h2>
          <p className="mb-4">
            All content on CompareLoans.xyz, including text, graphics, logos, and software, is the property of
            CompareLoans.xyz or its content suppliers and is protected by copyright laws.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">5. Disclaimer of Warranties</h2>
          <p className="mb-4">
            Our services are provided "as is" without any warranties, expressed or implied. We do not guarantee the
            accuracy or completeness of any information on our website.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">6. Limitation of Liability</h2>
          <p className="mb-4">
            CompareLoans.xyz shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages resulting from your use of our services.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">7. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms of Service at any time. We will notify users of any significant
            changes by posting a notice on our website.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">8. Governing Law</h2>
          <p className="mb-4">
            These Terms of Service shall be governed by and construed in accordance with the laws of [Your
            Jurisdiction], without regard to its conflict of law provisions.
          </p>
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-3">9. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at [Your Contact Email].
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

