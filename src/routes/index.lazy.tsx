import { createLazyFileRoute } from '@tanstack/react-router'
import { HeroHeader } from '../feature/root/components/HeroHeader.tsx'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <HeroHeader />
    </div>
  )
}
