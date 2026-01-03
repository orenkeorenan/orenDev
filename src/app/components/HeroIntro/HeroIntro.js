"use client"

import { useLanguage } from '@/app/context/LanguageContext'
import { LANGUAGES } from '@/app/i18n'
import React from 'react'

function HeroIntro() {
    const { language } = useLanguage()   // ✅ destructure
    const t = LANGUAGES[language]        // ✅ now valid

    if (!t) return null                  // 🛡 safety

    return (
        <div
            style={{
                padding: '2rem 0',
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: '#e5e7eb',
                    width: '15rem',
                    height: '18rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={t.hero.image}   // ✅ use language image
                    alt="Profile"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>

            <div
                style={{
                    maxWidth: '30rem',
                    fontSize: '1.2rem',
                    lineHeight: '1.6rem',
                    fontStyle: 'italic',
                    color: '#6b7280',
                    fontWeight: 500,
                }}
            >
                {t.hero.intro}
            </div>
        </div>
    )
}

export default HeroIntro
