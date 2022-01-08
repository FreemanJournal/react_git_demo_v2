import React from 'react'
import AddTransactions from './AddTransactions'
import BalanceHistory from './BalanceHistory'
import './styles.css'

export default function ExpenseTracker() {
  return (
    <div className='flex mt-4'>
      <div className='container p-4 w-96 md:w-fit text-slate-600 bg-yellow-400 mx-auto rounded-md'>
        <h2 className='text-3xl'>Expense Tracker</h2>
        <hr className=' my-3 border-white rounded-lg' />
        <div className='flex flex-col md:flex-row gap-5'>
          <BalanceHistory />
          <AddTransactions />
        </div>
      </div>
    </div>
  )
}
