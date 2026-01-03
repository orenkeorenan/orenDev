import { FOLDERS } from '@/app/config/folders'

function FolderContent({ activeFolder }) {
    const folder = FOLDERS.find(f => f.id === activeFolder)
    if (!folder || !folder.Component) return null

    const Content = folder.Component
    return <Content />
}

export default FolderContent
