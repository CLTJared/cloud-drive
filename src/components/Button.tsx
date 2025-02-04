import { UploadIcon } from "lucide-react"

export function Button() {
  const handleUpload = () => {
    alert("Upload functionality would be implemented here")
  }

  return (
    <button
      onClick={handleUpload}
      className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700 transition-colors"
    >
      <UploadIcon className="w-5 h-5 mr-2" />
      Upload
    </button>
  )
}