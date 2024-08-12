console.log("hello!")
let myName = "";
myName = "Sophia";
let lengthofName = myName.length;
if (lengthofName > 7){
    console.log("Will marry late in life!");
}
myName = "Sop";
let lengthOfName = myName.length;
if (lengthOfName < 5){
    console.log("Will marry within a year.");
}
myName = "Sophia";
let lEngthofnAMe = myName.length;
if(lEngthofnAMe <= 5 && lEngthofnAMe >= 7){
    console.log("Will encounter a once-in-a-lifetime opportunity");
}
let Character = myName[0];
console.log("first letter is " + Character);
if(Character === "S") {
    console.log("You will be rich!")
}
const regex = /[i]/g;
const found = myName.match(regex);
console.log("You will fall in love this week!");