"use client"

import { useLanguage } from '@/app/context/LanguageContext'
import { LANGUAGES } from '@/app/i18n'
import React from 'react'

function HeroIntro() {
    const { language } = useLanguage()   
    const t = LANGUAGES[language].hero        

    if (!t) return null                  

    return (
        <div
            style={{
                padding: '2rem 0',
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
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
                    src={t.image}   
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
                    color: '#6b7280',
                    fontWeight: 500,
                    display:"flex",
                    flexDirection:"column",
                    gap:"2rem",
                    
                }}
            >
                <h2>{t.titleIntro}</h2>
                <p
                    style={{
                        fontStyle:"italic"
                    }}
                >
                    {t.subTitleIntro}
                </p>
            </div>
        </div>
    )
}

export default HeroIntro
