'use client'

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ImQuotesRight } from "react-icons/im"
import { Testimony } from "@/types/types"

interface TestimonySlideshowProps {
  testimony: Testimony[]
  isLoadingTestimony: boolean
}

const TestimonySlideshow: React.FC<TestimonySlideshowProps> = ({
  testimony,
  isLoadingTestimony,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimony.length)
  }, [testimony.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + testimony.length) % testimony.length)
  }, [testimony.length])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  if (isLoadingTestimony) {
    return <SkeletonTestimony />
  }

  if (!testimony || testimony.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">No testimony available</div>
    )
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimony.map((test, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={test.image}
                      alt={`Portrait of ${test.name}`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <ImQuotesRight className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-sm text-center mb-4">{test.content}</p>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-blue-700">{test.name}</h3>
                    <p className="text-sm text-gray-600">{`${test.role} - ${test.company}`}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        aria-label="Previous testimony"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        aria-label="Next testimony"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="flex justify-center mt-4">
        {testimony.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const SkeletonTestimony: React.FC = () => (
  <div className="w-full max-w-4xl mx-auto px-4 py-8">
    <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4" />
        <div className="w-8 h-8 bg-gray-300 mb-4" />
        <div className="w-full h-20 bg-gray-300 mb-4" />
        <div className="w-40 h-6 bg-gray-300 mb-2" />
        <div className="w-60 h-4 bg-gray-300" />
      </div>
    </div>
  </div>
)

export default TestimonySlideshow
