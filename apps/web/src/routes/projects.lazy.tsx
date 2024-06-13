import { createLazyFileRoute } from '@tanstack/react-router'
import { ProjectBreadcrumbs } from '../feature/projects/components/ProjectBreadcrumbs.tsx'
import { ProjectList } from '../feature/projects/components/ProjectList.tsx'

export const Route = createLazyFileRoute('/projects')({
  component: () => (
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto py-12'>
        <ProjectBreadcrumbs />
        <ProjectList />
      </div>
    </div>
  ),
})
