import { ContactSalesForm } from '@/feature/contact-sales/components/ContactSalesForm.tsx'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contact-sales')({
  component: () => (
    <div>
      <ContactSalesForm />
    </div>
  ),
})
