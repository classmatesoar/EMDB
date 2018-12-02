// const http=require('http')
// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');



const express=require('express')

const app = express()
const mongoose =require("mongoose")
//const axios =require("axios")
const DB_URL='mongodb://104.224.153.165:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo is start')
})

const User= mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:String,require:true}
}))



User.create({
    user:'soar',
    age:18
},function(err,doc){
    if(err){
        console.log(err)
    }else
    console.log(doc);
})

app.get('/',function(req,res){
    res.send('<h1>hello world</h1>')
})
app.get('set',function(req,res){
})
app.get('get',function(req,res){

    User.find({},function(err,doc){
        if(!err){
            res.json(doc)
        }
    })
    
})
app.listen(3000,function(){
    console.log('express is listen 6666');
})
