import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { BackToTop } from "./components/BackToTop"
import { JsonLd } from "react-schemaorg"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://compareloans.xyz"),
  title: {
    default: "CompareLoans.xyz | Fast Loan Comparisons in the US",
    template: "%s | CompareLoans.xyz",
  },
  description:
    "Compare personal or business loans in the US with CompareLoans.xyz. Harness our AI chat to quickly find offers from top lenders. No email or sign-up required!",
  keywords: [
    "loan comparison",
    "personal loans",
    "business loans",
    "AI loan assistant",
    "credit score",
    "loan offers",
    "US loans",
  ],
  authors: [{ name: "CompareLoans.xyz Team" }],
  creator: "CompareLoans.xyz",
  publisher: "CompareLoans.xyz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://compareloans.xyz",
    siteName: "CompareLoans.xyz",
    title: "CompareLoans.xyz | Fast Loan Comparisons in the US",
    description:
      "Compare personal or business loans in the US with CompareLoans.xyz. Harness our AI chat to quickly find offers from top lenders.",
    images: [
      {
        url: "https://compareloans.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CompareLoans.xyz - Fast Loan Comparisons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CompareLoans_",
    creator: "@CompareLoans_",
    title: "CompareLoans.xyz | Fast Loan Comparisons in the US",
    description:
      "Compare personal or business loans in the US with CompareLoans.xyz. Harness our AI chat to quickly find offers from top lenders.",
    images: ["https://compareloans.xyz/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["your-personal-website-url"],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://compareloans.xyz" />
      </head>
      <body className={inter.className}>
        {children}
        <BackToTop />
        <JsonLd
          item={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CompareLoans.xyz",
            url: "https://compareloans.xyz",
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
      </body>
    </html>
  )
}

