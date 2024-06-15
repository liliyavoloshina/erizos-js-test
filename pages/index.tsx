import FileManager from "@/components/FileManager"
import { Component } from "react"

import Data from "@/assets/Data.json"
import { FileOrFolder, isFolder } from "@/types/common"

interface AppState {
  systemData: FileOrFolder[]
  searchFilename: string
}

type AppProps = null

const initialData = JSON.parse(JSON.stringify(Data)) as FileOrFolder[]

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      systemData: initialData,
      searchFilename: "",
    }
  }

  filterItems = (value: string, items: FileOrFolder[]) => {
    return items.filter((item) => {
      if (isFolder(item)) {
        const children: FileOrFolder[] = this.filterItems(value, item.children)
        item.children = children
        return item.name.includes(value) || children.length
      } else {
        return item.name.includes(value)
      }
    })
  }

  onChangeSearch = (value: string) => {
    this.setState(() => ({ searchFilename: value }))

    const initial = JSON.parse(JSON.stringify(Data)) as FileOrFolder[]

    let newData: FileOrFolder[] = []
    if (!value) {
      newData = initial
    } else {
      newData = this.filterItems(value, initial)
    }
    this.setState(() => ({ systemData: newData }))
  }

  render() {
    const expandedFolders = ["/Common7", "/Common7/IDE"]
    const { systemData, searchFilename } = this.state

    return (
      <div className="app container mx-auto p-12">
        <label className="flex flex-col gap-2 my-12 cursor-pointer">
          <span className="font-bold">Type filename: </span>
          <input
            type="text"
            value={searchFilename}
            onChange={(e) => this.onChangeSearch(e.target.value)}
            className="text-black"
          />
        </label>
        <FileManager data={systemData} expandedFolders={expandedFolders} />
      </div>
    )
  }
}

export default App
