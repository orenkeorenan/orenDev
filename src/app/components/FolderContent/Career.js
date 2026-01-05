"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

export default function Career() {
  const { language } = useLanguage()
  const t = LANGUAGES[language].career

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        maxWidth: "640px",
        padding: "1rem",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: "1.1rem",
          fontWeight: 600,
        }}
      >
        {t.title}
      </div>

      {/* Timeline */}
      {t.timeline.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {/* Year */}
          <div
            style={{
              minWidth: "90px",
              fontSize: "0.85rem",
              color: "#777",
              flexShrink: 0,
            }}
          >
            {item.year}
          </div>

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            <div
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
              }}
            >
              {item.role}
            </div>

            <div
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.5,
                color: "#555",
              }}
            >
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
