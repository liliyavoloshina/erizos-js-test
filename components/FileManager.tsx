import FileComponent from "@/components/File"
import FolderComponent from "@/components/Folder"
import { ExpandedFolders, FileOrFolder, isFolder } from "@/types/common"
import { Component } from "react"

interface FileManagerProps {
  data: FileOrFolder[]
  expandedFolders: ExpandedFolders
}

class FileManager extends Component<FileManagerProps> {
  render() {
    const { data, expandedFolders } = this.props

    return data.map((item, index) => {
      if (isFolder(item)) {
        const folderPath = `/${item.name}`
        return (
          <FolderComponent
            key={index}
            isExpanded={expandedFolders.includes(folderPath)}
            folderPath={folderPath}
            expandedFolders={expandedFolders}
            {...item}
          />
        )
      } else {
        return <FileComponent key={index} {...item} />
      }
    })
  }
}

export default FileManager
