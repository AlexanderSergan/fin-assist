"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, DollarSign } from "lucide-react"
import { User, Briefcase } from "lucide-react"

type LoanOffer = {
  lender: string
  type: string
  rate: string
  minScore: number
  link: string
}

const rawUrls = [
  "https://www.cashtodayasap.com/?c=294872&v1=subsource&v2=clickid",
  "https://wizzay.com/?c=294872&v1=subsource&v2=clickid",
  "https://www.getcash4me.com/?c=294872&v1=subsource&v2=clickid",
  "https://nowpersonalloan.com/loanform/?c=294872&v1=subsource&v2=clickid",
  "https://personalloan2you.com/?c=294872&v1=subsource&v2=clickid",
  "https://personaloan24.com/?c=294872&v1=subsource&v2=clickid",
  "https://45dinero.com/?c=294872&v1=subsource&v2=clickid",
  "https://lendrepublic.com/?c=294872&v1=subsource&v2=clickid",
  "https://www.halloweenloan.com/?c=294872&v1=subsource&v2=clickid",
  "https://lendgeeks.com/?c=294872&v1=subsource&v2=clickid",
  "https://www.spookyloan.com/?c=294872&v1=subsource&v2=clickid",
  "https://anydaycash.com/?c=294872&v1=subsource&v2=clickid",
  "https://www.thanksgiving-loan.com/?c=294872&v1=subsource&v2=clickid",
  "https://findfundsnow.com/?c=294872&v1=subsource&v2=clickid",
  "https://www.turkey-loan.com/?c=294872&v1=subsource&v2=clickid",
  "https://www.black-friday-loan.com/?c=294872&v1=subsource&v2=clickid",
  "https://loanfundme.com/?c=294872&v1=subsource&v2=clickid",
  "https://necesitadineroahora.com/?c=294872&v1=subsource&v2=clickid",
  "https://www.merry-christmas-loan.com/?c=294872&v1=subsource&v2=clickid",
  "https://www.xmassloans.com/?c=294872&v1=subsource&v2=clickid",
]

export default function AIChatAssistant() {
  const [messages, setMessages] = useState<Array<{ text: string; type: "bot" | "user" }>>([])
  const [step, setStep] = useState(1)
  const [loanType, setLoanType] = useState("")
  const [creditScore, setCreditScore] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [loanOffers, setLoanOffers] = useState<LoanOffer[]>([])
  const [displayedOffers, setDisplayedOffers] = useState<LoanOffer[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const resultsTableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    resetChat()
  }, [])

  useEffect(() => {
    const offers = rawUrls.map((url) => {
      const domain = url.replace("https://", "").split("/")[0]
      const minScore = Math.floor(Math.random() * 151) + 550
      const rate = (Math.random() * 10 + 5).toFixed(1) + "% APR"
      return {
        lender: domain,
        type: "Personal",
        rate: rate,
        minScore: minScore,
        link: url,
      }
    })
    setLoanOffers(offers)
  }, [])

  const addMessage = (text: string, type: "bot" | "user") => {
    setMessages((prev) => {
      const newMessages = [...prev, { text, type }]
      if (type === "bot") {
        // Keep only the most recent bot message
        return newMessages.filter((msg, index, array) => msg.type === "user" || index === array.length - 1)
      }
      return newMessages
    })
  }

  const handleLoanTypeSelection = (type: string) => {
    setLoanType(type)
    addMessage(`I'm looking for a ${type.toLowerCase()} loan`, "user")
    setStep(2)
    addMessage("Great choice! What's your credit score range?", "bot")
  }

  const handleCreditScoreSelection = (score: string) => {
    setCreditScore(score)
    addMessage(score, "user")
    setStep(3)
    const range = loanType === "Business" ? "$500 - $1,000,000" : "$100 - $100,000"
    addMessage(`Desired loan amount (${range}):`, "bot")
  }

  const handleLoanAmountSubmit = () => {
    addMessage(`$${loanAmount}`, "user")
    setStep(4)
    setIsLoading(true)
    addMessage("Analyzing your profile and scanning thousands of loan offers...", "bot")
    setTimeout(() => {
      displayRandomLoanOffers()
      setIsLoading(false)
    }, 3000) // 3 seconds delay
  }

  const displayRandomLoanOffers = () => {
    const userScore = creditScore === "Not Sure" ? 600 : getCreditScoreValue(creditScore)
    let filteredOffers = loanOffers.filter((offer) => userScore >= offer.minScore)

    // If no offers match the credit score, use all offers
    if (filteredOffers.length === 0) {
      filteredOffers = loanOffers
    }

    const count = Math.random() > 0.5 ? 7 : 9
    const randomOffers = getRandomItems(filteredOffers, count)
    setDisplayedOffers(randomOffers)

    const message =
      filteredOffers.length < loanOffers.length
        ? "Great news! I've found some excellent loan offers for you. Take a look at the table below to compare your options."
        : "Here are some loan options to consider. Keep in mind that improving your credit score could help you qualify for better rates in the future."

    addMessage(
      message + " Remember, you can always click 'Start Over' if you want to explore different scenarios.",
      "bot",
    )
  }

  const getCreditScoreValue = (score: string): number => {
    switch (score) {
      case "Excellent":
        return 800
      case "Good":
        return 700
      case "Fair":
        return 600
      case "Poor":
        return 500
      case "Not Sure":
        return 600
      default:
        return 500 // Default to the lowest score to show all options
    }
  }

  const getRandomItems = (array: LoanOffer[], numItems: number) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, numItems)
  }

  const resetChat = () => {
    setMessages([])
    setStep(1)
    setLoanType("")
    setCreditScore("")
    setLoanAmount("")
    setDisplayedOffers([])
    setIsLoading(false)
    addMessage(
      "Hi! I'm your AI agent. Let's use AI to find you the best loan in just 30 seconds, no email needed. What type of loan are you looking for?",
      "bot",
    )
  }

  useEffect(() => {
    if (step === 4 && !isLoading && displayedOffers.length > 0 && resultsTableRef.current) {
      resultsTableRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [step, isLoading, displayedOffers])

  return (
    <Card className="w-full max-w-4xl mx-auto mb-8">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">AI Loan Assistant</span>
          <Button onClick={resetChat} variant="outline">
            Start Over
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="h-48 overflow-y-auto mb-2 p-4 border rounded-lg bg-gray-50"
          ref={(el) => {
            if (el) {
              el.scrollTop = el.scrollHeight
            }
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg ${
                msg.type === "bot" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center justify-center space-x-2 my-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-150"></div>
            </div>
          )}
        </div>
        {step === 1 && (
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              onClick={() => handleLoanTypeSelection("Personal")}
              className="flex-1 h-20 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <span>Personal Loan</span>
                <span className="text-sm font-normal mt-1">For individual needs</span>
              </div>
            </Button>
            <Button
              onClick={() => handleLoanTypeSelection("Business")}
              className="flex-1 h-20 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <span>Business Loan</span>
                <span className="text-sm font-normal mt-1">For your company</span>
              </div>
            </Button>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-wrap gap-2">
            {[
              { score: "Excellent", color: "bg-green-500 hover:bg-green-600" },
              { score: "Good", color: "bg-yellow-500 hover:bg-yellow-600" },
              { score: "Fair", color: "bg-orange-500 hover:bg-orange-600" },
              { score: "Poor", color: "bg-red-500 hover:bg-red-600" },
              { score: "Not Sure", color: "bg-gray-500 hover:bg-gray-600" },
            ].map((item) => (
              <Button
                key={item.score}
                onClick={() => handleCreditScoreSelection(item.score)}
                className={`text-white ${item.color}`}
              >
                {item.score}
              </Button>
            ))}
          </div>
        )}
        {step === 3 && (
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder={loanType === "Business" ? "$500 - $1,000,000" : "$100 - $100,000"}
              className="w-48"
            />
            <Button
              onClick={handleLoanAmountSubmit}
              className="whitespace-nowrap animate-pulse bg-blue-500 hover:bg-blue-600 text-white"
            >
              Find Loans <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
        {step === 4 && !isLoading && displayedOffers.length > 0 && (
          <div className="mt-6" ref={resultsTableRef}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">AI-Powered Loan Recommendations</h3>
              <Button onClick={resetChat} variant="outline" size="sm">
                Start Over
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lender</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <AnimatePresence>
                  {displayedOffers.map((offer, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1, // Stagger effect
                        ease: "easeOut",
                      }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <TableCell className="font-medium">{offer.lender}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{offer.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center">
                          <Star className="text-yellow-400 mr-1 h-4 w-4" />
                          {offer.rate}
                        </span>
                      </TableCell>
                      <TableCell>
                        <motion.a
                          href={offer.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="whitespace-nowrap bg-green-500 hover:bg-green-600 text-white"
                          >
                            <DollarSign className="mr-1 h-4 w-4" /> Apply Now
                          </Button>
                        </motion.a>
                      </TableCell>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

