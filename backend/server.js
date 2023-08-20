const express = require('express')
const cors = require('cors')
const sequelize = require('./utils/database')
const router = require('./router/expenseRouter')

const app = express();
app.use(express.json())
app.use(cors())
app.use(router)


sequelize.sync().then(res=>{
    app.listen(5000,()=>{
        console.log('server started...')
    })
    
}).catch(err=>{
    console.log(err)
})

