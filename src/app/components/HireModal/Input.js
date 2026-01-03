"use client"

export default function Input({ label, type = 'text', placeholder }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label
                style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#111827',
                }}
            >
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                style={{
                    padding: '11px 12px',
                    borderRadius: '10px',
                    border: '1px solid #d1d5db',
                    fontSize: '14px',
                    outline: 'none',
                }}
            />
        </div>
    )
}
