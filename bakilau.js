// Тапсырма А: Ай атауын шығару

// let  san=+prompt ("1-ден 12-ге дейінгі сан енгізіңіз:")

// if (san == 3|| san== 4 ||san==5) {
    
//     alert("Spring" )
// }
// if (san == 6|| san==7|| san==8){
//     alert("Summer")
// }
   

// if (san ==9|| san==10|| san==11){
    
//     alert("Autumn")
// }
// if (san == 12|| san==1|| san==2) {
    
//     alert("Winter")
// }

// else
//  ("0-ден төмен;12-ден жоғары болса:")
//      {alert("Ондай сан жоқ.Қайта таңдауыңызды өтінем!")}


//      Тапсырма B:Екі санды салыстырып,орташа мәнді табу
// let numA =+prompt("A Санын енгізіңіз")
// let numB =+prompt("B Санын енгізіңіз")

// if (a>b || a<b){
//     numA=a>b
//     alert("a саны b санынан үлкен"+numA)
//     else{ numA=a<b
//         alert("a саны b санынан үлкен"+numB)

//     }
// }
// switch(a>b){
//     case numA=(a>b)
//     alert("a саны b санынан үлкен"+ numA)
// }

//task 1

/* let season = +prompt("1-ден 12-ге дейінгі санды енгізіңіз: ")
let san = 0
switch (season) {
    case 12  1  2:
        alert("Ай: " + season + "Маусым: Winter")
        break;
    case 3  4  5:
        alert("Ай: " + season + "Маусым: Spring")
        break;

    case 6  7  8:
        alert("Ай: " + season + "Маусым: Summer")
        break;
    case 9 10  11:
        alert("Ай: " + season + "Маусым: Autumn")
        break;

         default:
            alert("1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз")
    
}   */
 
// Task 2
 
/* let a = +prompt("a санын енгізіңіз: ")
let b = +prompt("b санын енгізіңіз: ")

if (a<b) {
   alert("a саны b санынан кіші ")}

else if (a>b){
    alert( "a саны b санынан үлкен ")
}   
 else {
    alert("a саны b санына тең")    
} 
alert("a және b сандарының орташа мәні: " + (a+b)/2 ) */

// Task 3

let num1 = +prompt("Бірінші санды енгізіңіз: ")
let num2 = +prompt("Екінші санды енгізіңіз: ")
let num3 = +prompt("Үшінші санды енгізіңіз: ")

let max;
let min;

 if(num1>=num2 && num1>=num3){
    max=num1
 }else if(num2>=num1 && num2>=num3){
    max=num2
 }
 else if(num3>=num1 && num3>=num2){
    max=num3
 }
 if(num1<=num2 && num1<=num3){
    min=num1
 }else if(num2<=num1 && num2<=num3){
    min=num2
 }
 else if(num3<=num1 && num3<=num2){
    min=num3
 }

 
 alert("Ең үлкен және ең кіші сандың айырмасы: " +(max-min) )
