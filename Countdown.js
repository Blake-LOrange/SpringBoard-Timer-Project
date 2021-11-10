//Set var countDown to the time to be counted down.
var countDown = 10;
var timer = setInterval(function(){
  if(countDown <= 1){
    clearInterval(timer); console.log("Done!")
    }else{
  countDown -=1, console.log(countDown);
    }
}
, 1000);