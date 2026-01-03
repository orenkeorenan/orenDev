"use client"

export default function Section({ title, children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
                style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#111827',
                }}
            >
                {title}
            </div>
            {children}
        </div>
    )
}
