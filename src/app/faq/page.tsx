'use client'
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does CyberPro Group provide?",
    answer:
      "CyberPro Group offers three core services: CyberPro Academy: Professional training in cybersecurity. CyberPro Security Solutions: Consulting services to address cybersecurity risks. CyberPro CCTV Security Solutions: Provision and installation of CCTV camera systems.",
  },
  {
    question: "How can I enroll in CyberPro Academy's training programs?",
    answer:
      "You can visit our CyberPro Academy page to view available courses and sign up online. Alternatively, contact us for personalized guidance on the best training options for your needs.",
  },
  {
    question: "What types of organizations do you work with?",
    answer:
      "We work with a wide range of clients, including private companies, public institutions, non-profits, and individuals. Whether you're a small business or a large enterprise, we tailor our services to fit your unique needs.",
  },
  {
    question: "Do you offer customized cybersecurity consulting?",
    answer:
      "Yes! We provide personalized consulting services, including cybersecurity assessments, IT audits, penetration testing, third-party assessments, and ISO 27001 & 2 implementation.",
  },
  {
    question: "What is ISO 27001 & 2 implementation, and why is it important?",
    answer:
      "ISO 27001 & 2 are international standards for managing information security. Implementing them helps ensure your organization’s data and systems are protected from breaches and cyber threats. Our team will guide you through the certification process.",
  },
  {
    question: "How do I know if my company needs a cybersecurity audit?",
    answer:
      "If you handle sensitive information, whether financial, customer, or operational, or if you're expanding your digital footprint, a cybersecurity audit will help identify vulnerabilities and ensure compliance with regulatory standards.",
  },
  {
    question: "What kind of CCTV solutions do you offer?",
    answer:
      "Our CCTV Security Solutions include the design, installation, and maintenance of high-quality camera systems to secure your property. We also offer remote monitoring services.",
  },
  {
    question: "How long does a typical cybersecurity assessment take?",
    answer:
      "The length of the assessment depends on the size and complexity of your organization. On average, a cybersecurity assessment takes between 1-2 weeks, but we can provide a more accurate estimate after an initial consultation.",
  },
  {
    question: "Can you help us train our employees in cybersecurity?",
    answer:
      "Absolutely. We offer Employee Awareness and Training programs that educate your staff on the latest cybersecurity threats and best practices for protecting company data.",
  },
  {
    question: "How can I contact CyberPro Group for more information?",
    answer:
      "You can reach us through our Contact Us page, where you’ll find our phone number, email, and an inquiry form. We're happy to discuss how we can assist with your cybersecurity or CCTV needs.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 pt-48">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </ul>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center font-bold text-lg">Have Any Qusetion ?</h1>
        <a
          href="/Contactus"
          className="bg-blue-500 rounded  w-fit text-white p-2 hover:bg-blue-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="border rounded-lg shadow-sm">
      <div
        onClick={toggleAnswer}
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition duration-200"
      >
        <span className="text-lg font-medium">{question}</span>
        <button className="text-xl">{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && (
        <p className="p-4 border-t border-gray-200 text-gray-700">{answer}</p>
      )}
    </li>
  );
};

export default FAQ;
