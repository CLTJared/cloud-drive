export interface File {
  id: string
  name: string
  type: "file" | "folder"
  url?: string
  size?: string
}

export interface Folder {
  id: string
  name: string
  files: File[]
}

export const mockData: Folder[] = [
  {
    id: "root",
    name: "My Drive",
    files: [
      { id: "1", name: "Documents", type: "folder", size: "--" },
      { id: "2", name: "Images", type: "folder", size: "--" },
      { id: "3", name: "resume.pdf", type: "file", url: "https://example.com/resume.pdf", size: "2.5 MB" },
    ],
  },
  {
    id: "1",
    name: "Documents",
    files: [
      {
        id: "4",
        name: "Project Proposal.docx",
        type: "file",
        url: "https://example.com/proposal.docx",
        size: "1.2 MB",
      },
      { id: "5", name: "Meeting Notes.txt", type: "file", url: "https://example.com/notes.txt", size: "10 KB" },
    ],
  },
  {
    id: "2",
    name: "Images",
    files: [
      { id: "6", name: "Vacation.jpg", type: "file", url: "https://example.com/vacation.jpg", size: "3.7 MB" },
      { id: "7", name: "Family.png", type: "file", url: "https://example.com/family.png", size: "2.1 MB" },
    ],
  },
]