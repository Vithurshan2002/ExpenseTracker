import React from 'react'

const Tracker = () => {
  return (
    <div className='md:w-[60%] md:h-[70%] border-1 rounded drop-shadow-2xl drop-shadow-blue-800 sh grid md:grid-cols-2 grid-cols-1 h-[80%] w-[70%]'>
        <div className='bg-gray-800'>
            <h1 className='text-yellow-500 uppercase font-[poppins] font-bold text-center py-2 '>Income Expense Tracker</h1>
            <p className='py-1 text-xs font-semibold ps-5 text-gray-200'>Your Balance</p>
            <p className='text-3xl font-semibold text-white ps-5'>₹0.00</p>
            <div className='flex flex-row gap-5 h-15 m-4'>
                <div className='ring-2 hover:ring-4 cursor-pointer flex-1 transition-all font-semibold ring-green-700 text-green-800 text-center py-1'>
                    <p>INCOME</p>
                    <p className='hover:text-white'>₹ 0.00</p>
                </div>
                <div className='ring-2  hover:ring-4 cursor-pointer flex-1 transition-all font-semibold ring-red-700 text-red-700 text-center py-1'>
                    <p>Expense</p>
                    <p className='hover:text-white'>₹ 0.00</p>
                </div>
            </div>
            <div className='pt-4'>
                <p className='ps-5 py-1 text-white font-[poppins] font-semibold text-sm'>Description</p>
                <div className='px-5'><input type="text" placeholder='Enter Description' className='bg-gray-200 ps-2 font-medium rounded outline-0 w-full'/></div>
            </div>
             <div  className='pt-4'>
                <p className='ps-5 py-1 text-white font-[poppins] font-semibold text-sm'>Amount</p>
                 <div  className='px-5'><input type="number" placeholder='₹ 0.00' className='bg-gray-200 ps-2 font-medium rounded outline-0 w-full'/></div>
            </div>
            <div className='px-8 '>
                 <button className='mt-8 bg-green-700 text-sm font-[poppins] text-shadow-2xs hover:bg-green-600 rounded-full outline-white   active:bg-blue-400 outline-2 transition-all duration-200 w-full ps-4 cursor-pointer font-bold'>Add Transaction</button>
            </div>
        </div>
        <div className='bg-white'>
            <h1 className='ps-2 font-semibold font-[poppins] text-shadow-2xs text-shadow-blue-900 pt-2'>Transaction Details</h1>
            <div className='mt-4 rounded flex justify-between  border-3 mx-2 pe-2'>
                <div className='bg-red-800 w-[4%]'></div> 
                <div className=' font-mono'>Insurance</div>
                <div>-1500</div>
            </div>
            <div className='mt-4 rounded flex justify-between  border-3 mx-2 pe-2'>
                <div className='bg-green-800 w-[4%] transition-all'></div> 
                <div className=' font-mono'>Salary</div>
                <div>3500</div>
            </div>
            <div className='mt-4 rounded flex justify-between  border-3 mx-2 pe-2'>
                <div className='bg-red-800 w-[4%]'></div> 
                <div className='font-mono'>Food</div>
                <div>-700</div>
            </div>
        </div>
    </div>
  )
}

export default Tracker