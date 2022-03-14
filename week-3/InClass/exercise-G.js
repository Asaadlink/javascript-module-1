const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function calculateAge(birthYear) {
    return 2022 - birthYear
}

function getCanDriveString(birthYear) {
    const age = calculateAge(birthYear)
    const drivingAge = 17;
    if (age >= drivingAge) {
        return `Born in ${birthYear} can drive`
    } else {
        return `Born in ${birthYear} can drive in ${drivingAge - age} years`
    }
}

const ages = []

birthYears.forEach((birthYear) => {
    ages.push(calculateAge(birthYear))
})

const agesMap = birthYears.map(getCanDriveString)

function peopleWhoCanDrive (birthYears) {
    console.log('These are the people who can drive:');
    const drivingAge = 17;
    console.log(birthYears.map(calculateAge).filter((age) => age >= drivingAge));
}

peopleWhoCanDrive(birthYears);