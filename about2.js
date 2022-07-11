var myArray = ['Whistlestop', 'Griffin Claw', 'Primos','Sy Thai'];  

let button = document.querySelector('#restaraunts');

var pressedButton = document.getElementById("restaraunts");
pressedButton.addEventListener("click", function (event) {
   var rand = myArray[(Math.random() * myArray.length) | 0]
   console.log(rand)

});