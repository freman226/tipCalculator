import { Dispatch } from "react"

const tipOptions = 
    [
        {
            id: "tip-10",
            label: "10%",
            value: 0.10
        },
        {
            id: "tip-20",
            label: "20%",
            value: 0.20
        },
        {
            id: "tip-50",
            label: "50%",
            value: 0.50
        }
    ]    

type TipPercentageFormProps = {
    setTip: Dispatch<React.SetStateAction<number>>
    tip: number
}

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {

  return (
    <div className="p-3">
        <h2 className="font-bold text-2xl">Propina:</h2>
        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}> {tipOption.label} </label>
                    <input 
                        id={tipOption.id}
                        type="radio" 
                        name="tip" 
                        value={tipOption.value}
                        onChange={e => (setTip(+e.target.value))}
                        checked={tipOption.value === tip}
                    />
                </div>
            ))
            }
        </form>
    </div>
  )
}
