import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Manegment from './Components/Manegment/Manegment'
import Extention from './Components/Extention/Extention'
import Needs from './Components/Needs/Needs'
import Work from './Components/Work/Work'
import Sponsors from './Components/Sponsors/Sponsors'
import Footer from './Components/Footer/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Manegment />
      <Extention />
      <Needs />
      <Work />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default page
