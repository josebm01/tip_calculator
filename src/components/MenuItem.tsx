import { MenuItemProps } from "../types"

export const MenuItem = ({ item, addItem }: MenuItemProps ) => {
  return (
    <button
        className="border-2 border-blue-800 w-full p-3 flex justify-between rounded-md hover:bg-indigo-200"
        onClick={ () => addItem(item) }
    >
        <p>{ item.name }</p>
        <p className="font-black italic">${ item.price }.00</p>
    </button>
  )
}
