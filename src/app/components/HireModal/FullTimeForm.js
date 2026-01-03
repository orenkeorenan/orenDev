"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import Input from "./Input"
import Section from "./Section"
import { LANGUAGES } from "@/app/i18n"


export default function FullTimeForm() {
    const { language } = useLanguage()
    const t = LANGUAGES[language].hireModal.fulltime

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Section title="Company & Role">
                <Input label={t.companyName} placeholder={t.companyNamePlaceholder} />
                <Input label={t.roleTitle} placeholder={t.roleTitlePlaceholder} />
            </Section>

            <Section title="Work details">
                <Input label={t.workType} placeholder={t.workTypePlaceholder} />
                <Input label={t.location} placeholder={t.locationPlaceholder} />
            </Section>

            <Section title="Interview">
                <Input label={t.interviewDate} type="datetime-local" />
            </Section>

            <Section title="Contact">
                <Input label={t.email} placeholder={t.emailPlaceholder} type="email" />
                <Input label={t.phoneNumber} placeholder={t.phoneNumberPlaceholder} />
            </Section>
        </div>
    )
}