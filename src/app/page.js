"use client" // ensures this component is client-side only

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import FolderContent from './components/FolderContent/FolderContent'
import HeroIntro from './components/HeroIntro/HeroIntro'
import FolderTabs from './components/FolderTabs/FolderTabs'

// Prevent Next.js from attempting static prerender
export const dynamic = 'force-dynamic'

export default function Home() {
    const router = useRouter()
    const searchParams = useSearchParams()

    // Only read the 'tab' query param in client
    const urlTab = searchParams?.get('tab') || 'portfolio'

    const [activeFolder, setActiveFolder] = useState(urlTab)

    // URL → state
    useEffect(() => {
        if (urlTab !== activeFolder) {
            setActiveFolder(urlTab)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlTab])

    // state → URL
    function handleFolderChange(tab: string) {
        if (!searchParams) return

        const params = new URLSearchParams(searchParams.toString())
        params.set('tab', tab)
        router.replace(`?${params.toString()}`)
        setActiveFolder(tab)
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <HeroIntro />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2rem 0',
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                <FolderTabs
                    activeFolder={activeFolder}
                    setActiveFolder={handleFolderChange}
                />
                <div
                    style={{
                        width: '50rem',
                        height: '30rem',
                        backgroundColor: '#f9fafb',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        padding: '1.5rem',
                    }}
                >
                    <FolderContent activeFolder={activeFolder} />
                </div>
            </div>
        </div>
    )
}
