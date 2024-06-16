import RenderItems from "@/components/RenderItems"
import { ExpandedFolders, FileOrFolder } from "@/types/common"
import { Component } from "react"

interface FileManagerProps {
  data: FileOrFolder[]
  expandedFolders: ExpandedFolders
}

class FileManager extends Component<FileManagerProps> {
  render() {
    const { data, expandedFolders } = this.props

    return (
      <>
        <RenderItems
          items={data}
          folderPath=""
          expandedFolders={expandedFolders}
        />
      </>
    )
  }
}

export default FileManager
