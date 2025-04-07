import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {

    return (
    <button 
        className="border-2 border-blue-500 hover:bg-blue-200 w-full p-3 my-2 flex justify-between rounded-2xl"
        onClick={() => addItem(item)}
        >
            
                <p>{item.name}</p>
                <p className="font-black">{item.price}</p>
    </button>
  )
}
