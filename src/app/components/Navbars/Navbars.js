"use client"

import React, { useState } from 'react'
import { useLanguage } from '@/app/context/LanguageContext';
import { LANGUAGES } from '@/app/i18n';
import LangToggle from '../LangToggle/LangToggle';
import HireMeModal from '../HireModal/HireModal';

function Navbars() {
    const {language, setLanguage} = useLanguage();
    const t = LANGUAGES[language];

    const [open, setOpen] = useState(false);


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
                >
                    {t.logo}
                </div>

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
                        onClick={()=> setOpen(true)}
                    >
                        {t.hireMe}
                    </button>
                </div>
            </nav>

            <HireMeModal open={open} onClose={() => setOpen(false)} />
        </>
  )
}

export default Navbars
