// let x = 0

// do {
//     console.log(x)
//     x++
// } while (x < 1001)

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

const logKeys = () => {
    console.log(Object.keys(person))
}
logKeys()

const logKeyValue = () => {
    console.log(Object.entries(person))
}
logKeyValue()

let arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },
    {
        firstName: "John",
        lastName: "Doe",
        birthDate: "Jan 29, 2001",
        gender: "male"
    },
    {
        firstName: "Bob",
        lastName: "Eubetcha",
        birthDate: "June 5, 1960",
        gender: "male"
    },
    {
        firstName: "Francis",
        lastName: "Stevens",
        birthDate: "Oct 8, 1975",
        gender: "female"
    },
    {
        firstName: "Jonathan",
        lastName: "Stevens",
        birthDate: "Sep 18, 1997",
        gender: "male"
    },
    {
        firstName: "Boaty",
        lastName: "McBoatface",
        birthDate: "Mar 21, 2016",
        gender: "female"
    }
]

const listBirthDates = () => {
    for (let i = 0; i < arrayOfPersons.length; i++) {
        let d = new Date(arrayOfPersons[i].birthDate)
        iso = d.toISOString()
        console.log(d)
        console.log(iso)
    }

    // for (let i = 0; i < arrayOfPersons.length; i++) {
    //     if(arrayOfPersons[i].birthDate % 2 != 0) {
    //         console.log(arrayOfPersons[i].birthDate)
    //         let oddYears = (arrayOfPersons[i].birthDate)
    //         console.log(oddYears)
    //     }
    //     console.log(arrayOfPersons[i].birthDate)
    // }
}
listBirthDates()

