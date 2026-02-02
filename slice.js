const address = "andorkilla";
const part = address.slice(2,5)
// console.log(part);

const sentence = "I am a good and hardworking person";
// console.log(sentence.split(" "));
// console.log(sentence.split("a"));


const friends = "rahim,karim,jalal,kabul,abul";
// console.log(friends.split(","));

const realFriends = [ 'rahim', 'karim', 'jalal', 'kabul', 'abul' ];
// console.log(realFriends.join(","));

const firstName = "Abid";
const lastName = "Naveed";
// const fullName = firstName + " " + lastName;
const fullName = firstName.concat(" ").concat(lastName);
console.log(fullName);




console.log((lastName.includes("d")));

