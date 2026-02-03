// task 1

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// console.log(colors["golden rod"]);

// task 2

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car["passenger capacity"]= 5;

// console.log(car);


// task 3

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};


const physicsMarks = student.physics.marks;
// console.log(physicsMarks);

// task 4

let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const lenght = Object.keys(student1).length;
// console.log(lenght);


// task 5

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

const keys = Object.keys(myObject);

for(const key of keys){
    console.log("key:",key,"| type:",typeof(key));   
}





