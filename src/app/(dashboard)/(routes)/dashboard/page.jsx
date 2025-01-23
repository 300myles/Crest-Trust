import TradingViewWidget from '@/components/TradingViewWidget'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full p-5 bg-[#f9f9f9] h-full'>
      <div className='w-full grid grid-cols-1 gap-10 md:grid-cols-3'>
        <div className='w-full flex rounded-lg h-24 bg-[#30B9BA] border-black'>
          <div className='w-4/5 flex flex-col justify-between p-5 h-full'>
            <div className='font-roboto font-semibold text-2xl text-white'>&#x20A6;0.00</div>
            <div className='text-[12px] text-white/60 font-roboto font-semibold'>Deposits</div>
          </div>
          <div className='w-1/5 bg-[#12aaaa] flex items-center justify-center text-center font-roboto text-2xl text-white font-semibold h-full rounded-r-xl'>&#36;</div>
        </div>
        
        <div className='w-full flex rounded-lg h-24 bg-[#28a745] border-black'>
          <div className='w-4/5 flex flex-col justify-between p-5 h-full'>
            <div className='font-roboto font-semibold text-2xl text-white'>&#x20A6;0.00</div>
            <div className='text-[12px] text-white/60 font-roboto font-semibold uppercase'>profit</div>
          </div>
          <div className='w-1/5 bg-black/20 flex items-center justify-center text-center font-roboto text-2xl text-white font-semibold h-full rounded-r-xl'>&#36;</div>
        </div>

        <div className='w-full flex rounded-lg h-24 bg-[#dc3545] border-black'>
          <div className='w-4/5 flex flex-col justify-between p-5 h-full'>
            <div className='font-roboto font-semibold text-2xl text-white'>&#x20A6;0.00</div>
            <div className='text-[12px] text-white/60 font-roboto font-semibold uppercase'>Total withdrawal</div>
          </div>
          <div className='w-1/5 bg-black/20 flex items-center justify-center text-center font-roboto text-2xl text-white font-semibold h-full rounded-r-xl'>&#36;</div>
        </div>
      </div>

      <div className='w-full grid grid-cols-1 gap-10 mt-6 md:grid-cols-3'>
        <div className='col-span-2 p-2 h-[450px]'>
          <TradingViewWidget />
        </div>

        <div class="col-span-1 border p-2">
        
        </div>
      </div>
    </div>
  )
}

export default Dashboard