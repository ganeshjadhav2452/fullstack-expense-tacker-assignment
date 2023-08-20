const Expense = require('../models/expenseModel')

module.exports = expenseControllers = {
    saveExpense:async(req,res,next)=>{
        console.log(req.body)
        try {
            await Expense.create({
                title:req.body.title,
                amount:Number(req.body.amount),
                date:req.body.date,
                type:req.body.type
            })

            res.status(200).send('your expense is saved successfully')
        } catch (error) {
            console.log(error)
            res.status(500).send('sorry you expense is not saved ')
            
        }
        
    },

    getAllExpenses:async(req,res,next)=>{

        try {
          let data =   await Expense.findAll()
          res.status(200).send(data)
        } catch (error) {
            console.log(error)
            res.status(500).send('no expenses found')
        }
    },
    updateExpense:async(req,res,next)=>{

        try {
            await Expense.update({title:req.body.title,amount:Number(req.body.amount),type:req.body.type,date:req.body.date},{
                where:{id:req.params.id}
            })
            res.status(200).send('your expense is updated successfully! ')
        } catch (error) {
            console.log(error)
            res.status(500).send('sorry your expense not udpated due to some reason')
            
        }
    },

    deleteExpense:async(req,res,next)=>{

        try {
            await Expense.destroy({where:{id:req.params.id}})
            res.status(200).send('your expense has been removed')
        } catch (error) {
            console.log(error)
            res.status(500).send('sorry for some reason your expense is not been removed')
            
        }
    }


}