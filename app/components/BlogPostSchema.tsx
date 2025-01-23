import { JsonLd } from "react-schemaorg"

interface BlogPostSchemaProps {
  title: string
  description: string
  datePublished: string
  author: string
  image: string
  url: string
}

export default function BlogPostSchema({ title, description, datePublished, author, image, url }: BlogPostSchemaProps) {
  return (
    <JsonLd
      item={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description: description,
        image: image,
        datePublished: datePublished,
        author: {
          "@type": "Person",
          name: author,
        },
        publisher: {
          "@type": "Organization",
          name: "CompareLoans.xyz",
          logo: {
            "@type": "ImageObject",
            url: "https://compareloans.xyz/logo.png",
          },
        },
        url: url,
      }}
    />
  )
}

