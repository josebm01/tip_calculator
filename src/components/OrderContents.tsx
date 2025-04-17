import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export const OrderContents = ({ order, removeItem } : OrderContentsProps) => {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>
        <hr className="text-gray-500 font-bold mt-2" />
        <hr className="text-gray-500 font-bold mt-2" />

        <div className="space-y-3 mt-5">
            {              
                order.map( item => (
                    <div 
                        key={ item.id }
                        className="flex justify-between items-center border-t border-gray-300 py-2 last-of-type:border-b"
                    >
                        <div className="mb-5">
                            <p className="text-md">{ item.name } - { formatCurrency(item.price) }</p>
                            <p className="text-gray-800 font-bold text-left">
                                Cantidad: { item.quantity } - { formatCurrency(item.price * item.quantity) }
                            </p>
                        </div>
                        <button
                            className="bg-red-600 h-8 w-8 rounded-full text-white font-bold"
                            onClick={ () => removeItem( item.id ) }
                        >
                            x
                        </button>
                    </div>
                ))
            }

        </div>
    </div>
  )
}
