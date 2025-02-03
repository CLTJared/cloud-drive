"use client"

import { useState } from "react"
// Created Imports
import { type Folder, mockData } from "../lib/data/mockData"
import { FileList } from "../components/FileList"
import { UploadButton } from "../components/UploadButton"
import { Breadcrumb } from "../components/Breadcrumb"
import { ThemeToggle } from "../components/ThemeToggle"
import { ThemeProvider } from "../contexts/ThemeContext"

export default function GoogleDriveClone() {
  const [currentFolder, setCurrentFolder] = useState<Folder>(() => {
    const rootFolder = mockData.find((folder) => folder.id === "root")
    if (!rootFolder) {
      throw new Error("Root folder not found in mockData")
    }
    return rootFolder
  })

  const [breadcrumbs, setBreadcrumbs] = useState<Folder[]>(() => {
    const rootFolder = mockData.find((folder) => folder.id === "root")
    if (!rootFolder) {
      throw new Error("Root folder not found in mockData")
    }
    return [rootFolder]
  })

  const handleFolderClick = (folderId: string) => {
    const newFolder = mockData.find((folder) => folder.id === folderId)
    if (newFolder) {
      setCurrentFolder(newFolder)
      setBreadcrumbs((prev) => [...prev, newFolder])
    } else {
      console.error(`Folder with id ${folderId} not found`)
    }
  }

  const handleBreadcrumbClick = (index: number) => {
    const newBreadcrumbs = breadcrumbs.slice(0, index + 1)
    const lastFolder = newBreadcrumbs[newBreadcrumbs.length - 1]
    if (lastFolder) {
      setCurrentFolder(lastFolder)
      setBreadcrumbs(newBreadcrumbs)
    } else {
      console.error("Invalid breadcrumb index")
    }
  }

  return (
    <ThemeProvider>
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="flex justify-between items-center mb-4 gap-2">
        <div className="flex flex-grow items-center">
          <Breadcrumb breadcrumbs={breadcrumbs} onClick={handleBreadcrumbClick} />
        </div>
        <UploadButton />
        <ThemeToggle />
      </div>
      <FileList files={currentFolder.files} onFolderClick={handleFolderClick} />
    </div>
    </ThemeProvider>
  )
}