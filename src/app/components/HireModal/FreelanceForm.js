// FreelanceForm.js
"use client"

import { useLanguage } from '@/app/context/LanguageContext'
import Input from './Input'
import Section from './Section'
import { LANGUAGES } from '@/app/i18n'

const TIMEZONES = [
  "UTC−12:00","UTC−11:00","UTC−10:00","UTC−09:00","UTC−08:00","UTC−07:00",
  "UTC−06:00","UTC−05:00","UTC−04:00","UTC−03:00","UTC−02:00","UTC−01:00",
  "UTC±00:00","UTC+01:00","UTC+02:00","UTC+03:00","UTC+04:00","UTC+05:00",
  "UTC+06:00","UTC+07:00","UTC+08:00","UTC+09:00","UTC+10:00","UTC+11:00",
  "UTC+12:00","UTC+13:00","UTC+14:00",
]

export default function FreelanceForm({ value, onChange }) {
  const { language } = useLanguage()
  const t = LANGUAGES[language].hireModal.freelance

  function handleChange(e) {
    const { name, value: v } = e.target
    onChange(prev => ({ ...prev, [name]: v }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Section title="Client">
        <Input
          name="companyClientName"
          label={t.companyClientName}
          placeholder={t.companyClientNamePlaceholder}
          value={value.companyClientName}
          onChange={handleChange}
          required
        />
      </Section>

      <Section title="Project">
        <Input
          name="projectType"
          label={t.projectType}
          placeholder={t.projectTypePlaceholder}
          value={value.projectType}
          onChange={handleChange}
          required
        />
        <Input
          name="scopeProjection"
          label={t.scopeProjection}
          placeholder={t.scopeProjectionPlaceholder}
          value={value.scopeProjection}
          onChange={handleChange}
          required
        />
        <Input
          name="timeline"
          label={t.timeline}
          placeholder={t.timelinePlaceholder}
          value={value.timeline}
          onChange={handleChange}
          required
        />
        <Input
          name="budgetRange"
          label={t.budgetRange}
          placeholder={t.budgetRangePlaceholder}
          value={value.budgetRange}
          onChange={handleChange}
          required
        />
      </Section>

      <Section title="Call">
        <Input
          name="dateAndTime"
          label={t.dateAndTime}
          type="datetime-local"
          value={value.dateAndTime}
          onChange={handleChange}
          required
        />
        <select
          name="timezone"
          value={value.timezone}
          onChange={handleChange}
          required
          style={{ padding: '8px', borderRadius: '8px' }}
        >
          <option value="">{t.timezonePlaceholder}</option>
          {TIMEZONES.map(tz => (
            <option key={tz} value={tz}>{tz}</option>
          ))}
        </select>
      </Section>

      <Section title="Contact">
        <Input
          name="email"
          label={t.email}
          type="email"
          placeholder={t.emailPlaceholder}
          value={value.email}
          onChange={handleChange}
          required
        />
      </Section>
    </div>
  )
}
