"use client"

export default function Input({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
}) {
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
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
