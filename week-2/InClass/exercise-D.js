function moodChecker(mood) {
    if (mood === "happy") {
        return `Good job, you're doing great!`;
    }
    if (mood === "sad") {
        return `Every cloud has a silver lining`;
    }
    if (mood === "number") {
        return `Beep beep boop`;
    }
   else {
        return `I'm sorry, I'm still learning about feelings!`;
    }
}
console.log(moodChecker("jj"));