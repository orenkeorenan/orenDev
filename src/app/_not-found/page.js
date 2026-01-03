import { Suspense } from 'react'
import ClientComponent from './ClientComponent'

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent />
    </Suspense>
  )
}
