"use client"

import { useMemo, useState } from "react"
// Created Imports
import { type Folder, mockFiles, mockFolders } from "../lib/data/mockData"
import { FileHeader, FileRow, FolderRow } from "../components/FileList"
import { Button } from "../components/Button"
import { ThemeToggle } from "../components/ThemeToggle"
import { ThemeProvider } from "../contexts/ThemeContext"
import { ChevronRight } from "lucide-react"

export default function GoogleDriveClone() {
  const [currentFolder, setCurrentFolder] = useState<string>("root")

  const getCurrentFiles = () => {
    return mockFiles.filter((file) => file.parent === currentFolder)
  }

  const getCurrentFolders = () => {
    return mockFolders.filter((folder) => folder.parent === currentFolder)
  }

  const handleFolderClick = (folderId: string) => {
    setCurrentFolder(folderId);
  }

  const getBreadcrumbs = useMemo(() => {
    const breadcrumbs = [];
    let currentId = currentFolder;

    while (currentId !== "root") {
      const folder = mockFolders.find((folder) => folder.id === currentId);
      if (folder) {
        breadcrumbs.unshift(folder);
        currentId = folder.parent ?? "root";
      } else {
        break;
      }
    }

    return breadcrumbs;
  }, [currentFolder])

  return (
    <ThemeProvider>
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="flex justify-between items-center mb-4 gap-2">
        <div className="flex flex-grow items-center">
          <button onClick={() => setCurrentFolder("root")} className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
            My Drive
          </button>
          {getBreadcrumbs.map((folder, _index) => (
            <div key={folder.id} className="flex items-center">
              <ChevronRight size={16} className="mx-2 text-gray-500" />
              <button onClick={() => handleFolderClick(folder.id)} className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                {folder.name}
              </button>
            </div>
          ))}

        </div>
        <Button />
        <ThemeToggle />
      </div>
      <FileHeader />
        { getCurrentFolders().map((folder) => (
          <FolderRow 
            key={folder.id} 
            folder={folder} 
            handleFolderClick={() => { handleFolderClick(folder.id) }} />
        ))}

        { getCurrentFiles().map((file) => (
          <FileRow 
            key={file.id} 
            file={file} />
        ))}
    </div>
    </ThemeProvider>
  )
}