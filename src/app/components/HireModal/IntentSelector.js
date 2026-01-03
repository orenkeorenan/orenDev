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

export default function IntentSelector({ intent, onChange, t }) {
    return (
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <IntentCard
                active={intent === 'fulltime'}
                title={t.fulltime.title}
                description={t.fulltime.desc}
                onClick={() => onChange('fulltime')}
            />

            <IntentCard
                active={intent === 'freelance'}
                title={t.freelance.title}
                description={t.freelance.desc}
                onClick={() => onChange('freelance')}
            />
        </div>
    )
}
