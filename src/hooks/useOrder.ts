import { useState } from 'react'
import { MenuItem, OrderItem } from '../types'


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {
        const itemExists = order.find(orderItem => orderItem.id === item.id);
        
        if(itemExists){
            const updatedOder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1 } : 
                orderItem 
            )
            setOrder(updatedOder)
            
        } else {
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }
    const removeItem = (idItem : number) => setOrder(order.filter(currentItem => idItem !== currentItem.id))
    
    const placeHolder = () => {
        setOrder([])
        setTip(0)
    }
    return{
        order,
        tip,
        addItem,
        setTip,
        removeItem,
        setOrder,
        placeHolder
    }
}
