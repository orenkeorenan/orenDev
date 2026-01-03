import dynamic from 'next/dynamic'

// Dynamically import the client component, no SSR
const InteractiveWidget = dynamic(
  () => import('./InteractiveWidget'),
  { ssr: false } // important: disable server-side rendering
)

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>404 - Page Not Found</h1>
      <InteractiveWidget />
    </div>
  )
}
