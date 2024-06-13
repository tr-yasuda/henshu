import { createLazyFileRoute } from '@tanstack/react-router'
import { RegisterForm } from '../feature/register/components/RegisterForm.tsx'

export const Route = createLazyFileRoute('/register')({
  component: () => (
    <div>
      <RegisterForm />
    </div>
  ),
})
