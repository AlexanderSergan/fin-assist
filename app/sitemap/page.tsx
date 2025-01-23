import Link from "next/link"
import { FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa"

const sitemapLinks = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Accessibility Statement", href: "/accessibility" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms of Service", href: "/terms-of-service" },
  { title: "Personal vs Business Loans", href: "/blog/personal-vs-business-loans" },
  { title: "Improve Credit Score", href: "/blog/improve-credit-score" },
  { title: "Comparing Loan Offers", href: "/blog/comparing-loan-offers" },
  { title: "Pros and Cons of Online Loan Comparison", href: "/blog/pros-cons-online-loan-comparison" },
  { title: "How to Spot the Best Loan Deals Online", href: "/blog/spot-best-loan-deals-online" },
  { title: "Finding the Best Small Personal Loan Online", href: "/blog/best-small-personal-loan-online-guide" },
  { title: "Top Factors to Consider for Small Personal Loans", href: "/blog/top-factors-small-personal-loan" },
]

export default function Sitemap() {
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
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Sitemap</h1>
        <ul className="space-y-2">
          {sitemapLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-blue-600 hover:underline">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
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

