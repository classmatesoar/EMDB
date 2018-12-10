const setCookie=(res,obj={})=>{
    const keys=Object.keys(obj);
    keys.forEach(item=>{
        res.cookie(item,obj[item],{maxAge: 60 * 1000, httpOnly: true})
    })
}
const getCookie=(req,key='')=>{
    return req.cookies[key]
}
const bodyParams=(req,key='')=>{
    return req.body[key]
}
const urlParmas=(req,key='')=>{
    return req.query[key]
}
exports.setCookie=setCookie;
exports.getCookie=getCookie;
exports.bodyParams=bodyParams;
exports.urlParmas=urlParmas;