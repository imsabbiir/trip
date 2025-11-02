import React from 'react'
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
function layout({children}) {
  return (
    <div>
        <Header />
        {children}
        <ContactSection />
        <Footer />
    </div>
  )
}

export default layout