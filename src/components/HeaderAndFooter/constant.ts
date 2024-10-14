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
    country: "CANADA",
    location: IoLocation,
    street: "19 Grenfell Crescent, Ottawa ON, Canada K2G0G3",
  },

  {
    country: "RWANDA",
    location: IoLocation,
    street: "KN 4 Ave, Kigali, Rwanda",
  },
  {
    country: "CAMEROON",
    location: IoLocation,
    street: "Checkpoint Molyko, Buea, Cameroon",
  },
];

export const Contacts = [
  {
    country: "CANADA",
    icon: FaPhoneVolume,
    phoneNumber: "+1 514-452-4048",
  },

  {
    country: "RWANDA",
    icon: FaPhoneVolume,
    phoneNumber: "+250795305033",
  },
  {
    country: "CAMEROON",
    icon: FaPhoneVolume,
    phoneNumber: "+237691181569/ +237670-93-57-21",
  },
];

export const blogs = [
    {
        title: "Essential Cybersecurity Tips to Protec Your FaBusinessTime.",
        description: "A step-by-step guide on how businesses can enhance their cybersecurity defenses. Covers topics like password management, firewalls, and securing networks",
        guides:"Use clear headings for each tip Provide practical, easy-to-implement tips for small and medium-sized businesses  Include actionable steps and examples Use clear headings for each tip Provide practical, easy-to-implement tips for small and medium-sized businesses   Include actionable steps and examples",
        
        image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="
    },
    {
        title: "Essential Cybersecurity Tips to Protec Your FaBusinessTime.",
        description: "A step-by-step guide on how businesses can enhance their cybersecurity defenses. Covers topics like password management, firewalls, and securing networks",
        guides:"Use clear headings for each tip Provide practical, easy-to-implement tips for small and medium-sized businesses  Include actionable steps and examples Use clear headings for each tip Provide practical, easy-to-implement tips for small and medium-sized businesses   Include actionable steps and examples",
        
        image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="
    },
    {
        title: "Essential Cybersecurity Tips to Protec Your FaBusinessTime.",
        description: "A step-by-step guide on how businesses can enhance their cybersecurity defenses. Covers topics like password management, firewalls, and securing networks",
        guides:"Use clear headings for each tip Provide practical, easy-to-implement tips for small and medium-sized businesses  Include actionable steps and examples Use clear headings for each tip Provide practical, easy-to-implement tips for small and medium-sized businesses   Include actionable steps and examples",
        
        image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="
    },
    {
        title: "Essential Cybersecurity Tips to Protec Your FaBusinessTime.",
        description: "A step-by-step guide on how businesses can enhance their cybersecurity defenses. Covers topics like password management, firewalls, and securing networks",
        guides:"Use clear headings for each tip Provide practical, easy-to-implement tips for small and medium-sized businesses  Include actionable steps and examples Use clear headings for each tip Provide practical, easy-to-implement tips for small and medium-sized businesses   Include actionable steps and examples",
        
        image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="
    },

]


