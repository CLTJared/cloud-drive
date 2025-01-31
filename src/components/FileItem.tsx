import type { File } from "../lib/data/mockData"
import { FileIcon, FolderIcon } from "lucide-react"

interface FileItemProps {
  file: File
  onFolderClick: (folderId: string) => void
}

export function FileItem({ file, onFolderClick }: FileItemProps) {
  const handleClick = () => {
    if (file.type === "folder") {
      onFolderClick(file.id)
    } else if (file.url) {
      window.open(file.url, "_blank")
    }
  }

  return (
    <div
      onClick={handleClick}
      className="grid grid-cols-3 gap-4 items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer transition-colors"
    >
      <div className="flex items-center">
        {file.type === "folder" ? (
          <FolderIcon className="w-6 h-6 text-yellow-500 mr-2" />
        ) : (
          <FileIcon className="w-6 h-6 text-blue-500 mr-2" />
        )}
        <span className="text-sm font-medium">{file.name}</span>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{file.type}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{file.size}</div>
    </div>
  )
}