import { createLazyFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../feature/login/components/LoginForm.tsx'

export const Route = createLazyFileRoute('/login')({
  component: () => (
    <div>
      <LoginForm />
    </div>
  ),
})
