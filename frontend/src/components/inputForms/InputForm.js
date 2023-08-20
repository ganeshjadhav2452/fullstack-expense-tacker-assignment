import React, { Fragment, useEffect, useState, useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";
const InputForm = (props) => {
  const { saveExpense, updateTheExpense , setFormValues ,updateFormValues} = useContext(ExpenseContext);

  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedState, updateTheState] = useState({
    title: "",
    date: "",
    amount: '',
    type: '',
  });

  const amountUpdateHandler = (e) => {
    updateTheState({
      ...updatedState,
      amount: e.target.value,
    });
  };

  const titleChangeHandler = (e) => {
    updateTheState({
      ...updatedState,
      title: e.target.value,
    });
  };

  const typeChangeHandler = (e) => {
    updateTheState({
      ...updatedState,
      type: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    updateTheState({
      ...updatedState,
      date: e.target.value,
    });
  };

  const getAllInputes = async (e) => {
    e.preventDefault();
    const allInputs = {
      title: updatedState.title,
      date: updatedState.date,
      type: updatedState.type,
      amount: updatedState.amount,
    };

    setFormValues(allInputs);
    if (!isUpdate) {
      saveExpense(allInputs);
      
    } else {
      console.log(allInputs)
      updateTheExpense({ ...allInputs, id: updateFormValues.id });
       setIsUpdate(false);

   
    }

    updateTheState({
      title: "",
      amount: "",
      type:"",
      date:""
    });
  };


  useEffect(() => {
  console.log(updateFormValues.title)
    updateTheState({
      title: updateFormValues.title,
      amount: updateFormValues.amount,
      date: updateFormValues.date ,
      type: updateFormValues.type  ,
    });
    setIsUpdate(true);
  }, [updateFormValues]);

  return (
    <Fragment>
      <form
        onSubmit={getAllInputes}
        className="d-flex justify-content-between p-5  "
      >
        
        <input
          onChange={titleChangeHandler}
          value={updatedState.title}
          type="text"
          placeholder="title..."
        ></input>
        <input
          onChange={amountUpdateHandler}
          value={updatedState.amount}
          type="number"
          placeholder="amount..."
        ></input>

        <select
          onChange={typeChangeHandler}
          value={updatedState.type}
        >
          <option value="" disabled selected> Expense Category</option>
          <option >Food</option>
          <option >Shoping</option>
          <option >Travel</option>
          <option >Medical Emergency</option>
          <option >School Expense</option>
          <option >Other</option>
       </select>

        <input
          onChange={dateChangeHandler}
          value={updatedState.date}
          type="date"
     
        ></input>

        <input type="submit" className="btn btn-success" />
      </form>
    </Fragment>
  );
};

export default InputForm;
