import React,{ useState } from "react";
import ExpenseContext from "./ExpenseContext";
import axios from "axios";

const ExpenseContextProvider = (props) => {
    const [formValues, setFormValues] = useState({});
    const [updateFormValues, setUpdateFormValues] = useState({});
    const [expenseData, setExpenseData] = useState([])
    const [flag,setFlag] = useState(false)

    const saveExpense = async (data) => {
        console.log(data.amount)
        const response = await axios.post("http://localhost:5000/saveexpense", {
            title: data.title,
            amount: data.amount,
            date:data.date,
            type:data.type
        });

        if (response.ok) {
            console.log("request sended successfully");
        }
        setFlag(!flag)
    };

    const getAllExpenses = async () => {
        try {
            let data = await axios.get("http://localhost:5000/getallexpenses");

            setExpenseData(data.data)
        } catch (error) {
            console.log(error)
        }
       

    };
    
    const deleteExpense = async(id)=>{
        await axios.delete(`http://localhost:5000/delete/${id}`)
        setFlag(!flag)
    }

    const updateTheExpense =async(data)=>{
        console.log(data)
        try {
            await axios.put(`http://localhost:5000/updateexpense/${data.id}`,{...data})

            setFlag(!flag)
        } catch (error) {
                console.log(error)
        }
    }
    return (
        <ExpenseContext.Provider
            value={{ formValues, setFormValues, saveExpense, getAllExpenses,expenseData ,deleteExpense,flag,setUpdateFormValues,updateFormValues,updateTheExpense}}
        >
            {props.children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseContextProvider;
