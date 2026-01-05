"use client"

import { useState } from "react"
import { FOLDERS } from "@/app/config/folders"
import Pagination from "../Pagination/Pagination"

const FIXED_HEIGHT = "32rem"

function FolderContent({ activeFolder }) {
  const folder = FOLDERS.find(f => f.id === activeFolder)
  if (!folder || !folder.Component) return null

  const Content = folder.Component

  // pagination state (ready even if not used yet)
  const [page, setPage] = useState(1)

  return (
    <div
      style={{
        width: "50rem",
        height: FIXED_HEIGHT,
        display: "flex",
        flexDirection: "column",
        borderRadius: "14px",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        overflow: "hidden",
      }}
    >
      {/* Content area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "1.25rem",
        }}
      >
        <Content page={page} />
      </div>

      {/* Pagination (optional, safe to keep) */}
      {folder.paginated && (
        <Pagination
          page={page}
          totalPages={folder.totalPages ?? 1}
          onChange={setPage}
        />
      )}
    </div>
  )
}

export default FolderContent
