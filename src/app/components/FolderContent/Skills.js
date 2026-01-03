import { useLanguage } from "@/app/context/LanguageContext"
import { LANGUAGES } from "@/app/i18n"


export default function Skills() {
    const { language } = useLanguage()
    const t = LANGUAGES[language]

    return <div>{t.content.skills}</div>
}
