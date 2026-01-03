"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const urlLang = searchParams.get('lang')
    const [language, setLanguageState] = useState(urlLang || 'en')

    // Sync URL → state
    useEffect(() => {
        if (urlLang && urlLang !== language) {
            setLanguageState(urlLang)
        }
    }, [urlLang])

    // Sync state → URL
    function setLanguage(lang) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('lang', lang)
        router.replace(`?${params.toString()}`)
        setLanguageState(lang)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
