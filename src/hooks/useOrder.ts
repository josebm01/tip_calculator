import { useState } from "react"
import { MenuItem, OrderItem } from "../types"



export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = ( item: MenuItem ) => {    

        // Evitar duplicidad de datos
        const itemExist = order.find( orderItem => orderItem.id === item.id )
        if ( itemExist ) {
            // Identificar la orden 
            const updatedOrder = order.map(orderItem => orderItem.id === item.id 
                ? { ...orderItem, quantity: orderItem.quantity + 1 }  
                : orderItem 
            )

            // Agregamos la cantidad de la orden actualizada
            setOrder(updatedOrder)

        } else {
            // Copia del objeto y le agregamos la cantidad 
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }

    }

    console.log(order)
    
    return {
        addItem
    }
}