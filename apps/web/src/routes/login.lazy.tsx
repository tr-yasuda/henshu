import { LoginForm } from '@/feature/login/components/LoginForm.tsx'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: () => (
    <div>
      <LoginForm />
    </div>
  ),
})
