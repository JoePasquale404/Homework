
const myProfile = {
    me: "Alexander",
    age: 31,

    sayHello: function(name) {
    return `Hello "${name}"`;
  }
};


console.log(myProfile.sayHello("Max"));   

/////////////////////////////////////////////////////


const users = [
  { name: "Alexandr", age: 20, Admin: false },
  { name: "Max", age: 25, Admin: true },
];

let usersCount=0

for (let i = 0; i < users.length; i++) {
const user = users [i];
  if (!user.Admin) {
    usersCount += 1;     
  }
}

console.log("Количество не админов:", usersCount);

