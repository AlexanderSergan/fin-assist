import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://compareloans.xyz"
  const blogPosts = [
    "personal-vs-business-loans",
    "improve-credit-score",
    "comparing-loan-offers",
    "pros-cons-online-loan-comparison",
    "spot-best-loan-deals-online",
    "best-small-personal-loan-online-guide",
    "top-factors-small-personal-loan",
  ]

  const routes = ["", "/blog", "/accessibility", "/privacy-policy", "/terms-of-service"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  const posts = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...posts]
}

