import { OrderItem } from "../types"

type orderContentProps = {
    order: OrderItem[],
    removeItem:  (idItem: number) => void
}

export default function OrderContent({order, removeItem}: orderContentProps) {
  return (
    <div>
        <h1 className="font-black text-2xl p-3">Consumo</h1>
        {order.map(item => (
            <div className='flex justify-between p-3 border-gray-300 border-1'>
                <div>
                    <p>{item.name}</p>
                    <p> - ${item.price}</p>
                    <p className='font-bold'>Cantidad {item.quantity} - ${item.quantity * item.price}</p>
                </div>    
                <div>
                    <button 
                        className='bg-red-700 text-gray-50 font-bold rounded-full 
                        w-6 mt-5 hover:bg-red-600'
                        onClick={() => removeItem(item.id)}
                    >X</button>
                </div>
            </div>
        ))}
    </div>
  )
}
