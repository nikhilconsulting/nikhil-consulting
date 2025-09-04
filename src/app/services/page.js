import GlassFooter2 from '@/components/pages/Footer2'
import GlassNavbar2 from '@/components/pages/Navbar2'
import ServiceCards from '@/components/ServiceCards'
import React from 'react'

export default function page() {
  return (
    <>
    <GlassNavbar2 />
      <ServiceCards />
      <GlassFooter2 />
    </>
  )
}
