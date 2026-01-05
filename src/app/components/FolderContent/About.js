"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

export default function About() {
  const { language } = useLanguage()
  const t = LANGUAGES[language].about

  return (
    <div
        style={{
            maxWidth: "680px",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            lineHeight: 1.75,
            color: "#374151",
        }}
    >
        <div style={{ maxWidth: "560px" }}>{t.p1}</div>
        <div style={{ maxWidth: "560px" }}>{t.p2}</div>
    </div>
  )
}
