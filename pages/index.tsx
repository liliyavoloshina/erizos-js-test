import FileManager from "@/components/FileManager"
import { FileOrFolder } from "@/types/common"
import { Component } from "react"

import Data from "@/assets/Data.json"

class App extends Component {
  render() {
    const systemData = Data as FileOrFolder[]

    const expandedFolders = ["/Common7", "/Common7/IDE"]

    return (
      <div className="app">
        <FileManager data={systemData} expandedFolders={expandedFolders} />
      </div>
    )
  }
}

export default App
