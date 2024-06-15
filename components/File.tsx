import { File } from "@/types/common"
import React, { Component } from "react"

class FileComponent extends Component<File> {
  render() {
    const { name, mime } = this.props

    return (
      <div className="flex gap-4">
        <h4>{name}</h4>
        <span className="text-gray-400">{mime}</span>
      </div>
    )
  }
}

export default FileComponent
