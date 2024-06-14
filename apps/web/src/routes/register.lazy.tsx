import { RegisterForm } from '@/feature/register/components/RegisterForm.tsx'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/register')({
  component: () => (
    <div>
      <RegisterForm />
    </div>
  ),
})
