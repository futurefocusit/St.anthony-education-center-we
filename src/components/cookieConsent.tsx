'use client'
import { useEffect, useState } from "react";
const CookieConsent = () => {
   const [hasAcceptedCookies, setHasAcceptedCookies] = useState<boolean>(false);
const acceptCookies = () => {
  setHasAcceptedCookies(true);
  if (typeof window !== "undefined") {
    localStorage.setItem("acceptedCookies", "true");
  }
};
useEffect(() => {

  if (typeof window !== "undefined") {
    const acceptedCookies = localStorage.getItem("acceptedCookies");
    setHasAcceptedCookies(!!acceptedCookies);
  }
}, []);

  if (hasAcceptedCookies) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 shadow-l z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <p className="text-sm">
          This website uses cookies to enhance your experience. By continuing to
          visit this site, you agree to our use of cookies.
        </p>
        <button
          className="ml-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          onClick={acceptCookies}
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
