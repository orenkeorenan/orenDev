"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/app/context/LanguageContext'
import { LANGUAGES } from '@/app/i18n'
import LangToggle from '../LangToggle/LangToggle'
import HireMeModal from '../HireModal/HireModal'

export default function Navbars() {
    const { language } = useLanguage()
    const t = LANGUAGES[language]
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const handleLogoClick = () => {
        router.replace('/') // reset URL
        window.scrollTo({ top: 0, behavior: 'smooth' }) // optional smooth scroll
    }

    return (
        <>
            <nav
                style={{
                    position: 'relative',
                    height: '64px',
                    padding: '0 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    borderBottom: '1px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                }}
            >
                {/* Logo */}
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '20px',
                        fontWeight: '700',
                        letterSpacing: '0.5px',
                        cursor: 'pointer',
                    }}
                    onClick={handleLogoClick}
                >
                    {t.brand.logo}
                </div>

                {/* Right Controls */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                    }}
                >
                    <LangToggle />

                    <button
                        style={{
                            padding: '8px 14px',
                            borderRadius: '999px',
                            border: 'none',
                            backgroundColor: '#111827',
                            color: '#ffffff',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                        }}
                        onClick={() => setOpen(true)}
                    >
                        {t.actions.hireMe}
                    </button>
                </div>
            </nav>

            <HireMeModal open={open} onClose={() => setOpen(false)} />
        </>
    )
}
