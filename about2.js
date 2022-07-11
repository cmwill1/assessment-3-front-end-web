
//creat a function which will pull random restaraunts from btn ID.
function GetValue()
{
    var myArray = new Array('Whistlestop', 'Griffin Claw', 'Primos','Sy Thai','First Watch','Duck Donuts');  
    var random = myArray [Math.floor(Math.random() * myArray.length)];
    alert(random);
    document.getElementById("btn").innerHTML=random;
}
