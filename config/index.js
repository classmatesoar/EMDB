let qs=require('qs');
let ws = require("ws"); //引入websocket模块
let nodeUuid = require("node-uuid"); //引入创建唯一id模块
let socketServer = ws.Server;

let wss = new socketServer({ port: 8090 }); //创建websocketServer实例监听8090端口
console.log(`ws启动`)
let clients = [],
luckClient=[];

let PARSE_JSON = (str, defaultObj = {}) => {
  let res = "";
  try {
    res = JSON.parse(str);
  } catch (error) {
    // console.log(`${str}不能转为对象，输出替代为`, defaultObj);
  }
  return res;
};


/**
 * 关闭code一览
 * 
 * 4001 未传参数
 * 4002 缺少参数
 * 4003
 * 4004
 * 
 */

const 
get_target_client=uuid=>clients.find( item=>item.client_uuid == uuid),
get_target_client_index=uuid=>clients.findIndex( item=>item.client_uuid == uuid),
sendData = (ws, content, type) => {
    if (ws.readyState == ws.OPEN) {
      ws.send(
        JSON.stringify({
          type,
          content,
          time_stamp:new Date().getTime()
        })
      );
    }
  },
  onlineNum=()=>{
    const list =clients.map(item=>{
      return {
        nickName:item.nickName,
        mobile:item.mobile
      }
    })
    clients.forEach(item => {
      const ws = item.ws;
      sendData(ws, list, "clients");
    });
  },
  luckClientChange=ws=>{
    if(ws){
      sendData(ws, luckClient, "boss-luck");
    }else{
      clients.forEach(item=>{
        const ws = item.ws;
        sendData(ws, luckClient, "boss-luck");
      })
    }
  },
  recordPush = (obj) => {
    clients.forEach(item => {
      const ws = item.ws;
      sendData(ws, obj, "record");
    });
  },
  closeClient = uuid => {
    let index = get_target_client_index(uuid),
    target_client = get_target_client(uuid);
    if (index != -1) {
      // console.log(target_client.nickName + "关闭连接");
      let nickName=target_client.nickName,
      mobile=target_client.mobile;
      clients.forEach(item => {
        const ws = item.ws;
        sendData(ws, {
          type:'system',
          nickName,
          content:`${nickName}(${mobile})下线了`
        }, "record");
      });
      clients.splice(index, 1);
      onlineNum()
    }
  };

//监听连接
wss.on("connection", function(ws,info) {
  let client_uuid;

  // console.log(info.url,info.headers)

  let params=''+info.url.split('?')[1];
  if(params==undefined){
    ws.close(1000,'没传参数')
  }else{
    params=qs.parse(params) || {};
    mobile=params.mobile,
    nickName=params.nickName,
    headImg=params.headImg,
    uuid=params.uuid;
    if(mobile!=undefined&&nickName!=undefined){
      if(!uuid){
        client_uuid = nodeUuid.v4();
      }else{
        client_uuid = uuid;
      }
      clients.push({
        client_uuid,
        ws: ws,
        mobile,
        nickName,
        headImg
      });
      sendData(ws,{
        type:'loginSuccess',
        uuid:client_uuid
      },'system')

      recordPush({
        type:'system',
        nickName:'系统',
        content:`${nickName}(${mobile})上线了`
      });
      onlineNum();
      luckClientChange(ws);
      // console.log(mobile,'-',nickName,'连接成功')

    }else{
      ws.close(1000,'没传必要参数')
    }

  }
  
  /*监听消息*/
  ws.on("message", function(message) {
    const data = PARSE_JSON(message),
      type = data.type,
      content = data.content || {};
    if (type) {
      switch (type) {
        case "update": {
            
          const target_client = get_target_client(client_uuid);
          if(target_client){
              Object.keys(content).forEach(item=>{
                  target_client[item]=content[item]
              })
          }

          onlineNum()
          // sendData(ws, data.content, "system");
          break
        }
        case "record": {
          const target_client = get_target_client(client_uuid),
            nickName = target_client && target_client.nickName,
            mobile = target_client && target_client.mobile,
            headImg = target_client && target_client.headImg;
          if (target_client && nickName) {
            const content = data.content || {};
            content.nickName = nickName;
            content.mobile= mobile;
            content.uuid=client_uuid;
            content.headImg=headImg;
            if(content.level=='boss-luck'){
              let contentContent={...content.content},
              contentNickName=contentContent.nickName,
              contentMobile=contentContent.mobile;
              contentContent.time_stamp=new Date().getTime();
              luckClient.push(contentContent)
              luckClientChange();
              content.content=`${contentNickName}(${contentMobile})成为幸运儿`;
            }

            recordPush(data.content, ws);
          }
          break
        }
      }
    } else {
      // console.log("没有type 或 content,无效消息,忽略" + data);
    }
  });
  /*监听断开连接*/
  ws.on("close", function(code, reason) {
    closeClient(client_uuid);
  });
});
