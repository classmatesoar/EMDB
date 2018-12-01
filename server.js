const express=require('express')
const mongoose =require("mongoose")
const DB_URL='mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo is start')
})

const User= mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:String,require:true}
}))





const app = express()
app.get('/',function(req,res){
    res.send('<h1>hello world</h1>')
})
app.get('set',function(req,res){
    User.create({
        user:'soar',
        age:18
    },function(err,doc){
        if(err){
            console.log(err)
        }else
        console.log(doc)
    })
})
app.get('get',function(req,res){
    
})
app.listen(6666,function(){
    console.log('express is listen 6666')
})