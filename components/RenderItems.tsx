import FileComponent from "@/components/File"
import FolderComponent from "@/components/Folder"
import { ExpandedFolders, FileOrFolder, isFolder } from "@/types/common"
import React from "react"

interface RenderItemsProps {
  items: FileOrFolder[]
  folderPath: string
  expandedFolders: ExpandedFolders
}

class RenderItems extends React.Component<RenderItemsProps> {
  render() {
    const { items, folderPath, expandedFolders } = this.props

    return items.map((item, index) => {
      if (isFolder(item)) {
        const currentFolderPath = `${folderPath}/${item.name}`
        return (
          <FolderComponent
            key={index}
            folderPath={currentFolderPath}
            isExpanded={expandedFolders.includes(currentFolderPath)}
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

export default RenderItems
