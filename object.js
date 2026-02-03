const age = 21; 
const college = "Notre Dame college";
const isPassed = true; 
let isDeveloper;
const subjects = ["bangla", "English", "Physics", "Math"];

// object 

const bottle = {
    color: "blue",
    price: 45,
    bottleDrinks: "water",
    isclean: true

}

// console.log(bottle);

// nested object

const subject = {
    name: "biology",
    teacher: "boma mizan",
    examDate: "30 Feb",
    chapters: ["first", "second", "third"],
    exams:{
        name: "final exam",
        marks: 100
    }
}
console.log(subject.exams.marks);
