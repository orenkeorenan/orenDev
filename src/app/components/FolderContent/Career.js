"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

export default function Career() {
  const { language } = useLanguage()
  const t = LANGUAGES[language].career

  return (
    <div
        style={{
            maxWidth: "680px",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
        }}
    >
        {/* <div
            style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "#111827",
            }}
        >
            {t.title}
        </div> */}

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
            }}
        >
            {t.timeline.map((item, index) => (
            <div
                key={index}
                style={{
                    display: "flex",
                    gap: "1.25rem",
                }}
            >
                {/* Year */}
                <div
                    style={{
                        minWidth: "88px",
                        fontSize: "0.8rem",
                        color: "#9ca3af",
                        paddingTop: "2px",
                    }}
                >
                    {item.year}
                </div>

                {/* Content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem",
                        maxWidth: "520px",
                    }}
                >
                    <div
                        style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#111827",
                        }}
                    >
                        {item.role}
                    </div>

                    <div
                        style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        color: "#4b5563",
                        }}
                    >
                        {item.description}
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
