import React from 'react'
import { FOLDERS } from '@/app/config/folders'
import { useLanguage } from '@/app/context/LanguageContext';
import { LANGUAGES } from '@/app/i18n';

function FolderTabs({ setActiveFolder, activeFolder }) {
    const {language} = useLanguage();
    const t = LANGUAGES[language];

    return (
        <div
            style={{
                width: '50rem',
                display: 'flex',
                alignItems:"end"
            }}
        >
            {FOLDERS.map((folder) => {
                const active = activeFolder === folder.id

                return (
                    <div
                        key={folder.id}
                        onClick={() => setActiveFolder(folder.id)}
                        style={{
                            padding: '1rem',
                            borderTopLeftRadius: '0.5rem',
                            borderTopRightRadius: '0.5rem',
                            cursor: 'pointer',
                            backgroundColor: active ? '#f9fafb' : '#e5e7eb',
                            border: active
                            ? '1px solid #e5e7eb'
                            : '1px solid transparent',
                            borderBottom: active ? '1px solid #f9fafb' : 'none',
                            fontWeight: active ? 600 : 500,
                            color: '#374151',
                            display: 'flex',
                            alignItems: 'center',
                            height: active ? '2.5rem' : '2.2rem',
                        }}
                    >
                        {t.folders[folder.id]}
                    </div>
                )
            })}
        </div>
    )
}

export default FolderTabs