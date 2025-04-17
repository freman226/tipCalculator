import {menuItems} from "./data/db"
import useOrder from "./hooks/useOrder"
import MenuItem from './components/MenuItem';
import OrderContent from "./components/OrderContent";
import TipPercentageForm from "./components/TipPercentageForm";
import OrderTotal from "./components/OrderTotal";

function App() {
  const {order, tip, addItem, setTip, removeItem, placeHolder} = useOrder();
  return (
    <>
      <header className='bg-blue-500 py-5'>     
        <h1 className='text-center font-bold text-4xl'>Tip Calculator</h1>
      </header>
      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2 '>
        <div className='p-5'>
          <h2 className='font-bold text-3xl'>Menu</h2>

          <div className='space-y-3 my-10'>
            {
              menuItems.map(item => (
                <MenuItem      
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))
            }
            
          </div>
          
        </div>
        
          {order.length ? 
            <div className='border-gray-300 border-1'>
              <OrderContent 
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
              <OrderTotal
                tip={tip}
                order={order}
                placeHolder={placeHolder}
              />
            </div> : 
            <div className='border-gray-300 border-1 pt-5'>
              <p className="text-center">Su orden esta vacía</p>
            </div>
            
          }
          
        
      </main>
    </>
  )
}

export default App
