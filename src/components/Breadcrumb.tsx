import type { Folder } from "../lib/data/mockData"
import { ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  breadcrumbs: Folder[]
  onClick: (index: number) => void
}

export function Breadcrumb({ breadcrumbs, onClick }: BreadcrumbProps) {
  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        {breadcrumbs.map((folder, index) => (
          <li key={folder.id} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-5 h-5 text-gray-400 mx-2" />}
            <button
              onClick={() => onClick(index)}
              className={`inline-flex items-center text-sm font-medium ${
                index === breadcrumbs.length - 1
                ? "text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {folder.name}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}