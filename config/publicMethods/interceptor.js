const {getCookie} = require('./index.js')
const {responseJson} =require('./response.js')
const check=(req,res,next)=>{
    console.log(req)
    let path=req.path;
    if(path!='/login_in' && path!='/login_up'){
        let token=getCookie(req,'token');
        if(token==undefined){
        console.log('其他接口未登录')

            responseJson(res,100)
        }else{

            console.log('其他接口登录')
            next()
        }
    }else{
        console.log('登录')
        next()
    }
    console.log(path)
}
module.exports=check