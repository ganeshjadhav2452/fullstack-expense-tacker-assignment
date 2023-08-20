import React from 'react'
import ExpenseContextProvider from './context/ExpenseContextProvider'
import InputForm from './components/inputForms/InputForm'
import Expenses from './components/expenses/Expenses'
const App = () => {
  return (
    <ExpenseContextProvider>
        <InputForm/>
        <Expenses/>
    </ExpenseContextProvider>
  
  )
}

export default App