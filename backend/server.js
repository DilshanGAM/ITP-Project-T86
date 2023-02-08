const express = require("express");
const app = express();
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://itp086:6969@cluster0.xaeyq1t.mongodb.net/samod?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected",()=>{
    console.log("connected")
})
let userSchema = mongoose.Schema({
    age:Number,
    name:String
})
//this code will read items from db
// let userModel = mongoose.model('users',userSchema);
// userModel.find({name:'dilshan'},(err,result)=>{
//     console.log(result)
// })

// follwing code will create objects in db
//let user = new userModel()
// user.name = 'dshan'
// user.age = 10
// user.save()


app.get('/',(req,res)=>{
    res.send('working')
})
const userRouter = require('./routes/user');
app.use('/users',userRouter)
app.listen(5050);
 