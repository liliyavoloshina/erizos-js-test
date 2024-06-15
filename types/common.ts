

export enum ElementType {
    Folder = 'FOLDER',
    File = 'FIlE'
}

export interface File {
    name: string
    type: ElementType
    mime: string
}

export interface Folder {
    name: string
    type: ElementType
    children: FileOrFolder[]
}

export type FileOrFolder = Folder | File

export const isFolder = (fileOrFolder: FileOrFolder): fileOrFolder is Folder => {
    return fileOrFolder.type === ElementType.Folder
}

export type ExpandedFolders = string[]
