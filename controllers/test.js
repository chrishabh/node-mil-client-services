var Promise = require("bluebird");
var b= 1;
function PingPong() {

}

PingPong.prototype.ping = Promise.coroutine(function* (val) {
    console.log("Ping?", val);
    console.log("before ping");
    yield Promise.delay(500);
    console.log("one");
    yield Promise.delay(500);
    b=2;
    console.log("two");
    yield Promise.delay(500);
    console.log("three");
    yield Promise.delay(500);
    console.log("four");
    // this.pong(val+1);
    console.log("five");
});

// PingPong.prototype.pong = Promise.coroutine(function* (val) {
//     console.log("Pong!", val);
//     console.log("before pong");
//     yield Promise.delay(500);
//     this.ping(val+1);
//     console.log("after pong");
// });

// var a = new PingPong();
// a.ping(0);
// console.log("after call ");

if(b == 1) {
    console.log("hello end");
}
