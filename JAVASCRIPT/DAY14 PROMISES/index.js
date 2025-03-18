// Promises, in Js;

let myPizza = new  Promise(function (resolve,reject){
    let success = true;
    if(success){
        resolve("pizza is Made");
    }else{
        reject("pizza is not Made");
    }
});
myPizza
.then(function(res){
    console.log(res);
    return "Pizza is Delivered";
})
.then(function(res){
    console.log(res);
    return "Pizza is Delivered";
})
.catch ((err) => {
    console.log(err);
});

//Promises, async, await in ja;

async function test () {
    let myPromise = new Promise(function(resolve, rreject){
        resolve("Hello World");
    });

    const result = await myPromise;
    return result;
}
test().then(function(res){
    console.log(res);
});


// time counter in js;

function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("clock").innerHTML = time;
    setTimeout(showTime, 1000);
}
showTime();