"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

export default function Skills() {
  const { language } = useLanguage()
  const t = LANGUAGES[language].skills

  return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
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

        {/* Summary */}
        <div
            style={{
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "#555",
            }}
        >
            {t.summary}
        </div>

        {/* Skill groups */}
        {Object.values(t.groups).map((group) => (
            <div
                key={group.title}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}
            >
                <div
                    style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                    }}
                >
                    {group.title}
                </div>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                    }}
                >
                    {group.items.map((item) => (
                        <div
                            key={item}
                            style={{
                                fontSize: "0.85rem",
                                padding: "0.25rem 0.5rem",
                                borderRadius: "6px",
                                backgroundColor: "#f2f2f2",
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
  )
}
