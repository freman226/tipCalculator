import { useCallback } from "react"
import { OrderItem } from "../types"

type orderTotalProps = {
    tip: number
    order: OrderItem[],
    placeHolder: () => void
}
export default function OrderTotal({tip, order, placeHolder}: orderTotalProps) {
  const subTotalAmmount = useCallback(() => order.reduce((acum, current)=> (acum + (current.price * current.quantity)), 0),[order])
  
  const tipAmmount = useCallback(() => (tip * subTotalAmmount()),[order, tip])
  const totalAmmount = useCallback(() => (tipAmmount(), subTotalAmmount()), [order, tip])
  return (
    <div className="p-3 space-y-2">
        <h2 className="font-bold text-2xl">Totales y Propinas</h2>
        <p>Suptotal a Pagar <span className="font-bold">${subTotalAmmount()}</span></p>
        <p>Propina: <span className="font-bold">${tipAmmount()}</span></p>
        <p>Total a pagar: <span className="font-bold">${totalAmmount()}</span></p>
        <div className="text-center">
          <button className="bg-gray-950 text-gray-50 font-bold text-2xl m-auto w-xl p-1 hover:bg-gray-800"
            onClick={() => placeHolder()}
          >
            GUARDAR ORDEN
          </button>
        </div>  
    </div>
  )
}
