function cal() {
  var amount = document.getElementById("p1").value;
  var days = document.getElementById("p2").value;
  var apy = document.getElementById("p3").value;
  var result = (amount * Math.pow( (1+(apy/100)) , (days/365) ) );
  var showAns = document.getElementById("answer").value;
  document.getElementById("answer").innerHTML = ("期滿後可以獲得 " + result.toFixed(6) + " (本金加利息)");
  }
