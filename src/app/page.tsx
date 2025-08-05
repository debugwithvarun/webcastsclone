import AwardsSection from '@/component/AwardsSection'
import CTASection from '@/component/CTASection'
import FeaturedClientsSection from '@/component/FeaturedClientsSection'
import HeroSection from '@/component/HeroSection'
import ReviewsSection from '@/component/ReviewsSection'
import StatsSection from '@/component/StatsSection'
import UseCasesSection from '@/component/UseCasesSection'
import React from 'react'

const page = () => {
  return (
   <main>
      <HeroSection />
        <StatsSection />
        <UseCasesSection />
        <FeaturedClientsSection />
        <AwardsSection />
        <ReviewsSection />
        <CTASection />
   </main>
  )
}

export default page