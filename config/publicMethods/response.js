const codeList={
    100:'未登录',
    200:'',
    300:'',
    403:'缺少参数',
    404:'',
    500:''
},
goodCode=[100,200,300],
badCode=[403,404,500];
const checkCode = code =>{
    let res='success', 
        g=goodCode.findIndex(item => item==code);
    if(g==-1){
        res='fail'
    }
    return res
}
const response = function(type='send',result,code=200,data={}){
    code=parseInt(code);
    let res={
        code,
        msg:codeList[code] || '',
        result:checkCode(code),
        data
    }
    result[type](res)
}
exports.responseJson=response.bind(null,'json')
exports.responseSend=response.bind(null,'send')