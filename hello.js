// console.log('hello world');


// non blocking な書き方

// コールバック関数
// setTimeout(function() {
//   console.log('hello');
// }, 1000);
// 1000ms待たずに以下が実行される
// console.log('world');


// blocking な書き方
// var start = new Date().getTime();
// while (new Date().getTime() < start + 1000);
// // 1000msまった後に以下が実行される
// console.log('world')

