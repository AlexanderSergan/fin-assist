import Link from "next/link"
import { FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa"
import { ListLoanCompanyForm } from "./ListLoanCompanyForm"
import { BecomeAffiliateForm } from "./BecomeAffiliateForm"

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://affiliate.example.com/checkscore" className="text-blue-600 hover:underline">
                  Check My Credit Score
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-blue-600 hover:underline">
                  Sitemap
                </Link>
              </li>
              <li>
                <ListLoanCompanyForm />
              </li>
              <li>
                <BecomeAffiliateForm />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/accessibility-statement" className="text-blue-600 hover:underline">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
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
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CompareLoans.xyz. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

