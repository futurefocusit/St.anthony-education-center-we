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
    en: "Contact",
    fr: "Contact",
    path: "/Contactus",
  },
];


export const Locations = [
 

  {
    country: "RWANDA",
    location: IoLocation,
    street: "Remera, Giporoso (behind Remera bus park) Rukiri ,near healing center",
  },
 
];

export const Contacts = [
  
  {
    country: "RWANDA",
    icon: FaPhoneVolume,
    phoneNumber: "+250 783 129 463",
  },
 
];




