function Clock(){
  var date = new Date();
  var hours = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var  l = (hours>12)?"PM":"AM";

  if(hours==0){ hours = 12 ; }
  if(hours>12){ hours = hours-12 ;}

  hours = (hours<10)? "0" + hours : hours;
  min   = (min  <10)? "0" + min   : min;
  sec   = (sec  <10)? "0" + sec   : sec ;
  // var t = hours +":" +min +":" + sec + " " + l;

 document.getElementById('h').innerText =hours ;
  document.getElementById('m').innerText =min ;
    document.getElementById('s').innerText =sec ;
      document.getElementById('l').innerText =l ;
 // document.getElementById('clock').textContent= t
  setTimeout(Clock,1000)
}
  Clock();
