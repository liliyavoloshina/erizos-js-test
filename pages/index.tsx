import FileManager from "@/components/FileManager"
import { Component } from "react"

import Data from "@/assets/Data.json"
import { FileOrFolder } from "@/types/common"
import { filterItems } from "@/utils/utils"

interface AppState {
  systemData: FileOrFolder[]
  searchFilename: string
}

type AppProps = null

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      systemData: Data as FileOrFolder[],
      searchFilename: "",
    }
  }

  onChangeSearch = (value: string) => {
    this.setState(() => ({ searchFilename: value }))

    const initialData = JSON.parse(JSON.stringify(Data)) as FileOrFolder[]

    let newData: FileOrFolder[] = []
    if (!value) {
      newData = initialData
    } else {
      newData = filterItems(value, initialData)
    }
    this.setState(() => ({ systemData: newData }))
  }

  render() {
    const expandedFolders = ["/Common7", "/Common7/IDE"]
    const { systemData, searchFilename } = this.state

    return (
      <div className="app container mx-auto p-12">
        <label className="flex flex-col gap-2 max-w-64 my-12 cursor-pointer">
          <span className="font-bold">Search by filename: </span>
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
