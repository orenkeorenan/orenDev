"use client"

import { useLanguage } from '@/app/context/LanguageContext'
import Input from './Input'
import Section from './Section'
import { LANGUAGES } from '@/app/i18n'

const TIMEZONES = [
  "UTC−12:00", "UTC−11:00", "UTC−10:00",
  "UTC−09:00", "UTC−08:00", "UTC−07:00",
  "UTC−06:00", "UTC−05:00", "UTC−04:00",
  "UTC−03:00", "UTC−02:00", "UTC−01:00",
  "UTC±00:00", "UTC+01:00", "UTC+02:00",
  "UTC+03:00", "UTC+04:00", "UTC+05:00",
  "UTC+06:00", "UTC+07:00", "UTC+08:00",
  "UTC+09:00", "UTC+10:00", "UTC+11:00",
  "UTC+12:00", "UTC+13:00", "UTC+14:00"
]

export default function FreelanceForm() {
    const { language } = useLanguage()
    const t = LANGUAGES[language].hireModal.freelance

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Section title="Client">
                <Input label={t.companyClientName} placeholder={t.companyClientNamePlaceholder}/>
            </Section>

            <Section title="Project">
                <Input label={t.projectType} placeholder={t.projectTypePlaceholder} />
                <Input label={t.scopeProjection} placeholder={t.scopeProjectionPlaceholder} />
                <Input label={t.timeline} placeholder={t.timelinePlaceholder} />
                <Input label={t.budgetRange} placeholder={t.budgetRangePlaceholder} />
            </Section>

            <Section title="Call">
                <Input label={t.dateAndTime} type="datetime-local" />
                <select style={{ padding: '8px', borderRadius: '8px' }}>
                    <option value="">{t.timezonePlaceholder}</option>
                    {TIMEZONES.map(tz => (
                        <option key={tz} value={tz}>{tz}</option>
                    ))}
                </select>
            </Section>

            <Section title="Contact">
                <Input label={t.email} type="email" placeholder={t.emailPlaceholder}/>
            </Section>
        </div>
    )
}
