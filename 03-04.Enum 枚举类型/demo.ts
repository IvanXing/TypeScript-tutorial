enum Status {
  OFFLINE = 1,
  ONLINE,
  DELETED
}

// 不定义的话，默认值是从0 开始的  如果定义 OFFLINE=1，那就是从1开始叠加
// console.log(Status.OFFLINE, Status[1]);  // 1, Status.OFFLINE
// console.log(Status.ONLINE, Status[2]);   // 2, Status.ONLINE
// console.log(Status.DELETED, Status[3]);


// JS写法
const Status1 = {
  OFFLINE: 0,
  ONLINE: 1,
  DELETED: 2
}


function getResult(status) {
  if (status === Status.OFFLINE) {
    return 'offline';
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted';
  }
  return 'error';
}

const result = getResult(1);
console.log(result);
