"use client" // client-only

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import FolderContent from './components/FolderContent/FolderContent'
import HeroIntro from './components/HeroIntro/HeroIntro'
import FolderTabs from './components/FolderTabs/FolderTabs'

// Ensure Next.js renders this page dynamically
export const dynamic = 'force-dynamic'

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Initialize folder from URL query param
  const initialTab = searchParams?.get('tab') || 'portfolio'
  const [activeFolder, setActiveFolder] = useState<string>(initialTab)

  // Keep state in sync if URL changes externally
  useEffect(() => {
    const currentTab = searchParams?.get('tab') || 'portfolio'
    if (currentTab !== activeFolder) {
      setActiveFolder(currentTab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  // Update state and URL when user switches folder
  const handleFolderChange = (tab: string) => {
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
            alignItems: 'center' 
        }}>
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
            <FolderTabs activeFolder={activeFolder} setActiveFolder={handleFolderChange} />
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
