import { FileOrFolder, isFolder } from "@/types/common"

export const filterItems = (value: string, items: FileOrFolder[]) => {
    return items.filter((item) => {
        if (isFolder(item)) {
            const children: FileOrFolder[] = filterItems(value, item.children)
            item.children = children
            return item.name.includes(value) || children.length
        } else {
            return item.name.includes(value)
        }
    })
}

