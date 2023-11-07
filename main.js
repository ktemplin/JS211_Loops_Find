let x = 0

do {
    console.log(x)
    x++
} while (x < 1001)

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

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
        d = new Date(arrayOfPersons[i].birthDate)
        // var iso = d.toISOString()
        var year = d.getFullYear()
        // console.log(d)
        // console.log(year)
        // console.log(iso)
        // console.log(year % 2 != 0)
        if (year % 2 != 0) {
            console.log(year)
        } 
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


const peoples = arrayOfPersons.map((person) => {
    console.log(person)
})

console.log(arrayOfPersons.filter((person) => person.gender === 'male') )

const pre90s = () => {
    for (let i=0; i < arrayOfPersons.length; i++) {
        d = new Date(arrayOfPersons[i].birthDate)
        d = d.getFullYear()
        d = d <= 1990
        console.log(d)
        
    }
}
pre90s()

const pre90sV2 = arrayOfPersons.filter(person => {
    const birthData = new Date(person.birthDate)
    const targetDate = new Date('1-1-1990')
    // return birthData.getFullYear() <= 1990
    return birthData <= targetDate;
})
console.log(pre90sV2)
