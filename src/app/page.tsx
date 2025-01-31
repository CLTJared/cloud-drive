"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
// Created Imports
import { type Folder, mockData } from "../lib/data/mockData"
import { FileList } from "../components/FileList"
import { UploadButton } from "../components/UploadButton"
import { Breadcrumb } from "../components/Breadcrumb"

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

  const handleBackClick = () => {
    if (breadcrumbs.length > 1) {
      const newBreadcrumbs = breadcrumbs.slice(0, -1)
      const parentFolder = newBreadcrumbs[newBreadcrumbs.length - 1]
      setCurrentFolder(parentFolder)
      setBreadcrumbs(newBreadcrumbs)
    }
  }

  const isRoot = currentFolder.id === "root"

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <Breadcrumb breadcrumbs={breadcrumbs} onClick={handleBreadcrumbClick} />
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {!isRoot && (
            <button
              onClick={handleBackClick}
              className="mr-4 p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className="text-2xl font-bold">{currentFolder.name}</h1>
        </div>
        <UploadButton />
      </div>
      <FileList files={currentFolder.files} onFolderClick={handleFolderClick} />
    </div>
  )
}