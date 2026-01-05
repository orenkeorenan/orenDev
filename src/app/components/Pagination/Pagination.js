export default function Pagination({ page, totalPages, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "0.75rem",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        style={buttonStyle(page === 1)}
      >
        Prev
      </button>

      <span
        style={{
          fontSize: "0.85rem",
          color: "#6b7280",
          alignSelf: "center",
        }}
      >
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        style={buttonStyle(page === totalPages)}
      >
        Next
      </button>
    </div>
  )
}

function buttonStyle(disabled) {
  return {
    padding: "0.35rem 0.75rem",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    backgroundColor: "#fff",
    fontSize: "0.8rem",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
  }
}
