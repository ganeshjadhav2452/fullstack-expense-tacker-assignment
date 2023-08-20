const express = require('express')
const router = express.Router()
const expenseCotrollers = require('../controllers/expenseControllers')


router.post('/saveexpense',expenseCotrollers.saveExpense)

router.get('/getallexpenses',expenseCotrollers.getAllExpenses)

router.put('/updateexpense/:id',expenseCotrollers.updateExpense)
router.delete('/delete/:id',expenseCotrollers.deleteExpense)

module.exports = router;