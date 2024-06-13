import { createLazyFileRoute } from '@tanstack/react-router'
import { ContactSalesForm } from '../feature/contact-sales/components/ContactSalesForm.tsx'

export const Route = createLazyFileRoute('/contact-sales')({
  component: () => (
    <div>
      <ContactSalesForm />
    </div>
  ),
})
