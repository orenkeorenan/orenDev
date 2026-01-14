"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

function ProjectCard({ title, subtitle, tags = [], link, logo }) {
  const Wrapper = link ? "a" : "div"

  return (
    <Wrapper
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "14px",
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          cursor: link ? "pointer" : "default",
          transition: "box-shadow 0.2s ease, transform 0.2s ease",
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
          {logo ? (
            <img
                src={logo}
                alt={`${title} logo`}
                style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                objectFit: "cover",
                backgroundColor: "#f3f4f6",
                flexShrink: 0,
                }}
            />
        ) : (
            <div
                style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                backgroundColor: "#f3f4f6",
                flexShrink: 0,
                }}
            />
        )}


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
              {title}
            </div>

            <div
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.6,
                color: "#6b7280",
              }}
            >
              {subtitle}
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
          {tags.map(tag => (
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
    </Wrapper>
  )
}





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
        <ProjectCard
            title={t.dellaFleur.title}
            subtitle={t.dellaFleur.subtitle}
            link="https://della-fleur.vercel.app/"
            logo="/DellaFleur_logo.png"
            tags={[
              "Next.js App Router",
              "React",
              "Client Components",
              "State Management",
              "Dynamic Forms",
              "Conditional UI",
              "WhatsApp API Integration",
              "Responsive Design",
              "UX-driven Flow",
              "Vercel Deployment"
            ]}

        />
        <ProjectCard
            title={t.manna.title}
            subtitle={t.manna.subtitle}
            link="https://manna-testing.vercel.app/"
            logo="/Manna_logo.png"
            tags={[
                "Next.js",
                "React",
                "Node.js",
                "REST API",
                "MySQL",
                "Auth Flow",
                "GitHub",
                "Vercel",
                "Railway",
            ]}
        />

        <ProjectCard
            title={t.crud.title}
            subtitle={t.crud.subtitle}
            link="https://crud-nu-puce.vercel.app/"
            logo="/CRUD_logo.png"
            tags={[
                "React",
                "Node.js",
                "REST API",
                "MySQL",
                "CRUD",
                "Validation",
                "State Management",
                "Railway",
            ]}
        />


    </div>
  )
}
