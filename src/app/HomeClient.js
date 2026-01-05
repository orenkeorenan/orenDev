"use client"

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import FolderContent from './components/FolderContent/FolderContent'
import HeroIntro from './components/HeroIntro/HeroIntro'
import FolderTabs from './components/FolderTabs/FolderTabs'

export default function HomeClient() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initialTab = searchParams.get('tab') || 'portfolio'
  const [activeFolder, setActiveFolder] = useState(initialTab)

  useEffect(() => {
    const currentTab = searchParams.get('tab') || 'portfolio'
    if (currentTab !== activeFolder) setActiveFolder(currentTab)
  }, [searchParams])

  const handleFolderChange = (tab) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('tab', tab)
    router.replace(`?${params.toString()}`)
    setActiveFolder(tab)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HeroIntro />
      <div 
        style={{ 
          padding: '2rem 0', 
          alignItems: 'center' ,
        }}
      >
        <FolderTabs activeFolder={activeFolder} setActiveFolder={handleFolderChange} />
        <div 
          style={{ 
            width: '50rem', 
            border:"1px solid grey" 
          }}>
          <FolderContent activeFolder={activeFolder} />
        </div>
      </div>
    </div>
  )
}
