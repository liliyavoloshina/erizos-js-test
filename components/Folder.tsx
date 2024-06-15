import FileComponent from "@/components/File"
import { ExpandedFolders, Folder, isFolder } from "@/types/common"
import Image from "next/image"
import { Component } from "react"

import CloseIcon from "@/assets/icons/folder-close.svg"
import OpenIcon from "@/assets/icons/folder-open.svg"

interface FolderState {
  isOpen: boolean
}

interface FolderProps extends Folder {
  isExpanded: boolean
  folderPath: string
  expandedFolders: ExpandedFolders
}

class FolderComponent extends Component<FolderProps, FolderState> {
  constructor(props: FolderProps) {
    super(props)
    this.state = {
      isOpen: props.isExpanded,
    }
  }

  toggleFolder = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const { name, children, folderPath, expandedFolders } = this.props
    const { isOpen } = this.state

    return (
      <div className="ml-8 cursor-pointer">
        <div onClick={this.toggleFolder} className="flex gap-2">
          <Image
            src={isOpen ? OpenIcon : CloseIcon}
            width={20}
            height={20}
            alt=""
          />
          <h4 className="font-bold">{name}</h4>
        </div>
        {isOpen && (
          <>
            {children.map((item, index) => {
              if (isFolder(item)) {
                const childFolderPath = `${folderPath}/${item.name}`
                const isChildExpanded =
                  expandedFolders.includes(childFolderPath)

                return (
                  <FolderComponent
                    key={index}
                    folderPath={childFolderPath}
                    isExpanded={isChildExpanded}
                    expandedFolders={expandedFolders}
                    {...item}
                  />
                )
              } else {
                return <FileComponent key={index} {...item} />
              }
            })}
          </>
        )}
      </div>
    )
  }
}

export default FolderComponent
