import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Success } from "./components/Success";
import "./App.css";

function App() {
  const [isSuccessPage, setIsSuccessPage] = useState(false);

  useEffect(() => {
    // Check if we're on the success page (hash or path based)
    const checkRoute = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      setIsSuccessPage(hash === '#success' || path === '/success');
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    return () => window.removeEventListener('hashchange', checkRoute);
  }, []);

  // Success page layout
  if (isSuccessPage) {
    return (
      <>
        <Navbar />
        <Success />
        <Footer />
        <ScrollToTop />
        <Analytics />
      </>
    );
  }

  // Main landing page layout
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Cta />
      <FAQ />
      <Footer />
      <ScrollToTop />
      <Analytics />
    </>
  );
}

export default App;
