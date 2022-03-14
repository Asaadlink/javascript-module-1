const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

let age = 0
function calculateAge(birthYear) {
    return 2022 - birthYear
}
const ages = []

birthYears.forEach((birthYear) => {
    ages.push(calculateAge(birthYear))
})

console.log(birthYears)
console.log(ages)