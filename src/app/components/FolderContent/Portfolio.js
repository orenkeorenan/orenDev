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
            gap: "1.25rem",
            maxWidth: "640px",
            padding: "1rem",
        }}
    >
        {/* Tech summary */}
        <div
            style={{
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "#555",
            }}
        >
            {t.summary}
        </div>

        {/* Project */}
        <div>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                }}
            >
                <div
                    style={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "8px",
                        backgroundColor: "#e5e5e5",
                        flexShrink: 0,
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem",
                    }}
                >
                    <div style={{ fontSize: "1rem", fontWeight: 600 }}>
                        {t.manna.title}
                    </div>
                    <div
                        style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.5,
                            color: "#666",
                        }}
                    >
                        {t.manna.subtitle}
                    </div>
                </div>
            </div>
            <div>
                #NextJS #React #NodeJS #RESTAPI #MySQL #AuthFlow #GitHub #Vercel #Railway #WebApp #FullStackBasics
            </div>
        </div>
        
    </div>
  )
}
