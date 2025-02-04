import { File as FileIcon, Folder as FolderIcon } from "lucide-react";
import type { File, Folder } from "../lib/data/mockData"
import Link from "next/link";

export function FileRow (props: { file: File }) {
  const { file } = props;
  
  return (
    <div key={file.id} className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-800">
      <div className="grid gap-4 grid-cols-12 text-gray-700 dark:text-gray-300">
        <div className="flex items-center col-span-8">
            <a href={file.url} className="flex grow items-center hover:text-black dark:hover:text-white" target="_blank">
              <FileIcon size={20} className="mr-3" />
              {file.name}
            </a>
          </div>
          <div className="col-span-2">{file.type}</div>
          <div className="col-span-2">{file.size}</div>
      </div>
    </div>
  )
}

export function FolderRow (props: { folder: Folder, handleFolderClick: () => void })  {
  const { folder, handleFolderClick } = props;

  return (
    <div key={folder.id} className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-800" >
      <div className="grid gap-4 grid-cols-12 font-semibold text-gray-700 dark:text-gray-300">
        <div className="flex items-center col-span-8">
            <Link href="#" className="flex grow items-center hover:text-black dark:hover:text-white" onClick={() => handleFolderClick()}>
              <FolderIcon size={20} className="mr-3 text-yellow-500 dark:text-yellow-300" />
              {folder.name}
            </Link>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-2"></div>
      </div>
    </div>
  )
}



export function FileHeader() {

  return (
    <div className="mt-4">
      <div className="grid gap-4 grid-cols-12 font-bold text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-2">        
        <div className="col-span-8">Name</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-2">Size</div>
      </div>
    </div>
  )
}