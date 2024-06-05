import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='max-w-md mx-auto p-4'>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
