import { useState } from "react"
import { FaArrowRight, FaPlus, FaTimes } from "react-icons/fa"

const faqsData = [
  {
    question: "Can I enroll in multiple courses at once?",
    answer: "Yes, you can enroll in as many courses as you like. Our platform allows you to manage multiple courses simultaneously, so you can learn at your own pace and explore various subjects without any limitations."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods, including credit/debit cards, PayPal, and other popular online payment options. You can choose the method that is most convenient for you during the checkout process."
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer: "Yes, we occasionally offer discounts and promotions on our courses. Be sure to subscribe to our newsletter and follow us on social media to stay updated on the latest offers and deals."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we have a refund policy in place. If you are not satisfied with a course, you can request a refund within a specified period after purchase. Please refer to our refund policy page for more details on the process and eligibility criteria."
  }
]


const FAQs = () => {
  return (
    <div className="faqs">
      <div className="container mx-auto px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <div className="bg-white grid grid-cols-1 md:grid-cols-12 gap-10 lg:p-10 rounded-md">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-semibold mb-5">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Still you have any questions? Contact our Team via support@skillbridge.com
            </p>
          </div>
          <div className="md:col-span-7">
            <ul>
              {faqsData.map((faq, index) => (
                <Question key={index} question={faq.question} answer={faq.answer} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs





const Question = ({ question, answer }: { question?: string, answer?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="q bg-white/25 border border-gray-200 rounded-md p-8 mb-4">
      <div className="q-header flex items-center justify-between gap-2">
        <h5 className="text-gray-800 text-md font-medium">
          {question}
        </h5>
        <button className="bg-orange-100 rounded p-2 text-gray-500 block w-fit cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaPlus />}
        </button>
      </div>
      <div className={`q-body mt-4 border-t border-t-gray-200 pt-4 ${isOpen ? "block" : "hidden"}`}>
        <p className="text-gray-600 mb-4">
          {answer}
        </p>
        <p className="bg-gray-100 text-gray-600 p-4 rounded-md flex items-center justify-between gap-2 font-medium">
          Enrollment Process for Different Courses
          <a href="#" className="bg-white rounded-full p-3 text-gray-500 block w-fit">
            <FaArrowRight />
          </a>
        </p>
      </div>
    </li>
  )
}