import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { JsonLd } from "react-schemaorg"

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

export default function BlogSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-center mb-6">Latest Financial Insights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <article key={index} className="overflow-hidden">
            <Card>
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
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/blog">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </Link>
      </div>
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "CompareLoans.xyz Blog",
          url: "https://compareloans.xyz/blog",
          description:
            "Financial insights, loan comparison guides, and credit score improvement tips from CompareLoans.xyz",
          blogPosts: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url: `https://compareloans.xyz${post.link}`,
            image: `/placeholder.svg?height=400&width=1000`,
            author: {
              "@type": "Organization",
              name: "CompareLoans.xyz",
            },
            publisher: {
              "@type": "Organization",
              name: "CompareLoans.xyz",
              logo: {
                "@type": "ImageObject",
                url: "https://compareloans.xyz/logo.png",
              },
            },
            datePublished: "2023-01-01T00:00:00Z", // Replace with actual publication dates
          })),
        }}
      />
    </section>
  )
}

