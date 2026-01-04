export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>
        404 – Page not found
      </h1>
      <p style={{ color: '#6b7280' }}>
        The page you’re looking for doesn’t exist.
      </p>
    </div>
  )
}
