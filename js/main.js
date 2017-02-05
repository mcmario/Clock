
function getE(id){
return document.getElementById(id);
}

 var date = new Date();
setInterval(function(){
      var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if(seconds<10){
        seconds="0"+date.getSeconds();
    }
     if(minutes<10){
        minutes="0"+date.getMinutes();
    }
     if(hours<10){
        hours="0"+date.getHours();
    }
   getE('text').innerHTML = hours + ":" + minutes + ":" + seconds;
    
},100)


