import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"

export default function Career() {
  const { language } = useLanguage()
  const t = LANGUAGES[language]

  return (
    <div>
         {t.content.career}
    </div>
  )
}
