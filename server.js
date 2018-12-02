// // const http=require('http')
// // http.createServer(function (request, response) {

// //     // 发送 HTTP 头部 
// //     // HTTP 状态值: 200 : OK
// //     // 内容类型: text/plain
// //     response.writeHead(200, {'Content-Type': 'text/plain'});

// //     // 发送响应数据 "Hello World"
// //     response.end('Hello World\n');
// // }).listen(8888);

// // // 终端打印如下信息
// // console.log('Server running at http://127.0.0.1:8888/');



// const express=require('express')
// const path=require('path')


// const app = express()


// //目录   (当前目录下的www_root目录)
// app.use(express.static(path.join(process.cwd(),"test")));

// // const mongoose =require("mongoose")
// // const DB_URL='mongodb://104.224.153.165:27017'
// // mongoose.connect(DB_URL)
// // mongoose.connection.on('connected',function(){
// //     console.log('mongo is start')
// // })

// // const User= mongoose.model('user',new mongoose.Schema({
// //     user:{type:String,require:true},
// //     age:{type:String,require:true}
// // }))



// // User.create({
// //     user:'soar',
// //     age:18
// // },function(err,doc){
// //     if(err){
// //         console.log(err)
// //     }else
// //     console.log(doc);
// // })

// app.get('/',function(req,res){
//     res.send('<h1>hello world</h1>')
// })
// app.get('/set',function(req,res){
// })
// // app.get('/get',function(req,res){

// //     User.find({},function(err,doc){
// //         if(!err){
// //             res.json(doc)
// //         }
// //     })
    
// // })
// app.listen(3000,function(){
//     console.log('express is listen 6666');
// })

var express = require("express");
var path = require("path");

const mongoose =require("mongoose")
const DB_URL='mongodb://localhost:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo is start')
})

const User= mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:String,require:true}
}))

 
var app = express();
//目录   (当前目录下的www_root目录)
app.use(express.static(path.join(process.cwd(),"www_root")));
 
//监听
var server = app.listen(6080);
 
app.get('/', function (req, res) {
    //发送数据
    res.send('Hello World ~~~~~~~~~~~~!');
 });
 
app.get('/set',function(req,res){

    User.create({
    user:'soar',
    age:new Date().getTime()
},function(err,doc){
    if(err){
        console.log(err)
    }else
    console.log(doc);
})

})
app.get('/get',function(req,res){

    User.find({},function(err,doc){
        if(!err){
            res.json(doc)
        }
    })
    
})
app.get('/login', function (req, res) {
    console.log("client login");
    //发送数据
    res.send('已连接上服务器~~');
 });
 

