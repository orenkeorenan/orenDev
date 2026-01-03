// app/config/folders.js
import Portfolio from '@/app/components/FolderContent/Portfolio'
import Skills from '@/app/components/FolderContent/Skills'
import About from '@/app/components/FolderContent/About'
import Career from '@/app/components/FolderContent/Career'

export const FOLDERS = [
  {
    id: 'portfolio',
    Component: Portfolio,
  },
  {
    id: 'skills',
    Component: Skills,
  },
  {
    id: 'about',
    Component: About,
  },
  {
    id: 'career',
    Component: Career,
  },
]
