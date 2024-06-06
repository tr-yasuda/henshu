import { createLazyFileRoute } from '@tanstack/react-router'
import { Divider } from '../components/Divider.tsx'
import { FeatureSection } from '../feature/root/components/FeatureSection.tsx'
import { Footer } from '../feature/root/components/Footer.tsx'
import { Header } from '../feature/root/components/Header.tsx'
import { HeroHeader } from '../feature/root/components/HeroHeader.tsx'
import { PlanSection } from '../feature/root/components/PlanSection.tsx'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className={'bg-gray-200'}>
      <Header />
      <div className={'pt-[68px]'} />
      <HeroHeader />
      <PlanSection />
      <FeatureSection />
      <Divider />
      <Footer />
    </div>
  )
}
