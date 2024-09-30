import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
export interface NavigationItem {
  en: string;
  fr: string;
  path: string;
}
export const NavigationItemsRoutes: NavigationItem[] = [
  {
    en: "Home",
    fr: "Accueil",
    path: "/",
  },
  {
    en: "About",
    fr: "À propos",
    path: "/Aboutus",
  },
  {
    en: "Services",
    fr: "Services",
    path: "/Services",
  },
  {
    en: "Case Studies",
    fr: "Études de cas",
    path: "/Case-study",
  },
  {
    en: "Blog",
    fr: "Blog",
    path: "/Blog",
  },
  {
    en: "Contact",
    fr: "Contact",
    path: "/Contactus",
  },
];


export const Locations = [
    {
        country: 'CANADA',
        location: IoLocation,
        street: 'atawa kg 636 st'
    },
    {
        country: 'USA',
        location: IoLocation,
        street: 'atawa kg 636 st'
    },
    {
        country: 'RWANDA',
        location: IoLocation,
        street: 'atawa kg 636 st'
    },
    {
        country: 'CAMEROON',
        location: IoLocation,
        street: 'atawa kg 636 st'
    },
]

export const Contacts = [
    {
        country: 'CANADA',
        icon: FaPhoneVolume,
        phoneNumber: '+1 522 667 7677'
    },
    {
        country: 'USA',
        icon: FaPhoneVolume,
        phoneNumber: '+1 522 667 7677'
    },
    {
        country: 'RWANDA',
        icon: FaPhoneVolume,
        phoneNumber: '+1 522 667 7677'
    },
    {
        country: 'CAMEROON',
        icon: FaPhoneVolume,
        phoneNumber: '+1 522 667 7677'
    },
]

export const blogs = [
    {
        title: "Essential Cybersecurity Tips to Protec Your FaBusinessTime.",
        description: "A step-by-step guide on how businesses can enhance their cybersecurity defenses. Covers topics like password management, firewalls, and securing networks",
        guides: [
            "Use clear headings for each tip",
            "Provide practical, easy-to-implement tips for small and medium-sized businesses",
            "Include actionable steps and examples",
            "Use clear headings for each tip",
            "Provide practical, easy-to-implement tips for small and medium-sized businesses",
            "Include actionable steps and examples"
        ],
        image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="
    },
    {
        title: "How to Choose the Perfect Camera System for Your Needs.",
        description: "A comprehensive guide to help you select the right security camera system, whether for a home or business. Discusses key factors like camera type, resolution, and coverage",
        guides: [
            "Include a comparison table for different camera types (indoor, outdoor, wired, wireless).",
            "Offer real-world examples for different scenarios (home vs. business).",
            "Use diagrams or images to clarify technical specifications.",
        ],
        image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="
    },
    {
        title: "Common Mistakes in Security Camera Installation.",
        description: "Avoid the most common pitfalls in camera installation. Learn how to position your cameras for maximum effectiveness and avoid blind spots",
        guides: [
            "Break down the most common mistakes with clear examples",
            "Provide do's and don’ts for camera placement, wiring, and setup.",
            "Include diagrams for visual clarification"
        ],
        image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="
    },
    {
        title: "The Role of Cybersecurity Consultancy in Modern Business.",
        description: "Avoid the most common pitfalls in camera installation. Learn how to position your cameras for maximum effectiveness and avoid blind spots",
        guides: [
            "Explain the importance of risk assessments and audits.",
            "Provide examples of cybersecurity consultancy services.",
            "Use real-world scenarios to show the value of hiring a consultant."
        ],
        image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="
    },
    {
        title: "Company News: New Camera Installation and Monitoring Services",
        description: "Announcing our latest services! Find out how our new camera installation and monitoring packages can help safeguard your home  or business",
        guides: [
            "Use a conversational tone to make the announcement feel personal.",
            "Highlight the benefits of the new services (e.g., 24/7 monitoring).",
            "Provide links to more detailed service descriptions."
        ],
        image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="
    },
]

