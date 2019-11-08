// const mongoose =require("mongoose")
// const {m_user} = require('./config/mongooseModel/user.js')
// const DB_URL='mongodb://104.224.153.165:52954'
// mongoose.connect(DB_URL)
// mongoose.connection.on('connected',function(){
//     console.log('mongo is start')
// })

// const User= mongoose.model('user',new mongoose.Schema(m_user))

/* ------------------------------------------------------------------------- */


const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const {
    setCookie,
    getCookie,
    bodyParams,
    urlParmas
} = require ('./config/publicMethods');
const interceptor = require('./config/publicMethods/interceptor.js')
const {responseJson,responseSend} = require('./config/publicMethods/response.js')
 
const app = express();


const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};

//目录   (当前目录下的www_root目录)
app.use(express.static(path.join(process.cwd(),"www_root")));
 
app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());


//监听
const server = app.listen(80,function(){
    console.log('server is start')
});

/* -------------------------------------------------------------------------- */

const tokens=[];

/*  */

app.all('*',interceptor)
 
 
app.post('/login_in', function (req, res) {
    let name=bodyParams(req,'name');
    if(name!=undefined){

        setCookie(res,{
            token:name+new Date().getTime()
        })
        //发送数据
        responseJson(res,200)

    }else{
        responseJson(res,403)
    }
 });

 app.get('/getfile',function(req,res){
    res.cookie('222222','222222')

    // res.download(__dirname + '/package.json');
    // res.sendFile(__dirname + '/package.json');
    res.send('3232')
 })

// app.get('/set',function(req,res){

//     User.create({
//     user:'soar',
//     age:new Date().getTime()
// },function(err,doc){
//     if(err){
//         console.log(err)
//     }else
//     console.log(doc);
//     res.json({status:'ok'})
// })

// })
// app.get('/get',function(req,res){
//     User.find({},function(err,doc){
//         if(!err){
//             res.json(doc)
//         }else{
//             res.send(err)
//         }
//     })
    
// })
// app.get('/clear',function(req,res){
//     User.remove({},function(err,doc){
//         if(!err){
//             res.json(doc)
//         }else{
//             res.send(err)
//         }
//     })
// })
 

