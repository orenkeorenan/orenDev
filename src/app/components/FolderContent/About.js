"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

export default function About() {
  const { language } = useLanguage()
  const t = LANGUAGES[language].about

  return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "640px",
            padding: "1rem",
            lineHeight: 1.6,
        }}
    >
        <div>{t.p1}</div>
        <div>{t.p2}</div>
    </div>
  )
}
