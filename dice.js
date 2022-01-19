 
 var r1=Math.random()*6;
 r1=Math.floor(r1)+1;
  
 var sr1 = "images/dice"+ r1 +".png";
 

  document.querySelectorAll("img")[0].setAttribute("src",sr1);

  var r2=Math.floor(Math.random()*6)+1; 
  var sr2="images/dice" + r2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src",sr2);


  if(r1>r2)
  {
      document.querySelector("h1").innerHTML="🥳player 1 win🥳";
  }
  else if(r2>r1)
  {
      document.querySelector("h1").innerHTML="🥳player 2 win🥳";
  }
  else{
      document.querySelector("h1").innerHTML="👉draw match👈";
  }