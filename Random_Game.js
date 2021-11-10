
   let tries = 1;
   let randomGame = setInterval(function(){ 
       let number = Math.random();
          if (number > .75){
           console.log("It took " + tries + " tries")
           clearInterval(randomGame)
          }else{
           tries +=1;
          }
      }, 1000);
