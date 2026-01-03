"use client"

function IntentCard({ active, title, description, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                flex: 1,
                padding: '16px',
                borderRadius: '12px',
                cursor: 'pointer',
                border: active ? '2px solid #111827' : '1px solid #e5e7eb',
                backgroundColor: active ? '#f9fafb' : '#ffffff',
                transition: 'all 0.2s ease',
            }}
        >
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>
                {title}
            </div>
            <div style={{ fontSize: '13px', color: '#6b7280' }}>
                {description}
            </div>
        </div>
    )
}

export default function IntentSelector({ intent, onChange }) {
    return (
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <IntentCard
                active={intent === 'fulltime'}
                title="Full-time role"
                description="Permanent or long-term positions"
                onClick={() => onChange('fulltime')}
            />

            <IntentCard
                active={intent === 'freelance'}
                title="Freelance / Contract"
                description="Short-term or project-based work"
                onClick={() => onChange('freelance')}
            />
        </div>
    )
}
