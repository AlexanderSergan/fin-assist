import type { Metadata } from "next"
import Link from "next/link"
import { FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa"
import BlogPostSchema from "@/app/components/BlogPostSchema"

// This is a dynamic route that will handle all blog posts
export default function BlogPost({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the blog post data based on the slug
  const post = getBlogPostData(params.slug)

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
        <article className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={post.image || "/placeholder.svg?height=400&width=1000"}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-6">{post.content}</p>
            {post.listItems && (
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                {post.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <Link
              href="https://compareloans.xyz"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Compare Loans Now
            </Link>
          </div>
        </article>
      </main>
      <BlogPostSchema
        title={post.title}
        description={post.description}
        datePublished={post.datePublished}
        author={post.author}
        image={post.image}
        url={`https://compareloans.xyz/blog/${params.slug}`}
        keywords={post.keywords}
      />
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

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostData(params.slug)
  return {
    title: `${post.title} | CompareLoans.xyz`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://compareloans.xyz/blog/${params.slug}`,
      type: "article",
      article: {
        publishedTime: post.datePublished,
        authors: [post.author],
        tags: post.keywords,
      },
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
      creator: "@CompareLoans_",
    },
  }
}

function getBlogPostData(slug: string) {
  // This is a placeholder function. In a real application, you would fetch this data from a database or API
  const posts = {
    "personal-vs-business-loans": {
      title: "Understanding the Difference: Personal vs. Business Loans",
      description:
        "Learn the key differences between personal and business loans, including eligibility requirements and how to determine which is best for your situation.",
      content:
        "When it comes to borrowing money, it's crucial to understand the differences between personal and business loans. This guide will help you navigate the key distinctions and determine which type of loan is best suited for your needs.",
      color: "bg-blue-200",
      datePublished: "2023-06-10",
      author: "Jennifer Lee",
      image: "https://compareloans.xyz/images/personal-vs-business-loans.jpg",
      keywords: ["personal loan", "business loan", "loan comparison"],
    },
    "improve-credit-score": {
      title: "5 Simple Ways to Improve Your Credit Score",
      description:
        "Discover five practical tips for boosting your credit score, from paying bills on time to reducing credit card balances.",
      content:
        "Your credit score plays a crucial role in your financial life. A good credit score can help you secure better loan terms, lower interest rates, and even affect your ability to rent an apartment or get a job. Here are five simple ways to improve your credit score:",
      color: "bg-green-200",
      datePublished: "2023-05-15",
      author: "Alex Brown",
      image: "https://compareloans.xyz/images/improve-credit-score.jpg",
      listItems: [
        "Pay your bills on time",
        "Reduce your credit utilization",
        "Keep old credit accounts open",
        "Limit new credit applications",
        "Regularly check your credit report",
      ],
      keywords: ["credit score", "credit repair", "financial tips"],
    },
    // Add other blog posts here...
  }
  return posts[slug as keyof typeof posts]
}

