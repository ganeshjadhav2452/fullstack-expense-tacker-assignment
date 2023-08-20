import React, { useEffect,useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";


const Expenses = () => {
  const {getAllExpenses,expenseData,setUpdateFormValues, flag,deleteExpense} = useContext(ExpenseContext)


  const updateClickHandler = (expense)=>{
    setUpdateFormValues(expense)
  }
  const deleteClickHandler = (id)=>{
    deleteExpense(id)
  }

  useEffect(()=>{
    getAllExpenses()
  },[])

  useEffect(()=>{
    getAllExpenses()
  },[flag])


  return (
    <div>
      <table>
      <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
        {expenseData.map((expense) => {
          return (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              ||<td>{expense.amount}</td>
              ||<td>{expense.date}</td>
              ||<td>{expense.type}</td>
              <td><button onClick={()=>{
                updateClickHandler(expense)
              }}>Update</button></td>
              <td><button onClick={()=>{
                deleteClickHandler(expense.id)
              }}>Delete</button></td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
