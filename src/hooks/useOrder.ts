import { useState } from 'react'
import { MenuItem, OrderItem } from '../types'


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    
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
    return{
        addItem
    }
}
