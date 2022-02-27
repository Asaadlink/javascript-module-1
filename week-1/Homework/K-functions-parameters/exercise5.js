function createLongGreeting(name , age){
    const yearsold =`${age} years old`
    return `Hello my name is ${name} and I am ${yearsold} !`;
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
