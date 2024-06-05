import { createLazyFileRoute } from '@tanstack/react-router'
import { Divider } from '../components/Divider.tsx'
import { Footer } from '../feature/root/components/Footer.tsx'
import { Header } from '../feature/root/components/Header.tsx'
import { HeroHeader } from '../feature/root/components/HeroHeader.tsx'
import { PlanList } from '../feature/root/components/PlanList.tsx'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className={'bg-gray-200'}>
      <Header />
      <div className={'pt-[68px]'} />
      <HeroHeader />
      <PlanList />
      <Divider />
      <Footer />
    </div>
  )
}
