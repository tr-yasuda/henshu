import { createLazyFileRoute } from '@tanstack/react-router'
import { Divider } from '../components/Divider.tsx'
import { CTAButtonSection } from '../feature/root/components/CTAButtonSection.tsx'
import { FeatureSection } from '../feature/root/components/FeatureSection.tsx'
import { Footer } from '../feature/root/components/Footer.tsx'
import { HeroHeader } from '../feature/root/components/HeroHeader.tsx'
import { PlanSection } from '../feature/root/components/PlanSection.tsx'
import { TestimonialsSection } from '../feature/root/components/TestimonialsSection.tsx'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className={'bg-gray-200'}>
      <HeroHeader />
      <PlanSection />
      <FeatureSection />
      <TestimonialsSection />
      <CTAButtonSection />
      <Divider />
      <Footer />
    </div>
  )
}
