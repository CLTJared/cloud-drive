import type { File } from "../lib/data/mockData"
import { FileItem } from "./FileItem"

interface FileListProps {
  files: File[]
  onFolderClick: (folderId: string) => void
}

export function FileList({ files, onFolderClick }: FileListProps) {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-3 gap-4 font-bold text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-2 mb-2">        
        <div>Name</div>
        <div>Type</div>
        <div>Size</div>
      </div>
      {files.map((file) => (
        <FileItem key={file.id} file={file} onFolderClick={onFolderClick} />
      ))}
    </div>
  )
}