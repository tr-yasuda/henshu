import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Suspense, lazy } from 'react'
import { Header } from '../components/Header.tsx'
import { NotFoundError } from '../feature/not-found/components/NotFound.tsx'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

const TanStackQueryDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(() =>
        import(
          '@tanstack/react-query-devtools/build/modern/production.js'
        ).then((d) => ({
          default: d.ReactQueryDevtools,
        })),
      )

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className={'pt-[68px]'} />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
        <TanStackQueryDevtools />
      </Suspense>
    </QueryClientProvider>
  ),
  notFoundComponent: () => <NotFoundError />,
})
