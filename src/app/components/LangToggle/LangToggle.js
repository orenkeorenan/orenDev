"use client"

import { useLanguage } from '../../context/LanguageContext'

function LangToggle() {
    const { language, setLanguage } = useLanguage()
    const isEN = language === 'en'

    const EN_BG = '#eef2ff'   // soft indigo
    const KR_BG = '#fff1f2'   // soft crimson
    const EN_ACTIVE = '#4338ca'
    const KR_ACTIVE = '#be123c'

    function toggleLang() {
        setLanguage(isEN ? 'ko' : 'en')
    }

    return (
        <div
            onClick={toggleLang}
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '78px',
                height: '30px',
                borderRadius: '999px',
                padding: '2px',
                cursor: 'pointer',
                backgroundColor: isEN ? EN_BG : KR_BG,
                transition: 'background-color 0.25s ease',
                userSelect: 'none',
            }}
        >
            {/* Sliding indicator */}
            <div
                style={{
                    position: 'absolute',
                    top: '2px',
                    left: isEN ? '2px' : '40px',
                    width: '36px',
                    height: '26px',
                    borderRadius: '999px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                    transition: 'left 0.25s ease',
                }}
            />

            {/* EN */}
            <div
                style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: '12px',
                    fontWeight: 600,
                    zIndex: 1,
                    color: isEN ? EN_ACTIVE : '#9ca3af',
                    transition: 'color 0.2s ease',
                }}
            >
                EN
            </div>

            {/* KR */}
            <div
                style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: '12px',
                    fontWeight: 600,
                    zIndex: 1,
                    color: !isEN ? KR_ACTIVE : '#9ca3af',
                    transition: 'color 0.2s ease',
                }}
            >
                KR
            </div>
        </div>
    )
}

export default LangToggle
