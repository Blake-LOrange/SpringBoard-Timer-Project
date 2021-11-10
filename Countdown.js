

// function countdown(num){
//         for (let i = num; i > 0; i--)
//          setInterval(console.log(i), 1000);
//         if (i = 1) {console.log("Done!")}
//     }

function countdown(num){
    for (let i = num; i >= 0;)
    if (i > 0) {
                setTimeout(console.log(i), i--, 1000)}
    else {console.log("Done!")}
}
countdown(5)


function timer (num){
if (num>0){
    console.log(num), num--
    timer()
}else{console.log("Done!"), clearInterval(timer)}
}
setInterval(timer, 1000)
timer(5)
    // function countdown(num){
    //     for (let i = num; i >= 0; i--)
    //     if (i > 0) {
    //         setTimeout(console.log(i), 1000)}
    //         else {console.log("Done!")}
    // countdown(5)



// function countDown(time){
//     let timer = setInterval(function(){
//       time--;
//       if(time <= 0){
//         clearInterval(timer);
//         console.log('DONE!');
//       }
//       else {
//         console.log(time);
//       }
  
//     },1000)
// }