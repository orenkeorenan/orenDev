import Portfolio from '@/app/components/FolderContent/Portfolio'
import Skills from '@/app/components/FolderContent/Skills'
import About from '@/app/components/FolderContent/About'
import Career from '@/app/components/FolderContent/Career'
import Contact from '../components/FolderContent/Contact'

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
  {
    id: 'contact',
    Component: Contact,
  },
]
