const mongoose =require("mongoose")
const DB_URL='mongodb://104.224.153.165:52954'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo is start')
})

const User= mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:String,require:true}
}))

const express = require("express");
const path = require("path");
 
const app = express();
//目录   (当前目录下的www_root目录)
app.use(express.static(path.join(process.cwd(),"www_root")));
 
//监听
const server = app.listen(6080,function(){
    console.log('server is start')
});
 
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
    res.json({status:'ok'})
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
 

