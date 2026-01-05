"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

export default function Skills() {
  const { language } = useLanguage()
  const t = LANGUAGES[language].skills

  return (
    <div
      style={{
        maxWidth: "680px",
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
        {/* Header */}
        <div
            style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            }}
        >
            <div
            style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "#111827",
            }}
            >
            {t.title}
            </div>

            <div
            style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#6b7280",
                maxWidth: "560px",
            }}
            >
            {t.summary}
            </div>
        </div>

        {/* Groups */}
        <div
            style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            }}
        >
            {Object.values(t.groups).map((group) => (
            <div
                key={group.title}
                style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                }}
            >
                <div
                style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#374151",
                }}
                >
                {group.title}
                </div>

                <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    maxWidth: "620px",
                }}
                >
                {group.items.map((item) => (
                    <span
                    key={item}
                    style={{
                        fontSize: "0.78rem",
                        padding: "6px 10px",
                        borderRadius: "999px",
                        backgroundColor: "#f3f4f6",
                        color: "#374151",
                        whiteSpace: "nowrap",
                    }}
                    >
                    {item}
                    </span>
                ))}
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
