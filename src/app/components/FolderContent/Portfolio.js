"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

export default function Portfolio() {
  const { language } = useLanguage()
  const t = LANGUAGES[language].projects

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "680px",
        padding: "1.25rem",
      }}
    >
        {/* Summary */}
        <div
            style={{
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: "#4b5563",
            }}
        >
            {t.summary}
        </div>

        {/* Project card */}
        <div
            style={{
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            }}
        >
            {/* Header */}
            <div
            style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
            }}
            >
            {/* Logo placeholder */}
            <div
                style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                backgroundColor: "#f3f4f6",
                flexShrink: 0,
                }}
            />

            {/* Text */}
            <div
                style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                }}
            >
                <div
                style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#111827",
                }}
                >
                {t.manna.title}
                </div>

                <div
                style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "#6b7280",
                }}
                >
                {t.manna.subtitle}
                </div>
            </div>
            </div>

            {/* Tags */}
            <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
            }}
            >
            {[
                "Next.js",
                "React",
                "Node.js",
                "REST API",
                "MySQL",
                "Auth Flow",
                "GitHub",
                "Vercel",
                "Railway",
            ].map(tag => (
                <span
                key={tag}
                style={{
                    fontSize: "0.75rem",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    backgroundColor: "#f3f4f6",
                    color: "#374151",
                }}
                >
                {tag}
                </span>
            ))}
            </div>
        </div>
    </div>
  )
}
