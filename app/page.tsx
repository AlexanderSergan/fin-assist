import Header from "./components/Header"
import AIChatAssistant from "./components/AIChatAssistant"
import BlogSection from "./components/BlogSection"
import Footer from "./components/Footer"
import { JsonLd } from "react-schemaorg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8" role="main" aria-label="Main content">
        <h1 className="sr-only">CompareLoans.xyz - Fast Loan Comparisons in the US</h1>
        <AIChatAssistant />
        <BlogSection />
      </main>
      <Footer />
      <JsonLd
        item={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CompareLoans.xyz",
          url: "https://compareloans.xyz",
          description:
            "Compare personal or business loans in the US with CompareLoans.xyz. Harness our AI chat to quickly find offers from top lenders. No email or sign-up required!",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://compareloans.xyz/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        }}
      />
    </div>
  )
}

