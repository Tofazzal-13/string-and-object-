const college = {
    name: "NDC",
    class: ["10","12"],
    events: ["science fair", "bisoy dibos", "21 february"],
    unique: {
        color: "blue",
        result: {
            gpa: 5,
            merit: "top"
        }
    }
}

console.log(college.name);

console.log(college.unique.color)
college.events[1] = "16 december"
console.log(college.events[1]);


console.log(college.unique.result.merit);

