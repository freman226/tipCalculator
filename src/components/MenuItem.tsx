import {menuItems} from "../data/db"

export default function MenuItem() {

    return (
    <div className="p-5">
        {menuItems.map(item => (
            <div key={item.id} className="flex justify-between w-full">
                <p>{item.name}</p>
                <p>{item.price}</p>

            </div>
            )
         )}
        <p></p>
    </div>
  )
}
