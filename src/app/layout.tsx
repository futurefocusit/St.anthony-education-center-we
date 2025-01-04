'use client'
import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Merriweather, Roboto } from "next/font/google";
import { AppProvider } from "@/context/appContext";
import CookieConsent from "@/components/cookieConsent";
import { ToastContainer } from "react-toastify";
import WhatsAppButton from "@/components/Whatsapp";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// export const metadata: Metadata = {
//   title: "Language School",
//   description: "Language school",
// };

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Check if the current page is login, reset, or admin-related
  const isResetPage = pathname?.startsWith("/reset");
  const isLoginPage = pathname?.startsWith("/login");
  const isForgotPage = pathname?.startsWith("/forgot");
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <AppProvider>
        <body className={`${roboto.variable} ${merriweather.variable} font-roboto`}>
          {/* Conditionally render Header, CookieConsent, WhatsAppButton, and Footer */}
          {!isLoginPage && !isResetPage && !isAdminPage && !isForgotPage &&(
            <>
              <Header />
              <CookieConsent />
              <WhatsAppButton />
            </>
          )}
          {children}
          {/* Footer should always be rendered */}
          <Footer />
          <ToastContainer />
        </body>
      </AppProvider>
    </html>
  );
}
