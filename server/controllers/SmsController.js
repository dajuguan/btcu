var msgs = new Map();

function insertMsg(id, msg) {
  if (msgs.has(id)) {
    msgs[id].count++;
    return;
  }
  msg.count = 1;
  msgs.set(id, msg);
}

function deleteMsg(id, msg) {
  msgs.delete(id, msg);
}

function execute(msg) {
  //1.在map中增加对象
  insertMsg(msg.id, msg);
  //2.分离出买卖逻辑

  //3.执行相应的操作
}
exports.postData = (req, res, next) => {
  data = req.body.data;
  data = JSON.parse(data);
  console.log(data);
  //1.处理逻辑
  res.json({ status: "ok" });
};
