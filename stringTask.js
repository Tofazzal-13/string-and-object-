// task 1

const sentence = "I am a front end developer";
const count = sentence.split("a").length - 1;
// console.log(count);

 //task 2

const str = "I am A front end developer";
let count1 = 0;

for(let char of str){
    if(char === "a" || char === "A"){
        count1++;
    }   
}

// console.log(count1);

// task 3
const str2 = "apple is a good food for health";
const strLowercase = str2.toLowerCase();


if(
    strLowercase.includes("a") &&
    strLowercase.includes("e") &&
    strLowercase.includes("i") &&
    strLowercase.includes("o") &&
    strLowercase.includes("u")
){
    console.log("all vowel letter include here");
}

else{
    console.log("all vowel are not include here");
    
}