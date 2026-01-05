import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

export default function FullTimeForm({ value, onChange }) {
  const { language } = useLanguage()
  const t = LANGUAGES[language].hireModal.fulltime

  function handleChange(e) {
    const { name, value: inputValue } = e.target
    onChange(prev => ({
      ...prev,
      [name]: inputValue,
    }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Section title="Company & Role">
        <Input
          name="companyName"
          label={t.companyName}
          placeholder={t.companyNamePlaceholder}
          value={value.companyName}
          onChange={handleChange}
          required
        />
        <Input
          name="roleTitle"
          label={t.roleTitle}
          placeholder={t.roleTitlePlaceholder}
          value={value.roleTitle}
          onChange={handleChange}
          required
        />
      </Section>

      <Section title="Work details">
        <Input
          name="workType"
          label={t.workType}
          placeholder={t.workTypePlaceholder}
          value={value.workType}
          onChange={handleChange}
          required
        />
        <Input
          name="location"
          label={t.location}
          placeholder={t.locationPlaceholder}
          value={value.location}
          onChange={handleChange}
          required
        />
      </Section>

      <Section title="Interview">
        <Input
          name="interviewDate"
          label={t.interviewDate}
          type="datetime-local"
          value={value.interviewDate}
          onChange={handleChange}
          required
        />
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
        <Input
          name="phoneNumber"
          label={t.phoneNumber}
          placeholder={t.phoneNumberPlaceholder}
          value={value.phoneNumber}
          onChange={handleChange}
          required
        />
      </Section>
    </div>
  )
}
