import type { Metadata } from "next"
import Link from "next/link"
import { FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "All Blog Posts | CompareLoans.xyz",
  description:
    "Explore our collection of financial insights, loan comparison guides, and credit score improvement tips.",
}

const blogPosts = [
  {
    title: "Understanding the Difference: Personal vs. Business Loans",
    excerpt:
      "Choosing between a personal loan and a business loan can be confusing. In this article, we break down key differences, eligibility requirements, and how to determine which is best for your situation.",
    link: "/blog/personal-vs-business-loans",
    color: "bg-blue-200",
  },
  {
    title: "5 Simple Ways to Improve Your Credit Score",
    excerpt:
      "Your credit score can have a big impact on the loan offers you qualify for. Discover five practical tips for boosting your score, from paying bills on time to reducing credit card balances.",
    link: "/blog/improve-credit-score",
    color: "bg-green-200",
  },
  {
    title: "Comparing Loan Offers: A Step-by-Step Guide",
    excerpt:
      "There's more to picking a loan than just interest rates. Learn the key factors to consider—like fees, repayment terms, and customer support—when shopping around for the best loan.",
    link: "/blog/comparing-loan-offers",
    color: "bg-yellow-200",
  },
  {
    title: "The Pros and Cons of Online Loan Comparison Tools",
    excerpt:
      "Online loan comparison tools can save you time and effort, but are they always the best option? Explore the advantages and potential pitfalls of using these popular financial tools.",
    link: "/blog/pros-cons-online-loan-comparison",
    color: "bg-purple-200",
  },
  {
    title: "How to Spot the Best Loan Deals Online: Expert Tips",
    excerpt:
      "With so many online lenders and comparison sites, finding the best loan can be overwhelming. Learn expert strategies to identify truly great loan offers and avoid common pitfalls.",
    link: "/blog/spot-best-loan-deals-online",
    color: "bg-pink-200",
  },
  {
    title: "Finding the Best Small Personal Loan Online: A Comprehensive Guide",
    excerpt:
      "Navigating the world of small personal loans can be tricky. This guide will help you understand what to look for, where to find the best offers, and how to apply for a small personal loan online.",
    link: "/blog/best-small-personal-loan-online-guide",
    color: "bg-indigo-200",
  },
  {
    title: "Top 10 Factors to Consider When Choosing a Small Personal Loan",
    excerpt:
      "Not all small personal loans are created equal. Discover the most important factors you should consider to ensure you're getting the best deal for your financial situation.",
    link: "/blog/top-factors-small-personal-loan",
    color: "bg-red-200",
  },
]

export default function BlogIndex() {
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
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">All Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`h-48 ${post.color}`} />
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-gray-600">{post.excerpt}</p>
                <Link href={post.link} className="text-blue-600 hover:underline text-sm font-semibold">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
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

export const revalidate = 3600 // revalidate every hour

