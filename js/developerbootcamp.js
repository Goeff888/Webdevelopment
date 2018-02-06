var firstName = prompt("What is your first name:");
var lastName = prompt("What is your last name:", lastName);
var age = prompt("What is your age:", age);


alert ("Your full name is " + firstName + " "+ lastName+ ".");
alert ("You are " + age + " years old.");



function isEven(num){
    if (num%2 == 0){
        alert("Zahl ist gerade");
    }
    else{
       alert("Zahl ist ungerade"); 
    }
}

var number = prompt("Geben Sie eine Zahl ein");
isEven (number);

function kebabTo Snake(str){
    str.replace(/-/g, "_");
}
/*var age = prompt("Wie alt sind Sie?");
if (age < 18){
    console.log("Sie sind " + age + ". Sie dürfen hier nicht rein");
}
else if (age <21){
    console.log("Sie sind " + age + ". Sie dürfen hier rein, aber nichts trinken");
}
else {
    console.log("Sie sind " + age + ". Viel Spass");
}
*/
