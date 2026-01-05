"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

export default function Contact() {
  const { language } = useLanguage()
  const t = LANGUAGES[language].contact

  return (
    <div
      style={{
        maxWidth: "640px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
          style={{
            fontSize: "1.05rem",
            fontWeight: 600,
          }}
        >
          {t.title}
        </div>

        <div
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "#555",
          }}
        >
          {t.description}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            fontSize: "0.9rem",
          }}
        >
          <div>
            <strong>{t.emailLabel}:</strong>{" "}
            <a href="mailto:bernardusoren123@email.com" style={{ color: "#2563eb" }}>
              bernardusoren123@gmail.com
            </a>
          </div>

          <div>
            <strong>{t.githubLabel}:</strong>{" "}
            <a
              href="https://github.com/orenkeorenan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb" }}
            >
              github.com/orenkeorenan
            </a>
          </div>

          <div>
            <strong>{t.linkedinLabel}:</strong>{" "}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb" }}
            >
              linkedin.com/in/yourusername
            </a>
          </div>
        </div>
    </div>
  )
}
