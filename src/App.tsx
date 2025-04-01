import { useState } from 'react'

import MenuItem from './components/MenuItem';

function App() {

  const [test, setTest] = useState(true);
  return (
    <>
      <header className='bg-blue-500 py-5'>     
        <h1 className='text-center font-bold text-4xl'>Tip Calculator</h1>
      </header>
      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2 '>
        <div className=' pr-5'>
          <h1 className='font-bold text-3xl'>Menu</h1>
          <MenuItem></MenuItem>
        </div>
        <div className='border-gray-300 border-1'>
          <h1>Consumo</h1>
        </div>
    
      </main>
    
     
    </>
  )
}

export default App
